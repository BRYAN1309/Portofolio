import logo from "@/assets/logo.svg"
import bukapajak from  "@/assets/BukaPajak.png"
import nextpath from "@/assets/nextPath.png"
import signtalk from "@/assets/SignTalk.png"
import compwaste from "@/assets/compwaste.png"
import horasedu from "@/assets/horasedu.png"
import sertifFe from "@/assets/FE.png"
import sertiftechno from "@/assets/techno.png"
import sertifBe from"@/assets/BE - Bryan Thanaya (1)-1.png"
import sertifBatak from "@/assets/Sertifikat Lomba Website Aksara Batak-pages-56-1.png"
import sertifPGRI from "@/assets/Sertifikat Peserta BRYAN THANAYA (1)-1.png"
import sertifreact from "@/assets/udemyreact.png"
import sertiflaravel from '@/assets/udemylaravel.png'
import sertifFindit from "@/assets/sertiffindit.jpg"
export interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies: string[];
  logo?: string;
}

export interface Skill {
  id: number;
  name: string;
  category: 'Frontend' | 'Backend' | 'Tools' | 'Languages';
  level: number;
  icon?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  roles: string[];
  roleDescription: string;   // Single description string you fill in
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  image?: string;
}

export interface Certificate {
  id: number;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  image?: string;
  certificateUrl?: string; // Add this
}

export interface Organization {
  id: number;
  name: string;
  position: string;
  duration: string;
  description: string;
  achievements: string[];
  image?: string;
}

// Sample data
export const experiences: Experience[] = [
  {
    id: 1,
    company: "BNCC Elite Team – Online",
    position: "Member",
    duration: "Mar 2025 – Present",
    description:
      "Completed full-stack web development training covering React, HTML, CSS, JavaScript, and backend fundamentals. Built responsive, dynamic web apps aligned with software engineering best practices.",
    technologies: ["React", "HTML", "CSS", "JavaScript", "Backend Fundamentals"],
  },
  {
    id: 2,
    company: "FINDIT 2025 Hackathon – Universitas Gadjah Mada",
    position: "Semifinalist",
    duration: "Mar – Apr 2025",
    description:
      "Built a web-based video call platform with real-time AI sign language translation to text and voice. Developed full-stack architecture with real-time communication features.",
    technologies: ["WebRTC", "AI", "React", "Next.js", "Real-time Communication", "React", "Python"],
  },
  {
    id: 3,
    company: "LnT Camp – Bootcamp Golang",
    position: "Participant",
    duration: "Jul – Aug 2025",
    description:
      "Completed an intensive 1-month Golang bootcamp covering core Go programming concepts and backend development. Built RESTful APIs, implemented JWT authentication, database relations, file uploads, and completed a final collaborative project.",
    technologies: [
      "Golang",
      "REST API",
      "GORM",
      "MySQL",
      "JWT Authentication",
      "Goroutines",
      "Git Collaboration",
    ],
  },
  {
    id: 4,
    company: "Full-Stack Web Development Courses – Udemy (Online)",
    position: "Student",
    duration: "Feb 2025 – Jan 2025",
    description:
      "Completed a 71.5-hour React, Next.js, Redux, and API integration course. Finished a 36.5-hour Laravel course covering MVC, API development, and tools like Git, Postman, and Laravel Tinker.",
    technologies: ["React", "Next.js", "Redux", "API Integration", "Laravel", "Git", "Postman"],
  },
  {
    id: 5,
    company: "Lomba Website Aksara Batak Domain .Id",
    position: "Finalist",
    duration: "Jul – Aug 2025",
    description:
      "Developed Horasedu, a digital education platform that preserves Batak culture through a modern, interactive approach. Features include LMS with quizzes and exams, interactive mini-games, chatbox, and cultural exploration modules.",
    technologies: ["Python", "React", "LMS Development", "Interactive Games", "Digital Education", "Supabase", "Ai"],
  },
];



