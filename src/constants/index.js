import carebridgeImg from "../assets/img/carebridge.png";
import ecommerceImg from "../assets/img/ecommerce.jpeg";
import healthcareImg from "../assets/img/healthcare.png";

const carebridge = carebridgeImg;
const ecommerce = ecommerceImg;
const healthcare = healthcareImg;

export const HERO_CONTENT = `I am a motivated and detail-oriented BTech student specializing in Computer Science Engineering with strong problem-solving skills and a passion for software development. Seeking an entry-level role to apply my programming knowledge and contribute to innovative projects.`;

export const ABOUT_TEXT = `I am a dedicated and versatile software developer with a passion for creating efficient and user-friendly web applications. Currently pursuing my B.Tech in Computer Science at Nalanda Institute of Technology, Bhubaneswar, I have developed expertise in Python, Django, React, and various web technologies. My journey in software development began with a deep curiosity for how things work, and it has evolved into a passion where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Proficient in English and an expert in Hindi and Odia, enabling effective communication across diverse teams and stakeholders.`;

export const EDUCATION = [
  {
    year: "2023 - 2027",
    degree: "B.Tech in Computer Science",
    institution: "Nalanda Institute of Technology, Bhubaneswar",
    description: `Pursuing Bachelor of Technology in Computer Science Engineering with a current CGPA of 8.40. Actively learning and implementing various technologies including Python, Django, React, and database management systems.`,
    technologies: ["Python", "Django", "Django REST Framework", "React", "MySQL", "JavaScript", "HTML", "CSS"],
  },
  {
    year: "2023",
    degree: "12th Science",
    institution: "BCET Higher Secondary School",
    description: `Completed 12th standard with Science stream, scoring 63.33%.`,
    technologies: [],
  },
  {
    year: "2021",
    degree: "Matriculation",
    institution: "Panchayat Govt High School",
    description: `Completed matriculation with 67.16% marks.`,
    technologies: [],
  }
];

export const PROJECTS = [
  {
    title: "CareBridge AI",
    image: carebridge,
    description: "A comprehensive AI-powered healthcare platform designed to bridge the gap between healthcare providers and patients. Features three Flutter apps (Patient, Guardian, Doctor) with role-based access, wearable device integration (smartwatch, fitness bands, BP/glucose monitors), voice interaction using Azure Speech SDK, AI-powered symptom analysis and risk scoring with Azure OpenAI and Azure ML, real-time health monitoring, and intelligent alert system. Built with cloud-native architecture on Microsoft Azure with FHIR-compliant health data services.",
    technologies: ["Flutter", "Riverpod", "GoRouter", "Azure Functions", "Azure OpenAI", "Azure ML", "Azure Speech", "Azure AD B2C", "Azure Health Data Services", "Azure SQL", "Cosmos DB", "Firebase Cloud Messaging", "Power BI", "Hive", "fl_chart"],
    link: "https://carebridge-frontend.onrender.com"
  },
  {
    title: "E-Commerce Web Application",
    image: ecommerce,
    description: "Developed a scalable e-commerce platform with role-based access for customers, sellers, and admins. Built RESTful APIs for product management, order processing, cart functionality, and payment integration. Implemented Celery for asynchronous order confirmation emails and background tasks, and improved performance using Redis caching.",
    technologies: ["Python", "Django", "Django REST Framework", "JWT", "MySQL", "Celery", "Redis"],
  },
  {
    title: "Healthcare Management System",
    image: healthcare,
    description: "Built a secure healthcare platform with role-based access for patients, doctors, and admins. Developed REST APIs for appointments, prescriptions, and electronic health records (EHR). Integrated Celery for automated reminders and optimized performance with caching.",
    technologies: ["Python", "Django", "Django REST Framework", "JWT", "MySQL", "Swagger", "Celery", "Redis"],
  },
];

export const CONTACT = {
  address1: "Bhubaneswar, Odisha",
  address2: "India",
  phoneNo: "+91 8117839357",
  email: "pradahn.subhalaxmi9178@gmail.com",
};
