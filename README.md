# Aetherion Labs

**Custom Software & Digital Product Development Studio**

Aetherion Labs is a founder-led engineering and digital product development studio. We design, architect, and build production-ready software solutions for startups, established businesses, creators, and developers.

---

## 🌍 Market & Positioning

* **Primary Market:** United States
* **Secondary Market:** Canada
* **Global Reach:** Serving English-speaking clients worldwide with transparent project scopes, direct founder collaboration, and zero agency overhead.

---

## 🛠️ Core Services

1. **Websites** — Modern, high-converting business websites, landing pages, and corporate portfolios engineered for performance, brand authority, and SEO.
2. **Web Applications** — Responsive, type-safe full-stack web applications, internal tools, and client portals built with Next.js, React, and TypeScript.
3. **AI Applications** — Practical LLM integration, Retrieval-Augmented Generation (RAG) pipelines over proprietary business documents, and custom AI copilots.
4. **AI Chatbots** — Context-aware conversational agents with custom system instructions, document retrieval grounding, and CRM/helpdesk integrations.
5. **Automation** — Resilient workflow automations, webhook data synchronization, and third-party API orchestration across Stripe, Supabase, AWS, and communication platforms.
6. **SaaS / MVPs** — Rapid, scalable Minimum Viable Products for founders, complete with authentication, billing, core workflows, and analytics.
7. **Student Projects & Prototypes** — Ethical, hands-on engineering support to transform complex ideas and architectural concepts into working technical demonstration prototypes.
8. **Custom Software** — Tailored desktop software, specialized utilities, data extractors, and automated business tools.

---

## 💼 Featured Projects & Case Studies

* [Smart Doc AI](https://hammad.dpdns.org/projects/smart-doc-ai) (`/projects/smart-doc-ai`) — AI document intelligence platform for PDF parsing with LLMs.
* [Nexus AI Ops](https://hammad.dpdns.org/projects/nexus-ai-ops) (`/projects/nexus-ai-ops`) — Operational intelligence platform with real-time analytics and natural language SQL generation.
* [AI Proposal Writer](https://hammad.dpdns.org/projects/ai-proposal-writer) (`/projects/ai-proposal-writer`) — Gemini API-powered technical proposal builder for boutique agencies.
* [Invoice Generator Pro](https://hammad.dpdns.org/projects/invoice-generator-pro) (`/projects/invoice-generator-pro`) — High-performance client-side invoice generator with live WYSIWYG PDF export.
* [Image Toolkit Pro](https://hammad.dpdns.org/projects/image-toolkit-pro) (`/projects/image-toolkit-pro`) — Desktop computer vision processing suite built with Python and OpenCV.
* [Advanced Video QA System](https://hammad.dpdns.org/projects/advanced-video-qa-system) (`/projects/advanced-video-qa-system`) — Temporal RAG desktop application for querying long-form local video files.

---

## 🚀 Technology Stack

* **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Turbopack, Static HTML Export)
* **UI & Component Library:** [React 19](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.com/)
* **Typography & Icons:** [Lucide React](https://lucide.dev/), Inter
* **Form & Validation:** [React Hook Form](https://react-hook-form.com/), [EmailJS Browser SDK](https://www.emailjs.com/)
* **SEO & Structured Data:** JSON-LD (WebSite, Organization, Service, Project, BreadcrumbList schemas)
* **Deployment Target:** [Cloudflare Pages](https://pages.cloudflare.com/) (Static HTML Export)

---

## 📂 Project Structure

```
aetherion-labs/
├── public/                     # Static production assets
│   ├── _headers                # Cloudflare Pages security headers & CSP
│   ├── assets/                 # High-resolution project mockups & founder photo
│   │   └── _archive_originals/ # Preserved legacy source assets
│   ├── favicon.ico             # Multi-resolution favicon (16, 32, 48)
│   ├── icon.png                # Brand monogram app icon (512x512)
│   ├── apple-touch-icon.png    # Apple touch icon (180x180)
│   ├── manifest.json           # Web App Manifest
│   └── opengraph-image.png     # 1200x630 social share card
├── src/
│   ├── app/                    # Next.js App Router (pages, sitemap, robots, layout)
│   ├── components/
│   │   ├── forms/              # ContactForm component
│   │   ├── layout/             # Navbar, Footer
│   │   ├── sections/           # Modular landing page sections
│   │   ├── seo/                # JSON-LD Schema markup components
│   │   └── ui/                 # Reusable UI primitives
│   ├── content/                # Content abstraction layer
│   │   ├── company.ts          # Studio identity, founder bio, social links
│   │   ├── navigation.ts       # Header and footer navigation links
│   │   ├── pricing.ts          # Service estimates and deliverable scopes
│   │   ├── process.ts          # 6-step client collaboration workflow
│   │   ├── projects.ts         # Portfolio case studies and architecture specs
│   │   └── services.ts         # Service offerings and feature breakdowns
│   └── lib/
│       └── contact/            # EmailJS submission service implementation
├── .env.example                # Environment variables template
├── next.config.ts              # Next.js configuration (output: 'export')
├── package.json                # Dependencies and npm scripts
└── tsconfig.json               # TypeScript configuration
```

---

## 💻 Local Development

### 1. Prerequisites
* [Node.js](https://nodejs.org/) v20.x or higher
* npm v10.x or higher

### 2. Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/hammad986/aetherion-labs.git
cd aetherion-labs
npm install
```

### 3. Environment Variables
Create a `.env.local` file by copying the provided `.env.example`:
```bash
cp .env.example .env.local
```

Configure your EmailJS keys in `.env.local`:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID="your_emailjs_service_id"
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID="your_emailjs_template_id"
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY="your_emailjs_public_key"
```
*(Note: If environment variables are omitted during local development, the contact form will operate in safe development mode).*

### 4. Run Development Server
Start the local Next.js development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Lint Code
Verify code formatting and TypeScript rules:
```bash
npm run lint
```

### 6. Build Production Export
Execute static export generation:
```bash
npm run build
```
This compiles all pages and metadata into the `out/` directory.

---

## ☁️ Cloudflare Pages Deployment

This application uses Next.js Static Export (`output: "export"` in `next.config.ts`), making it natively suited for high-speed edge distribution via **Cloudflare Pages**.

### Deployment Steps:
1. Push your changes to your GitHub repository.
2. In the [Cloudflare Dashboard](https://dash.cloudflare.com/), navigate to **Compute (Workers) > Workers & Pages > Create > Pages > Connect to Git**.
3. Select your GitHub repository.
4. Configure the build settings:
   * **Framework preset:** `Next.js (Static HTML Export)`
   * **Build command:** `npm run build`
   * **Build output directory:** `out`
   * **Root directory:** `/`
5. Under **Environment variables (production)**, add:
   * `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   * `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   * `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
6. Click **Save and Deploy**. Cloudflare will automatically build and distribute the static assets across its global CDN edge network.

---

## 📄 License & Ownership
Copyright © 2026 Aetherion Labs. All rights reserved.
Developed by Muhammed Hammad S.