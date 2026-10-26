import { ScrollReveal } from "./ScrollReveal";
import { ResumeButton } from "./ResumeButton";
import { ArrowUpRight, Linkedin, Mail, ExternalLink, Rocket, Github } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="section-padding relative">
      <div className="section-container">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <div className="widget">
              <div className="widget-header">
                <span className="widget-header-title">// initiate_connection</span>
                <span className="status-pill status-pill--online">
                  <div className="status-dot status-dot--online" />
                  Available
                </span>
              </div>
              <div className="widget-body text-center py-10">
                <h2 className="text-display text-3xl md:text-4xl text-foreground mb-6">
                  Let us talk about Senior and Staff AI PM roles.
                </h2>
                <p className="text-body text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
                  I'm exploring roles where I can drive company-level product strategy at scale. If you're solving hard problems with exceptional teams, I'd welcome the conversation.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <a href="mailto:kunal.patro@gmail.com" className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-primary-foreground transition-all duration-300 hover:scale-105 glow-primary" style={{ background: 'var(--accent-gradient)' }}>
                    <Mail className="h-4 w-4" />
                    kunal.patro@gmail.com
                  </a>
                  <ResumeButton className="inline-flex items-center gap-2 px-5 py-3 border border-border/50 rounded-xl font-semibold text-sm text-foreground bg-card/50 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 font-mono" />
                  <a href="https://autopm-pilot.lovable.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 border border-border/50 rounded-xl font-semibold text-sm text-foreground bg-card/50 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 font-mono">
                    <Rocket className="h-4 w-4" /> PM Autopilot <ArrowUpRight className="h-3 w-3" />
                  </a>
                  <a href="https://linkedin.com/in/kunalpatro" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 border border-border/50 rounded-xl font-semibold text-sm text-foreground bg-card/50 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 font-mono">
                    <Linkedin className="h-4 w-4" /> LinkedIn <ArrowUpRight className="h-3 w-3" />
                  </a>
                  <a href="https://www.notion.so/Welcome-to-Notion-2ffd37cec7cc80d8966cd4f4b10d2e22?source=copy_link" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 border border-border/50 rounded-xl font-semibold text-sm text-foreground bg-card/50 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 font-mono">
                    <ExternalLink className="h-4 w-4" /> Notion <ArrowUpRight className="h-3 w-3" />
                  </a>
                  <a href="https://github.com/kp1000-vibe" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 border border-border/50 rounded-xl font-semibold text-sm text-foreground bg-card/50 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 font-mono">
                    <Github className="h-4 w-4" /> GitHub <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
