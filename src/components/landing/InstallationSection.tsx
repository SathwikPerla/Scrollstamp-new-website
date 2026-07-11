import { Download, Settings, ToggleRight, FolderOpen, Pin, Copy, Check } from "lucide-react";
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
    <section className="py-24 relative border-t border-border/40 bg-background/50" id="install">
      <div className="container px-4 mx-auto max-w-4xl">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              Developer Installation
            </h2>
            <p className="text-lg text-muted-foreground">
              Load the hybrid unpacked extension locally in under a minute.
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-4 mb-12">
            {steps.map((step, index) => (
              <div 
                key={step.title}
                className="bg-card border border-border/80 rounded-xl p-6 flex items-start gap-4 hover:border-border hover:shadow-sm transition-all"
              >
                {/* Step number */}
                <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 font-bold text-xs text-primary font-mono">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className="w-10 h-10 rounded-lg bg-muted border border-border/60 flex items-center justify-center shrink-0">
                  <step.icon className="w-5 h-5 text-muted-foreground" />
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-sm text-foreground">{step.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{step.description}</p>
                  
                  {step.code && (
                    <div className="mt-3 flex items-center gap-2">
                      <code className="flex-1 bg-muted/60 rounded-md px-3.5 py-2 text-xs font-mono text-primary border border-border/60 overflow-x-auto select-all">
                        {step.code}
                      </code>
                      <Button 
                        variant="ghost" 
                        size="icon"
                        className="shrink-0 w-8 h-8 hover:bg-muted/80"
                        onClick={copyCommand}
                      >
                        {copied ? (
                          <Check className="w-3.5 h-3.5 text-green-500" />
                        ) : (
                          <Copy className="w-3.5 h-3.5 text-muted-foreground" />
                        )}
                      </Button>
                    </div>
                  )}
                  
                  {step.highlight && (
                    <code className="mt-2.5 inline-block bg-primary/5 rounded px-2.5 py-1 text-xs font-mono text-primary border border-primary/20 select-all">
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
              className="bg-primary text-primary-foreground font-semibold px-8 py-6 shadow-md hover:opacity-90"
              asChild
            >
              <a 
                href="https://github.com/SathwikPerla/ScrollStamp/archive/refs/heads/v2.1-hybrid.zip" 
                rel="noopener noreferrer"
                onClick={handleDownloadClick}
              >
                <Download className="w-4 h-4 mr-2" />
                Get Extension Zip
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
