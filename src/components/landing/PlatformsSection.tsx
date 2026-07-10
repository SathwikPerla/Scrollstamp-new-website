import { Globe, AlertTriangle, ShieldAlert } from "lucide-react";

export function PlatformsSection() {
  return (
    <section className="py-24 relative border-t border-border/40 bg-background/50">
      <div className="container px-4 mx-auto max-w-5xl">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-foreground">
              Works With Your Favorite AI Tools
            </h2>
            <p className="text-lg text-muted-foreground">
              Deep, native support for popular developer assistants and conversation interfaces.
            </p>
          </div>

          {/* Platform Grid matching user screenshot */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* ChatGPT */}
            <div className="bg-card border border-border/80 rounded-xl p-10 flex flex-col items-center justify-center hover:border-border hover:shadow-sm transition-all cursor-default min-h-[180px]">
              <div className="mb-4">
                <svg viewBox="0 0 16 16" className="w-12 h-12 text-[#10a37f]" fill="currentColor">
                  <path d="M14.949 6.547a3.94 3.94 0 0 0-.348-3.273 4.11 4.11 0 0 0-4.4-1.934A4.1 4.1 0 0 0 8.423.2 4.15 4.15 0 0 0 6.305.086a4.1 4.1 0 0 0-1.891.948 4.04 4.04 0 0 0-1.158 1.753 4.1 4.1 0 0 0-1.563.679A4 4 0 0 0 .554 4.72a3.99 3.99 0 0 0 .502 4.731 3.94 3.94 0 0 0 .346 3.274 4.11 4.11 0 0 0 4.402 1.933c.382.425.852.764 1.377.995.526.231 1.095.35 1.67.346 1.78.002 3.358-1.132 3.901-2.804a4.1 4.1 0 0 0 1.563-.68 4 4 0 0 0 1.14-1.253 3.99 3.99 0 0 0-.506-4.716m-6.097 8.406a3.05 3.05 0 0 1-1.945-.694l.096-.054 3.23-1.838a.53.53 0 0 0 .265-.455v-4.49l1.366.778q.02.011.025.035v3.722c-.003 1.653-1.361 2.992-3.037 2.996m-6.53-2.75a2.95 2.95 0 0 1-.36-2.01l.095.057L5.29 12.09a.53.53 0 0 0 .527 0l3.949-2.246v1.555a.05.05 0 0 1-.022.041L6.473 13.3c-1.454.826-3.311.335-4.15-1.098m-.85-6.94A3.02 3.02 0 0 1 3.07 3.949v3.785a.51.51 0 0 0 .262.451l3.93 2.237-1.366.779a.05.05 0 0 1-.048 0L2.585 9.342a2.98 2.98 0 0 1-1.113-4.094zm11.216 2.571L8.747 5.576l1.362-.776a.05.05 0 0 1 .048 0l3.265 1.86a3 3 0 0 1 1.173 1.207 2.96 2.96 0 0 1-.27 3.2 3.05 3.05 0 0 1-1.36.997V8.279a.52.52 0 0 0-.276-.445m1.36-2.015-.097-.057-3.226-1.855a.53.53 0 0 0-.53 0L6.249 6.153V4.598a.04.04 0 0 1 .019-.04L9.533 2.7a3.07 3.07 0 0 1 3.257.139c.474.325.843.778 1.066 1.303.223.526.289 1.103.191 1.664zM5.503 8.575 4.139 7.8a.05.05 0 0 1-.026-.037V4.049c0-.57.166-1.127.476-1.607s.752-.864 1.275-1.105a3.08 3.08 0 0 1 0 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-base text-foreground">ChatGPT</h3>
            </div>

            {/* Claude */}
            <div className="bg-card border border-border/80 rounded-xl p-10 flex flex-col items-center justify-center hover:border-border hover:shadow-sm transition-all cursor-default min-h-[180px]">
              <div className="mb-4">
                <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#da7756]" fill="currentColor">
                  <path d="m3.127 10.604 3.135-1.76.053-.153-.053-.085H6.11l-.525-.032-1.791-.048-1.554-.065-1.505-.08-.38-.081L0 7.832l.036-.234.32-.214.455.04 1.009.069 1.513.105 1.097.064 1.626.17h.259l.036-.105-.089-.065-.068-.064-1.566-1.062-1.695-1.121-.887-.646-.48-.327-.243-.306-.104-.67.435-.48.585.04.15.04.593.456 1.267.981 1.654 1.218.242.202.097-.068.012-.049-.109-.181-.9-1.626-.96-1.655-.428-.686-.113-.411a2 2 0 0 1-.068-.484l.496-.674L4.446 0l.662.089.279.242.411.94.666 1.48 1.033 2.014.302.597.162.553.06.17h.105v-.097l.085-1.134.157-1.392.154-1.792.052-.504.25-.605.497-.327.387.186.319.456-.045.294-.19 1.23-.37 1.93-.243 1.29h.142l.161-.16.654-.868 1.097-1.372.484-.545.565-.601.363-.287h.686l.505.751-.226.775-.707.895-.585.759-.839 1.13-.524.904.048.072.125-.012 1.897-.403 1.024-.186 1.223-.21.553.258.06.263-.218.536-1.307.323-1.533.307-2.284.54-.028.02.032.04 1.029.098.44.024h1.077l2.005.15.525.346.315.424-.053.323-.807.411-3.631-.863-.872-.218h-.12v.073l.726.71 1.331 1.202 1.667 1.55.084.383-.214.302-.226-.032-1.464-1.101-.565-.497-1.28-1.077h-.084v.113l.295.432 1.557 2.34.08.718-.112.234-.404.141-.444-.08-.911-1.28-.94-1.44-.759-1.291-.093.053-.448 4.821-.21.246-.484.186-.403-.307-.214-.496.214-.98.258-1.28.21-1.016.19-1.263.112-.42-.008-.028-.092.012-.953 1.307-1.448 1.957-1.146 1.227-.274.109-.477-.247.045-.44.266-.39 1.586-2.018.956-1.25.617-.723-.004-.105h-.036l-4.212Z"/>
                </svg>
              </div>
              <h3 className="font-bold text-base text-foreground">Claude</h3>
            </div>

            {/* Gemini */}
            <div className="bg-card border border-border/80 rounded-xl p-10 flex flex-col items-center justify-center hover:border-border hover:shadow-sm transition-all cursor-default min-h-[180px]">
              <div className="mb-4 flex items-center justify-center gap-1">
                <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">Gemini</span>
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-indigo-400 fill-indigo-400 shrink-0" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81"/>
                </svg>
              </div>
              <h3 className="font-bold text-base text-foreground">Gemini</h3>
            </div>

            {/* Perplexity */}
            <div className="bg-card border border-border/80 rounded-xl p-10 flex flex-col items-center justify-center hover:border-border hover:shadow-sm transition-all cursor-default min-h-[180px]">
              <div className="mb-4 flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#da7a5b] shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="9" strokeOpacity="0.2" />
                  <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M5.6 18.4L18.4 5.6" strokeWidth="1.2" />
                </svg>
                <span className="text-base font-bold tracking-tight text-neutral-300">perplexity</span>
              </div>
              <h3 className="font-bold text-base text-foreground">Perplexity</h3>
            </div>

            {/* Grok */}
            <div className="bg-card border border-border/80 rounded-xl p-10 flex flex-col items-center justify-center hover:border-border hover:shadow-sm transition-all cursor-default min-h-[180px]">
              <div className="mb-4">
                <div className="bg-white text-black px-4 py-1.5 rounded-lg flex items-center gap-1.5 border border-neutral-200 shadow-sm">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 text-black" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M8 16l8-8" strokeLinecap="round" />
                  </svg>
                  <span className="font-extrabold tracking-tight text-xs">Grok</span>
                </div>
              </div>
              <h3 className="font-bold text-base text-foreground">Grok</h3>
            </div>

            {/* DeepSeek */}
            <div className="bg-card border border-border/80 rounded-xl p-10 flex flex-col items-center justify-center hover:border-border hover:shadow-sm transition-all cursor-default min-h-[180px]">
              <div className="mb-4 flex items-center gap-2 text-[#3b82f6]">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current shrink-0" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-10 10-10-4.48-10-10-10zm0 14c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
                </svg>
                <span className="text-base font-extrabold tracking-tight text-[#3b82f6]">deepseek</span>
              </div>
              <h3 className="font-bold text-base text-foreground">DeepSeek</h3>
            </div>
          </div>

          {/* Universal Badge */}
          <div className="bg-card border border-border rounded-xl p-6 text-center mb-6 shadow-sm">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Globe className="w-4 h-4 text-primary" />
              <h3 className="text-sm font-bold text-foreground">Works on All Webpages</h3>
            </div>
            <p className="text-xs text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Enable Scroll Mode on any blog post, API documentation, or repository file to return to your scroll point automatically.
            </p>
          </div>

          {/* Disclaimers */}
          <div className="space-y-3">
            <div className="bg-muted/40 border border-border/80 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <ShieldAlert className="w-4.5 h-4.5 text-muted-foreground shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-foreground">A Note on Sandboxed Editors</p>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    Some tools running inside strict iframe containers or custom WebGL components may not permit DOM insertion. The extension will save your context link securely, but automatic jump-to-position behaves as a fallback on these pages.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
