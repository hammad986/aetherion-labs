'use client';

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Sparkles, Brain, Target, Compass, Lock } from "lucide-react";

export function AetherionAI() {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-24 bg-gray-900 border-y border-gray-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-gray-900 to-gray-900"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 text-sm font-medium mb-8">
          <Lock className="h-4 w-4" />
          UNDER ACTIVE DEVELOPMENT
        </div>
        
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 flex items-center justify-center gap-4">
          Aetherion <span className="text-primary font-mono font-normal">AI</span>
        </h2>
        
        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
          Building an autonomous intelligence platform focused on intelligent workflows, advanced reasoning systems, and next-generation AI experiences.
        </p>
        
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger render={<Button size="lg" className="rounded-full px-8 h-14 bg-white text-gray-900 hover:bg-gray-100" />}>
            <Sparkles className="mr-2 h-5 w-5 text-primary" /> Explore Vision
          </DialogTrigger>
          <DialogContent className="sm:max-w-2xl bg-gray-900 text-white border-gray-800 shadow-2xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold flex items-center gap-3">
                <Brain className="text-primary" /> Project Aetherion AI
              </DialogTitle>
            </DialogHeader>
            <div className="mt-6 space-y-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-200 mb-2 flex items-center gap-2">
                  <Compass className="h-5 w-5 text-primary" /> The Vision
                </h4>
                <p className="text-gray-400 leading-relaxed">
                  To transition from bespoke AI implementations to a unified, autonomous intelligence engine capable of orchestrating complex cross-platform business workflows with minimal human oversight.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-200 mb-2 flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" /> Why It Exists
                </h4>
                <p className="text-gray-400 leading-relaxed">
                  Current enterprise AI is fragmented. Businesses require an orchestration layer that doesn&apos;t just answer questions, but autonomously executes sequences of tasks across disjointed SaaS tools safely and reliably.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-800">
                <div>
                  <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-2">Status</h4>
                  <div className="flex items-center gap-2">
                    <span className="flex h-2.5 w-2.5 rounded-full bg-yellow-500 animate-pulse"></span>
                    <span className="text-gray-400">Pre-Alpha Core Engineering</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-2">Focus Areas</h4>
                  <ul className="text-gray-400 space-y-1 text-sm">
                    <li>• Context-Aware Reasoning</li>
                    <li>• Self-Correcting Execution</li>
                    <li>• Secure Sandboxed Environs</li>
                  </ul>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
