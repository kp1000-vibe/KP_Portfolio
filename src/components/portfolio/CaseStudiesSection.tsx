import { SectionHeader } from "./SectionHeader";
import { ScrollReveal } from "./ScrollReveal";
import { CaseStudyCard } from "./CaseStudyCard";

interface DesignStudy {
  title: string;
  problem: string;
  description?: string;
  stack: string[];
  positioning: string;
}

const studies: DesignStudy[] = [
  {
    title: "AI Agent Evaluation Dashboard",
    problem: "Teams ship agents with no standing measure of whether quality moved after a change.",
    description: "Tracks agent task accuracy against a standing test set over time. It surfaces regressions per change.",
    stack: [],
    positioning: "Evals as a gate, not a launch day slide.",
  },
  {
    title: "Surgical Account Intelligence Agent",
    problem: "Commercial teams in medtech read account signals manually across scattered systems.",
    stack: ["Anthropic API"],
    positioning: "The AI deal scoring pattern I shipped in Salesforce, rebuilt agent first.",
  },
  {
    title: "Enterprise AI Agent Concierge",
    problem: "Employees do not know which internal agent or tool solves their task.",
    stack: [],
    positioning: "Routing quality is a product problem, not a prompt problem.",
  },
  {
    title: "Trust Calibration Onboarding Flow",
    problem: "Users either over trust an agent on day one or abandon it after one bad answer.",
    stack: [],
    positioning: "Autonomy is earned, and the UI should say so.",
  },
  {
    title: "AgentOS",
    problem: "Enterprises will run many agents and have no shared surface to publish, discover, and govern them.",
    description: "Marketplace concept for publishing and discovering enterprise agents with per agent metadata and permissions.",
    stack: ["React"],
    positioning: "Platform thinking, applied to agents.",
  },
  {
    title: "Agentic AI Program",
    problem: "Most agent portfolios prove you can build, not that you can set direction others follow.",
    description: "Five artifacts pair strategy with working concepts across interoperability, responsible release, unit economics, cross surface experience, and autonomy maturity.",
    stack: ["LangGraph", "MCP", "local models"],
    positioning: "Frameworks other teams can reuse.",
  },
];

export function CaseStudiesSection() {
  return (
    <section id="work" className="section-padding relative">
      <div className="section-container">
        <ScrollReveal>
          <SectionHeader
            title="Design Studies and Frameworks"
            subtitle="Product thinking on agent systems. All studies use synthetic, public or self generated data only."
            systemLabel="// design.studies"
          />
        </ScrollReveal>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {studies.map((s, index) => (
            <ScrollReveal key={s.title} delay={(index % 2) * 0.08}>
              <CaseStudyCard {...s} index={index} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