export const skills: Skill[] = [
  // Frontend
  { id: 1, name: "React", category: "Frontend", level: 95 },
  { id: 2, name: "TypeScript", category: "Frontend", level: 90 },
  { id: 3, name: "Next.js", category: "Frontend", level: 85 },
  { id: 4, name: "Vue.js", category: "Frontend", level: 80 },
  { id: 5, name: "Tailwind CSS", category: "Frontend", level: 90 },
  
  // Backend
  { id: 6, name: "Node.js", category: "Backend", level: 85 },
  { id: 7, name: "Python", category: "Backend", level: 80 },
  { id: 8, name: "PostgreSQL", category: "Backend", level: 75 },
  { id: 9, name: "MongoDB", category: "Backend", level: 80 },
  { id: 10, name: "GraphQL", category: "Backend", level: 75 },
  
  // Tools
  { id: 11, name: "Git", category: "Tools", level: 90 },
  { id: 12, name: "Docker", category: "Tools", level: 70 },
  { id: 13, name: "AWS", category: "Tools", level: 75 },
  { id: 14, name: "Figma", category: "Tools", level: 85 },
  
  // Languages
  { id: 15, name: "JavaScript", category: "Languages", level: 95 },
  { id: 16, name: "Python", category: "Languages", level: 80 },
  { id: 17, name: "Go", category: "Languages", level: 65 }
];

export const projects: Project[] = [
  {
    id: 1,
    title: "BukaPajak",
    description:
      "Web-based platform designed to improve tax transparency and public participation in Indonesia. It leverages blockchain technology, smart contracts, and wallet integration (MetaMask) to ensure transparency, immutability, and accountability in tax-related transactions.",
    technologies: ["Go", "Supabase", "Ethereum (Testnet)", "Smart Contracts", "REST API", "MetaMask"],
    roles: ["Backend Engineer"],
    roleDescription:
      "Designed hybrid data architecture (Supabase + blockchain), implemented Ethereum smart contracts, integrated MetaMask authentication, built 20+ REST APIs, and developed transaction validation and role-based access systems. Ensured scalability and security for daily transactions.",
    githubUrl: "https://github.com/BRYAN1309/Hology-Software-Development",
    liveUrl: "https://drive.google.com/file/d/1WwkWfwlOqsW9eaIgY3xe7A9KAIOTMR6O/view?usp=drive_link",
    featured: true,
    image: bukapajak
  },
  {
    id: 2,
    title: "NextPath",
    description:
      "AI-powered career recommendation platform for students, fresh graduates, and job seekers. It provides personalized career paths, goal tracking, and curated articles on industry insights and skill-building.",
    technologies: ["Laravel", "Flask", "MySQL", "REST API", "AI/ML"],
    roles: ["Backend Developer"],
    roleDescription:
      "Built the backend system using Laravel, integrated Flask-based AI components, designed REST APIs for user goals, article management, and chatbot integration. Ensured smooth communication between frontend, AI chatbot, and database.",
    githubUrl: "https://github.com/BRYAN1309/IN-FEST-2025.git",
    liveUrl: "https://www.instagram.com/p/DKXVMvjPn6t/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    featured: true,
    image: nextpath
  },
  {
    id: 3,
    title: "Horasedu",
    description:
      "Digital education platform to preserve Batak culture through a modern, interactive LMS. Features Batak language learning modules, folk tales, history, quizzes, final exams, and mini-games.",
    technologies: ["Node.js", "Express", "PostgreSQL", "REST API"],
    roles: ["Backend Engineer"],
    roleDescription:
      "Designed and managed the database, built core logic for modules, quizzes, and mini-games, structured REST APIs for frontend-backend interaction, and integrated a chatbot assistant for interactive learning.",
    githubUrl: "https://github.com/BRYAN1309/HorasEdu",
    liveUrl: "https://horasedu.example.com",
    featured: true,
    image: horasedu
  },
  {
    id: 4,
    title: "SignTalk",
    description:
      "AI-powered video call platform that translates sign language into text and speech in real time, bridging communication gaps for individuals with hearing or speech disabilities.",
    technologies: ["React", "Node.js", "WebRTC", "AI/ML", "REST API"],
    roles: ["Full Stack Developer"],
    roleDescription:
      "Developed the frontend UI for real-time video calls, built backend APIs for room/participant management, and integrated AI models for sign language recognition and translation. Delivered an inclusive communication platform.",
    githubUrl: "https://github.com/example/signtalk",
    liveUrl: "https://signtalk.example.com",
    featured: true,
    image: signtalk
  },
  {
    id: 5,
    title: "Compwaste",
    description:
      "Food waste management app enabling restaurants to redistribute organic waste to farmers or compost producers. Supports waste classification, location matching, and secure transactions.",
    technologies: ["Node.js", "Express", "PostgreSQL", "REST API"],
    roles: ["Backend Developer"],
    roleDescription:
      "Designed and developed backend system, managed database, implemented REST APIs, business logic, and deployment. Ensured API reliability, optimized data flows, and supported real-time transactions between sellers and buyers.",
    githubUrl: "https://github.com/example/compwaste",
    liveUrl: "https://compwaste.example.com",
    featured: true,
    image: compwaste
  }
];


