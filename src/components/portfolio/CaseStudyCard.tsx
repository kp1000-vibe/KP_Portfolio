interface CaseStudyCardProps {
  title: string;
  problem: string;
  description?: string;
  stack: string[];
  positioning?: string;
  index: number;
}

export function CaseStudyCard({ title, problem, description, stack, positioning, index }: CaseStudyCardProps) {
  return (
    <article className="widget group flex h-full flex-col transition-all duration-500">
      <div className="widget-header flex-wrap gap-2">
        <span className="widget-header-title">study_{String(index + 1).padStart(2, "0")}</span>
        <span className="status-pill border border-border text-muted-foreground">Design study</span>
      </div>
      <div className="widget-body flex flex-1 flex-col">
        <h3 className="text-display mb-4 text-xl text-foreground transition-colors group-hover:text-primary md:text-2xl">{title}</h3>
        <div className="space-y-4 text-sm leading-relaxed">
          {problem && <p className="font-medium text-foreground">{problem}</p>}
          {description && <p className="text-muted-foreground">{description}</p>}
          {stack.length > 0 && (
            <div className="flex flex-wrap gap-2" aria-label="Technology stack">
              {stack.map((item) => (
                <span key={item} className="rounded-md border border-border bg-secondary px-2.5 py-1 font-mono text-[11px] text-secondary-foreground">{item}</span>
              ))}
            </div>
          )}
        </div>
        {positioning && (
          <p className="mt-auto border-l-2 border-accent pl-3 pt-5 text-sm font-medium text-foreground">{positioning}</p>
        )}
      </div>
    </article>
  );
}
