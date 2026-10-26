import { SectionHeader } from "./SectionHeader";
import { ScrollReveal } from "./ScrollReveal";
import { TimelineItem } from "./TimelineItem";

const experiences = [
  { role: "Independent AI Product Builds", company: "Claude Code", period: "2026", description: "Designed and built AI agent systems end to end with Claude Code. See Shipped Builds.", href: "#builds", status: "active" },
  { role: "Senior Product Manager, AI and Data Platforms", company: "Intuitive Surgical", period: "Jul 2022 to Present", description: "Launched an agentic account review product to production. Embedded ML deal scoring for 3,000+ Salesforce users with 18% forecast accuracy lift and 15% less late stage revenue leakage. Built AI evaluation frameworks that improved signal precision 22%.", status: "active" },
  { role: "Lead Product Manager", company: "Hitachi GlobalLogic", period: "2021 to 2022", description: "Owned 0 to 1 strategy for a unified data platform consolidating 10+ systems including Salesforce and Oracle into one API first layer, reducing platform complexity 30%.", status: "deployed" },
  { role: "Product Manager", company: "Blue Shield of California", period: "2016 to 2021", description: "Owned product strategy for member facing platforms serving 250K+ Medicaid and SMB users on a six week release cadence. Predictive models reduced backlogs 20% and raised satisfaction 14%.", status: "deployed" },
  { role: "Product Specialist", company: "Cognizant Technology Solutions", period: "2011 to 2016", description: "Designed and scaled healthcare data interfaces, ETL and integrations, improving data throughput about 30%.", status: "deployed" },
];

export function ExperienceSection() {
  return (
    <section className="section-padding relative">
      <div className="section-container">
        <ScrollReveal>
          <SectionHeader title="Career Trajectory" subtitle="15+ years of increasing scope across enterprise software, healthcare and data platforms." systemLabel="// career.timeline" />
        </ScrollReveal>
        <div className="max-w-3xl">
          {experiences.map((exp, index) => {
            const item = <TimelineItem role={exp.role} company={exp.company} period={exp.period} description={exp.description} isLast={index === experiences.length - 1} status={exp.status} />;
            return (
              <ScrollReveal key={`${exp.company}-${exp.role}`} delay={index * 0.1}>
                {exp.href ? <a href={exp.href} className="block transition-opacity hover:opacity-90">{item}</a> : item}
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
