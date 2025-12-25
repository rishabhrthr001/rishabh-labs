import {
  Code,
  Smartphone,
  Cpu,
  Box,
  Globe,
  Shield,
  Rocket,
  Layout,
  Server,
  Database,
  Briefcase,
  Zap,
  Crown,
  Layers,
  Users,
  Target,
  Clock,
  Trophy,
} from "lucide-react";
import { Project, Service, PricingPlan, Testimonial, FAQItem } from "../types";

export const NAV_LINKS = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "about" },
  { name: "Expertise", href: "#services" },
  { name: "Work", href: "#projects" },
  { name: "Pricing", href: "#pricing" },
  { name: "Business", href: "#bundle" },
  { name: "Contact", href: "#contact" },
];

export const TECH_STACK = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "AWS",
  "Docker",
  "Kubernetes",
  "Solidity",
  "Ethereum",
  "Flutter",
  "React Native",
  "Figma",
  "TailwindCSS",
  "PostgreSQL",
  "MongoDB",
  "GraphQL",
  "Three.js",
  "OpenAI API",
  "Stripe",
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Ankit Sharma",
    role: "Founder",
    company: "GrowKart Solutions, Delhi",
    content:
      "CodeKea helped us build a clean and professional website within our budget. Communication was smooth and the delivery was on time. Highly reliable team.",
    avatar:
      "https://images.unsplash.com/photo-1603415526960-f7e0328f7b0c?q=80&w=150&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Rajesh Rathore",
    role: "Owner",
    company: "Shree Hardev Packers, Indore",
    content:
      "We required a mobile-friendly business website and CodeKea delivered exactly what we needed. The team understood our requirements well and executed them efficiently.",
  },
  {
    id: 3,
    name: "Priya Mehta",
    role: "Marketing Head",
    company: "UrbanNest Interiors, Mumbai",
    content:
      "The website redesign helped improve our online presence significantly. The design was modern, fast, and aligned well with our brand.",
    avatar:
      "https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?q=80&w=150&auto=format&fit=crop",
  },
];

export const FAQS: FAQItem[] = [
  {
    question: "How long does a typical project take?",
    answer:
      "Timelines vary by complexity. A standard 'Kickstarter' website typically takes 2-3 weeks. Custom mobile apps or 'Growth' packages usually range from 6-10 weeks. We provide a detailed Gantt chart before starting.",
  },
  {
    question: "Do you offer payment plans?",
    answer:
      "Yes! For Business Bundles and custom projects over $2,000, we typically structure payments as: 50% upfront to start, 25% upon design approval, and 25% upon final delivery.",
  },
  {
    question: "Will I be able to edit the website myself?",
    answer:
      "Absolutely. We build most client sites using modern CMS solutions (like Next.js with Sanity/Strapi) or provide a custom Admin Dashboard, giving you full control over text, images, and products without touching code.",
  },
  {
    question: "Do you provide hosting and maintenance?",
    answer:
      "Yes, our Business Bundles come with 2-6 months of dedicated support. After that, we offer affordable monthly maintenance packages that include hosting, security updates, and content tweaks.",
  },
  {
    question: "Can you take over an existing project?",
    answer:
      "We assess this on a case-by-case basis. If the existing codebase is modern and clean, we can certainly take over. If it's outdated, we might recommend a rebuild for better long-term performance.",
  },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Apex E-commerce",
    description:
      "A modern eCommerce web application built with React and TypeScript, offering product browsing, cart management, and a smooth checkout experience with a focus on clean UI and scalability.",
    image: "/apex.png",
    techStack: ["React", "TypeScript", "Vite", "Context API", "CSS"],
    link: "https://apex-pearl.vercel.app/",
  },
  {
    id: 2,
    title: "Digital Agency Gold",
    description:
      "A modern digital agency website showcasing branding, web development, and marketing services with a sleek UI, smooth animations, and a conversion-focused layout.",
    image: "/digitalAgency.png",
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    link: "https://digital-agency-gold.vercel.app/",
  },
  {
    id: 3,
    title: "CodeTogether",
    description:
      "A collaborative DSA problem-solving platform where multiple users can join a shared coding room using an invite code. Enables real-time collaboration on a single problem, allowing participants to solve, discuss, and debug together through a seamless room-based system.",
    image: "/codeTogether.png",
    techStack: ["React", "Node.js", "Express", "Socket.io", "MongoDB"],
    link: "https://code-together-rzis.vercel.app",
  },
];

