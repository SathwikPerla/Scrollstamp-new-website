import { Scroll, Bookmark, RotateCcw } from "lucide-react";

const steps = [
  {
    stepNum: "01",
    icon: Scroll,
    title: "Browse & Scroll",
    description: "Read through your AI conversation or web content naturally as you build.",
  },
  {
    stepNum: "02",
    icon: Bookmark,
    title: "Select & Bookmark",
    description: "Simply select any word, sentence, or response text to save your exact position.",
  },
  {
    stepNum: "03",
    icon: RotateCcw,
    title: "Return Instantly",
    description: "Click any saved checkpoint in your index panel to scroll right back.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-24 relative border-t border-white/[0.08] bg-[#05060B]" id="how-it-works">
      <div className="container relative z-10 px-4 mx-auto max-w-5xl">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
              Three Simple Steps
            </h2>
            <p className="text-base text-[#A7ADBE] max-w-lg mx-auto">
              How ScrollStamp indexes and organizes your long LLM threads.
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div 
                key={step.title} 
                className="apple-glass apple-glass-hover rounded-2xl p-7 text-left relative flex flex-col justify-between"
              >
                {/* Step number badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold text-[#3B82FF] px-2.5 py-1 rounded-md bg-[#2563FF]/10 border border-[#2563FF]/20">
                    {step.stepNum}
                  </span>
                  <div className="w-8 h-8 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white/80">
                    <step.icon className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white tracking-tight mb-2">{step.title}</h3>
                  <p className="text-xs text-[#A7ADBE] leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
