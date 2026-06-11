import { projects } from "@/content/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, CheckCircle2, LayoutTemplate, Monitor, Server, Lightbulb, TrendingUp } from "lucide-react";
import { ProjectJsonLd } from "@/components/seo/SchemaMarkup";
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
    openGraph: {
      title: `${project.title} | Case Study | Aetherion Labs`,
      description: project.description,
      url: `/projects/${project.slug}`,
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

  return (
    <article className="min-h-screen bg-white pb-24 font-sans">
      <ProjectJsonLd project={project} />
      
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
                <a href={project.downloadUrl} target="_blank" rel="noopener noreferrer" className={buttonVariants({ size: "lg", className: "rounded-full shadow-sm" })}>
                  Download Executable <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "outline", size: "lg", className: "rounded-full bg-white shadow-sm" })}>
                  <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.36 0-1.4-.5-2.55-1.33-3.4.13-.33.6-1.6-.13-3.36 0 0-1.08-.34-3.5 1.3-1-.28-2.1-.42-3.2-.42s-2.2.14-3.2.42c-2.42-1.64-3.5-1.3-3.5-1.3-.73 1.76-.26 3.03-.13 3.36-.83.85-1.33 2-1.33 3.4 0 4.83 3 6.02 6 6.36-.9.2-1.6.9-1.9 2.1-.8.36-2.7.46-4-1.2-1.1-1.3-2-1.3-2-1.3-1.1-.1-.1.9-.1.9 1.1.4 1.7 1.7 1.7 1.7 1.1 2.3 3.2 2.1 4 1.8v2.7"></path></svg> Source Code
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-20">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Main Content Column */}
          <div className="lg:w-2/3 space-y-20">
            
            {/* Visual 1: Hero Screenshot */}
            {project.screenshots.length > 0 && (
              <figure className="rounded-2xl overflow-hidden border border-gray-200 shadow-2xl bg-gray-100">
                <Image 
                  src={project.screenshots[0]} 
                  alt={`${project.title} Hero View`}
                  width={1200}
                  height={800}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 66vw"
                  priority
                  className="w-full h-auto object-cover"
                />
                <figcaption className="bg-gray-900 text-gray-400 text-xs text-center py-2 font-mono uppercase tracking-widest">
                  {isWeb ? "Primary Interface Dashboard" : "Main Workspace View"}
                </figcaption>
              </figure>
            )}

            {/* 2 & 3: Executive Overview & Problem Statement */}
            <section className="prose prose-lg md:prose-xl text-gray-600 max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Lightbulb className="text-primary w-8 h-8" /> Executive Overview
              </h2>
              <p className="leading-relaxed">{project.executiveOverview}</p>
              
              <hr className="my-12 border-gray-100" />
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Problem Statement</h3>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg text-gray-700">
                <p className="m-0 leading-relaxed italic">"{project.problemStatement}"</p>
              </div>
            </section>

            {/* Visual 2: Secondary View */}
            {project.screenshots.length > 1 && (
              <figure className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg bg-gray-100 my-16">
                <Image 
                  src={project.screenshots[1]} 
                  alt={`${project.title} Secondary View`}
                  width={1200}
                  height={800}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 66vw"
                  className="w-full h-auto object-cover"
                />
                <figcaption className="bg-gray-100 text-gray-500 text-xs text-center py-3 font-medium border-t border-gray-200">
                  {isWeb ? "Interactive Walkthrough & Data Entry" : "Secondary Tooling Interface"}
                </figcaption>
              </figure>
            )}

            {/* 4 & 5: Technical Challenge & Solution Architecture */}
            <section className="prose prose-lg md:prose-xl text-gray-600 max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Server className="text-primary w-8 h-8" /> System Architecture
              </h2>
              <h4 className="text-xl font-bold text-gray-900 mb-3 mt-8">Technical Challenge</h4>
              <p className="leading-relaxed">{project.technicalChallenge}</p>
              
              <h4 className="text-xl font-bold text-gray-900 mb-3 mt-8">Engineered Solution</h4>
              <p className="leading-relaxed">{project.solutionArchitecture}</p>
            </section>

            {/* Visuals 3+: Gallery Layout */}
            {project.screenshots.length > 2 && (
              <section>
                <div className="flex items-center gap-4 mb-8">
                  <hr className="flex-1 border-gray-200" />
                  <span className="text-sm font-bold uppercase tracking-widest text-gray-400 flex items-center gap-2">
                    <LayoutTemplate className="w-4 h-4" /> Extended Visuals
                  </span>
                  <hr className="flex-1 border-gray-200" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {project.screenshots.slice(2).map((screenshot, idx) => (
                    <figure key={idx} className="rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-gray-100 group">
                      <div className="relative aspect-[4/3]">
                        <Image 
                          src={screenshot} 
                          alt={`${project.title} Detail View ${idx + 1}`}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <figcaption className="bg-white px-4 py-3 text-xs text-gray-500 font-medium border-t border-gray-100 text-center">
                        {isWeb 
                          ? ["Feature Showcase", "Analytics View", "Settings Config", "Modal View"][idx] || "Platform View" 
                          : ["Processing Screen", "Detection Matrix", "Batch Operations", "Preferences"][idx] || "Application View"}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </section>
            )}

            {/* 7 & 8: Engineering Decisions & Future Improvements */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Critical Engineering Decisions</h2>
              <div className="space-y-6">
                {project.engineeringDecisions.map((decision, idx) => (
                  <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{decision.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{decision.description}</p>
                  </div>
                ))}
              </div>
            </section>
            
            <section className="bg-gray-50 rounded-3xl p-10 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Future Technical Roadmap</h2>
              <ul className="space-y-4">
                {project.futureImprovements.map((improvement, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold mr-4 mt-0.5">{idx + 1}</span>
                    <span className="text-gray-700">{improvement}</span>
                  </li>
                ))}
              </ul>
            </section>

          </div>

          {/* Sidebar Column */}
          <div className="lg:w-1/3">
            <div className="sticky top-24 space-y-10">
              
              {/* Core Features */}
              <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wider mb-6 pb-4 border-b border-gray-100">Core Capabilities</h3>
                <ul className="space-y-4">
                  {project.coreFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-600">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-sm font-medium leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technology Stack */}
              <div>
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 ml-2">Technology Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-4 py-2 rounded-xl bg-gray-50 border border-gray-200 text-gray-700 text-sm font-semibold shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Outcomes & Impact */}
              <div className="bg-primary/5 border border-primary/20 rounded-3xl p-8">
                <h3 className="text-lg font-bold text-primary mb-6 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" /> Business Impact
                </h3>
                <ul className="space-y-5">
                  {project.outcomesAndImpact.map((item, idx) => (
                    <li key={idx} className="text-gray-800 font-medium text-sm leading-relaxed border-l-2 border-primary/30 pl-4 py-1">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 11: Call To Action */}
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
        </div>
      </div>
    </article>
  );
}