export const certificates: Certificate[] = [
  {
    id: 1,
    name: "React - The Complete Guide 2025 (incl. Next.js, Redux)",
    issuer: "Academind by Maximilian Schwarzmüller",
    date: "June 20, 2025",
    credentialId: "UC-0dfb96e7-bf83-44f6-aada-a7291a0f9af1",
    image: sertifreact,
    certificateUrl: "https://drive.google.com/file/d/11SR4JZ3xCBRUI0dcwZ4iCXZSQN8DzeDH/view?usp=drive_link"
  },
  {
    id: 2,
    name: "Laravel : Pemula sampai Mahir",
    issuer: "Programmer Zaman Now",
    date: "June 20, 2025",
    credentialId: "UC-75798fe6-6afa-4e38-8403-4c0c069d7355",
    image: sertiflaravel,
    certificateUrl: "https://drive.google.com/file/d/1j9CkAwv7IZ_Py7dIv-fQicVYfJLwWoUj/view?usp=sharing"

  },
   {
    id: 3,
    name: "Front End Development Class",
    issuer: "BNCC (Bina Nusantara Computer Club)",
    date: "August 2024",
    credentialId: "015/LNT/III/RC/BNCC/BDG/XXXX/08.2024",
    image: sertifFe,
    certificateUrl: "https://drive.google.com/file/d/13EATEyq0EX4GphRw3If-h0YDmfucm_-u/view?usp=drive_link"

  },
  {
    id: 4,
    name: "Back-End Development Class",
    issuer: "BNCC (Bina Nusantara Computer Club)",
    date: "2024/2025",
    credentialId: "001/LNT/III/MEMBER/BNCC/BDG/XXXVI/08.2025",
    image: sertifBe,
    certificateUrl: "https://drive.google.com/file/d/1jFQW7kBs2zyUy4lixYOtuZMV676Thq95/view?usp=drive_link"

  },
   {
    id: 5,
    name: "Website Aksara Batak Development",
    issuer: "PANDI i.id Registry",
    date: "August 27, 2025",
    credentialId: "horasedu.id",
    image: sertifBatak,
    certificateUrl: "https://drive.google.com/file/d/1aYKYgYliH_gGiUK0fWPLHUai1XDke5jN/view?usp=drive_link"

  },
  {
    id: 6,
    name: "National Web Development Competition Participant",
    issuer: "Universitas PGRI Semarang",
    date: "May 7, 2025",
    credentialId: "001/A/PAN_INFEST/HIMFORMA/VII/2025",
    image: sertifPGRI,
    certificateUrl: "https://drive.google.com/file/d/1k0rehlPIlL7pTV_ymn-OX7PFMrOSADFk/view?usp=drive_link"

  },
  {
    id: 7,
    name: "Hackathon 8.0 Participant",
    issuer: "TechnoScape BNCC",
    date: "May 16 - June 1, 2025",
    credentialId: "Team Barudak Bandung",
    image: sertiftechno,
    certificateUrl: "https://drive.google.com/file/d/1rKHFKKlPmBO_yRuzBwe612b6dQmtLOeS/view?usp=drive_link"

  },
  {
    id: 8,
    name: "Hackathon Participant - FIND IT! 2025",
    issuer: "KMTETI Fakultas Teknik UGM",
    date: "May 17, 2025",
    credentialId: "Future Innovation and Discovery IT",
    image: sertifFindit,
    certificateUrl: "https://drive.google.com/file/d/1IxUNmwNdt7IWNkhjqaOOiVsCVGOkIzVl/view?usp=drive_link"

  }
];

