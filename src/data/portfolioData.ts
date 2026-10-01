export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  technologies: string[];
  description: string;
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  type: string;
  duration: string;
  period: string;
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: number; icon: string }[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  details: string;
}

export const PERSONAL_INFO = {
  name: "Dinith Rusiru",
  title: "Full-Stack Developer & Software Engineer",
  location: "Malabe, Sri Lanka",
  phone: "+94 77 350 8025",
  email: "dinithrusiru1@gmail.com",
  linkedin: "https://linkedin.com/in/dinith-rusiru-6812a3305",
  github: "https://github.com/dinith-rusiru",
  summary:
    "Motivated Information Technology Graduate with hands-on industry experience as a Full-Stack Developer. Skilled in building dynamic web applications and SaaS platforms using React.js, Next.js, and Node.js, alongside core project management, REST APIs, and cloud hosting deployment. Seeking an IT role to drive software solutions, streamline operations, and contribute to scalable tech environments.",
  photoUrl: "/dinith.png",
};

export const EXPERIENCES: Experience[] = [
  {
    id: "exp-1",
    role: "Full-Stack Developer Intern",
    company: "Infinity AI (IT Company)",
    type: "Internship",
    duration: "6 Months",
    period: "Recent Internship",
    highlights: [
      "Worked as a Full-Stack Developer creating responsive web applications.",
      "Developed responsive frontend components using React, Tailwind CSS, and reusable UI patterns.",
      "Implemented backend REST APIs using Node.js and Express.js.",
      "Designed and managed MongoDB schemas, optimized queries, and handled CRUD operations.",
      "Implemented authentication, role-based access control (RBAC), and form validations.",
      "Collaborated with team members using Git & GitHub in an Agile environment.",
      "Participated actively in debugging, unit testing, and application performance optimization."
    ]
  },
  {
    id: "exp-2",
    role: "Full-Stack Developer",
    company: "Zivico Solutions",
    type: "Industry Experience",
    duration: "4 Months",
    period: "Industry Project Experience",
    highlights: [
      "Developed high-performance frontend components using React.js and Next.js.",
      "Implemented backend REST APIs and core server logic using Node.js.",
      "Handled project management tasks, sprint planning, and feature tracking.",
      "Managed application deployment and environment configuration on cloud hosting platforms.",
      "Implemented authentication, role-based access control, and robust input validation.",
      "Collaborated on code optimization, system architecture design, and overall app performance."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "Child Anxiety Detection System",
    subtitle: "Mobile & Machine Learning Application",
    category: "AI / Mobile",
    technologies: ["FastAPI", "React Native", "Python", "Machine Learning", "Deep Learning"],
    description: "Built an intelligent mobile-based diagnostic assistant to detect child anxiety levels using trained ML & Deep Learning models with real-time mobile visual UI.",
    highlights: [
      "Integrated machine learning and deep learning inference pipelines into FastAPI backend",
      "Created React Native mobile user interface for real-time questionnaires & diagnostic results",
      "Visualized assessment metrics with real-time feedback loops for medical professionals"
    ],
    githubUrl: "https://github.com/dinith-rusiru",
    featured: true
  },
  {
    id: "proj-2",
    title: "Patient-Doctor Appointment Booking System",
    subtitle: "Full-Stack MERN Platform",
    category: "Web Application",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    description: "Full-featured healthcare booking portal enabling patients to schedule consultations and doctors to manage daily availability and medical appointment records.",
    highlights: [
      "Role-based authentication & access controls (Patients, Doctors, Super Admin)",
      "Instant appointment booking, rescheduling, cancellation, and availability schedules",
      "Full administrative dashboard for managing doctors, user management, and system metrics"
    ],
    githubUrl: "https://github.com/dinith-rusiru",
    featured: true
  },
  {
    id: "proj-3",
    title: "Employee Management SaaS System",
    subtitle: "Enterprise Management SaaS Platform",
    category: "SaaS / Full-Stack",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    description: "Comprehensive enterprise resource SaaS platform featuring employee onboarding, automated salary calculation engines, leave tracking, and analytics dashboards.",
    highlights: [
      "Designed and implemented 20+ functional enterprise web modules during internship",
      "Built secure JWT authentication, state management, and backend RESTful microservices",
      "Automated salary calculation engine with leave management reporting tools"
    ],
    githubUrl: "https://github.com/dinith-rusiru",
    featured: true
  },
  {
    id: "proj-4",
    title: "Travel & Tour Management System",
    subtitle: "MVC Travel Web Portal",
    category: "Web Application",
    technologies: ["Laravel", "PHP", "MySQL", "Blade", "Bootstrap"],
    description: "A feature-rich travel management web application engineered for booking tour packages, managing destinations, and tracking user reservations.",
    highlights: [
      "Structured on Laravel MVC architecture with robust MySQL relational database design",
      "User booking management workflow allowing creation, updates, and cancellations",
      "Admin control portal for destination packages, inventory, user accounts, and pricing"
    ],
    githubUrl: "https://github.com/dinith-rusiru",
    featured: true
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript (ES6+)", level: 90, icon: "Code2" },
      { name: "TypeScript", level: 85, icon: "FileCode" },
      { name: "Python", level: 80, icon: "Terminal" },
      { name: "Java", level: 75, icon: "Coffee" },
      { name: "C++", level: 70, icon: "Cpu" },
      { name: "PHP", level: 75, icon: "Globe" }
    ]
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", level: 92, icon: "Atom" },
      { name: "Next.js", level: 88, icon: "Zap" },
      { name: "React Native", level: 80, icon: "Smartphone" },
      { name: "Tailwind CSS", level: 95, icon: "Palette" },
      { name: "HTML5 / CSS3", level: 95, icon: "Layout" },
      { name: "Bootstrap", level: 85, icon: "Layers" }
    ]
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", level: 90, icon: "Server" },
      { name: "Express.js", level: 90, icon: "Cpu" },
      { name: "FastAPI", level: 82, icon: "Workflow" },
      { name: "Flask", level: 78, icon: "Flame" },
      { name: "Laravel", level: 75, icon: "Box" },
      { name: "REST APIs", level: 92, icon: "Network" }
    ]
  },
  {
    title: "Databases & Cloud",
    skills: [
      { name: "MongoDB", level: 88, icon: "Database" },
      { name: "MySQL", level: 85, icon: "HardDrive" },
      { name: "AWS (Basics)", level: 70, icon: "Cloud" },
      { name: "DigitalOcean", level: 75, icon: "CloudSun" },
      { name: "Environment Configuration", level: 85, icon: "Sliders" }
    ]
  },
  {
    title: "Tools & Workflow",
    skills: [
      { name: "Git & GitHub", level: 90, icon: "GitBranch" },
      { name: "VS Code", level: 95, icon: "Monitor" },
      { name: "Postman", level: 88, icon: "Send" },
      { name: "Agile / Sprint Planning", level: 85, icon: "CheckSquare" }
    ]
  }
];

export const EDUCATION_LIST: Education[] = [
  {
    degree: "BSc (Hons) in Information Technology",
    institution: "Sri Lanka Institute of Information Technology (SLIIT)",
    period: "2022 - 2026",
    details: "Specializing in Information Technology with hands-on focus on Software Engineering, Web Technologies, Database Systems, Cloud Computing, and AI applications."
  },
  {
    degree: "G.C.E. Advanced Level - Mathematics Stream",
    institution: "St. Aloysius College, Galle",
    period: "2020",
    details: "Successfully passed G.C.E. A/L in Physical Science / Mathematics Stream with 1B 2C passes."
  }
];
