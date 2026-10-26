import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
  systemLabel?: string;
}

export function SectionHeader({ title, subtitle, className, centered = false, systemLabel }: SectionHeaderProps) {
  return (
    <div className={cn("mb-14", centered && "text-center", className)}>
      {systemLabel && (
        <span className="sys-label mb-3 block">{systemLabel}</span>
      )}
      <div className={cn("accent-bar mb-6", centered && "mx-auto")} />
      <h2 className="text-display text-3xl md:text-4xl text-foreground mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-body text-lg text-muted-foreground max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
