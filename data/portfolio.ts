// Portfolio Data - All static content in one place

export const personalInfo = {
  name: "Girijesh S",
  title: "Software Engineer",
  tagline: "Web • Blockchain • ML",
  location: "Tamil Nadu, India",
  bio: "I'm Girijesh — a logical, detail-driven software engineer from Tamil Nadu. I enjoy building full-stack web apps, experimenting with blockchain, and applying ML to real problems.",
  extended_bio: "My work focuses on practical, well-tested systems and product-minded code. I favour clarity over cleverness, and I build things that are useful and maintainable. More strategic than emotional — I think like an engineer and act like a builder.",
  email: "girijesh@example.com", // Update with your real email
  phone: "+91-XXXXXXXXXX", // Update with your real phone
  resume_url: "/assets/resume/girijesh-resume.pdf",
};

export const social_links = {
  github: "https://github.com/girijeshhs",
  linkedin: "https://www.linkedin.com/in/girijesh-s", // Update with real URL
  twitter: "https://twitter.com/girijesh", // Optional
  email: "mailto:girijesh@example.com", // Update
};

export const skills = {
  frontend: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion"],
  backend: ["Node.js", "Express", "Python", "Flask", "REST APIs"],
  databases: ["PostgreSQL", "MongoDB", "Redis"],
  blockchain: ["Solidity", "Web3.js", "Ethereum", "Smart Contracts"],
  ml_ai: ["Python", "scikit-learn", "TensorFlow", "Data Analysis", "NLP"],
  tools: ["Git", "GitHub", "Docker", "Linux", "VS Code", "Postman"],
};

export const projects = [
  {
    id: "chainvault",
    name: "ChainVault",
    tagline: "Blockchain Secure Storage",
    description: "A blockchain-based secure storage demo. Prototype secure storage and verification on a permissioned chain.",
    long_description: "ChainVault demonstrates how blockchain technology can be used for secure, tamper-proof data storage. Built with Solidity smart contracts and a React frontend, it showcases decentralized storage principles.",
    tech_stack: ["Solidity", "Web3.js", "React", "Ethereum", "JavaScript"],
    category: "Blockchain",
    image: "/assets/images/project-chainvault-placeholder.png",
    github: "https://github.com/girijeshhs/chainvault",
    live_url: null,
    featured: true,
  },
  {
    id: "fuseml",
    name: "FuseML",
    tagline: "ML Pipeline Demo",
    description: "ML pipeline demo for small datasets. End-to-end pipeline: data ingestion → model training → API serving.",
    long_description: "FuseML is a complete machine learning pipeline demonstrating best practices for data ingestion, model training, and deployment. Includes a REST API for model inference and a clean architecture for ML projects.",
    tech_stack: ["Python", "Flask", "Docker", "scikit-learn", "REST API"],
    category: "Machine Learning",
    image: "/assets/images/project-fuseml-placeholder.png",
    github: "https://github.com/girijeshhs/fuseml",
    live_url: null,
    featured: true,
  },
  {
    id: "farmer-management",
    name: "Farmer Management System",
    tagline: "Farm CRUD & Reports",
    description: "Practical farm management system — CRUD & reports for farmers, inventory, and orders.",
    long_description: "A full-stack CRUD application designed for agricultural management. Tracks farmers, inventory, orders, and generates comprehensive reports. Built with modern web technologies.",
    tech_stack: ["React", "Node.js", "PostgreSQL", "Express"],
    category: "Web Development",
    image: "/assets/images/project-farmer-placeholder.png",
    github: "https://github.com/girijeshhs/farmermanagementsys",
    live_url: null,
    featured: true,
  },
  {
    id: "sentiment-analysis",
    name: "Sentiment Analysis",
    tagline: "Movie Review NLP",
    description: "End-to-end sentiment analysis prototype with frontend UX for reviewing and visualizing model outputs.",
    long_description: "A complete sentiment analysis system for movie reviews. Includes model training scripts, REST API for inference, and an interactive React frontend for visualization. Demonstrates practical NLP application.",
    tech_stack: ["Python", "Flask", "scikit-learn", "React", "NLP"],
    category: "Machine Learning",
    image: "/assets/images/project-fuseml-placeholder.png",
    github: "https://github.com/girijeshhs/sentiment-analysis-movie-reviews",
    live_url: null,
    featured: true,
  },
  {
    id: "agrithrive",
    name: "AgriThrive",
    tagline: "Agri-Tech Dashboard",
    description: "Agri-tech app prototype. Dashboard and metrics for farm yield optimization.",
    long_description: "AgriThrive provides farmers with data-driven insights for optimizing crop yields. Features include weather integration, soil analytics, and yield prediction dashboards.",
    tech_stack: ["React", "Node.js", "PostgreSQL", "Chart.js"],
    category: "Web Development",
    image: "/assets/images/project-agritrive-placeholder.png",
    github: "https://github.com/girijeshhs/agri-thrive",
    live_url: null,
    featured: false,
  },
  {
    id: "pcbguard",
    name: "PCBGuard",
    tagline: "PCB Layout Validation Tool",
    description: "Tool for PCB layout checks and rule validations. Automated checks and reports for PCB design constraints.",
    long_description: "PCBGuard automates the validation of PCB (Printed Circuit Board) layouts, checking design rule compliance and generating detailed reports. Built for electronics engineers to catch errors early.",
    tech_stack: ["Python", "CLI", "Node.js", "Automation"],
    category: "Tools",
    image: "/assets/images/project-pcbguard-placeholder.png",
    github: "https://github.com/girijeshhs/pcbguard",
    live_url: null,
    featured: false,
  },
];

export const education = [
  {
    institution: "Your University Name",
    degree: "B.E. / B.Tech in Computer Science",
    duration: "2020 - 2024", // Update with real years
    location: "Tamil Nadu, India",
    achievements: ["CGPA: X.XX", "Relevant coursework: Data Structures, AI/ML, Web Development"],
  },
];
