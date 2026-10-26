interface SkillCategoryProps {
  title: string;
  skills: string[];
}

export function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <div className="glass-card p-6">
      <h3 className="text-lg font-bold text-foreground mb-5 pb-3 border-b border-border/50">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
