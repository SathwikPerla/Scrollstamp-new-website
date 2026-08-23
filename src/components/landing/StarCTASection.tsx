import { Github, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export function StarCTASection() {
  return (
    <section className="py-24 relative overflow-hidden border-t border-white/[0.08] bg-[#05060B]">
      {/* Background Radial Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-purple-600/10 rounded-full blur-[130px] pointer-events-none" />
      
      <div className="container px-4 mx-auto relative z-10 max-w-4xl">
        <div className="max-w-2xl mx-auto text-center">
          {/* Subtle star icon badge */}
          <div className="mb-6 flex justify-center">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
              <Star className="w-7 h-7 text-amber-400 fill-amber-400" />
            </div>
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
            Support ScrollStamp on GitHub
          </h2>

          {/* Description */}
          <p className="text-base text-[#A7ADBE] mb-8 max-w-xl mx-auto leading-relaxed">
            As an open-source utility, your support helps developers discover this tool. Star or fork the repository to contribute!
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="h-12 px-7 text-sm font-semibold bg-white text-black hover:bg-white/90 rounded-xl transition-all shadow-[0_0_24px_rgba(255,255,255,0.15)] active:scale-98"
              asChild
            >
              <a href="https://github.com/SathwikPerla/ScrollStamp/tree/v2.1-hybrid" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2 text-black/80" />
                <span>Fork Repository</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
