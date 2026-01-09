import { Scroll, Pin, RotateCcw, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Scroll,
    title: "Browse & Scroll",
    description: "Read through your AI conversation or web content as usual",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Pin,
    title: "Click the Pin",
    description: "Tap the floating button to bookmark the current position or message",
    color: "from-accent to-orange-500"
  },
  {
    icon: RotateCcw,
    title: "Return Instantly",
    description: "Click any bookmark to jump right back to that exact spot",
    color: "from-primary to-purple-500"
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-24 relative" id="how-it-works">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Three simple steps to never lose your place again.
            </p>
          </div>

          {/* Steps */}
          <div className="relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-accent to-primary -translate-y-1/2" />
            
            <div className="grid md:grid-cols-3 gap-8 relative">
              {steps.map((step, index) => (
                <div key={step.title} className="relative">
                  {/* Step card */}
                  <div className="glass rounded-2xl p-8 text-center hover:scale-105 transition-transform relative z-10">
                    {/* Step number */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    
                    {/* Icon */}
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto mb-6 mt-2`}>
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>

                  {/* Arrow (mobile) */}
                  {index < steps.length - 1 && (
                    <div className="flex justify-center my-4 md:hidden">
                      <ArrowRight className="w-6 h-6 text-muted-foreground rotate-90" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
