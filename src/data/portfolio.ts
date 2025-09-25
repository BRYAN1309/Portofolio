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
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
  featured: boolean;
}

export interface Certificate {
  id: number;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  image?: string;
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
    company: "TechCorp Solutions",
    position: "Senior Frontend Developer",
    duration: "2023 - Present",
    description: "Leading frontend development for enterprise applications, mentoring junior developers, and implementing modern web technologies to improve user experience.",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "GraphQL"]
  },
  {
    id: 2,
    company: "InnovateLabs",
    position: "Full Stack Developer",
    duration: "2021 - 2023",
    description: "Developed and maintained scalable web applications, collaborated with cross-functional teams, and optimized application performance.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "AWS"]
  },
  {
    id: 3,
    company: "StartupHub",
    position: "Frontend Developer",
    duration: "2020 - 2021",
    description: "Built responsive web interfaces, implemented design systems, and worked closely with designers to create pixel-perfect implementations.",
    technologies: ["Vue.js", "JavaScript", "SCSS", "Webpack", "Firebase"]
  }
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
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with modern UI/UX, payment integration, and admin dashboard. Built with React, Node.js, and Stripe API.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    githubUrl: "https://github.com/example/ecommerce",
    liveUrl: "https://demo-store.example.com",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io", "PostgreSQL"],
    githubUrl: "https://github.com/example/taskmanager",
    liveUrl: "https://tasks.example.com",
    featured: true
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Real-time weather tracking application with interactive maps, forecasting, and location-based alerts using modern APIs.",
    technologies: ["Vue.js", "JavaScript", "OpenWeather API", "Chart.js"],
    githubUrl: "https://github.com/example/weather",
    liveUrl: "https://weather.example.com",
    featured: false
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing projects and skills with smooth animations and modern design principles.",
    technologies: ["React", "Framer Motion", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/example/portfolio",
    liveUrl: "https://portfolio.example.com",
    featured: false
  }
];

export const certificates: Certificate[] = [
  {
    id: 1,
    name: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "AWS-DEV-2023-001"
  },
  {
    id: 2,
    name: "Google Cloud Professional",
    issuer: "Google Cloud",
    date: "2022",
    credentialId: "GCP-PRO-2022-002"
  },
  {
    id: 3,
    name: "React Developer Certification",
    issuer: "Meta",
    date: "2022",
    credentialId: "META-REACT-2022-003"
  },
  {
    id: 4,
    name: "Full Stack Web Development",
    issuer: "FreeCodeCamp",
    date: "2021",
    credentialId: "FCC-FULLSTACK-2021-004"
  }
];

export const organizations: Organization[] = [
  {
    id: 1,
    name: "Tech Community Alliance",
    position: "Lead Organizer",
    duration: "2022 - Present",
    description: "Leading a community of 500+ developers, organizing monthly meetups and workshops on emerging technologies.",
    achievements: [
      "Organized 20+ technical workshops",
      "Grew community from 50 to 500+ members",
      "Established partnerships with major tech companies",
      "Launched mentorship program for junior developers"
    ]
  },
  {
    id: 2,
    name: "Open Source Contributors",
    position: "Core Contributor",
    duration: "2021 - Present",
    description: "Contributing to various open-source projects, focusing on developer tools and educational resources.",
    achievements: [
      "Contributed to 15+ open source projects",
      "Maintained popular UI component library (1k+ stars)",
      "Reviewed 200+ pull requests",
      "Mentored new contributors"
    ]
  },
  {
    id: 3,
    name: "Code for Community",
    position: "Volunteer Developer",
    duration: "2020 - 2022",
    description: "Developing web applications for non-profit organizations to help digitize their operations and reach.",
    achievements: [
      "Built websites for 5 non-profit organizations",
      "Trained volunteers on basic web technologies",
      "Raised $10,000+ for digital literacy programs",
      "Established coding bootcamp for underserved communities"
    ]
  }
];

export const personalInfo = {
  name: "Alex Chen",
  tagline: "Full Stack Developer & UI/UX Enthusiast",
  bio: "Passionate about creating exceptional digital experiences with modern technologies. I specialize in building scalable web applications with a focus on performance, accessibility, and user experience.",
  location: "San Francisco, CA",
  email: "alex.chen@example.com",
  phone: "+1 (555) 123-4567",
  website: "https://alexchen.dev",
  social: {
    github: "https://github.com/alexchen",
    linkedin: "https://linkedin.com/in/alexchen",
    twitter: "https://twitter.com/alexchen_dev"
  }
};