export const SERVICES: Service[] = [
  {
    id: "web-dev",
    title: "Web Development",
    shortDescription:
      "High-performance websites built with modern frameworks like React and Next.js.",
    fullDescription:
      "We build pixel-perfect, lightning-fast web experiences. Whether it's a high-converting landing page or a corporate identity site, our code is clean, scalable, and SEO-optimized.",
    startingPrice: "$299",
    features: [
      "Custom React.js & Next.js Development",
      "Progressive Web Apps (PWA)",
      "Headless CMS Integration",
      "Performance Optimization & SEO",
      "Interactive 3D Elements (Three.js)",
    ],
    process: [
      "Discovery & Strategy",
      "UI/UX Wireframing",
      "Agile Development",
      "Testing & QA",
      "Deployment & Maintenance",
    ],
    icon: Globe,
  },
  {
    id: "mobile-apps",
    title: "Mobile Apps",
    shortDescription:
      "Native and cross-platform mobile applications for iOS and Android.",
    fullDescription:
      "Reach your customers wherever they are. We develop intuitive mobile applications that feel native on every device, using cross-platform technologies to save you time and budget without compromising quality.",
    startingPrice: "$899",
    features: [
      "Cross-Platform Development",
      "Native iOS & Android Modules",
      "Offline Functionality",
      "Real-time Push Notifications",
      "App Store Optimization (ASO)",
    ],
    process: [
      "Concept Validation",
      "Prototyping",
      "Native Development",
      "Beta Testing",
      "App Store Submission",
    ],
    icon: Smartphone,
  },
  {
    id: "full-stack",
    title: "Full Stack Websites",
    shortDescription:
      "Complex web applications with robust backends and dynamic frontends.",
    fullDescription:
      "When off-the-shelf solutions aren't enough. We architect complete digital ecosystems with secure servers, scalable databases, and custom APIs connecting to dynamic user interfaces.",
    startingPrice: "$1,499",
    features: [
      "MERN/Next.js Architecture",
      "Custom REST & GraphQL APIs",
      "Database Design (SQL/NoSQL)",
      "Authentication & Security",
      "Cloud Infrastructure (AWS)",
    ],
    process: [
      "System Architecture",
      "Database Modeling",
      "API Development",
      "Frontend Integration",
      "Load Testing",
    ],
    icon: Layers,
  },
  {
    id: "web3",
    title: "Web3 Smart Contracts",
    shortDescription:
      "Secure, audited smart contracts for DeFi, NFTs, and DAOs.",
    fullDescription:
      "Enter the decentralized future. Our blockchain engineers specialize in writing gas-optimized, secure smart contracts for Ethereum, Solana, and Layer 2 solutions.",
    startingPrice: "$1,299",
    features: [
      "ERC-20, 721, 1155 Standards",
      "DeFi Protocol Development",
      "NFT Marketplace Architecture",
      "Smart Contract Auditing",
      "Wallet Integration",
    ],
    process: [
      "Tokenomics Design",
      "Architecture Planning",
      "Smart Contract Coding",
      "Testnet Deployment",
      "Mainnet Launch",
    ],
    icon: Code,
  },
  {
    id: "ai-automation",
    title: "AI Automation",
    shortDescription:
      "Custom AI solutions to automate workflows and enhance decision-making.",
    fullDescription:
      "Leverage the power of Artificial Intelligence to streamline your operations. We integrate LLMs and machine learning models to build chatbots, data analyzers, and automated workflow agents.",
    startingPrice: "$999",
    features: [
      "Custom LLM Integration",
      "Intelligent Chatbots",
      "Automated Data Entry",
      "Predictive Analytics",
      "Voice AI Agents",
    ],
    process: [
      "Workflow Audit",
      "Model Selection",
      "Integration & Training",
      "Testing & Refinement",
      "Full Automation Handover",
    ],
    icon: Cpu,
  },
  {
    id: "product-design",
    title: "Product Design",
    shortDescription:
      "UI/UX design that converts users and builds brand loyalty.",
    fullDescription:
      "Design is not just about looks; it's about how it works. Our design team creates user-centric interfaces that are intuitive, accessible, and visually stunning.",
    startingPrice: "$399",
    features: [
      "User Research & Personas",
      "Wireframing & Prototyping",
      "High-Fidelity UI Design",
      "Design Systems",
      "Usability Testing",
    ],
    process: [
      "User Research",
      "Low-Fidelity Sketches",
      "Interactive Prototypes",
      "Visual Design",
      "Developer Handoff",
    ],
    icon: Box,
  },
];

