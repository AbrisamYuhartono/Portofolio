import { Project, Experience, Certification, ContactInfo } from '../types';

export const projects: Project[] = [
  {
    id: 'jbus',
    title: 'JBus',
    description: 'Android application for bus ticket booking system built with Java using Object-Oriented Programming principles.',
    technologies: ['Java', 'Android', 'OOP'],
    category: 'Mobile Development'
  },
  {
    id: 'eco-construct',
    title: 'ECO-CONSTRUCT',
    description: 'Cross-platform marketplace platform connecting producers and consumers of eco-friendly construction materials. Features React Native frontend and PyTorch for real-time plant species detection.',
    technologies: ['React Native', 'PyTorch', 'JavaScript', 'Machine Learning'],
    category: 'Full-Stack Development'
  },
  {
    id: 'fishhaven',
    title: 'FishHaven',
    description: 'Smart IoT Monitoring System for Fish Farming with real-time water quality monitoring, temperature sensing, and turbidity detection. Features remote monitoring via Blynk application.',
    technologies: ['IoT', 'ESP32', 'Blynk', 'Sensors', 'Arduino'],
    category: 'IoT Development'
  },
  {
    id: 'hotel-booking',
    title: 'Hotel Booking System',
    description: 'Comprehensive hotel reservation system that calculates pricing based on room type, guest count, and duration. Includes payment processing and change calculation features.',
    technologies: ['Java', 'Database', 'Backend'],
    category: 'Backend Development'
  },
  {
    id: 'myfinance',
    title: 'myFinance',
    description: 'Personal finance management web application featuring expense tracking, budget planning, and financial analytics with a modern React frontend and PostgreSQL database.',
    technologies: ['React', 'PostgreSQL', 'JavaScript', 'Web Development'],
    category: 'Full-Stack Development'
  }
];

export const experiences: Experience[] = [
  {
    id: 'data-scientist-intern',
    title: 'Junior Data Scientist Intern',
    company: 'PT Inovasi Lentera Cipta Kreasi',
    period: 'Feb 2025 - Jun 2025',
    description: 'Analyzed digital product data, optimized data processing algorithms, and built interactive dashboards for business intelligence.'
  },
  {
    id: 'expert-staff-rnd',
    title: 'Expert Staff of Research and Development',
    company: 'Ikatan Mahasiswa Elektro FTUI (IME FTUI)',
    period: 'Feb 2024 - Jan 2025',
    description: 'Led research initiatives and data analysis for the entire department, implemented process improvements and strategic recommendations.'
  },
  {
    id: 'staff-rnd',
    title: 'Staff of Research and Development',
    company: 'Ikatan Mahasiswa Elektro FTUI (IME FTUI)',
    period: 'Feb 2023 - Jan 2024',
    description: 'Conducted comprehensive data analysis for departmental operations and contributed to research projects and strategic planning.'
  }
];

export const certifications: Certification[] = [
  {
    id: 'ccna-intro',
    title: 'CCNA: Introduction to Networks',
    issuer: 'Cisco',
    dateIssued: '2024',
    description: 'Fundamental networking concepts, protocols, and network architecture.',
    skills: ['Networking', 'TCP/IP', 'Network Protocols']
  },
  {
    id: 'ccna-enterprise',
    title: 'CCNA: Enterprise Networking, Security, and Automation',
    issuer: 'Cisco',
    dateIssued: '2024',
    description: 'Advanced enterprise networking, security implementations, and network automation.',
    skills: ['Network Security', 'Enterprise Networking', 'Automation']
  },
  {
    id: 'ccna-switching',
    title: 'CCNA: Switching, Routing, and Wireless Essentials',
    issuer: 'Cisco',
    dateIssued: '2024',
    description: 'Switching concepts, routing protocols, and wireless network fundamentals.',
    skills: ['Routing', 'Switching', 'Wireless Networks']
  },
  {
    id: 'data-analysis-python',
    title: 'Data Analysis with Python',
    issuer: 'IBM',
    dateIssued: '2024',
    description: 'Data manipulation, analysis, and visualization using Python libraries.',
    skills: ['Python', 'Data Analysis', 'Pandas', 'NumPy']
  },
  {
    id: 'design-thinking',
    title: 'Enterprise Design Thinking Practitioner',
    issuer: 'IBM',
    dateIssued: '2024',
    description: 'Human-centered design methodology for enterprise solutions.',
    skills: ['Design Thinking', 'User Experience', 'Problem Solving']
  },
  {
    id: 'deep-learning',
    title: 'Deep Learning Fundamentals',
    issuer: 'IBM',
    dateIssued: '2024',
    description: 'Neural networks, deep learning architectures, and implementation.',
    skills: ['Deep Learning', 'Neural Networks', 'AI']
  },
  {
    id: 'ml-python',
    title: 'Machine Learning with Python - Level 1',
    issuer: 'IBM',
    dateIssued: '2024',
    description: 'Machine learning algorithms and implementation using Python.',
    skills: ['Machine Learning', 'Python', 'Scikit-learn']
  },
  {
    id: 'statistics',
    title: 'Statistics 101',
    issuer: 'IBM',
    dateIssued: '2024',
    description: 'Statistical analysis, probability, and data interpretation.',
    skills: ['Statistics', 'Data Analysis', 'Probability']
  },
  {
    id: 'sql-databases',
    title: 'SQL and Relational Databases 101',
    issuer: 'IBM',
    dateIssued: '2024',
    description: 'Database design, SQL queries, and relational database management.',
    skills: ['SQL', 'Database Design', 'Data Management']
  },
  {
    id: 'python-data-science',
    title: 'Python 101 for Data Science',
    issuer: 'IBM',
    dateIssued: '2024',
    description: 'Python programming fundamentals for data science applications.',
    skills: ['Python', 'Data Science', 'Programming']
  }
];

export const contactInfo: ContactInfo = {
  email: 'abrisam.yuhartono@gmail.com',
  linkedin: 'https://www.linkedin.com/in/muhammadabrisamcahyojuhartono',
  location: 'Jakarta, Indonesia',
  phone: '+62 8788 345 0906'
};