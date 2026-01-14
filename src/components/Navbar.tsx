import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Leaf, LogIn, UserPlus, User, BarChart3 } from 'lucide-react';
import { NotificationDropdown } from './NotificationDropdown';
import { useAuthRole } from '@/context/AuthRole';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

export const Navbar = () => {
  const navigate = useNavigate();
  const { role, userName, logout } = useAuthRole();
  
  const handleLogout = () => {
    logout();
    navigate('/');
  };
  
  // Get initials from name for avatar
  const getInitials = (name: string | null) => {
    if (!name) return 'U';
    const parts = name.split(' ');
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };
  
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
          
          {/* Right Side - Login/Sign Up or User Profile */}
          <div className="flex items-center space-x-3">
            {role ? (
              // Logged in state - Show Profile with dropdown
              <>
                {/* Therapist-only Reports link */}
                {role === 'therapist' && (
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className="hidden md:flex"
                  >
                    <Link to="/reports" className="flex items-center space-x-2">
                      <BarChart3 className="h-4 w-4" />
                      <span>Reports</span>
                    </Link>
                  </Button>
                )}
                
                <NotificationDropdown />
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-primary/10 text-primary">
                          {getInitials(userName)}
                        </AvatarFallback>
                      </Avatar>
                      <span className="hidden sm:inline-block font-medium">
                        {userName || (role === 'patient' ? 'Patient' : 'Therapist')}
                      </span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem asChild>
                      <Link to={role === 'patient' ? '/patient' : '/therapist'} className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span>Dashboard</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/profile" className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span>Profile</span>
                      </Link>
                    </DropdownMenuItem>
                    {role === 'therapist' && (
                      <DropdownMenuItem asChild>
                        <Link to="/reports" className="flex items-center gap-2">
                          <BarChart3 className="h-4 w-4" />
                          <span>Reports</span>
                        </Link>
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout} className="text-red-600">
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              // Not logged in state - Show Login and Sign Up
              <>
                <NotificationDropdown />
                <Button variant="outline" size="sm" asChild className="hidden sm:flex">
                  <Link to="/auth" className="flex items-center space-x-2">
                    <LogIn className="h-4 w-4" />
                    <span>Login</span>
                  </Link>
                </Button>
                <Button variant="healing" size="sm" asChild>
                  <Link to="/auth" className="flex items-center space-x-2">
                    <UserPlus className="h-4 w-4" />
                    <span>Sign Up</span>
                  </Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};