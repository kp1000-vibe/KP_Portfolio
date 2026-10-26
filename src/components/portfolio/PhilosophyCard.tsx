import { LucideIcon } from "lucide-react";

interface PhilosophyCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function PhilosophyCard({ icon: Icon, title, description }: PhilosophyCardProps) {
  return (
    <div className="widget group hover:border-primary/30 transition-all duration-300 h-full">
      <div className="widget-header">
        <span className="widget-header-title">principle</span>
        <div className="status-dot status-dot--online" />
      </div>
      <div className="widget-body">
        <div className="p-3 rounded-xl bg-primary/10 w-fit mb-5 group-hover:bg-primary/20 transition-colors">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-lg font-bold text-foreground mb-3">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