export const SERVICE_PRICES = [
  {
    id: 1,
    name: "Web Design",
    price: "₹11,999",
    description: "Landing pages & portfolios.",
    icon: Layout,
    features: [
      "Responsive React Design",
      "SEO Optimization",
      "Contact Form",
      "Social Integration",
      "1 Month Support",
      "3-4 Days Delivery",
    ],
  },
  {
    id: 2,
    name: "Product Design",
    price: "₹13,999",
    description: "UI/UX & Prototyping.",
    icon: Box,
    features: [
      "User Research",
      "Figma Prototypes",
      "Design System",
      "User Flow Maps",
      "Developer Handover",
      "1-2 Week Delivery",
    ],
  },
  {
    id: 3,
    name: "Mobile Apps",
    price: "₹42,999",
    description: "iOS & Android Apps.",
    icon: Smartphone,
    features: [
      "Cross-Platform Code",
      "User Auth",
      "Push Notifications",
      "Basic API Logic",
      "Store Submission",
      "3-4 Week Delivery",
    ],
  },
  {
    id: 4,
    name: "AI Solutions",
    price: "₹35,999",
    description: "Chatbots & Automation.",
    icon: Cpu,
    features: [
      "Custom Chatbot",
      "OpenAI API Integration",
      "Workflow Automation",
      "Data Analysis Tool",
      "Model Training",
      "3-4 Week Delivery",
    ],
  },
  {
    id: 5,
    name: "Web3 dApps",
    price: "₹69,999",
    description: "Smart Contracts & NFTs.",
    icon: Code,
    features: [
      "Smart Contract Dev",
      "Wallet Integration",
      "Minting Website",
      "Gas Optimization",
      "Security Basic Check",
      "5-6 Week Delivery",
    ],
  },
  {
    id: 6,
    name: "Full Stack",
    price: "₹39,999",
    description: "Complex Platforms.",
    icon: Server,
    features: [
      "Custom Backend API",
      "Database Design",
      "Admin Dashboard",
      "Adv. Authentication",
      "Cloud Deployment",
      "6-8 Week Delivery",
    ],
  },
];

export const BUSINESS_BUNDLES = [
  {
    id: "startup",
    title: "Kickstarter Pack",
    price: "₹49,999",
    subtitle: "Launch your idea",
    description:
      "Get your business online instantly with a powerful web and mobile presence.",
    icon: Rocket,
    popular: false,
    features: [
      "Modern Responsive Website (5 Pages)",
      "Basic Mobile App (WebView Wrapper)",
      "Admin Dashboard for Content",
      "2 Months Dedicated Support",
      "Domain & Hosting Setup",
      "Social Media Integration",
    ],
  },
  {
    id: "growth",
    title: "Growth Accelerator",
    price: "₹89,999",
    subtitle: "Scale your operations",
    description:
      "A complete digital transformation suite. Perfect for growing businesses needing control.",
    icon: Zap,
    popular: true,
    features: [
      "Premium Website (Unlimited Pages)",
      "Native Hybrid Mobile App (iOS/Android)",
      "Advanced Admin Dashboard & Analytics",
      "Content Management System (CMS)",
      "Payment Gateway Integration",
      "3 Months Priority Support",
    ],
  },
  {
    id: "enterprise",
    title: "Market Dominator",
    price: "₹1,11,999",
    subtitle: "Rule your industry",
    description:
      "Full-scale custom development with AI integration and automation tools.",
    icon: Crown,
    popular: false,
    features: [
      "Custom Web Platform & API",
      "Full Native Mobile Application",
      "AI Automation & Chatbots",
      "SaaS Architecture Setup",
      "6 Months Premium Support",
      "Dedicated Project Manager",
    ],
  },
];

