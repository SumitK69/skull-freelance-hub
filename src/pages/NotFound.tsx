
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

const NotFound = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="container mx-auto pt-32 px-4 text-center">
        <div className="animate-float text-8xl mb-4">💀</div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 skull-gradient-text">404</h1>
        <p className="text-xl mb-8">Oops! This page has vanished into the void.</p>
        <Button asChild className="bg-skull-purple hover:bg-skull-purple/90">
          <Link to="/">Return Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
