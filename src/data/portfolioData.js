export const PERSONAL_INFO = {
  brandLogo: 'SUNIL.',
  fullName: 'Sunil Kumar',
  role: 'Website Designer & Frontend Developer',
  location: 'India',
  education: 'B.Tech in Computer Science (2022)',
  availability: 'Available for Opportunities',
  email: 'sunil.kumar@example.com', // Placeholder: replace with actual email
  linkedin: 'https://linkedin.com/in/your-profile', // Placeholder: replace with LinkedIn URL
  github: 'https://github.com/your-username', // Placeholder: replace with GitHub URL
  profileImage: '/images/sunil-portrait.jpg',
};

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const HERO_CONTENT = {
  eyebrow: "HELLO, I'M SUNIL KUMAR.",
  heading: 'Designing Digital Experiences That Make an Impact.',
  description:
    "I'm a passionate Website Designer focused on creating modern, responsive and user-friendly digital experiences that combine creative design with clean development.",
  primaryCta: {
    label: 'View My Work',
    href: '#projects',
  },
  secondaryCta: {
    label: "Let's Talk",
    href: '#contact',
  },
  highlights: [
    { label: 'Location', value: 'India' },
    { label: 'Education', value: 'B.Tech CS (2022)' },
    { label: 'Focus', value: 'UI Design & Frontend' },
  ],
  coreStackTags: ['Figma to Code', 'React.js', 'WordPress & Elementor'],
};

