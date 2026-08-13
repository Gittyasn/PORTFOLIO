#  Yaswanth Bandaru — Personal Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38BDF8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-EF008F?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/)

> A modern, fully responsive personal portfolio website built with Next.js 16, React 19, Tailwind CSS v4, and Framer Motion animations.

**Live Demo:** https://yaswanth-portfolio.vercel.app  
**Contact:** yaswanthbandaruu@gmail.com  
**LinkedIn:** https://www.linkedin.com/in/yaswanth-bandaru-98912b

---

##  Features

- 🎨 **Sky Blue Brand Theme** — Consistent color system with CSS variables
- 🌙 **Dark / Light Mode** — Seamless theme toggle with next-themes
- ⚡ **Framer Motion Animations** — Smooth scroll-triggered entrance animations
- ⌨️ **Typewriter Effect** — Animated role cycling in the Hero section
- 📱 **Fully Responsive** — Mobile-first layout that works on all screen sizes
- 🔗 **Smart Navbar** — Active section tracking via Intersection Observer
- 📬 **Contact Form** — React Hook Form with validation
- 📝 **Blog Section** — MDX-powered blog posts with syntax highlighting
- 🖼️ **Project Showcase** — Filterable project cards with category tabs
- 🏆 **Certifications Section** — Verified credential cards with skill tags

---

##  Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js 16.3 (App Router, Turbopack) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion 12 |
| Icons | Lucide React |
| Forms | React Hook Form + Zod |
| Blog | MDX (@next/mdx) |
| Themes | next-themes |
| Deployment | Vercel |

---

## 📁 Project Structure

```
PORTFOLIO/
├── public/
│   ├── logo.jpg              # Brand logo
│   ├── yaswanth.jpg          # Profile photo
│   └── yaswanth-resume.pdf   # Downloadable resume
├── src/
│   ├── app/
│   │   ├── globals.css        # Global CSS variables & theme tokens
│   │   ├── layout.tsx         # Root layout with providers
│   │   ├── page.tsx           # Home page (all sections)
│   │   └── blog/              # Blog routes
│   ├── components/
│   │   ├── navbar.tsx         # Navigation with active section tracking
│   │   ├── footer.tsx         # Footer with nav links
│   │   └── sections/
│   │       ├── hero.tsx
│   │       ├── about.tsx
│   │       ├── projects.tsx
│   │       ├── education.tsx
│   │       ├── experience.tsx
│   │       ├── certifications.tsx
│   │       ├── skills.tsx
│   │       └── contact.tsx
│   └── content/
│       └── blog/              # MDX blog posts
├── next.config.ts
└── package.json
```

---

##  Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm 9.x or higher

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Gittyasn/portfolio.git

# 2. Navigate to the project directory
cd portfolio

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open http://localhost:3000 in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

##  Customization

### 1. Personal Info
Edit the data inside each section component in `src/components/sections/`:

| File | What to edit |
|---|---|
| hero.tsx | Name, roles, bio, social links |
| about.tsx | Bio description, profile image |
| projects.tsx | Project list, images, GitHub links |
| education.tsx | Academic history, grades |
| experience.tsx | Internship/work experience |
| certifications.tsx | Certifications and credentials |
| skills.tsx | Tech skills, tools |

### 2. Brand Colors
In `src/app/globals.css`, change the `--primary` CSS variables:

```css
:root {
  --primary: #0ea5e9; /* sky-500 — change this */
  --primary-hover: #0284c7;
}
```

### 3. Profile Photo
Replace `public/yaswanth.jpg` with your own photo.

### 4. Resume
Replace `public/yaswanth-resume.pdf` with your own resume PDF.

---

##  Sections Overview

| Section | Description |
|---|---|
| 🏠 Hero | Name, typewriter role animation, download resume, social links |
| 👤 About | Profile photo, bio text, trait highlight cards |
| 📁 Projects | 8 projects with category filter, images, GitHub links |
| 🎓 Education | B.Tech, Intermediate, SSC cards with grades |
| 💼 Experience | Internship timeline (Adverk, APSSDC, XCEEDIQ) |
| 🏆 Certifications | Verified credential cards with skill tags |
| 🧩 Skills | Icon-based skill grid grouped by category |
| 📬 Contact | Contact form + WhatsApp / email / social links |
| 📝 Blog | MDX powered technical blog |

---

##  Deployment (Vercel)

### Manual Deploy Steps

```bash
# 1. Install Vercel CLI
npm install -g vercel

# 2. Login to Vercel
vercel login

# 3. Deploy to production
vercel --prod
```

---

##  License

This project is open source and available under the MIT License.

---

##  Connect with Me

- GitHub: https://github.com/Gittyasn
- LinkedIn: https://www.linkedin.com/in/yaswanth-bandaru-98912b
- Email: yaswanthbandaruu@gmail.com

---

Made with ❤️ by **Yaswanth Bandaru**  
⭐ If you found this portfolio helpful, please give it a star!
