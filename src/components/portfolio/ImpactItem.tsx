import { Check } from "lucide-react";

interface ImpactItemProps {
  text: string;
}

export function ImpactItem({ text }: ImpactItemProps) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-1 flex-shrink-0 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
        <Check className="h-3 w-3 text-primary" />
      </span>
      <span className="text-body text-muted-foreground leading-relaxed">{text}</span>
    </li>
  );
}
