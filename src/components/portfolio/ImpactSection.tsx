import { SectionHeader } from "./SectionHeader";
import { ScrollReveal } from "./ScrollReveal";
import { TrendingUp, Globe, Users, Zap, BarChart3, Shield } from "lucide-react";

const impactMetrics = [
  { icon: TrendingUp, metric: "18%", label: "Forecast accuracy", context: "ML deal scoring in Salesforce", category: "AI/ML" },
  { icon: Shield, metric: "15%", label: "Late stage revenue leakage reduced", context: "Pipeline risk models", category: "Revenue" },
  { icon: Zap, metric: "22%", label: "Signal precision improved", context: "AI evaluation frameworks", category: "Evals" },
  { icon: Globe, metric: "30%", label: "Platform complexity reduced", context: "API first data platform", category: "Platform" },
  { icon: Users, metric: "250K+", label: "Users served", context: "Member facing platforms", category: "Reach" },
  { icon: BarChart3, metric: "20%", label: "Backlog reduction", context: "Predictive models", category: "Ops" },
];

const strategicImpacts = [
  { title: "AI and Agentic Products", status: "active", items: ["Launched an agentic account review product from requirements to production.", "Defined tool contracts, approval gates, failure modes and observability for agentic enterprise workflows."] },
  { title: "ML in the Workflow", status: "deployed", items: ["Embedded ML deal scoring and pipeline risk models inside Salesforce for 3,000+ users.", "Improved forecast accuracy 18% and reduced late stage revenue leakage 15%."] },
  { title: "AI Quality and Evaluation", status: "deployed", items: ["Built evaluation frameworks for AI and ML data quality.", "Set accuracy, latency and reliability thresholds on fixed eval sets, improving signal precision 22%."] },
];

export function ImpactSection() {
  return (
    <section id="impact" className="section-padding relative">
      <div className="section-container">
        <ScrollReveal>
          <SectionHeader title="Company-Level Impact" subtitle="Resume backed outcomes across AI, ML, data platforms and member facing products." systemLabel="// metrics.dashboard" />
        </ScrollReveal>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-16">
          {impactMetrics.map((item, index) => (
            <ScrollReveal key={item.label} delay={index * 0.08}>
              <div className="widget group">
                <div className="widget-header">
                  <span className="widget-header-title flex items-center gap-1.5">
                    <item.icon className="h-3 w-3" />
                    {item.category}
                  </span>
                  <div className="status-dot status-dot--active" />
                </div>
                <div className="widget-body">
                  <div className="metric-value mb-1">{item.metric}</div>
                  <div className="text-sm font-semibold text-foreground mb-1">{item.label}</div>
                  <div className="text-xs text-muted-foreground">{item.context}</div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        
        <div className="grid md:grid-cols-3 gap-4">
          {strategicImpacts.map((category, i) => (
            <ScrollReveal key={category.title} delay={i * 0.12}>
              <div className="widget h-full">
                <div className="widget-header">
                  <span className="widget-header-title">{category.title}</span>
                  <span className={`status-pill status-pill--${category.status}`}>
                    <div className={`status-dot ${category.status === 'active' ? 'status-dot--active' : 'status-dot--online'}`} />
                    {category.status}
                  </span>
                </div>
                <div className="widget-body">
                  <ul className="space-y-3">
                    {category.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
