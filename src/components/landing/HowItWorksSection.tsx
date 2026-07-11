import { Scroll, Bookmark, RotateCcw, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Scroll,
    title: "Browse & Scroll",
    description: "Read through your AI conversation or web content as usual.",
    color: "bg-primary/10 border-primary/20 text-primary"
  },
  {
    icon: Bookmark,
    title: "Select & Bookmark",
    description: "Select any word or sentence, then click the bookmark icon that appears.",
    color: "bg-accent/10 border-accent/20 text-accent"
  },
  {
    icon: RotateCcw,
    title: "Return Instantly",
    description: "Click any bookmark in your index to scroll right back.",
    color: "bg-emerald-500/10 border-emerald-500/20 text-emerald-500"
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-24 relative border-t border-border/40" id="how-it-works">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              Three Simple Steps
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              How ScrollStamp keeps your browser contexts organized.
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                {/* Step card */}
                <div className="bg-card border border-border/85 rounded-xl p-8 text-center hover:border-border transition-all hover:translate-y-[-2px] shadow-sm">
                  {/* Step number */}
                  <div className="absolute top-4 left-4 w-6 h-6 rounded-full bg-muted border border-border flex items-center justify-center text-xs font-bold font-mono">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl ${step.color} border flex items-center justify-center mx-auto mb-6 mt-2`}>
                    <step.icon className="w-6 h-6" />
                  </div>
                  
                  <h3 className="text-lg font-bold tracking-tight mb-2">{step.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
