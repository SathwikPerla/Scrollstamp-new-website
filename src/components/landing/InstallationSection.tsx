import { Download, Settings, ToggleRight, FolderOpen, Pin, Copy, Check, Chrome } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: Download,
    title: "Clone or Download",
    description: "Get the extension repository on your machine.",
    code: "git clone -b v2.1-hybrid https://github.com/SathwikPerla/ScrollStamp.git"
  },
  {
    icon: Settings,
    title: "Open Chrome Extensions",
    description: "Type this URL in a new browser tab:",
    highlight: "chrome://extensions"
  },
  {
    icon: ToggleRight,
    title: "Enable Developer Mode",
    description: "Toggle the Developer Mode switch in the top right corner."
  },
  {
    icon: FolderOpen,
    title: "Load Unpacked Folder",
    description: "Click 'Load unpacked' and select the extension subdirectory."
  },
  {
    icon: Pin,
    title: "Pin for Quick Access",
    description: "Click the extensions puzzle icon and pin ScrollStamp."
  },
];

export function InstallationSection() {
  const [copied, setCopied] = useState(false);

  const copyCommand = () => {
    navigator.clipboard.writeText("git clone -b v2.1-hybrid https://github.com/SathwikPerla/ScrollStamp.git");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadClick = () => {
    fetch("https://api.counterapi.dev/v1/scrollstamp/downloads/up").catch(() => {});
  };

  return (
    <section className="py-24 relative border-t border-white/[0.08] bg-[#05060B]" id="install">
      <div className="container relative z-10 px-4 mx-auto max-w-4xl">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
              Developer Installation
            </h2>
            <p className="text-base text-[#A7ADBE]">
              Load the hybrid unpacked extension locally in under a minute.
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-3.5 mb-12">
            {steps.map((step, index) => (
              <div 
                key={step.title}
                className="apple-glass apple-glass-hover rounded-2xl p-5 flex items-start gap-4"
              >
                {/* Step number */}
                <div className="w-7 h-7 rounded-lg bg-[#2563FF]/15 border border-[#2563FF]/30 flex items-center justify-center shrink-0 font-bold text-xs text-[#3B82FF] font-mono mt-0.5">
                  0{index + 1}
                </div>
                
                {/* Icon */}
                <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0 text-white/80">
                  <step.icon className="w-4 h-4" />
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm text-white">{step.title}</h3>
                  <p className="text-xs text-[#A7ADBE] mt-0.5 leading-relaxed">{step.description}</p>
                  
                  {step.code && (
                    <div className="mt-3 flex items-center gap-2">
                      <code className="flex-1 bg-black/50 rounded-lg px-3.5 py-2 text-xs font-mono text-emerald-400 border border-white/[0.08] overflow-x-auto select-all">
                        {step.code}
                      </code>
                      <Button 
                        variant="ghost" 
                        size="icon"
                        className="shrink-0 w-8 h-8 text-white/60 hover:text-white hover:bg-white/[0.08] rounded-lg"
                        onClick={copyCommand}
                      >
                        {copied ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </Button>
                    </div>
                  )}
                  
                  {step.highlight && (
                    <code className="mt-2.5 inline-block bg-[#2563FF]/10 rounded-md px-2.5 py-1 text-xs font-mono text-[#3B82FF] border border-[#2563FF]/20 select-all">
                      {step.highlight}
                    </code>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Quick start CTA */}
          <div className="text-center">
            <Button 
              size="lg" 
              className="h-12 px-7 text-sm font-semibold bg-white text-black hover:bg-white/90 rounded-xl transition-all shadow-[0_0_24px_rgba(255,255,255,0.15)] active:scale-98"
              asChild
            >
              <a 
                href="https://chromewebstore.google.com/detail/scrollstamp/hlnolmjmfgdbaidlgkmfdpnajpemimcb" 
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleDownloadClick}
              >
                <Chrome className="w-4 h-4 mr-2 text-black/80" />
                <span>Add to Chrome</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
