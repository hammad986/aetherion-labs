# Aetherion Labs - Agency Website

A production-grade, highly-optimized agency website built for Aetherion Labs. Designed for trust, conversion, and authority building, utilizing Next.js, Tailwind CSS, and shadcn/ui.

## 🚀 Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Styling:** Tailwind CSS
- **Components:** shadcn/ui (Radix Primitives)
- **Forms:** EmailJS integration
- **Deployment:** Cloudflare Pages (Static Export)

## 📂 Folder Structure

```
aetherion-labs/
├── public/                 # Static assets (images, logos, fonts)
│   └── assets/             # Project screenshots and founder images
├── src/
│   ├── app/                # Next.js App Router (Pages, Layouts, Sitemap, Robots)
│   ├── components/         # Reusable React components
│   │   ├── forms/          # Contact form and validation
│   │   ├── layout/         # Navbar, Footer
│   │   ├── sections/       # Modular page sections (Hero, Features, etc.)
│   │   └── ui/             # shadcn/ui primitives
│   ├── content/            # CMS Abstraction Layer (Data source)
│   │   ├── projects.ts     # Case studies & portfolio data
│   │   ├── company.ts      # Global company details
│   │   ├── pricing.ts      # Pricing tiers and deliverables
│   │   └── services.ts     # Agency capabilities
│   ├── lib/                # Utilities and Services
│   │   └── contact/        # Abstracted Email Service integration
└── next.config.ts          # Next.js configuration (configured for static export)
```

## 🛠️ Local Development Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```
   *The site will be available at http://localhost:3000*

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Start Production Server (Local Testing)**
   ```bash
   npx serve@latest out
   ```

## ☁️ Deployment Instructions (Cloudflare Pages)

This project is optimized for high-performance static deployment to **Cloudflare Pages** utilizing advanced technical SEO.

1. Push this repository to GitHub.
2. Log in to your Cloudflare Dashboard and navigate to **Workers & Pages > Create application > Pages > Connect to Git**.
3. Connect your GitHub account and select this repository.
4. Configure the build settings:
   - **Framework preset:** Next.js (Static HTML Export)
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
5. Click **Save and Deploy**.

## 🔐 Environment Variables

Before going live, configure your email service provider (e.g., EmailJS, Resend) by adding the required keys to your `.env.local` (for development) and Cloudflare Pages Settings -> Environment Variables (for production):

```env
# Example for EmailJS integration in src/lib/contact/contact-service.ts
NEXT_PUBLIC_EMAILJS_SERVICE_ID="your_service_id"
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID="your_template_id"
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY="your_public_key"
```

## 📝 Content Management

All website content is abstracted from the UI. To update the site's content, edit the files located in `src/content/`:
- Add new case studies to `projects.ts`
- Update your social links in `company.ts`
- Modify capabilities in `services.ts`

## DEVELOPED BY MUHAMMED HAMMAD