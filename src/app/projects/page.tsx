import { projects } from "@/content/projects";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink, FolderGit2, Briefcase } from "lucide-react";
import type { Metadata } from "next";
import { BreadcrumbListSchema } from "@/components/seo/SchemaMarkup";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export const metadata: Metadata = {
  title: {
    absolute: "Aetherion Labs | Software & AI Projects",
  },
  description: "Explore production software, AI applications, document intelligence platforms, and workflow automation systems built by Aetherion Labs.",
  alternates: {
    canonical: "https://hammad.dpdns.org/projects",
  },
  openGraph: {
    title: "Aetherion Labs | Software & AI Projects",
    description: "Explore production software, AI applications, document intelligence platforms, and workflow automation systems built by Aetherion Labs.",
    url: "https://hammad.dpdns.org/projects",
    siteName: "Aetherion Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aetherion Labs | Software & AI Projects",
    description: "Explore production software, AI applications, document intelligence platforms, and workflow automation systems built by Aetherion Labs.",
  },
};

const breadcrumbs = [
  { name: "Home", url: "https://hammad.dpdns.org/" },
  { name: "Projects", url: "https://hammad.dpdns.org/projects" },
];

export default function ProjectsPage() {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <div className="bg-gray-50 min-h-screen">
      <BreadcrumbListSchema items={breadcrumbs} />

      {/* Header */}
      <div className="bg-white border-b border-gray-100 py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3.5 py-1 text-xs font-semibold text-primary mb-4 border border-green-100">
            <Briefcase className="h-3.5 w-3.5" /> Proven Engineering Portfolio
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-950 mb-6 leading-tight">
            Selected Work & Case Studies
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            A showcase of production-ready web applications, intelligent automation systems, and software prototypes built with modern, reliable technologies.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-20 space-y-24">
        {/* Featured Projects */}
        <div>
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 mb-2">
              Featured Case Studies
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Deep dives into problem analysis, architecture choices, and measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Card
                key={project.slug}
                className="overflow-hidden border-gray-200/90 bg-white hover:shadow-xl hover:border-primary/40 transition-all duration-300 rounded-3xl group flex flex-col h-full"
              >
                <div className="relative h-64 bg-gray-950 overflow-hidden flex items-center justify-center p-4">
                  {project.screenshots.length > 0 ? (
                    <div className="relative w-full h-full rounded-xl overflow-hidden border border-white/10">
                      <Image
                        src={project.screenshots[0]}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ) : (
                    <div className="text-gray-400 text-sm">No Preview</div>
                  )}
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className="bg-gray-900/90 text-white backdrop-blur-md border border-white/10 text-xs">
                      {project.category}
                    </Badge>
                  </div>
                </div>

                <div className="p-7 flex flex-col flex-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-primary mb-1">
                    {project.type}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-950 mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-gray-100">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-gray-100 text-gray-700 text-[11px] font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 rounded-md bg-gray-50 text-gray-400 text-[11px] font-medium">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-2 mt-auto">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center text-sm font-semibold text-primary hover:underline"
                    >
                      Read Case Study <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-gray-500 hover:text-gray-900 flex items-center gap-1"
                      >
                        Demo <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects & Specialized Tools */}
        <div>
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 mb-2">
              Specialized Tools & Desktop Applications
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Desktop utilities, local RAG systems, and performant client-side web utilities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {otherProjects.map((project) => (
              <Card
                key={project.slug}
                className="border-gray-200/90 bg-white p-7 hover:border-primary/40 hover:shadow-lg transition-all duration-300 rounded-3xl flex flex-col sm:flex-row gap-6"
              >
                <div className="relative w-full sm:w-56 h-48 sm:h-auto rounded-2xl overflow-hidden bg-gray-950 flex-shrink-0 flex items-center justify-center p-3">
                  {project.screenshots.length > 0 ? (
                    <div className="relative w-full h-full rounded-xl overflow-hidden border border-white/10">
                      <Image
                        src={project.screenshots[0]}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 224px"
                        className="object-cover object-top"
                      />
                    </div>
                  ) : (
                    <div className="text-gray-400 text-xs">No Preview</div>
                  )}
                </div>

                <div className="flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-2 gap-2">
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                          {project.type}
                        </span>
                        <h3 className="text-xl font-bold text-gray-950 mt-0.5">
                          {project.title}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-gray-900 transition-colors"
                            aria-label="GitHub"
                          >
                            <FolderGit2 className="h-4 w-4" />
                          </a>
                        )}
                        {(project.demoUrl || project.downloadUrl) && (
                          <a
                            href={project.demoUrl || project.downloadUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-primary transition-colors"
                            aria-label="Live Demo or Download"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((t) => (
                        <span key={t} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-[10px] font-medium rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="text-xs font-semibold text-primary hover:underline flex items-center gap-1"
                    >
                      View Details <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <FinalCTASection />
    </div>
  );
}
