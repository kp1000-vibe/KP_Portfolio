import { ArrowDown, Linkedin, Mail, Rocket, ExternalLink, Github, Terminal, Cpu, Signal } from "lucide-react";
import { useEffect, useState } from "react";
import { ResumeButton } from "./ResumeButton";

function AnimatedCounter({ target, suffix = "" }: { target: string; suffix?: string }) {
  const [display, setDisplay] = useState("—");
  useEffect(() => {
    const timer = setTimeout(() => setDisplay(target + suffix), 800 + Math.random() * 600);
    return () => clearTimeout(timer);
  }, [target, suffix]);
  return <span className="metric-value">{display}</span>;
}

export function HeroSection() {
  const [systemReady, setSystemReady] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setSystemReady(true), 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:48px_48px]" />
      
      {/* Ambient glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/6 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="section-container relative z-10 pt-24 pb-16 w-full">
        {/* System status bar */}
        <div className="flex items-center gap-3 mb-8 animate-fade-up opacity-0 stagger-1">
          <div className="status-pill status-pill--online">
            <div className="status-dot status-dot--online" />
            Online
          </div>
          <span className="sys-label">sys.senior_pm</span>
          <span className="hidden md:inline text-xs text-muted-foreground/40 font-mono">— 15yr runtime</span>
        </div>

        {/* Main headline */}
        <div className="max-w-4xl mb-10">
          <h1 className="text-display text-4xl md:text-6xl lg:text-7xl mb-6 animate-fade-up opacity-0 stagger-2">
            <span className="text-foreground">I build platforms that </span>
            <span className="gradient-text-accent">scale organizations</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-body max-w-3xl animate-fade-up opacity-0 stagger-3">
            Senior Product Manager | Agentic AI, Automation and AI Developer Workflows
          </p>
        </div>

        {/* Live metrics dashboard strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10 animate-fade-up opacity-0 stagger-4">
          {[
            { label: "Forecast accuracy lift", value: "18", suffix: "%", icon: Signal },
            { label: "Salesforce users", value: "3,000", suffix: "+", icon: Cpu },
            { label: "Systems unified", value: "10", suffix: "+", icon: Terminal },
            { label: "AI systems built with Claude Code", value: "5", suffix: "", icon: Cpu },
          ].map((m) => (
            <div key={m.label} className="widget group">
              <div className="widget-header">
                <span className="widget-header-title flex items-center gap-1.5">
                  <m.icon className="h-3 w-3" />
                  {m.label}
                </span>
                <div className="status-dot status-dot--active" />
              </div>
              <div className="widget-body py-4">
                <AnimatedCounter target={m.value} suffix={m.suffix} />
              </div>
            </div>
          ))}
        </div>

        {/* Command center card */}
        <div className="widget max-w-3xl mb-10 animate-fade-up opacity-0 stagger-4">
          <div className="widget-header">
            <span className="widget-header-title">// operating_context</span>
            <span className="status-pill status-pill--active">
              <div className="status-dot status-dot--active" />
              Active
            </span>
          </div>
          <div className="widget-body">
            <p className="text-body text-muted-foreground leading-relaxed">
              AI native Senior Product Manager with 15+ years across enterprise software, healthcare platforms, data platforms and automation. I combine product strategy with hands on technical execution, using Claude Code, agent orchestration, MCP, APIs and automated evaluation to turn ambiguous problems into working software.
            </p>
          </div>
        </div>

        {/* Action links */}
        <div className="flex flex-wrap items-center gap-3 animate-fade-up opacity-0 stagger-5">
          <a
            href="#work"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-primary-foreground transition-all duration-300 glow-primary hover:scale-105"
            style={{ background: 'var(--accent-gradient)' }}
          >
            View Strategic Work
            <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </a>
          <ResumeButton className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-border/50 bg-card/50 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 text-sm font-mono font-medium text-muted-foreground hover:text-foreground" />
          <a href="https://autopm-pilot.lovable.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-border/50 bg-card/50 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 text-sm font-mono font-medium text-muted-foreground hover:text-foreground">
            <Rocket className="h-4 w-4" /> PM Autopilot
          </a>
          <a href="https://linkedin.com/in/kunalpatro" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl border border-border/50 bg-card/50 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300">
            <Linkedin className="h-4 w-4 text-muted-foreground" />
          </a>
          <a href="https://www.notion.so/Welcome-to-Notion-2ffd37cec7cc80d8966cd4f4b10d2e22?source=copy_link" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl border border-border/50 bg-card/50 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300">
            <ExternalLink className="h-4 w-4 text-muted-foreground" />
          </a>
          <a href="https://github.com/kp1000-vibe" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-border/50 bg-card/50 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 text-sm font-mono font-medium text-muted-foreground hover:text-foreground">
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a href="mailto:kunal.patro@gmail.com" className="p-3 rounded-xl border border-border/50 bg-card/50 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300">
            <Mail className="h-4 w-4 text-muted-foreground" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-muted-foreground font-mono uppercase tracking-widest">Scroll</span>
          <ArrowDown className="h-4 w-4 text-primary" />
        </div>
      </div>
    </section>
  );
}
