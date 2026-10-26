import { SectionHeader } from "./SectionHeader";
import { ScrollReveal } from "./ScrollReveal";
import { SkillCategory } from "./SkillCategory";

const skillCategories = [
  { title: "Agentic Systems", status: "core", skills: ["Agent architecture", "Tool calling", "Orchestration", "MCP", "Multi agent workflows", "Human in the loop", "Approval gates"] },
  { title: "AI Product Quality", status: "core", skills: ["LLM evaluation", "Fixed eval sets", "Acceptance criteria", "Reliability and latency", "Prompt injection defense", "Observability"] },
  { title: "AI Developer Workflow", status: "active", skills: ["Claude Code", "Claude API", "AI assisted development", "Automated testing"] },
  { title: "Platforms and APIs", status: "active", skills: ["API first architecture", "Enterprise integrations", "REST", "Postgres", "Salesforce", "Snowflake", "Oracle"] },
  { title: "Product Leadership", status: "core", skills: ["0 to 1 strategy", "Roadmaps and PRDs", "Customer discovery", "Executive alignment", "Cross functional leadership"] },
  { title: "Technical Foundation", status: "active", skills: ["SQL", "Python", "ETL", "Data pipelines", "Figma", "Jira", "Tableau"] },
];

export function SkillsSection() {
  return (
    <section className="section-padding relative">
      <div className="section-container">
        <ScrollReveal>
          <SectionHeader title="Capabilities" subtitle="The strategic and execution skills I bring, grounded in 15+ years of shipping." systemLabel="// skills.registry" />
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 gap-4">
          {skillCategories.map((category, i) => (
            <ScrollReveal key={category.title} delay={i * 0.1}>
              <div className="widget h-full">
                <div className="widget-header">
                  <span className="widget-header-title">{category.title}</span>
                  <span className={`status-pill status-pill--${category.status === 'core' ? 'deployed' : 'active'}`}>
                    <div className={`status-dot ${category.status === 'core' ? 'status-dot--online' : 'status-dot--active'}`} />
                    {category.status}
                  </span>
                </div>
                <div className="widget-body">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span key={skill} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
