import { projects } from "@/content/projects";
import { companyInfo } from "@/content/company";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import { BreadcrumbListSchema } from "@/components/seo/SchemaMarkup";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore our portfolio of AI-powered web applications, automation systems, and intelligent software built with Next.js, Python, and modern cloud technologies.",
  alternates: {
    canonical: "https://aetherionlabs.qzz.io/projects",
  },
  openGraph: {
    title: "Projects | Aetherion Labs",
    description: "Explore our portfolio of AI-powered web applications, automation systems, and intelligent software.",
    url: "https://aetherionlabs.qzz.io/projects",
    siteName: "Aetherion Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Aetherion Labs",
    description: "Explore our portfolio of AI-powered applications and automation systems.",
  },
};

const breadcrumbs = [
  { name: "Home", url: "https://aetherionlabs.qzz.io/" },
  { name: "Projects", url: "https://aetherionlabs.qzz.io/projects" },
];

export default function ProjectsPage() {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      <BreadcrumbListSchema items={breadcrumbs} />

      {/* Header */}
      <div className="bg-white border-b border-gray-100 py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
            Our Work
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            A selection of production-grade AI applications, automation pipelines, and enterprise tools built by {companyInfo.name}.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 pt-16">
        {/* Featured Projects */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Featured Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Card key={project.slug} className="overflow-hidden border-gray-200 bg-white hover:shadow-lg transition-all group flex flex-col h-full">
                <div className="relative h-64 bg-gray-100 overflow-hidden">
                  {project.screenshots.length > 0 ? (
                    <Image
                      src={project.screenshots[0]}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                      No Preview
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-gray-900 backdrop-blur-sm shadow-sm">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-500 mb-6 flex-1">{project.description}</p>
                  <Link href={`/projects/${project.slug}`} className="inline-flex items-center text-primary font-medium hover:underline mt-auto">
                    View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Other Projects & Tools</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {otherProjects.map((project) => (
              <Card key={project.slug} className="border-gray-200 bg-white p-6 hover:border-primary/50 transition-colors flex flex-col sm:flex-row gap-6">
                <div className="relative w-full sm:w-48 h-48 sm:h-auto rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                   {project.screenshots.length > 0 ? (
                    <Image
                      src={project.screenshots[0]}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">
                      No Preview
                    </div>
                  )}
                </div>
                <div className="flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                    {project.demoUrl || project.downloadUrl ? (
                      <a href={project.demoUrl || project.downloadUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                        <ExternalLink size={20} />
                      </a>
                    ) : null}
                  </div>
                  <Badge variant="outline" className="w-fit mb-3">{project.type}</Badge>
                  <p className="text-gray-500 text-sm mb-4 flex-1">{project.description}</p>
                  <Link href={`/projects/${project.slug}`} className="inline-flex items-center text-primary text-sm font-medium hover:underline mt-auto">
                    View Details
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
