import { projects } from "@/content/projects";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function FeaturedWork() {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3); // Smart Doc AI, Nexus AI Ops, AI Proposal Writer

  return (
    <section className="py-24 bg-gray-50 border-y border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">Featured Work</h2>
            <p className="text-lg text-gray-500">
              Explore our recent case studies showcasing production-grade applications built for scale and impact.
            </p>
          </div>
          <Link href="/projects" className="text-primary font-medium flex items-center hover:underline">
            View all projects <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="flex flex-col gap-12">
          {featuredProjects.map((project, index) => (
            <Card key={project.slug} className="overflow-hidden border-gray-200 bg-white shadow-sm hover:shadow-md transition-all group">
              <div className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <Badge variant="secondary" className="bg-green-50 text-primary hover:bg-green-100">{project.category}</Badge>
                    <span className="text-sm font-medium text-gray-400">{project.type}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{project.title}</h3>
                  <p className="text-gray-500 mb-8 leading-relaxed text-lg">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="px-3 py-1 rounded-full border border-gray-200 text-xs font-medium text-gray-600 bg-gray-50">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1 rounded-full border border-gray-200 text-xs font-medium text-gray-600 bg-gray-50">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                  <div>
                    <Link href={`/projects/${project.slug}`} className="inline-flex items-center font-semibold text-gray-900 hover:text-primary transition-colors">
                      Read Case Study <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </div>
                <div className="w-full md:w-1/2 bg-gray-100 min-h-[300px] md:min-h-[400px] relative overflow-hidden">
                  {/* Placeholder for project image until we map the actual ones correctly */}
                  {project.screenshots.length > 0 ? (
                     <Image 
                       src={project.screenshots[0]} 
                       alt={`${project.title} screenshot`}
                       fill
                       sizes="(max-width: 768px) 100vw, 50vw"
                       priority={index === 0}
                       className="object-cover object-left-top group-hover:scale-105 transition-transform duration-500"
                     />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">
                      Project Visualization
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
