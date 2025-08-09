import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Team', path: '/team' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 hidden md:block">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+254 714 992 094</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>nestprofessionals@gmail.com</span>
            </div>
          </div>
          <div className="text-gold">
            "Accounting for a stable future"
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-background/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                <img src="/src/assets/images/ANPlogo.png" alt="Your Logo" className="w-[70px] h-[50px] sm:w-[60px] md:w-[70px] lg:w-[80px]"  />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg gradient-text">Nest</span>
                <span className="text-sm text-muted-foreground">Professionals</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-accent relative ${
                    isActive(item.path) 
                      ? 'text-primary' 
                      : 'text-foreground'
                  }`}
                >
                  {item.name}
                  {isActive(item.path) && (
                    <div className="absolute -bottom-4 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent" />
                  )}
                </Link>
              ))}
              {/*<Button asChild className="btn-hero">
                <Link to="/dashboard">
                  <span>Client Login</span>
                </Link>
              </Button>*/}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`text-sm font-medium transition-colors px-4 py-2 rounded-lg ${
                      isActive(item.path)
                        ? 'bg-primary/10 text-primary'
                        : 'text-foreground hover:bg-muted'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                {/*<Button asChild className="mx-4 btn-hero">
                  <Link to="/dashboard" onClick={() => setIsOpen(false)}>
                    <span>Client Login</span>
                  </Link>
                </Button>*/}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;