export const ABOUT_CONTENT = {
  story:
    "Founded in 2025, CodeKea emerged from a vision to bridge the gap between complex emerging technologies and practical business applications. What started as a small team of passionate developers has grown into a full-service digital agency known for delivering 'future-proof' solutions.",
  stats: [
    { label: "Projects Delivered", value: "50+", icon: Trophy },
    { label: "Happy Clients", value: "100%", icon: Users },
    { label: "Years Experience", value: "1+", icon: Clock },
    { label: "Technologies", value: "20+", icon: Code },
  ],
  values: [
    {
      title: "Innovation First",
      description:
        "We don't just follow trends; we set them. We constantly explore new stacks like Web3 and AI to give our clients an edge.",
      icon: Rocket,
    },
    {
      title: "Transparency",
      description:
        "No hidden fees, no technical jargon. We keep you in the loop at every stage of the development cycle.",
      icon: Shield,
    },
    {
      title: "Quality Obsession",
      description:
        "From the first line of code to the final pixel, we maintain rigorous standards for performance and aesthetics.",
      icon: Target,
    },
  ],
};

export const INTERNATIONAL_OFFER = {
  title: "Global Expansion Pack",
  price: "$3,499",
  description:
    "Scale your startup internationally with a complete localization and global infrastructure suite. We handle the technical complexities of cross-border operations.",
  features: [
    "Multi-language (i18n) Architecture",
    "Global CDN & Edge Computing Setup",
    "International Payment Gateway Integration",
    "GDPR & Regional Compliance Audit",
    "Localized SEO & Content Strategy",
  ],
};

export const LEGAL_CONTENT = {
  privacy: {
    title: "Privacy Policy",
    content: `
      Last Updated:  2025

      At CodeKea, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclosure, and safeguard your information when you visit our website.

      1. Information Collection
      We may collect information about you in a variety of ways. The information we may collect on the Site includes personal data such as name, email address, and demographic information that you voluntarily give to us when you register with the Site or choose to participate in various activities related to the Site.

      2. Use of Information
      Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
      - Create and manage your account.
      - Email you regarding your account or order.
      - Fulfill and manage purchases, orders, payments, and other transactions.
      - Generate a personal profile about you to make future visits to the Site more personalized.

      3. Disclosure of Your Information
      We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users.

      4. Security of Your Information
      We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
    `,
  },
  terms: {
    title: "Terms of Service",
    content: `
      Last Updated:  2025

      1. Agreement to Terms
      These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and codeKea ("we," "us" or "our"), concerning your access to and use of our website.

      2. Intellectual Property Rights
      Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.

      3. User Representations
      By using the Site, you represent and warrant that:
      - All registration information you submit will be true, accurate, current, and complete.
      - You will maintain the accuracy of such information.
      - You have the legal capacity and you agree to comply with these Terms of Use.
      - You are not under the age of 13.

      4. Prohibited Activities
      You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.

      5. Term and Termination
      These Terms of Use shall remain in full force and effect while you use the Site. WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS OF USE, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SITE TO ANY PERSON.
    `,
  },
  cookie: {
    title: "Cookie Policy",
    content: `
      Last Updated:  2025

      This Cookie Policy explains how codeKea ("we", "us", and "our") uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.

      1. What are cookies?
      Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.

      2. Why do we use cookies?
      We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Properties.

      3. How can I control cookies?
      You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager. In addition, most advertising networks offer you a way to opt out of targeted advertising.

      4. Updates to this policy
      We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
    `,
  },
};
