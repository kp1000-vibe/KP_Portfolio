import { useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "./SectionHeader";
import { ScrollReveal } from "./ScrollReveal";

type Tag = "Agents" | "Evals" | "Platform";
type Filter = "All" | Tag;

interface Build {
  name: string;
  tagline: string;
  year: string;
  bullets: string[];
  stack: string[];
  github?: string;
  tags: Tag[];
}

const filters: Filter[] = ["All", "Agents", "Evals", "Platform"];

const builds: Build[] = [
  {
    name: "NEXUS", tagline: "Agent First CRM", year: "2026", tags: ["Platform", "Agents"],
    bullets: [
      "Derives account intelligence from email, calendar, call transcripts, support tickets and product usage instead of manual entry. Every field traces back to source evidence.",
      "54 tables, 14 connectors and 28 typed agent tools exposed through REST, MCP and CLI, with 68 automated tests.",
      "Five stage execution control layer: allow listing, permissions, schema validation, risk approval and audit. Flagged 7 at risk accounts worth $645K ARR on seeded data.",
    ],
    stack: ["Claude API", "MCP", "REST", "Postgres"],
    github: "https://github.com/kp1000-vibe/Figbolt",
  },
  {
    name: "Atelbow", tagline: "In App SaaS Guidance Agent", year: "2026", tags: ["Agents", "Evals"],
    bullets: [
      "Browser agent for Salesforce, ServiceNow and Jira that understands a user goal, finds the right UI control and guides the user step by step.",
      "Cut model context to about 2.7KB per task by extracting DOM context instead of screenshots, with server side spend controls and schema enforced privacy.",
      "21 task evaluation suite, including tests where the agent must refuse or not act.",
    ],
    stack: ["Claude API", "Browser extension", "DOM extraction"],
    github: "https://github.com/kp1000-vibe/Atelbow",
  },
  {
    name: "AI Takeaway Counter", tagline: "Restaurant Ordering Agent", year: "2026", tags: ["Agents"],
    bullets: [
      "Text and voice ordering agent that validates items against a live menu, prices server side and books pickup slots against kitchen capacity.",
      "Human takeover, role based access, audit logging and AI containment tracking.",
      "81 automated tests and 90 acceptance checks.",
    ],
    stack: ["Claude API", "WhatsApp", "Voice"],
    github: "https://github.com/kp1000-vibe/whataspp_ordering",
  },
  {
    name: "Wayfare", tagline: "Agentic Travel Optimizer", year: "2026", tags: ["Agents", "Evals"],
    bullets: [
      "Turns one natural language trip request into three fully priced end to end itineraries.",
      "Every figure labeled live, estimated or demo, with reasoning shown to the user.",
      "120 automated tests including prompt injection defenses and multi step itinerary validation.",
    ],
    stack: ["Claude API", "Agent orchestration"],
  },
  {
    name: "PriceShelf", tagline: "Retail Price Intelligence Agent", year: "2026", tags: ["Agents"],
    bullets: [
      "Compares prices across 9 US retailers and ranks by total landed cost.",
      "Matches products using GTIN consensus plus title similarity.",
      "Parallel provider calls with caching for speed.",
    ],
    stack: ["Claude API", "Parallel APIs", "Caching"],
    github: "https://github.com/kp1000-vibe/AI_Shopping_Asist",
  },
  {
    name: "Twofold", tagline: "Personal AI Assistant", year: "2026", tags: ["Agents"],
    bullets: ["Personal AI assistant built with Claude Code."],
    stack: [],
    github: "https://github.com/kp1000-vibe/Twofold_personal_assist",
  },
];

export function BuildsSection() {
  const [active, setActive] = useState<Filter>("All");
  const visible = active === "All" ? builds : builds.filter((b) => b.tags.includes(active));

  return (
    <section id="builds" className="section-padding relative">
      <div className="section-container">
        <ScrollReveal>
          <SectionHeader
            title="Shipped Builds"
            subtitle="Independent AI systems I designed and built end to end with Claude Code: discovery, architecture, UX, agent behavior, testing and iteration."
            systemLabel="// builds.shipped"
          />
          <div className="mb-8 flex flex-wrap gap-2" aria-label="Filter builds">
            {filters.map((f) => (
              <Button key={f} type="button" size="sm" variant={active === f ? "default" : "outline"} aria-pressed={active === f} onClick={() => setActive(f)}>
                {f}
              </Button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {visible.map((b, i) => (
            <ScrollReveal key={b.name} delay={(i % 2) * 0.08}>
              <article className="widget group flex h-full flex-col">
                <div className="widget-header flex-wrap gap-2">
                  <span className="widget-header-title">build_{String(builds.indexOf(b) + 1).padStart(2, "0")} · {b.year}</span>
                  <span className="status-pill status-pill--active">Built with Claude Code</span>
                </div>
                <div className="widget-body flex flex-1 flex-col">
                  <h3 className="text-display text-xl text-foreground transition-colors group-hover:text-primary md:text-2xl">{b.name}</h3>
                  <p className="mb-4 font-mono text-xs text-primary">{b.tagline}</p>
                  <ul className="space-y-2">
                    {b.bullets.map((t) => (
                      <li key={t} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                        <span className="text-sm leading-relaxed text-muted-foreground">{t}</span>
                      </li>
                    ))}
                  </ul>
                  {b.stack.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2" aria-label="Technology stack">
                      {b.stack.map((s) => (
                        <span key={s} className="rounded-md border border-border bg-secondary px-2.5 py-1 font-mono text-[11px] text-secondary-foreground">{s}</span>
                      ))}
                    </div>
                  )}
                  <div className="mt-auto flex flex-wrap gap-2 pt-5">
                    {b.github ? (
                      <Button asChild variant="outline" size="sm">
                        <a href={b.github} target="_blank" rel="noreferrer">
                          <Github aria-hidden="true" /> GitHub <ArrowUpRight aria-hidden="true" />
                        </a>
                      </Button>
                    ) : (
                      <span className="status-pill border border-border text-muted-foreground">Private repo, demo on request</span>
                    )}
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
