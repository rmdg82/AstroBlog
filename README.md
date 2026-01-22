# 🌌 AstroBlog
A modern, lightweight blog application built with **Astro**, showcasing a learning journey through web development and static site generation. The project features an Italian-language blog documenting the learning process of Astro framework.

## 📋 About the Project

**Celestial Cycle** is a personal blog platform where Sarah, a technical writer from Canada with expertise in HTML, CSS, JavaScript, React, and Astro, shares insights about learning and working with the Astro framework. The project demonstrates best practices for building fast, content-focused websites using modern web technologies.

### Features

- ✨ **Astro-Powered**: Built with Astro 5.16.10 for optimal performance and minimal JavaScript
- 📝 **Blog System**: Markdown-based blog posts with easy content management
- 🌍 **Multilingual**: Content presented in Italian with responsive design
- 📱 **Responsive Design**: Mobile-friendly layout that works on all devices
- 🚀 **Static Generation**: Pre-rendered pages for maximum performance and SEO
- 🎨 **Clean Styling**: Global CSS styling system for consistent design
- 🔗 **Navigation**: Easy-to-navigate multi-page structure

## 🏗️ Project Structure

```
AstroBlog/
├── celestial-cycle/              # Main Astro project
│   ├── src/
│   │   ├── pages/
│   │   │   ├── index.astro       # Home page
│   │   │   ├── about.astro       # About page (Su di me)
│   │   │   ├── blog.astro        # Blog listing page
│   │   │   └── posts/
│   │   │       ├── post-1.md     # Blog post 1
│   │   │       ├── post-2.md     # Blog post 2
│   │   │       └── post-3.md     # Blog post 3
│   │   └── styles/
│   │       └── global.css        # Global styles
│   ├── public/                   # Static assets
│   ├── astro.config.mjs          # Astro configuration
│   ├── package.json              # Project dependencies
│   ├── tsconfig.json             # TypeScript configuration
│   └── README.md                 # Astro starter template
├── netlify.toml                  # Netlify deployment configuration
└── README.md                     # This file
```

## 🛠️ Technology Stack

- **Framework**: [Astro](https://astro.build) - The web framework for content-driven websites
- **Language**: JavaScript/TypeScript
- **Styling**: CSS
- **Content**: Markdown files for blog posts
- **Deployment**: Netlify

## 📄 Pages

### Home (`/`)
Welcome page featuring a greeting and introduction to the site.

### About (`/about/`)
Profile page (Su di me) showcasing:
- Personal information (Sarah from Canada)
- Professional title: Technical Writer
- Technical skills and hobbies
- Learning goals

### Blog (`/blog/`)
Blog listing page that displays:
- Overview of the learning journey with Astro
- Navigation to individual blog posts
- Three featured articles

## 🚀 Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd celestial-cycle
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the local development server:
```bash
npm run dev
```

The site will be available at `http://localhost:4321`

### Building

Create an optimized production build:
```bash
npm run build
```

The compiled site will be generated in the `dist/` directory.

### Preview

Preview the production build locally:
```bash
npm run preview
```

### Astro CLI

Run other Astro CLI commands:
```bash
npm run astro [command]
npm run astro -- --help
```

## 📦 Scripts

| Command | Action |
|---------|--------|
| `npm run dev` | Starts development server at `localhost:4321` |
| `npm run build` | Builds production site to `./dist/` |
| `npm run preview` | Previews the production build locally |
| `npm run astro` | Runs Astro CLI commands |

## 🌐 Deployment

The project is configured for deployment on **Netlify**. The `netlify.toml` file contains:
- Build directory: `celestial-cycle`
- Build command: `npm run build`
- Publish directory: `dist`

To deploy:
1. Connect your GitHub repository to Netlify
2. Configure build settings (already set in `netlify.toml`)
3. Deploy on every push to main branch

## 🎯 Learning Resources

This project is ideal for learning:
- Astro fundamentals and best practices
- Static site generation (SSG)
- Building fast, performant websites
- Markdown content management
- File-based routing systems
- Modern web development with minimal JavaScript

For more information about Astro, visit:
- [Astro Documentation](https://docs.astro.build)
- [Astro Discord Community](https://astro.build/chat)

## 📚 Blog Content

The blog section documents the author's learning journey with Astro, including practical insights and tutorials on:
- Getting started with Astro
- Building blog systems
- Optimizing performance
- Best practices for content-driven sites

## 📝 License

This project is open source and available for educational purposes.

## 👋 Author

**Sarah**
- Location: Canada
- Occupation: Technical Writer
- Interests: Photography, birdwatching, baseball
- Skills: HTML, CSS, JavaScript, React, Astro, Technical Documentation

---

Built with ❤️ using Astro