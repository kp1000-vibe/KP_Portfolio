import { ScrollReveal } from "./ScrollReveal";
import { SectionHeader } from "./SectionHeader";
import { Rocket, Users, Layers } from "lucide-react";

export function LookingForSection() {
  return (
    <section className="section-padding relative">
      <div className="section-container">
        <ScrollReveal>
          <SectionHeader title="What I'm Looking For" subtitle="The problems, teams, and environments where I create the most value." systemLabel="// next.mission" />
        </ScrollReveal>
        
        <div className="grid md:grid-cols-3 gap-4 max-w-5xl">
          {[
            { icon: Layers, title: "Platform-Scale Problems", text: "I'm drawn to problems where the solution isn't a feature—it's a platform. Where the leverage comes from enabling other teams, not just shipping faster. AI infrastructure, data platforms, developer tools, enterprise systems that touch millions of users.", status: "seeking" },
            { icon: Users, title: "Senior Leadership Partners", text: "I do my best work with executives who want a strategic partner, not an order-taker. Leaders who create clarity about what matters, give autonomy to own outcomes, and value direct feedback.", status: "seeking" },
            { icon: Rocket, title: "Compounding Impact", text: "I want to work on things that matter at scale. Where technical depth meets human impact. Where the complexity is genuine—not manufactured by organizational dysfunction. Senior level problems where the stakes justify the investment.", status: "seeking" },
          ].map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.12}>
              <div className="widget h-full">
                <div className="widget-header">
                  <span className="widget-header-title">{item.title}</span>
                  <span className="status-pill status-pill--active">
                    <div className="status-dot status-dot--active" />
                    {item.status}
                  </span>
                </div>
                <div className="widget-body">
                  <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        
        <ScrollReveal delay={0.3}>
          <div className="vp-takeaway mt-10 max-w-3xl">
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Why this matters:</strong> I've spent 15+ years building the judgment to know which problems are worth solving and which solutions will actually scale. I'm looking for an environment that values that judgment and gives me the scope to apply it at the highest level.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
