
import { cn } from "@/lib/utils";

type SkillBadgeProps = {
  name: string;
  level?: 'beginner' | 'intermediate' | 'advanced';
  className?: string;
};

const SkillBadge = ({ name, level = 'intermediate', className }: SkillBadgeProps) => {
  const badgeColors = {
    beginner: "bg-skull-orange/20 text-skull-orange border-skull-orange/30",
    intermediate: "bg-skull-purple/20 text-skull-purple border-skull-purple/30",
    advanced: "bg-skull-pink/20 text-skull-pink border-skull-pink/30"
  };

  return (
    <div className={cn(
      "inline-flex items-center px-3 py-1 rounded-full text-sm border",
      badgeColors[level],
      className
    )}>
      {name}
    </div>
  );
};

export default SkillBadge;
