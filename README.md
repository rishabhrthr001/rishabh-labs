# Rishabh Labs - Future Tech Agency Website

A premium, futuristic software development agency website featuring a capsule navbar, parallax hero, horizontal scrolling services, business pricing tiers, and comprehensive interactive elements. Built with React, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Immersive Hero Section**: 3D-style perspective grid, glowing gradients, and smooth entry animations.
- **Horizontal Scroll Services**: A dynamic, sticky scroll section showcasing expertise areas.
- **Premium UI/UX**: Glassmorphism, neon gradients (Magma Theme), and custom cursors/interactions.
- **Interactive Components**:
  - Infinite Tech Stack Marquee.
  - Testimonials Carousel.
  - Pricing Carousel (Scrollable).
  - Business Bundles Carousel.
  - Confetti success animation on contact form.
- **Functional Contact Form**: Validates inputs, pre-selects services, and simulates submission with visual feedback.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop viewing with dynamic sizing.
- **Smart Routing**: Custom view-state management for smooth transitions between Home, Service Details, and Legal pages without full reloads.

## 🛠 Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/) (Recommended) or Create React App

## 📦 Installation & Setup

1.  **Clone the repository**

    ```bash
    git clone https://github.com/rishabhrthr001/rishabh-labs.git
    cd rishabh-labs
    ```

2.  **Install Dependencies**

    ```bash
    npm install
    ```

3.  **Run Development Server**

    ```bash
    npm start
    # or if using Vite
    npm run dev
    ```

4.  **Build for Production**
    ```bash
    npm run build
    ```

## 📂 Project Structure

```
/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable React components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── ServicesHorizontal.tsx
│   │   ├── Projects.tsx
│   │   ├── Pricing.tsx
│   │   ├── Contact.tsx
│   │   ├── ...
│   ├── data/            # Static content (Texts, Pricing, Projects)
│   │   └── content.ts   # EDIT THIS FILE to change website content
│   ├── types.ts         # TypeScript interfaces
│   ├── App.tsx          # Main application layout & routing logic
│   └── index.tsx        # Entry point
├── index.html           # HTML template & Tailwind Config
├── package.json         # Dependencies
└── tsconfig.json        # TypeScript configuration
```

## 🎨 Customization Guide

### Changing Content

All text, pricing, services, and projects are stored in `src/data/content.ts`.

- **To add a project**: Add a new object to the `PROJECTS` array.
- **To update prices**: Modify `SERVICE_PRICES` or `BUSINESS_BUNDLES`.
- **To change contact email logic**: Update logic in `components/Contact.tsx`.

### Changing Colors

The theme is defined in the Tailwind config script tag within `index.html`.

- **Primary**: Purple (`#9333ea`)
- **Secondary**: Rose (`#e11d48`)
- **Accent**: Orange (`#f97316`)

Modify the `colors` object in the Tailwind config to swap the palette (e.g., to Blue/Cyan).

## 📄 Pages Included

- **Home**: Single-page smooth scroll layout with all main sections.
- **Service Details**: Dedicated detailed views for Web Dev, Mobile Apps, Full Stack, etc.
- **Legal**: Privacy Policy, Terms of Service, Cookie Policy.

## 📝 License

This project is proprietary software of Rishabh Labs. All rights reserved.
