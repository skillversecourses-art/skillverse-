import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../lib/supabase';

export const useEnrollment = () => {
  const { user } = useAuth();
  const [enrolledCourseIds, setEnrolledCourseIds] = useState<number[]>([]);

  useEffect(() => {
    if (user) {
      // Fetch enrollments from Supabase
      const fetchEnrollments = async () => {
        const { data, error } = await supabase
          .from('enrollments')
          .select('course_id')
          .eq('user_id', user.id);
          
        if (data && !error) {
          setEnrolledCourseIds(data.map(e => e.course_id));
        }
      };
      
      fetchEnrollments();
    } else {
      setEnrolledCourseIds([]);
    }
  }, [user]);

  const enrollInCourse = async (courseId: number) => {
    if (!user) return;
    
    // Check if already enrolled in state to prevent duplicate inserts
    if (!enrolledCourseIds.includes(courseId)) {
      // Optimistic UI update
      setEnrolledCourseIds(prev => [...prev, courseId]);
      
      // Save to Supabase
      const { error } = await supabase
        .from('enrollments')
        .insert([{ user_id: user.id, course_id: courseId }]);
        
      if (error) {
        console.error("Error saving enrollment:", error);
      }
    }
  };

  const isEnrolled = (courseId: number) => enrolledCourseIds.includes(courseId);

  return { enrolledCourseIds, enrollInCourse, isEnrolled };
};
