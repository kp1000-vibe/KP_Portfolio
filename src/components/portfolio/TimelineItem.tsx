interface TimelineItemProps {
  role: string;
  company: string;
  period: string;
  scope?: string;
  description: string;
  impact?: string;
  isLast?: boolean;
  status?: string;
}

export function TimelineItem({ role, company, period, scope, description, impact, isLast = false, status = "deployed" }: TimelineItemProps) {
  return (
    <div className="relative pl-10 pb-12 last:pb-0">
      {!isLast && (
        <div className="absolute left-[7px] top-6 bottom-0 w-px bg-border" />
      )}
      <div className="absolute left-0 top-1.5 timeline-dot" />
      
      <div className="widget">
        <div className="widget-header">
          <span className="widget-header-title font-mono">{period}</span>
          <span className={`status-pill status-pill--${status === 'active' ? 'active' : 'deployed'}`}>
            <div className={`status-dot ${status === 'active' ? 'status-dot--active' : 'status-dot--online'}`} />
            {status === 'active' ? 'Current' : 'Completed'}
          </span>
        </div>
        <div className="widget-body space-y-3">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="text-xl font-bold text-foreground font-body">{role}</h3>
            <span className="text-primary font-semibold">@ {company}</span>
          </div>
          
          {scope && (
            <span className="text-xs font-mono font-medium text-primary/80 uppercase tracking-wider">{scope}</span>
          )}
          
          <p className="text-body text-muted-foreground leading-relaxed">{description}</p>
          
          {impact && (
            <div className="p-4 rounded-xl bg-primary/5 border-l-2 border-l-primary">
              <span className="text-xs font-bold uppercase tracking-wider text-primary font-mono">Key Leverage</span>
              <p className="text-sm text-muted-foreground mt-1">{impact}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
