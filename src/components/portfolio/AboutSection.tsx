import { SectionHeader } from "./SectionHeader";
import { ScrollReveal } from "./ScrollReveal";
import { Target, Layers, TrendingUp } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="section-padding relative">
      <div className="section-container">
        <ScrollReveal>
          <SectionHeader
            title="Executive Summary"
            subtitle="Product leadership with hands on execution"
            systemLabel="// module.about"
          />
        </ScrollReveal>
        
        <div className="max-w-4xl">
          <ScrollReveal delay={0.1}>
            <p className="text-body text-xl text-foreground leading-relaxed mb-8">
              I am a <span className="text-primary font-semibold">product manager</span> who builds products that reshape how organizations operate. My work spans the full spectrum, from <span className="text-primary font-semibold">defining company-level platform strategy</span> to hands-on execution with engineering, data science, and GTM teams.
            </p>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-4 mb-10">
            {[
              { icon: Target, title: "Scope & Scale", text: "Platforms driving $10M+ ARR across 30+ markets. 250K+ users served. Multi-year roadmaps with VP-level stakeholder alignment.", status: "online" },
              { icon: Layers, title: "Complexity & Ambiguity", text: "HIPAA-regulated environments. ML/AI integration at scale. Enterprise sales cycles with multi-stakeholder navigation.", status: "active" },
              { icon: TrendingUp, title: "Influence & Leverage", text: "Cross-functional leadership spanning Product, Engineering, Data, Sales, Finance, Legal. Building organizational capability, not just features.", status: "online" },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={0.15 * (i + 1)}>
                <div className="widget h-full">
                  <div className="widget-header">
                    <span className="widget-header-title">{item.title}</span>
                    <div className={`status-dot status-dot--${item.status}`} />
                  </div>
                  <div className="widget-body">
                    <item.icon className="h-7 w-7 text-primary mb-3" />
                    <p className="text-sm text-muted-foreground">{item.text}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          
          <ScrollReveal delay={0.3}>
            <div className="vp-takeaway mt-8">
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">What differentiates me:</strong> I don't just ship products—I build the strategic frameworks, organizational processes, and data infrastructure that enable teams to ship <em>better</em> products, faster. My impact compounds because I invest in leverage.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
