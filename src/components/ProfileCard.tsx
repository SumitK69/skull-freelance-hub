
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import SkillBadge from "./SkillBadge";
import EmojiRating from "./EmojiRating";
import { Link } from "react-router-dom";

type ProfileCardProps = {
  id: string;
  name: string;
  avatar?: string;
  title: string;
  rating: number;
  skills: Array<{name: string; level?: 'beginner' | 'intermediate' | 'advanced'}>;
  available?: boolean;
};

const ProfileCard = ({ 
  id,
  name,
  avatar,
  title,
  rating,
  skills,
  available = true 
}: ProfileCardProps) => {
  // Create initials for avatar fallback
  const initials = name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase();

  return (
    <Card className="skull-card overflow-hidden hover:border-skull-purple/50 transition-all duration-300">
      <CardHeader className="flex flex-col items-center justify-center pt-6 pb-2">
        <div className="relative">
          <Avatar className="h-20 w-20 border-2 border-skull-purple">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback className="bg-skull-purple/20 text-skull-purple">{initials}</AvatarFallback>
          </Avatar>
          {available && (
            <Badge className="absolute bottom-0 right-0 bg-green-500">Available</Badge>
          )}
        </div>
        <h3 className="font-bold text-lg mt-3">{name}</h3>
        <p className="text-sm text-muted-foreground">{title}</p>
        <div className="mt-1">
          <EmojiRating initialRating={rating} readOnly />
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 justify-center">
          {skills.slice(0, 3).map((skill, index) => (
            <SkillBadge key={index} name={skill.name} level={skill.level} />
          ))}
          {skills.length > 3 && (
            <Badge variant="outline" className="text-muted-foreground">
              +{skills.length - 3} more
            </Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-center pb-6">
        <Button asChild className="bg-skull-purple hover:bg-skull-purple/90">
          <Link to={`/profile/${id}`}>View Profile</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProfileCard;
