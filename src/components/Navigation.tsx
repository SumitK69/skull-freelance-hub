
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, UserCircle, LogOut } from 'lucide-react';
import { supabase } from "@/integrations/supabase/client";
import { Session } from '@supabase/supabase-js';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [session, setSession] = useState<Session | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, newSession) => {
        setSession(newSession);
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session: currentSession } }) => {
      setSession(currentSession);
    });

    return () => subscription.unsubscribe();
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-skull-dark/70 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold">💀</span>
            <span className="text-xl font-bold skull-gradient-text">Skull</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/browse" className="text-skull-light hover:text-skull-purple transition-colors">
              Browse
            </Link>
            <Link to="/tasks" className="text-skull-light hover:text-skull-purple transition-colors">
              Tasks
            </Link>
            <Link to="/about" className="text-skull-light hover:text-skull-purple transition-colors">
              About
            </Link>
            
            {session ? (
              <div className="flex items-center space-x-4">
                <Button asChild variant="ghost" className="hover:bg-skull-purple/20">
                  <Link to="/profile">
                    <UserCircle className="mr-2 h-4 w-4" />
                    Profile
                  </Link>
                </Button>
                <Button onClick={handleLogout} variant="ghost" className="hover:bg-skull-purple/20">
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Button asChild variant="ghost" className="hover:bg-skull-purple/20">
                  <Link to="/login">Login</Link>
                </Button>
                <Button asChild className="bg-skull-purple hover:bg-skull-purple/90">
                  <Link to="/register">Sign Up</Link>
                </Button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-skull-dark/90 backdrop-blur-lg">
            <Link 
              to="/browse" 
              className="block px-3 py-2 rounded-md text-base font-medium text-skull-light hover:bg-skull-purple/20"
              onClick={toggleMenu}
            >
              Browse
            </Link>
            <Link 
              to="/tasks" 
              className="block px-3 py-2 rounded-md text-base font-medium text-skull-light hover:bg-skull-purple/20"
              onClick={toggleMenu}
            >
              Tasks
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-skull-light hover:bg-skull-purple/20"
              onClick={toggleMenu}
            >
              About
            </Link>
            
            {session ? (
              <>
                <Link 
                  to="/profile" 
                  className="block px-3 py-2 rounded-md text-base font-medium text-skull-light hover:bg-skull-purple/20"
                  onClick={toggleMenu}
                >
                  Profile
                </Link>
                <button 
                  className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-skull-light hover:bg-skull-purple/20"
                  onClick={() => {
                    handleLogout();
                    toggleMenu();
                  }}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className="block px-3 py-2 rounded-md text-base font-medium text-skull-light hover:bg-skull-purple/20"
                  onClick={toggleMenu}
                >
                  Login
                </Link>
                <Link 
                  to="/register"
                  className="block px-3 py-2 rounded-md text-base font-medium bg-skull-purple text-white hover:bg-skull-purple/90"
                  onClick={toggleMenu}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
