'use client';

import { useState } from "react";
import { projects, ProjectSchema } from "@/content/projects";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink, CheckCircle2, FolderGit2 } from "lucide-react";

type FilterCategory = 'All' | 'Websites' | 'Web Apps' | 'AI' | 'Automation' | 'SaaS / MVP' | 'Prototypes';

const filterCategories: FilterCategory[] = [
  'All',
  'Web Apps',
  'AI',
  'Automation',
  'SaaS / MVP',
  'Prototypes',
  'Websites'
];

// Helper to map project categories
function matchesFilter(project: ProjectSchema, filter: FilterCategory): boolean {
  if (filter === 'All') return true;
  if (filter === 'AI') {
    return project.category.includes('AI') || project.technologies.some(t => t.includes('OpenAI') || t.includes('Gemini') || t.includes('Claude') || t.includes('LangChain') || t.includes('OpenCV'));
  }
  if (filter === 'Automation') {
    return project.category.includes('Automation') || project.title.includes('Ops') || project.title.includes('Proposal');
  }
  if (filter === 'Web Apps') {
    return project.type === 'Web Application';
  }
  if (filter === 'SaaS / MVP') {
    return project.slug === 'smart-doc-ai' || project.slug === 'nexus-ai-ops' || project.slug === 'ai-proposal-writer';
  }
  if (filter === 'Prototypes') {
    return project.slug === 'invoice-generator-pro' || project.slug === 'image-toolkit-pro' || project.slug === 'advanced-video-qa-system';
  }
  if (filter === 'Websites') {
    return project.slug === 'invoice-generator-pro' || project.slug === 'ai-proposal-writer';
  }
  return true;
}

export function SelectedWork() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('All');

  const filteredProjects = projects.filter((p) => matchesFilter(p, activeFilter));

  return (
    <section id="selected-work" className="py-24 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-primary mb-4 border border-green-100">
              Selected Work
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
              Real Software. Measurable Solutions.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Explore our custom applications, automation tools, and AI software architectures built for performance and scale.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center text-sm font-semibold text-primary hover:underline self-start md:self-auto"
          >
            View all project details <ArrowRight className="ml-1.5 h-4 w-4" />
          </Link>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-gray-100 pb-4">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === cat
                  ? 'bg-gray-900 text-white shadow-xs'
                  : 'bg-gray-100/80 text-gray-600 hover:bg-gray-200/80 hover:text-gray-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Showcase */}
        <div className="space-y-12">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.slug}
              className="overflow-hidden border-gray-200/80 bg-white shadow-xs hover:shadow-lg transition-all duration-300 rounded-3xl"
            >
              <div className={`flex flex-col lg:flex-row ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Media Preview Column */}
                <div className="w-full lg:w-5/12 bg-gray-900 min-h-[300px] lg:min-h-[440px] relative overflow-hidden flex items-center justify-center p-6">
                  {project.screenshots.length > 0 ? (
                    <div className="relative w-full h-full min-h-[280px] rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                      <Image
                        src={project.screenshots[0]}
                        alt={`${project.title} interface`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 42vw"
                        className="object-cover object-top"
                      />
                    </div>
                  ) : (
                    <div className="text-gray-400 text-sm">Preview Interface</div>
                  )}
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className="bg-gray-900/90 text-white backdrop-blur-md border border-white/10 text-xs">
                      {project.category}
                    </Badge>
                  </div>
                </div>

                {/* Content & Details Column */}
                <div className="w-full lg:w-7/12 p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                      <div>
                        <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                          {project.type}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1">
                          {project.title}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2">
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-semibold text-gray-700 hover:text-primary hover:border-primary transition-colors"
                          >
                            Live Demo <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-semibold text-gray-700 hover:text-primary hover:border-primary transition-colors"
                          >
                            <FolderGit2 className="h-3.5 w-3.5" /> Source
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Problem & Solution Breakdown */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 pt-4 border-t border-gray-100">
                      <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                        <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-1">
                          The Challenge
                        </span>
                        <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
                          {project.problemStatement}
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-green-50/60 border border-green-100">
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block mb-1">
                          The Solution Architecture
                        </span>
                        <p className="text-xs text-gray-700 leading-relaxed line-clamp-3">
                          {project.solutionArchitecture}
                        </p>
                      </div>
                    </div>

                    {/* Key Features Bullet List */}
                    <div className="mb-6">
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-2.5">
                        Key Features
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-600">
                        {project.coreFeatures.slice(0, 4).map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Technology Footer & Link */}
                  <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-gray-100 text-gray-700 text-[11px] font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="px-2 py-1 rounded-md bg-gray-50 text-gray-400 text-[11px] font-medium">
                          +{project.technologies.length - 5}
                        </span>
                      )}
                    </div>

                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center text-sm font-semibold text-primary hover:underline flex-shrink-0"
                    >
                      Read Full Case Study <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
