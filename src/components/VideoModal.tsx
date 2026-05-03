import React, { useEffect, useCallback } from 'react';
import './VideoModal.css';

interface Props {
    videoUrl: string;
    title: string;
    onClose: () => void;
}

const VideoModal: React.FC<Props> = ({ videoUrl, title, onClose }) => {
    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        },
        [onClose]
    );

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [handleKeyDown]);

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) onClose();
    };

    // Determine if the URL is a YouTube link
    const isYouTube =
        videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be');

    // Extract YouTube video ID for embed
    const getYouTubeEmbedUrl = (url: string): string => {
        const match = url.match(
            /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
        );
        if (match) {
            return `https://www.youtube.com/embed/${match[1]}?autoplay=1&rel=0`;
        }
        return url;
    };

    return (
        <div className="video-modal-backdrop" onClick={handleBackdropClick}>
            <div className="video-modal" role="dialog" aria-modal="true" aria-label={`Preview: ${title}`}>
                <div className="video-modal-header">
                    <h3 className="video-modal-title">{title}</h3>
                    <button className="video-modal-close" onClick={onClose} aria-label="Close preview">
                        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>
                <div className="video-modal-body">
                    {isYouTube ? (
                        <iframe
                            className="video-iframe"
                            src={getYouTubeEmbedUrl(videoUrl)}
                            title={title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    ) : (
                        <video className="video-player" controls autoPlay src={videoUrl}>
                            Your browser does not support the video tag.
                        </video>
                    )}
                </div>
            </div>
        </div>
    );
};

export default VideoModal;
