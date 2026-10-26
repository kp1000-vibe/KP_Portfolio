import { SectionHeader } from "./SectionHeader";
import { ScrollReveal } from "./ScrollReveal";
import { PhilosophyCard } from "./PhilosophyCard";
import { Compass, Gauge, Network, Zap } from "lucide-react";

export function PhilosophySection() {
  return (
    <section id="philosophy" className="section-padding relative">
      <div className="section-container">
        <ScrollReveal>
          <SectionHeader
            title="Operating Principles"
            subtitle="How I think about strategy, execution, and organizational impact at senior level."
            systemLabel="// core.principles"
          />
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 gap-4 mb-16">
          {[
            { icon: Compass, title: "Strategic Clarity Over Feature Velocity", description: "I invest heavily in problem framing before solution design. The best product decisions I've made came from asking 'what would have to be true?' rather than 'what should we build?' When I join a problem space, I map the system first—user segments, data flows, organizational incentives, competitive dynamics. Speed comes from clarity, not from rushing." },
            { icon: Gauge, title: "Optimize for Leverage, Not Output", description: "I measure my impact by what I enable others to do, not just what I ship. Building a prioritization framework that prevents 50 future debates is more valuable than shipping one more feature. I ask: 'If I solve this once, how many times does it pay dividends?' This compounds over careers." },
            { icon: Network, title: "Influence Architecture", description: "At senior level, most of my impact comes through people I don't manage. I build trust by being genuinely useful—bringing structured thinking to ambiguous problems, creating artifacts that unlock decisions, and making other teams' work easier. Authority follows influence, not the other way around." },
            { icon: Zap, title: "Reversible vs. Irreversible Thinking", description: "I categorize decisions by their reversibility. For reversible decisions, I bias toward action and fast feedback loops—we'll learn more from trying than from debating. For irreversible decisions, I invest heavily in framing and stakeholder alignment. Most debates are really about which category a decision belongs to." },
          ].map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.1}>
              <PhilosophyCard icon={item.icon} title={item.title} description={item.description} />
            </ScrollReveal>
          ))}
        </div>
        
        <div className="section-divider mb-16" />
        
        <ScrollReveal>
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="sys-label">// execution.at_scale</span>
              <span className="status-pill status-pill--online">
                <div className="status-dot status-dot--online" />
                Proven
              </span>
            </div>
            <h3 className="text-display text-2xl text-foreground mb-8">Execution at Scale</h3>
            <div className="grid md:grid-cols-2 gap-4 text-body">
              {[
                { title: "Driving Alignment Across Orgs", text: "At Intuitive, I navigated Product, Engineering, Data Science, Sales, Finance, Legal, and GTM simultaneously on platform decisions affecting $10M+ ARR. I create alignment by making constraints explicit—DVF-based business cases, clear prioritization frameworks, and roadmaps that show what we're saying no to." },
                { title: "Navigating Ambiguity", text: "Ambiguity is the raw material of product work at senior level. I lean into it by defining success criteria early, breaking problems into testable hypotheses, and creating forcing functions for decisions." },
                { title: "Building Organizational Capability", text: "My best work creates leverage for the teams that come after me. The data infrastructure I built at Hitachi GlobalLogic didn't just solve immediate analytics needs—it enabled a generation of predictive models that other PMs built on." },
                { title: "Managing Up & Across", text: "I treat executive stakeholders as customers with jobs-to-be-done. They need confidence in strategy, visibility into risk, and ROI stories for their own stakeholders. I build this trust by being direct about tradeoffs." },
              ].map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 0.08}>
                  <div className="widget h-full">
                    <div className="widget-header">
                      <span className="widget-header-title">{item.title}</span>
                    </div>
                    <div className="widget-body">
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
