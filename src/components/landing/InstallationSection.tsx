import { Download, Settings, ToggleRight, FolderOpen, Pin, Copy, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: Download,
    title: "Clone or Download",
    description: "Get the extension from GitHub",
    code: "git clone -b v2.1-hybrid https://github.com/SathwikPerla/ScrollStamp.git"
  },
  {
    icon: Settings,
    title: "Open Extensions",
    description: "Navigate to chrome://extensions in your browser",
    highlight: "chrome://extensions"
  },
  {
    icon: ToggleRight,
    title: "Enable Developer Mode",
    description: "Toggle the switch in the top right corner"
  },
  {
    icon: FolderOpen,
    title: "Load Unpacked",
    description: "Click 'Load unpacked' and select the extension folder"
  },
  {
    icon: Pin,
    title: "Pin ScrollStamp",
    description: "Click the puzzle icon and pin ScrollStamp for easy access"
  },
];

export function InstallationSection() {
  const [copied, setCopied] = useState(false);

  const copyCommand = () => {
    navigator.clipboard.writeText("git clone -b v2.1-hybrid https://github.com/SathwikPerla/ScrollStamp.git");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 relative" id="install">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Easy <span className="gradient-text">Installation</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Get up and running in under a minute.
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-4 mb-12">
            {steps.map((step, index) => (
              <div 
                key={step.title}
                className="glass rounded-xl p-6 flex items-start gap-4 hover:scale-[1.02] transition-transform"
              >
                {/* Step number */}
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 font-bold text-primary">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                  
                  {step.code && (
                    <div className="mt-3 flex items-center gap-2">
                      <code className="flex-1 bg-background/50 rounded-lg px-4 py-2 text-sm font-mono text-primary border border-border/50 overflow-x-auto">
                        {step.code}
                      </code>
                      <Button 
                        variant="ghost" 
                        size="icon"
                        className="shrink-0"
                        onClick={copyCommand}
                      >
                        {copied ? (
                          <Check className="w-4 h-4 text-green-500" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                  )}
                  
                  {step.highlight && (
                    <code className="mt-2 inline-block bg-background/50 rounded px-2 py-1 text-sm font-mono text-accent border border-border/50">
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
              className="bg-gradient-to-r from-primary to-blue-500 hover:opacity-90 glow"
              asChild
            >
              <a href="https://github.com/SathwikPerla/ScrollStamp/tree/v2.1-hybrid" target="_blank" rel="noopener noreferrer">
                <Download className="w-5 h-5 mr-2" />
                Download from GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
