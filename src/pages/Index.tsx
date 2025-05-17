
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import TaskCard from "@/components/TaskCard";
import ProfileCard from "@/components/ProfileCard";

const Index = () => {
  // Mock data for the home page
  const featuredTasks = [
    {
      id: "task1",
      title: "Design Instagram Story Templates",
      description: "Looking for a creative designer to create 10 trendy Instagram story templates for a fashion brand.",
      budget: 120,
      dueDate: "2025-06-01",
      skills: [{ name: "Design", level: "intermediate" }, { name: "Social Media" }],
      status: "open" as const
    },
    {
      id: "task2",
      title: "Video Editing for YouTube",
      description: "Need someone to edit my 15-minute gaming videos with effects and transitions.",
      budget: 80,
      dueDate: "2025-05-25",
      skills: [{ name: "Video Editing", level: "advanced" }],
      status: "open" as const
    },
    {
      id: "task3",
      title: "Simple React Landing Page",
      description: "Need a responsive landing page built with React and Tailwind CSS for my startup.",
      budget: 200,
      dueDate: "2025-06-10",
      skills: [{ name: "React", level: "intermediate" }, { name: "Tailwind" }],
      status: "open" as const
    }
  ];

  const featuredProfiles = [
    {
      id: "user1",
      name: "Alex Johnson",
      title: "Motion Graphics Designer",
      rating: 5,
      skills: [
        { name: "After Effects", level: "advanced" },
        { name: "Premiere Pro", level: "advanced" },
        { name: "Illustrator", level: "intermediate" }
      ],
      available: true
    },
    {
      id: "user2",
      name: "Jamie Smith",
      title: "Frontend Developer",
      rating: 4,
      skills: [
        { name: "React", level: "advanced" },
        { name: "TypeScript", level: "intermediate" },
        { name: "Tailwind", level: "advanced" }
      ],
      available: true
    },
    {
      id: "user3",
      name: "Sam Taylor",
      title: "Content Creator",
      rating: 5,
      skills: [
        { name: "Copywriting", level: "advanced" },
        { name: "Social Media", level: "advanced" },
        { name: "Photography", level: "intermediate" }
      ],
      available: false
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="skull-gradient-text">Skull</span> 💀
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            The freelance platform built by students, for students.
            Showcase your skills, get hired, and earn on your terms.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-skull-purple hover:bg-skull-purple/90 text-lg">
              <Link to="/register">Join as Student 👨‍🎓</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-skull-pink hover:bg-skull-pink/10 hover:text-skull-pink text-lg">
              <Link to="/post-task">Post a Task 🚀</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Tasks */}
      <section className="py-12 px-4 bg-skull-dark/50">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Featured Tasks</h2>
            <Button asChild variant="ghost" className="text-skull-purple hover:text-skull-pink">
              <Link to="/browse">View All</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTasks.map(task => (
              <TaskCard key={task.id} {...task} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Talent */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Top Talent</h2>
            <Button asChild variant="ghost" className="text-skull-purple hover:text-skull-pink">
              <Link to="/talent">View All</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProfiles.map(profile => (
              <ProfileCard key={profile.id} {...profile} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 px-4 bg-skull-dark/50">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-skull-purple/20 flex items-center justify-center mb-4">
                <span className="text-2xl">📝</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Create Profile</h3>
              <p className="text-muted-foreground">Showcase your skills, portfolio, and set your rates</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-skull-purple/20 flex items-center justify-center mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Find Tasks</h3>
              <p className="text-muted-foreground">Browse tasks that match your skills or post your own</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-skull-purple/20 flex items-center justify-center mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Paid</h3>
              <p className="text-muted-foreground">Securely receive payment after task completion</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of students already using Skull to showcase their skills and earn money.
          </p>
          <Button asChild size="lg" className="bg-skull-purple hover:bg-skull-purple/90 text-lg">
            <Link to="/register">Create Your Profile</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-skull-dark/80 py-8 px-4 border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-2xl font-bold">💀</span>
                <span className="text-xl font-bold skull-gradient-text">Skull</span>
              </div>
              <p className="text-muted-foreground max-w-xs">
                A freelance marketplace built by students, for students.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold mb-4">Platform</h4>
                <ul className="space-y-2">
                  <li><Link to="/browse" className="text-muted-foreground hover:text-skull-purple">Browse Tasks</Link></li>
                  <li><Link to="/talent" className="text-muted-foreground hover:text-skull-purple">Find Talent</Link></li>
                  <li><Link to="/post-task" className="text-muted-foreground hover:text-skull-purple">Post a Task</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2">
                  <li><Link to="/about" className="text-muted-foreground hover:text-skull-purple">About Us</Link></li>
                  <li><Link to="/contact" className="text-muted-foreground hover:text-skull-purple">Contact</Link></li>
                  <li><Link to="/blog" className="text-muted-foreground hover:text-skull-purple">Blog</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Legal</h4>
                <ul className="space-y-2">
                  <li><Link to="/terms" className="text-muted-foreground hover:text-skull-purple">Terms</Link></li>
                  <li><Link to="/privacy" className="text-muted-foreground hover:text-skull-purple">Privacy</Link></li>
                  <li><Link to="/cookies" className="text-muted-foreground hover:text-skull-purple">Cookies</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
            <p>© {new Date().getFullYear()} Skull. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
