import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Leaf, Home, Users, Stethoscope, Info } from 'lucide-react';

export const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="sticky top-0 z-50 w-full bg-card/80 backdrop-blur-sm border-b border-border/50 shadow-soft">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-all duration-300">
              <Leaf className="h-6 w-6 text-primary" />
            </div>
            <span className="text-xl font-display font-bold text-foreground">
              🌿 AyurSutra
            </span>
          </Link>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            <Button
              variant={isActive('/') ? 'healing' : 'ghost'}
              asChild
              className="transition-all duration-300"
            >
              <Link to="/" className="flex items-center space-x-2">
                <Home className="h-4 w-4" />
                <span>Home</span>
              </Link>
            </Button>
            
            <Button
              variant={isActive('/patient') ? 'healing' : 'ghost'}
              asChild
              className="transition-all duration-300"
            >
              <Link to="/patient" className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span>Patients</span>
              </Link>
            </Button>
            
            <Button
              variant={isActive('/therapist') ? 'healing' : 'ghost'}
              asChild
              className="transition-all duration-300"
            >
              <Link to="/therapist" className="flex items-center space-x-2">
                <Stethoscope className="h-4 w-4" />
                <span>Therapists</span>
              </Link>
            </Button>
            
            <Button
              variant={isActive('/about') ? 'healing' : 'ghost'}
              asChild
              className="transition-all duration-300"
            >
              <Link to="/about" className="flex items-center space-x-2">
                <Info className="h-4 w-4" />
                <span>About</span>
              </Link>
            </Button>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm" asChild>
              <Link to="/patient">Patient Login</Link>
            </Button>
            <Button variant="healing" size="sm" asChild>
              <Link to="/therapist">Therapist Portal</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};