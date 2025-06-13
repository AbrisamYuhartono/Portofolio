import { Project, Experience, Certification, ContactInfo } from '../types';

export const projects: Project[] = [
  {
    id: 'jbus',
    title: 'JBus',
    short_description: 'Android Bus Ticket Booking App',
    description: 'bla bla bla',
    technologies: ['Java', 'Android', 'OOP'],
    category: 'Mobile Development',
    image: '/images/placeholder.png', // Use real path or placeholder
    github: 'https://github.com/AbrisamYuhartono/JBus'

  },
  {
    id: 'eco-construct',
    title: 'ECO-CONSTRUCT',
    short_description: 'Marketplace for Eco-Friendly Building Materials',
    description: 'bla bla bla',
    technologies: ['React Native', 'PyTorch', 'JavaScript', 'Machine Learning'],
    category: 'Full-Stack Development',
    image: '/images/placeholder.png', // Use real path or placeholder
    github: 'https://github.com/kevin-naufal/EcoConstruct'

  },
  {
    id: 'fishhaven',
    title: 'FishHaven',
    short_description: 'Smart IoT Monitoring System for Fish Farming',
    description: 'bla bla bla',
    technologies: ['IoT', 'ESP32', 'Blynk', 'Sensors', 'Arduino'],
    category: 'IoT Development',
    image: '/images/placeholder.png', // Use real path or placeholder
    github: 'https://github.com/DarrenNathanaelB/FishHaven'

  },
  {
    id: 'hotel-booking',
    title: 'Hotel Booking System',
    short_description: 'Room Reservation and Payment Calculator',    
    description: 'bla bla bla',    
    technologies: ['VHDL', 'Database', 'Backend'],
    category: 'Backend Development',
    image: '/images/placeholder.png', // Use real path or placeholder
    github: 'https://github.com/auli-aziz/Hotel-Booking-System'

  },
  {
    id: 'myfinance',
    title: 'myFinance',
    short_description: 'Personal Finance Management Web App',
    description: 'bla bla bla',    
    technologies: ['React', 'PostgreSQL', 'JavaScript', 'Web Development'],
    category: 'Full-Stack Development',
    image: '/images/placeholder.png', // Use real path or placeholder
    github: 'https://github.com/rusyd4/myFinance'

  },
  {
    id: 'carpark',
    title: 'Car Parking Sensor',
    short_description: 'Ultrasonic-Based Distance Alert System.',
    description: 'bla bla bla',
    technologies: ['Arduino', 'HC-SR04 Sensor', 'I2C Communication', 'Assembly'],
    category: 'Embedded Systems & IoT',
    image: '/images/placeholder.png', // Use real path or placeholder
    github: 'https://github.com/AbrisamYuhartono/Car-Parking-Sensor_SSF_Kelompok-23'
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
    dateIssued: 'Dec 2024',
    description: 'Fundamental networking concepts, protocols, and network architecture.',
    skills: ['Networking', 'TCP/IP', 'Network Protocols'],
    image: 'https://github.com/AbrisamYuhartono/Portofolio/blob/main/Media/CCNA%20Introduction%20to%20Networks.png?raw=true'
  },
  {
    id: 'ccna-enterprise',
    title: 'CCNA: Enterprise Networking, Security, and Automation',
    issuer: 'Cisco',
    dateIssued: 'Jul 2024',
    description: 'Advanced enterprise networking, security implementations, and network automation.',
    skills: ['Network Security', 'Enterprise Networking', 'Automation'],
    image: 'https://github.com/AbrisamYuhartono/Portofolio/blob/main/Media/CCNA%20Enterprise%20Networking,%20Security,%20and%20Automation.png?raw=true'
  },
  {
    id: 'ccna-switching',
    title: 'CCNA: Switching, Routing, and Wireless Essentials',
    issuer: 'Cisco',
    dateIssued: 'Dec 2024',
    description: 'Switching concepts, routing protocols, and wireless network fundamentals.',
    skills: ['Routing', 'Switching', 'Wireless Networks'],
    image: 'https://github.com/AbrisamYuhartono/Portofolio/blob/main/Media/CCNA%20Switching,%20Routing,%20and%20Wireless%20Essentials.png?raw=true'
  },
  {
    id: 'data-analysis-python',
    title: 'Data Analysis with Python',
    issuer: 'IBM',
    dateIssued: 'Jun 2025',
    description: 'Data manipulation, analysis, and visualization using Python libraries.',
    skills: ['Python', 'Data Analysis', 'Pandas', 'NumPy'],
    image: 'https://github.com/AbrisamYuhartono/Portofolio/blob/main/Media/Data%20Analysis%20with%20Python.png?raw=true'
  },
  {
    id: 'design-thinking',
    title: 'Enterprise Design Thinking Practitioner',
    issuer: 'IBM',
    dateIssued: 'Feb 2025',
    description: 'Human-centered design methodology for enterprise solutions.',
    skills: ['Design Thinking', 'User Experience', 'Problem Solving'],
    image: 'https://github.com/AbrisamYuhartono/Portofolio/blob/main/Media/Enterprise%20Design%20Thinking%20Practitioner.png?raw=true'
  },
  {
    id: 'deep-learning',
    title: 'Deep Learning Fundamentals',
    issuer: 'IBM',
    dateIssued: 'Jun 2025',
    description: 'Neural networks, deep learning architectures, and implementation.',
    skills: ['Deep Learning', 'Neural Networks', 'AI'],
    image: 'https://github.com/AbrisamYuhartono/Portofolio/blob/main/Media/Deep%20Learning%20Fundamentals.png?raw=true'
  },
  {
    id: 'ml-python',
    title: 'Machine Learning with Python - Level 1',
    issuer: 'IBM',
    dateIssued: 'Mar 2025',
    description: 'Machine learning algorithms and implementation using Python.',
    skills: ['Machine Learning', 'Python', 'Scikit-learn'],
    image: 'https://github.com/AbrisamYuhartono/Portofolio/blob/main/Media/Machine%20Learning%20with%20Python.png?raw=true'
  },
  {
    id: 'statistics',
    title: 'Statistics 101',
    issuer: 'IBM',
    dateIssued: 'Jun 2025',
    description: 'Statistical analysis, probability, and data interpretation.',
    skills: ['Statistics', 'Data Analysis', 'Probability'],
    image: 'https://github.com/AbrisamYuhartono/Portofolio/blob/main/Media/Statistics%20101.png?raw=true'
  },
  {
    id: 'sql-databases',
    title: 'SQL and Relational Databases 101',
    issuer: 'IBM',
    dateIssued: 'Jun 2025',
    description: 'Database design, SQL queries, and relational database management.',
    skills: ['SQL', 'Database Design', 'Data Management'],
    image: 'https://github.com/AbrisamYuhartono/Portofolio/blob/main/Media/SQL%20and%20Relational%20Databases%20101.png?raw=true'
  },
  {
    id: 'python-data-science',
    title: 'Python 101 for Data Science',
    issuer: 'IBM',
    dateIssued: 'Jun 2025',
    description: 'Python programming fundamentals for data science applications.',
    skills: ['Python', 'Data Science', 'Programming'],
    image: 'https://github.com/AbrisamYuhartono/Portofolio/blob/main/Media/Python%20101%20for%20Data%20Science.png?raw=true'
  }
];

export const contactInfo: ContactInfo = {
  email: 'abrisam.yuhartono@gmail.com',
  linkedin: 'https://www.linkedin.com/in/muhammadabrisamcahyojuhartono',
  location: 'Jakarta, Indonesia',
  phone: '+62 8788 345 0906'
};