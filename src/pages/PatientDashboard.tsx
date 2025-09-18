import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Textarea } from '@/components/ui/textarea';
import { 
  Calendar, 
  Clock, 
  Heart, 
  TrendingUp, 
  Bell, 
  BookOpen, 
  Droplets,
  Flower2,
  Activity
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const progressData = [
  { day: 'Day 1', wellness: 20, energy: 15 },
  { day: 'Day 7', wellness: 35, energy: 30 },
  { day: 'Day 14', wellness: 55, energy: 50 },
  { day: 'Day 21', wellness: 70, energy: 65 },
  { day: 'Day 28', wellness: 85, energy: 80 },
];

export const PatientDashboard = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 space-y-8">
        {/* Welcome Section */}
        <div className="space-y-2">
          <h1 className="text-3xl font-display font-bold text-foreground">
            🙏 Namaste, Anjali!
          </h1>
          <p className="text-muted-foreground">Welcome back to your healing journey</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Upcoming Therapy */}
            <Card className="healing-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>Upcoming Therapy Session</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg">Abhyanga Massage</h3>
                      <div className="flex items-center space-x-4 text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>Tomorrow</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>10:00 AM</span>
                        </div>
                      </div>
                      <p className="text-sm">Dr. Sharma - Room 3</p>
                    </div>
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Flower2 className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                </div>
                <Button variant="healing" className="w-full">
                  View Session Details
                </Button>
              </CardContent>
            </Card>

            {/* Digital Journal */}
            <Card className="healing-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <span>Digital Wellness Journal</span>
                </CardTitle>
                <CardDescription>
                  Track your daily feelings and progress
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea 
                  placeholder="How are you feeling today?"
                  defaultValue="Feeling much better after yesterday's therapy session. The herbal steam bath was incredibly relaxing and I noticed improved sleep quality. Looking forward to continuing the treatment."
                  className="min-h-24 bg-muted/30 border-primary/20"
                />
                <Button variant="outline" className="w-full">
                  Save Entry
                </Button>
              </CardContent>
            </Card>

            {/* Progress Visualization */}
            <Card className="healing-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <span>Healing Progress</span>
                </CardTitle>
                <CardDescription>
                  Your wellness journey over the past 28 days
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={progressData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" />
                      <YAxis stroke="hsl(var(--muted-foreground))" />
                      <Tooltip 
                        contentStyle={{
                          backgroundColor: 'hsl(var(--card))',
                          border: '1px solid hsl(var(--border))',
                          borderRadius: '8px'
                        }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="wellness" 
                        stroke="hsl(var(--primary))" 
                        strokeWidth={3}
                        name="Wellness Score"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="energy" 
                        stroke="hsl(var(--accent))" 
                        strokeWidth={3}
                        name="Energy Level"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card className="healing-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Activity className="h-5 w-5 text-primary" />
                  <span>Recovery Progress</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Overall Wellness</span>
                    <span className="font-semibold">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Energy Levels</span>
                    <span className="font-semibold">80%</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Sleep Quality</span>
                    <span className="font-semibold">90%</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card className="healing-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Bell className="h-5 w-5 text-accent" />
                  <span>Wellness Reminders</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 bg-accent/10 rounded-lg border border-accent/20">
                  <div className="flex items-start space-x-3">
                    <Droplets className="h-4 w-4 text-accent mt-0.5" />
                    <div className="text-sm">
                      <p className="font-medium">Hydration Reminder</p>
                      <p className="text-muted-foreground">Drink warm water before therapy tomorrow</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                  <div className="flex items-start space-x-3">
                    <Heart className="h-4 w-4 text-primary mt-0.5" />
                    <div className="text-sm">
                      <p className="font-medium">Meditation Time</p>
                      <p className="text-muted-foreground">15 minutes before bed tonight</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Next Appointments */}
            <Card className="healing-card">
              <CardHeader>
                <CardTitle className="text-sm font-medium">This Week's Sessions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Abhyanga - Tomorrow 10 AM</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Herbal Steam - Friday 2 PM</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                  <span>Consultation - Saturday 11 AM</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};