export const ABOUT_CONTENT = {
  eyebrow: '01 // ABOUT ME',
  headingLead: 'Bridging',
  headingSerif: 'thoughtful design',
  headingTail: 'with clean, reliable code.',
  paragraphs: [
    "I'm Sunil Kumar, a Website Designer and Frontend Developer based in India with a B.Tech in Computer Science (2022). I specialize in turning ideas and Figma concepts into fast, responsive, and intuitive web experiences.",
    'Whether building custom React interfaces from scratch or crafting flexible WordPress & Elementor sites, I focus on visual clarity, accessible markup, and smooth micro-interactions that feel effortless on every screen size.',
  ],
  credentials: [
    {
      label: 'Degree',
      title: 'B.Tech in Computer Science',
      meta: 'Graduated 2022 • Engineering Foundation',
    },
    {
      label: 'Approach',
      title: 'Design-First Frontend Craft',
      meta: 'Figma Systems → Semantic Code',
    },
  ],
  skillGroups: [
    {
      category: 'Design & Prototyping',
      items: ['Figma', 'UI/UX Design', 'Wireframing', 'Design Systems', 'Responsive Layouts'],
    },
    {
      category: 'Frontend Engineering',
      items: ['React.js', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Framer Motion', 'Performance & A11y'],
    },
    {
      category: 'CMS & No-Code',
      items: ['WordPress', 'Elementor Pro', 'Landing Pages', 'SEO Basics', 'Cross-Browser QA'],
    },
  ],
};

export const SERVICES_CONTENT = {
  eyebrow: '02 // SERVICES',
  headingLead: 'Focused capabilities for',
  headingSerif: 'modern web',
  headingTail: 'products.',
  subtitle:
    'From initial wireframes to production deployment, every project is structured for clarity, speed, and maintainability.',
  items: [
    {
      number: '01',
      title: 'UI / Website Design',
      icon: 'Palette',
      description:
        'Clean editorial layouts, clear visual hierarchy, and component-based Figma systems tailored for startups and personal brands.',
      deliverables: ['Figma UI Systems', 'Desktop & Mobile Flows', 'Interactive Prototypes'],
    },
    {
      number: '02',
      title: 'Frontend Development',
      icon: 'Code2',
      description:
        'Modular React.js applications and responsive websites built with semantic HTML, modern CSS architecture, and purposeful motion.',
      deliverables: ['React.js Components', 'Responsive CSS Grid/Flex', 'Smooth Animations'],
    },
    {
      number: '03',
      title: 'Figma to Code',
      icon: 'Layers',
      description:
        'Pixel-accurate translation of approved designs into clean, maintainable frontend code with consistent spacing and typography.',
      deliverables: ['Design Token Setup', 'Cross-Device Fidelity', 'Clean Handoff Code'],
    },
    {
      number: '04',
      title: 'WordPress & Elementor',
      icon: 'Globe',
      description:
        'Custom, easy-to-manage business websites built on WordPress and Elementor with attention to speed and on-page structure.',
      deliverables: ['Custom Elementor Builds', 'Mobile Optimization', 'Easy Content Control'],
    },
  ],
};

export const PROJECTS_CONTENT = {
  eyebrow: '03 // SELECTED WORK',
  headingLead: 'Recent projects &',
  headingSerif: 'interface',
  headingTail: 'explorations.',
  subtitle:
    'A selection of design and frontend builds highlighting layout discipline, responsive craft, and clean user flows.',
  categories: ['All', 'React.js', 'UI Design', 'WordPress'],
  items: [
    {
      id: 'studio-commerce',
      title: 'Verve Editorial Storefront',
      category: 'React.js',
      year: '2025',
      role: 'UI Design & React Frontend',
      summary:
        'A minimalist editorial product showcase featuring smooth category filtering, crisp typography, and a distraction-free cart drawer.',
      highlights: [
        'Built reusable React product cards and filter state with zero layout shift.',
        'Designed a warm neutral color system paired with high-contrast CTAs.',
        'Optimized mobile drawer navigation and keyboard accessibility.',
      ],
      stack: ['React.js', 'Figma', 'CSS Modules', 'Framer Motion'],
      image: '/images/project-verve.svg',
      accent: '#C9F166',
      code: 'PRJ // 01',
    },
    {
      id: 'saas-workspace',
      title: 'MetricFlow Analytics Landing',
      category: 'UI Design',
      year: '2025',
      role: 'Product Design & Prototyping',
      summary:
        'Conversion-focused SaaS marketing website designed in Figma with modular pricing tables, interactive feature tabs, and bento grids.',
      highlights: [
        'Structured a 12-column responsive grid system across desktop, tablet, and mobile.',
        'Created a cohesive token library for typography, surfaces, and states.',
        'Streamlined above-the-fold messaging to clarify product value quickly.',
      ],
      stack: ['Figma', 'Design System', 'Prototyping', 'Responsive UI'],
      image: '/images/project-metricflow.jpg',
      accent: '#EDEBE3',
      code: 'PRJ // 02',
    },
    {
      id: 'arch-wordpress',
      title: 'Kala Architecture Studio',
      category: 'WordPress',
      year: '2024',
      role: 'WordPress & Elementor Build',
      summary:
        'Portfolio website for an architectural practice built with WordPress and Elementor, emphasizing full-bleed project galleries and fast page loads.',
      highlights: [
        'Engineered custom Elementor templates so the team can publish case studies easily.',
        'Refined image aspect ratios and responsive typography across breakpoints.',
        'Configured clean URL structure, metadata, and contact inquiry workflows.',
      ],
      stack: ['WordPress', 'Elementor Pro', 'Custom CSS', 'SEO Setup'],
      image: '/images/project-kala.svg',
      accent: '#EDF8CE',
      code: 'PRJ // 03',
    },
    {
      id: 'dev-portfolio-system',
      title: 'Personal Brand & Portfolio System',
      category: 'React.js',
      year: '2026',
      role: 'Design & Full Frontend',
      summary:
        'An editorial portfolio experience combining Instrument Serif display accents, smooth scroll-spy navigation, and accessible micro-interactions.',
      highlights: [
        'Authored modular CSS design tokens for rapid theme consistency.',
        'Implemented interactive project previews and accessible modal/drawer controls.',
        'Respects reduced-motion preferences while keeping transitions crisp.',
      ],
      stack: ['React 19', 'Vite', 'Framer Motion', 'Lucide Icons'],
      image: '/images/project-portfolio.svg',
      accent: '#C9F166',
      code: 'PRJ // 04',
    },
  ],
};

export const CONTACT_CONTENT = {
  eyebrow: '04 // CONTACT',
  headingLead: "Let's build",
  headingSerif: 'something thoughtful',
  headingTail: 'together.',
  description:
    'Have a website redesign, Figma-to-React build, or WordPress project in mind? Send a quick message and I will get back to you promptly.',
  projectTypes: [
    'Website Design (Figma)',
    'React.js Frontend Build',
    'Figma to Code Conversion',
    'WordPress & Elementor Site',
    'Full-Time / Freelance Role',
  ],
};
