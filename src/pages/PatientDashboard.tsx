import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { RewardsCard } from '@/components/RewardsCard';
import { 
  Calendar, 
  Clock, 
  Bell, 
  TrendingUp, 
  Heart, 
  Droplets,
  Book,
  MessageSquare,
  Settings,
  User
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const PatientDashboard = () => {
  return (
    <div className="min-h-screen therapy-gradient p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto space-y-6"
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Namaste, Anjali! 🙏</h1>
            <p className="text-muted-foreground mt-2">
              Welcome to your wellness journey. Continue your path to holistic health.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button asChild variant="outline" size="sm" className="gap-2">
              <Link to="/profile">
                <User className="h-4 w-4" />
                Profile
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm" className="gap-2">
              <Link to="/settings">
                <Settings className="h-4 w-4" />
                Settings
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Quick Actions */}
            <div className="grid md:grid-cols-4 gap-4">
              <Button asChild className="h-20 flex-col gap-2 primary-gradient">
                <Link to="/appointments">
                  <Calendar className="h-6 w-6" />
                  <span>Appointments</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-20 flex-col gap-2">
                <Link to="/chat">
                  <MessageSquare className="h-6 w-6" />
                  <span>Messages</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-20 flex-col gap-2">
                <Link to="/knowledge-hub">
                  <Book className="h-6 w-6" />
                  <span>Knowledge Hub</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-20 flex-col gap-2">
                <Link to="/therapy/1">
                  <Droplets className="h-6 w-6" />
                  <span>Session Details</span>
                </Link>
              </Button>
            </div>

            {/* Upcoming Sessions */}
            <Card className="healing-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Upcoming Therapy Sessions
                </CardTitle>
                <CardDescription>
                  Your scheduled appointments and preparations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border border-border/50 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold flex items-center gap-2">
                        <Droplets className="h-4 w-4 text-primary" />
                        Abhyanga Massage
                      </h3>
                      <p className="text-sm text-muted-foreground">With Dr. Priya Sharma</p>
                    </div>
                    <Badge variant="secondary" className="bg-accent/10 text-accent">
                      Tomorrow
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      10:00 AM - 11:30 AM
                    </span>
                    <span>Therapy Room 3</span>
                  </div>
                  <div className="mt-3 pt-3 border-t border-border/50">
                    <p className="text-sm text-muted-foreground">
                      <strong>Preparation:</strong> Drink warm water 30 minutes before session
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Progress Overview */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="healing-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Recovery Progress
                  </CardTitle>
                  <CardDescription>
                    Your wellness journey milestones
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Overall Progress</span>
                      <span className="font-medium">60%</span>
                    </div>
                    <Progress value={60} className="h-3" />
                  </div>
                  <div className="text-sm text-muted-foreground">
                    You're making excellent progress! 8 out of 15 sessions completed.
                  </div>
                </CardContent>
              </Card>

              <Card className="healing-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-primary" />
                    Wellness Score
                  </CardTitle>
                  <CardDescription>
                    Based on your recent activities
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">8.5</div>
                    <p className="text-sm text-muted-foreground">
                      Excellent wellness level
                    </p>
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between text-xs">
                        <span>Sleep Quality</span>
                        <span className="text-green-600">90%</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span>Energy Level</span>
                        <span className="text-blue-600">80%</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span>Stress Level</span>
                        <span className="text-amber-600">30%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Digital Journal */}
            <Card className="healing-card">
              <CardHeader>
                <CardTitle>Digital Wellness Journal</CardTitle>
                <CardDescription>
                  Record your daily experiences and progress
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea 
                  placeholder="How are you feeling today? Record your thoughts, energy levels, or any observations..."
                  defaultValue="Feeling much better after yesterday's Abhyanga session. The warm oil massage was incredibly relaxing and I slept deeply. My energy levels seem more balanced today."
                  className="min-h-[100px] resize-none"
                />
                <div className="flex justify-between items-center mt-3">
                  <span className="text-xs text-muted-foreground">
                    Last updated: Today at 9:30 AM
                  </span>
                  <Button size="sm" variant="outline">
                    Save Entry
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Rewards & Gamification */}
            <RewardsCard />

            {/* Notifications */}
            <Card className="healing-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5 text-primary" />
                  Reminders
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="bg-accent/10 rounded-lg p-3">
                  <p className="text-sm font-medium text-accent">Pre-therapy Reminder</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Drink warm water before your session tomorrow
                  </p>
                </div>
                <div className="bg-primary/10 rounded-lg p-3">
                  <p className="text-sm font-medium text-primary">Dietary Tip</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Include warm, cooked foods in your diet for better digestion
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                  <p className="text-sm font-medium text-blue-600 dark:text-blue-400">Meditation</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Try 10 minutes of breathing exercises before bed
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.div>
    </div>
  );
};