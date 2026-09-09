import { projects } from "@/content/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, CheckCircle2, LayoutTemplate, Monitor, Server, Lightbulb, TrendingUp } from "lucide-react";
import { ProjectJsonLd, BreadcrumbListSchema } from "@/components/seo/SchemaMarkup";
import type { Metadata } from "next";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);
  if (!project) return { title: 'Project Not Found' };

  return {
    title: `${project.title} | Case Study`,
    description: project.description,
    alternates: {
      canonical: `https://hammad.dpdns.org/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | Case Study | Aetherion Labs`,
      description: project.description,
      url: `https://hammad.dpdns.org/projects/${project.slug}`,
      siteName: "Aetherion Labs",
      images: [
        {
          url: project.screenshots[0] || "/icon.png",
          width: 1200,
          height: 630,
          alt: `${project.title} Showcase`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Case Study`,
      description: project.description,
      images: [project.screenshots[0] || "/icon.png"],
    },
  };
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  const isWeb = project.type === 'Web Application';

  const breadcrumbs = [
    { name: "Home", url: "https://hammad.dpdns.org/" },
    { name: "Projects", url: "https://hammad.dpdns.org/projects" },
    { name: project.title, url: `https://hammad.dpdns.org/projects/${project.slug}` },
  ];

  return (
    <article className="min-h-screen bg-white pb-24 font-sans">
      <ProjectJsonLd project={project} />
      <BreadcrumbListSchema items={breadcrumbs} />

      {/* 1. Header / Hero Section */}
      <div className="bg-gray-50 border-b border-gray-100 pt-16 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-gray-900/[0.04] bg-[size:20px_20px]"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Link href="/projects" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
          </Link>
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors border-none">
                {project.category}
              </Badge>
              <span className="text-sm font-medium text-gray-500 bg-white px-3 py-1 rounded-full shadow-sm border border-gray-100 flex items-center gap-2">
                {isWeb ? <Monitor className="w-3 h-3" /> : <Server className="w-3 h-3" />}
                {project.type}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 leading-[1.1]">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-10 max-w-3xl">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-4">
              {project.demoUrl && (
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className={buttonVariants({ size: "lg", className: "rounded-full shadow-sm" })}>
                  View Live Application <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              )}
              {project.downloadUrl && (
                <a href={project.downloadUrl} target="_blank" rel="noopener noreferrer" className={buttonVariants({ size: "lg", variant: "outline", className: "rounded-full" })}>
                  Download <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Screenshots Gallery */}
      {project.screenshots.length > 0 && (
        <div className="container mx-auto px-4 md:px-6 py-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Screenshots</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.screenshots.map((screenshot, idx) => (
              <div key={idx} className="relative aspect-video rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                <Image
                  src={screenshot}
                  alt={`${project.title} screenshot ${idx + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Content Sections */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* 3. Executive Overview */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Executive Overview</h2>
            <div className="bg-gray-50 border-l-4 border-primary p-8 rounded-r-xl">
              <p className="text-gray-600 leading-relaxed text-lg">{project.executiveOverview}</p>
            </div>
          </section>

          {/* 4. The Problem */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Problem</h2>
            <p className="text-gray-600 leading-relaxed text-lg">{project.problemStatement}</p>
          </section>

          {/* 5. Technical Challenge */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Technical Challenge</h2>
            <p className="text-gray-600 leading-relaxed text-lg">{project.technicalChallenge}</p>
          </section>

          {/* 6. Solution Architecture */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Solution Architecture</h2>
            <p className="text-gray-600 leading-relaxed text-lg">{project.solutionArchitecture}</p>
          </section>

          {/* 7. Core Features */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Core Features</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.coreFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start text-gray-600">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="font-medium leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 8. Engineering Decisions */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Engineering Decisions</h2>
            <div className="space-y-8">
              {project.engineeringDecisions.map((decision, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary">
                        <Lightbulb className="h-5 w-5" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{decision.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{decision.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 9. Technology Stack */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Technology Stack</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-5 py-2.5 rounded-xl bg-gray-100 text-gray-800 font-semibold text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* 10. Outcomes */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Outcomes & Impact</h2>
            <ul className="space-y-4">
              {project.outcomesAndImpact.map((outcome, idx) => (
                <li key={idx} className="flex items-start text-gray-600">
                  <TrendingUp className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span className="font-medium leading-relaxed">{outcome}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 11. Future Improvements */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Future Roadmap</h2>
            <ul className="space-y-4">
              {project.futureImprovements.map((item, idx) => (
                <li key={idx} className="flex items-start text-gray-600">
                  <LayoutTemplate className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 12. CTA */}
          <div className="bg-gray-900 rounded-3xl p-8 text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
            <h3 className="text-2xl font-bold mb-4 relative z-10">Need something similar?</h3>
            <p className="text-gray-400 mb-8 text-sm leading-relaxed relative z-10">
              We specialize in architecting custom {project.category.toLowerCase()} and automation pipelines tailored to exact enterprise specifications.
            </p>
            <Link href="/contact" className={buttonVariants({ className: "w-full bg-primary hover:bg-primary/90 text-white rounded-full h-12 shadow-lg relative z-10" })}>
              Request Architectural Proposal
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
