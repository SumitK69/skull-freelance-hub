
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, BadgeIndianRupee } from "lucide-react";
import SkillBadge from "./SkillBadge";
import { Link } from "react-router-dom";

type TaskCardProps = {
  id: string;
  title: string;
  description: string;
  budget: number;
  dueDate: string;
  skills: Array<{name: string; level?: 'beginner' | 'intermediate' | 'advanced'}>;
  status: 'open' | 'in-progress' | 'completed';
};

const TaskCard = ({ 
  id,
  title,
  description,
  budget,
  dueDate,
  skills,
  status
}: TaskCardProps) => {
  const statusColor = {
    'open': 'bg-green-500',
    'in-progress': 'bg-yellow-500',
    'completed': 'bg-blue-500'
  };

  return (
    <Card className="skull-card overflow-hidden border border-border hover:border-skull-purple/50 transition-all duration-300">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg font-semibold line-clamp-1">{title}</CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              <div className="flex items-center mt-1">
                <Clock className="h-3 w-3 mr-1" /> 
                {new Date(dueDate).toLocaleDateString()}
              </div>
            </CardDescription>
          </div>
          <Badge className={statusColor[status]}>{status}</Badge>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{description}</p>
        <div className="flex flex-wrap gap-2 mb-3">
          {skills.map((skill, index) => (
            <SkillBadge key={index} name={skill.name} level={skill.level} />
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="flex items-center text-skull-purple font-semibold">
          <BadgeIndianRupee className="h-4 w-4 mr-1" />
          {budget.toFixed(2)}
        </div>
        <Button asChild className="bg-skull-purple hover:bg-skull-purple/90">
          <Link to={`/task/${id}`}>View Task</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TaskCard;
