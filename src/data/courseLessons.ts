export interface Lesson {
  title: string;
  duration: string;
  description: string;
  videoUrl: string; // YouTube embed URLs or empty for placeholder
}

// Map of course ID -> array of lessons
// Using freely available YouTube tutorial embeds as sample videos
export const courseLessons: Record<number, Lesson[]> = {
  1: [
    { title: 'Welcome to Web Development', duration: '8:30', description: 'An introduction to the world of web development — what you\'ll learn and how to get the most from this course.', videoUrl: 'https://www.youtube.com/embed/zJSY8tbf_ys' },
    { title: 'How the Internet Works', duration: '12:15', description: 'Understand HTTP, DNS, servers, and how browsers render web pages.', videoUrl: 'https://www.youtube.com/embed/zN8YNNHcaZc' },
    { title: 'HTML Fundamentals', duration: '18:40', description: 'Learn HTML tags, semantic elements, forms, and page structure.', videoUrl: 'https://www.youtube.com/embed/UB1O30fR-EE' },
    { title: 'CSS Styling Basics', duration: '22:10', description: 'Master CSS selectors, box model, flexbox, and grid layout.', videoUrl: 'https://www.youtube.com/embed/yfoY53QXEnI' },
    { title: 'JavaScript Essentials', duration: '25:00', description: 'Variables, functions, DOM manipulation, and event handling.', videoUrl: 'https://www.youtube.com/embed/W6NZfCO5SIk' },
    { title: 'Building Your First Website', duration: '30:00', description: 'Combine HTML, CSS, and JavaScript to build a complete landing page project.', videoUrl: 'https://www.youtube.com/embed/FazgJVnrVuI' },
    { title: 'Introduction to React', duration: '20:45', description: 'Components, JSX, props, state, and the React ecosystem.', videoUrl: 'https://www.youtube.com/embed/SqcY0GlETPk' },
    { title: 'React Hooks Deep Dive', duration: '28:30', description: 'useState, useEffect, useContext, and building custom hooks.', videoUrl: '' },
    { title: 'Backend with Node.js', duration: '24:15', description: 'Setting up Express, REST APIs, and connecting to databases.', videoUrl: '' },
    { title: 'Final Project: Full Stack App', duration: '45:00', description: 'Build and deploy a complete full-stack application from scratch.', videoUrl: '' },
  ],
  2: [
    { title: 'Introduction to Data Science', duration: '10:00', description: 'What is data science? Career paths, tools, and the data science workflow.', videoUrl: 'https://www.youtube.com/embed/X3paOmcrTjQ' },
    { title: 'Python for Data Analysis', duration: '18:30', description: 'Python basics, NumPy arrays, and Pandas DataFrames.', videoUrl: 'https://www.youtube.com/embed/vmEHCJofslg' },
    { title: 'Data Visualization with Matplotlib', duration: '15:20', description: 'Creating charts, plots, and interactive visualizations.', videoUrl: 'https://www.youtube.com/embed/3Xc3CA655Y4' },
    { title: 'Statistics for Data Science', duration: '22:00', description: 'Probability, distributions, hypothesis testing, and statistical inference.', videoUrl: '' },
    { title: 'Machine Learning Basics', duration: '28:15', description: 'Supervised vs unsupervised learning, model training, and evaluation.', videoUrl: '' },
    { title: 'Deep Learning with TensorFlow', duration: '35:00', description: 'Neural networks, CNNs, RNNs, and building models with TensorFlow.', videoUrl: '' },
    { title: 'Capstone Project', duration: '40:00', description: 'End-to-end data science project from data collection to model deployment.', videoUrl: '' },
  ],
  3: [
    { title: 'Cybersecurity Fundamentals', duration: '12:00', description: 'CIA triad, threat landscape, and security frameworks.', videoUrl: 'https://www.youtube.com/embed/hXSFdwIOfnE' },
    { title: 'Linux for Security Professionals', duration: '20:00', description: 'Essential Linux commands, file permissions, and networking tools.', videoUrl: 'https://www.youtube.com/embed/wBp0Rb-ZJak' },
    { title: 'Network Security Basics', duration: '18:30', description: 'TCP/IP, firewalls, IDS/IPS, and network monitoring.', videoUrl: '' },
    { title: 'Ethical Hacking with Kali Linux', duration: '25:00', description: 'Setting up Kali, reconnaissance, scanning, and exploitation.', videoUrl: '' },
    { title: 'Web Application Security', duration: '22:45', description: 'OWASP Top 10, SQL injection, XSS, and CSRF attacks.', videoUrl: '' },
    { title: 'Incident Response & Forensics', duration: '20:00', description: 'Handling security incidents, digital forensics, and reporting.', videoUrl: '' },
  ],
  4: [
    { title: 'What is UI/UX Design?', duration: '10:30', description: 'Understanding the difference between UI and UX, and why design matters.', videoUrl: 'https://www.youtube.com/embed/wIuVvCuiJhU' },
    { title: 'Design Thinking Process', duration: '14:00', description: 'Empathize, define, ideate, prototype, and test.', videoUrl: '' },
    { title: 'Figma Interface & Tools', duration: '20:15', description: 'Navigating Figma, frames, auto-layout, and components.', videoUrl: '' },
    { title: 'Color Theory & Typography', duration: '16:30', description: 'Choosing palettes, font pairing, and establishing visual hierarchy.', videoUrl: '' },
    { title: 'Building a Design System', duration: '25:00', description: 'Creating reusable components, tokens, and documentation.', videoUrl: '' },
    { title: 'Mobile App Design Project', duration: '35:00', description: 'Design a complete mobile app from wireframes to high-fidelity mockups.', videoUrl: '' },
  ],
  5: [
    { title: 'Cloud Computing Overview', duration: '12:00', description: 'IaaS, PaaS, SaaS, and choosing the right cloud provider.', videoUrl: 'https://www.youtube.com/embed/M988_fsOSWo' },
    { title: 'Getting Started with AWS', duration: '18:00', description: 'AWS console, IAM, EC2, and S3 fundamentals.', videoUrl: '' },
    { title: 'Networking in the Cloud', duration: '20:30', description: 'VPCs, subnets, security groups, and load balancers.', videoUrl: '' },
    { title: 'Serverless Architecture', duration: '22:00', description: 'AWS Lambda, API Gateway, and event-driven computing.', videoUrl: '' },
    { title: 'Azure & GCP Comparison', duration: '18:45', description: 'Key services across AWS, Azure, and Google Cloud Platform.', videoUrl: '' },
    { title: 'Cloud Certification Prep', duration: '30:00', description: 'Tips and practice questions for AWS Solutions Architect certification.', videoUrl: '' },
  ],
  6: [
    { title: 'React Native Setup', duration: '15:00', description: 'Installing React Native CLI, Expo, and setting up your development environment.', videoUrl: '' },
    { title: 'Core Components', duration: '18:30', description: 'View, Text, Image, ScrollView, and building mobile layouts.', videoUrl: '' },
    { title: 'Navigation & Routing', duration: '20:00', description: 'React Navigation, stack and tab navigators.', videoUrl: '' },
    { title: 'State Management', duration: '22:15', description: 'Context API, Redux Toolkit, and async state handling.', videoUrl: '' },
    { title: 'Building a Social App', duration: '35:00', description: 'Full project: build and deploy a social media app with React Native.', videoUrl: '' },
  ],
  7: [
    { title: 'Introduction to Finance', duration: '10:00', description: 'Financial markets, instruments, and the role of investment banks.', videoUrl: '' },
    { title: 'Financial Statements Analysis', duration: '20:00', description: 'Reading balance sheets, income statements, and cash flow statements.', videoUrl: '' },
    { title: 'DCF Valuation', duration: '25:00', description: 'Discounted cash flow modeling step by step in Excel.', videoUrl: '' },
    { title: 'Comparable Analysis', duration: '18:30', description: 'Trading comps, precedent transactions, and relative valuation.', videoUrl: '' },
    { title: 'Investment Banking Case Study', duration: '30:00', description: 'A real-world M&A deal walkthrough from pitch to close.', videoUrl: '' },
  ],
  8: [
    { title: 'Python Basics Refresher', duration: '12:00', description: 'Variables, data types, loops, and functions in Python.', videoUrl: 'https://www.youtube.com/embed/kqtD5dpn9C8' },
    { title: 'File & Folder Automation', duration: '18:00', description: 'Automating file operations, renaming, and organizing with Python.', videoUrl: '' },
    { title: 'Web Scraping with BeautifulSoup', duration: '20:30', description: 'Extracting data from websites and saving to CSV/JSON.', videoUrl: '' },
    { title: 'Working with APIs', duration: '16:45', description: 'REST APIs, requests library, and building API integrations.', videoUrl: '' },
    { title: 'Email & Report Automation', duration: '22:00', description: 'Automating emails, generating PDF reports, and scheduling tasks.', videoUrl: '' },
  ],
  9: [
    { title: 'Dart Language Basics', duration: '14:00', description: 'Dart syntax, types, functions, and OOP concepts.', videoUrl: '' },
    { title: 'Flutter Widget Tree', duration: '18:30', description: 'StatelessWidget, StatefulWidget, and widget composition.', videoUrl: '' },
    { title: 'Layouts & Responsive Design', duration: '20:00', description: 'Rows, columns, stacks, and adaptive layouts.', videoUrl: '' },
    { title: 'Firebase Integration', duration: '22:00', description: 'Authentication, Firestore, and real-time data with Firebase.', videoUrl: '' },
    { title: 'E-Commerce App Project', duration: '40:00', description: 'Build a complete e-commerce app with Flutter and Firebase.', videoUrl: '' },
  ],
  10: [
    { title: 'Introduction to DevOps', duration: '10:00', description: 'DevOps culture, practices, and the CI/CD pipeline.', videoUrl: 'https://www.youtube.com/embed/Xrgk023l4lI' },
    { title: 'Docker Fundamentals', duration: '22:00', description: 'Containers, images, Dockerfiles, and Docker Compose.', videoUrl: '' },
    { title: 'Kubernetes Orchestration', duration: '28:00', description: 'Pods, deployments, services, and Helm charts.', videoUrl: '' },
    { title: 'CI/CD with GitHub Actions', duration: '20:30', description: 'Building automated pipelines for testing and deployment.', videoUrl: '' },
    { title: 'Monitoring & Logging', duration: '18:45', description: 'Prometheus, Grafana, and centralized logging with ELK.', videoUrl: '' },
    { title: 'Infrastructure as Code', duration: '25:00', description: 'Terraform and Ansible for automated infrastructure management.', videoUrl: '' },
  ],
  11: [
    { title: 'Design Principles', duration: '12:00', description: 'Balance, contrast, alignment, and proximity in graphic design.', videoUrl: '' },
    { title: 'Photoshop Essentials', duration: '25:00', description: 'Layers, masks, selection tools, and photo manipulation.', videoUrl: '' },
    { title: 'Illustrator for Vector Art', duration: '22:30', description: 'Pen tool, shapes, pathfinder, and creating logos.', videoUrl: '' },
    { title: 'Brand Identity Design', duration: '30:00', description: 'Creating a complete brand identity system from scratch.', videoUrl: '' },
  ],
  12: [
    { title: 'Digital Marketing Overview', duration: '10:00', description: 'Understanding digital channels, funnel, and customer journey.', videoUrl: '' },
    { title: 'SEO Fundamentals', duration: '18:00', description: 'On-page SEO, keyword research, and technical SEO basics.', videoUrl: '' },
    { title: 'Google Ads Mastery', duration: '22:00', description: 'Campaign setup, ad groups, bidding, and optimization.', videoUrl: '' },
    { title: 'Social Media Marketing', duration: '20:00', description: 'Content strategy, engagement tactics, and paid social ads.', videoUrl: '' },
    { title: 'Analytics & Reporting', duration: '16:30', description: 'Google Analytics, KPIs, and data-driven marketing decisions.', videoUrl: '' },
  ],
};
