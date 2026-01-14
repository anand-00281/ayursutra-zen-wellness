import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Leaf, User, Stethoscope } from 'lucide-react';
import { useAuthRole } from '@/context/AuthRole';

export const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [userRole, setUserRole] = useState<'patient' | 'therapist'>('patient');
  const navigate = useNavigate();
  const { setRole } = useAuthRole();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    // Get user name from form
    let userName = '';
    if (isLogin) {
      // For login, use email as identifier (or you can get name from API)
      userName = formData.get('email')?.toString() || '';
      // Extract name from email for display (or use a default)
      userName = userName.split('@')[0] || (userRole === 'patient' ? 'Anjali Sharma' : 'Dr. Sharma');
    } else {
      // For signup, get name from name field
      userName = formData.get('name')?.toString() || 
                 (userRole === 'patient' ? 'Anjali Sharma' : 'Dr. Rajesh Gupta');
    }
    
    // Store role and name so dashboards and navbar know what to show
    setRole(userRole, userName);

    // Static navigation based on role
    if (userRole === 'patient') {
      navigate('/patient');
    } else {
      navigate('/therapist');
    }
  };

  return (
    <div className="min-h-screen therapy-gradient flex items-center justify-center p-4">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-secondary/20 rounded-full blur-lg"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative z-10"
      >
        <Card className="healing-card backdrop-blur-lg bg-card/90">
          <CardHeader className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2 text-primary">
              <Leaf className="h-8 w-8" />
              <span className="text-2xl font-bold">AyurSutra</span>
            </div>
            <CardTitle className="text-2xl">
              {isLogin ? 'Welcome Back' : 'Join AyurSutra'}
            </CardTitle>
            <CardDescription>
              {isLogin 
                ? 'Sign in to your healing journey' 
                : 'Begin your digital Panchakarma experience'
              }
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Role Selection */}
            <div className="space-y-3">
              <Label className="text-sm font-medium">I am a</Label>
              <ToggleGroup
                type="single"
                value={userRole}
                onValueChange={(value) => value && setUserRole(value as 'patient' | 'therapist')}
                className="grid grid-cols-2 gap-2"
              >
                <ToggleGroupItem
                  value="patient"
                  className="data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
                >
                  <User className="h-4 w-4 mr-2" />
                  Patient
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="therapist"
                  className="data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
                >
                  <Stethoscope className="h-4 w-4 mr-2" />
                  Therapist
                </ToggleGroupItem>
              </ToggleGroup>
            </div>

            <Tabs value={isLogin ? 'login' : 'signup'} onValueChange={(value) => setIsLogin(value === 'login')}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>

              <TabsContent value="login" className="space-y-4">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      defaultValue={userRole === 'patient' ? 'anjali@ayursutra.com' : 'dr.sharma@ayursutra.com'}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="••••••••"
                      defaultValue="password123"
                    />
                  </div>
                  <Button type="submit" className="w-full primary-gradient">
                    Sign In
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="signup" className="space-y-4">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your full name"
                      defaultValue={userRole === 'patient' ? 'Anjali Sharma' : 'Dr. Rajesh Gupta'}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email</Label>
                    <Input
                      id="signup-email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      defaultValue={userRole === 'patient' ? 'anjali@ayursutra.com' : 'dr.gupta@ayursutra.com'}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Password</Label>
                    <Input
                      id="signup-password"
                      name="password"
                      type="password"
                      placeholder="••••••••"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm Password</Label>
                    <Input
                      id="confirm-password"
                      name="confirm-password"
                      type="password"
                      placeholder="••••••••"
                    />
                  </div>
                  <Button type="submit" className="w-full primary-gradient">
                    Create Account
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            <div className="text-center text-sm text-muted-foreground">
              <Link to="/" className="story-link text-primary hover:underline">
                Back to Home
              </Link>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};