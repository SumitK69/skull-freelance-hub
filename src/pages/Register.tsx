
import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "@/components/ui/use-toast";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Register = () => {
  const [userType, setUserType] = useState<'student' | 'client'>('student');
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    
    // Simulate submission
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Account created!",
        description: "Check your email to verify your account.",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="container max-w-md mx-auto pt-24 px-4 pb-12">
        <Card className="skull-card border-border">
          <CardHeader>
            <CardTitle className="text-2xl text-center skull-gradient-text">
              Create Your Account
            </CardTitle>
            <CardDescription className="text-center">
              Join Skull to start freelancing or hiring talent
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <RadioGroup 
                  defaultValue="student" 
                  className="flex justify-center space-x-4" 
                  onValueChange={(value) => setUserType(value as 'student' | 'client')}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="student" id="student" />
                    <Label htmlFor="student">I'm a Student 👨‍🎓</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="client" id="client" />
                    <Label htmlFor="client">I'm Hiring 💼</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Doe" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="johndoe@example.com" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="••••••••" required />
              </div>
              
              {userType === 'student' && (
                <div className="space-y-2">
                  <Label htmlFor="university">University/College</Label>
                  <Input id="university" placeholder="Your school name" />
                </div>
              )}
              
              {userType === 'client' && (
                <div className="space-y-2">
                  <Label htmlFor="company">Company (Optional)</Label>
                  <Input id="company" placeholder="Your company name" />
                </div>
              )}
              
              <Button 
                type="submit" 
                className="w-full bg-skull-purple hover:bg-skull-purple/90" 
                disabled={isLoading}
              >
                {isLoading ? "Creating Account..." : "Create Account"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link to="/login" className="text-skull-purple hover:text-skull-pink">
                Sign in
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Register;