export const organizations: Organization[] = [
  {
    id: 1,
    name: "Bina Nusantara Computer Club (BNCC)",
    position: "Learning and Activist",
    duration: "Sep 2023 – August 2024",
    description: "Actively involved in BNCC Bandung’s organizational and learning activities, contributing to various flagship events and programs.",
    achievements: [
      "Techbinar – Assisted in planning and executing BNCC’s technical webinar, ensuring smooth flow and engaging delivery",
      "LnT Camp – Managed logistical needs including entry and exit ticket systems for participants",
      "BNCC Launching – Supported operations and timeline management for BNCC’s launching event",
      "LnT Trial Class – Coordinated end-to-end execution, including scheduling and team coordination",
      "TechBlast 2024 – Oversaw event theme development and rundown planning; served as PIC for LnT Trial Class segment",
      "BNCC Opening Season 2024 – Supported registration of 300+ participants for the Launching 2024 event"
    ]
  },
  {
    id: 2,
    name: "Bina Nusantara Computer Club (BNCC)",
    position: "Learning and Training Staff",
    duration: "August 2024 – September 2025",
    description: "Appointed as staff for Learning and Training division, focusing on class execution, mentorship, and cross-division event coordination.",
    achievements: [
      "Main PIC for LnT Class UI/UX, coordinating operations with 30+ participants per session",
      "Selected Mentor for Leadership Development Program (LDP) 2025, guiding 7 activists",
      "Coordinator for LnT Camp 2025, overseeing Publication, Design, and Event divisions"
    ]
  },
  {
    id: 3,
    name: "Formalistic - Google Developer Group on Campus Core Team (GDGoC BINUS Bandung)",
    position: "Event Organizer, Core Team",
    duration: "Oct 2024 – Present",
    description: "Served as event organizer within GDGoC BINUS Bandung core team, focusing on strengthening community engagement through event management.",
    achievements: [
      "Organized 10+ community and tech events with 30+ participants each",
      "Handled end-to-end event execution including planning, coordination, and on-site operations",
      "Contributed to consistent community growth and visibility of GDGoC BINUS Bandung on campus"
    ]
  }
];


export const personalInfo = {
  name: "Bryan Thanaya",
  tagline: "Software Engineer & Artificial Intelligence Enthusiast",
  bio: "Passionate about creating exceptional digital experiences with modern technologies. I specialize in building scalable web applications with a focus on performance, accessibility, and user experience.",
  location: "San Francisco, CA",
  email: "alex.chen@example.com",
  phone: "+1 (555) 123-4567",
  website: "https://alexchen.dev",
  aboutMe: {
    title: "About Me",
    description: "I'm a passionate Software Engineer with over 2 years of experience creating digital solutions that make a difference. My journey in tech started with curiosity and has evolved into a deep love for crafting innovative products .",
    highlights: [
      {
        title: "Problem Solver",
        description: "I thrive on turning complex challenges into elegant, user-friendly solutions. Every project is an opportunity to learn and innovate."
      },
      {
        title: "Team Collaborator",
        description: "I believe the best products come from diverse perspectives. I enjoy mentoring junior developers and contributing to open-source communities."
      },
      {
        title: "Continuous Learner",
        description: "Technology evolves fast, and so do I. I'm always exploring new frameworks, tools, and best practices to stay at the forefront of development."
      }
    ],
    stats: [
      { label: "Years Experience", value: "2+" },
      { label: "Projects Completed", value: "10+" },
      { label: "Competitions Participated", value: "5+" },
      { label: "Coffee Cups", value: "∞" }
    ]
  },
  social: {
    github: "https://github.com/BRYAN1309",
    linkedin: "https://www.linkedin.com/in/bryan-thanaya-0b1833292/",
    twitter: "https://twitter.com/alexchen_dev"
  }
};