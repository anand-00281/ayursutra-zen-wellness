import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  CheckCircle, 
  AlertCircle, 
  Heart,
  Droplets,
  Leaf,
  ArrowLeft
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const TherapyDetail = () => {
  const [isCompleted, setIsCompleted] = useState(false);
  const progressValue = 60;

  const therapySession = {
    title: 'Abhyanga Massage',
    date: '20th September, 2024',
    time: '10:00 AM - 11:30 AM',
    location: 'Therapy Room 3',
    therapist: 'Dr. Priya Sharma',
    duration: '90 minutes',
    status: 'Upcoming'
  };

  const preInstructions = [
    'Take a light meal 2 hours before the session',
    'Drink warm water and avoid cold beverages',
    'Wear comfortable, loose clothing that can be easily removed'
  ];

  const postCareInstructions = [
    'Rest for at least 30 minutes after the session',
    'Drink warm herbal tea to aid digestion',
    'Avoid cold showers for 2-3 hours after treatment'
  ];

  return (
    <div className="min-h-screen therapy-gradient p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto space-y-6"
      >
        {/* Header */}
        <div className="flex items-center gap-4">
          <Link to="/patient">
            <Button variant="outline" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Dashboard
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-foreground">Therapy Session Details</h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Session Info */}
          <Card className="healing-card lg:col-span-2">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <Droplets className="h-6 w-6 text-primary" />
                    {therapySession.title}
                  </CardTitle>
                  <CardDescription className="mt-2">
                    Traditional Ayurvedic full-body oil massage for rejuvenation
                  </CardDescription>
                </div>
                <Badge variant="secondary" className="bg-accent/10 text-accent-foreground">
                  {therapySession.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Session Details */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">{therapySession.date}</p>
                    <p className="text-sm text-muted-foreground">Session Date</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">{therapySession.time}</p>
                    <p className="text-sm text-muted-foreground">{therapySession.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">{therapySession.location}</p>
                    <p className="text-sm text-muted-foreground">AyurSutra Center</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Heart className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">{therapySession.therapist}</p>
                    <p className="text-sm text-muted-foreground">Senior Therapist</p>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Pre-procedure Instructions */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-accent" />
                  Pre-procedure Instructions
                </h3>
                <ul className="space-y-3">
                  {preInstructions.map((instruction, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="h-2 w-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{instruction}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Separator />

              {/* Post-procedure Care */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Leaf className="h-5 w-5 text-primary" />
                  Post-procedure Care
                </h3>
                <ul className="space-y-3">
                  {postCareInstructions.map((instruction, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{instruction}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Progress & Actions */}
          <div className="space-y-6">
            {/* Progress Tracker */}
            <Card className="healing-card">
              <CardHeader>
                <CardTitle className="text-lg">Treatment Progress</CardTitle>
                <CardDescription>Your journey towards wellness</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Overall Progress</span>
                    <span className="font-medium">{progressValue}%</span>
                  </div>
                  <Progress value={progressValue} className="h-3" />
                </div>
                <div className="text-xs text-muted-foreground">
                  You're making excellent progress! Keep following the prescribed routine.
                </div>
              </CardContent>
            </Card>

            {/* Action Button */}
            <Card className="healing-card">
              <CardContent className="pt-6">
                <Button
                  onClick={() => setIsCompleted(!isCompleted)}
                  className={`w-full gap-2 ${
                    isCompleted 
                      ? 'bg-green-600 hover:bg-green-700' 
                      : 'primary-gradient'
                  }`}
                  disabled={isCompleted}
                >
                  <CheckCircle className="h-4 w-4" />
                  {isCompleted ? 'Session Completed' : 'Mark as Completed'}
                </Button>
                {isCompleted && (
                  <p className="text-xs text-center text-muted-foreground mt-2">
                    Great! Your progress has been updated.
                  </p>
                )}
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="healing-card">
              <CardHeader>
                <CardTitle className="text-lg">Session Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Total Sessions</span>
                  <span className="font-medium">8</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Completed</span>
                  <span className="font-medium text-green-600">5</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Remaining</span>
                  <span className="font-medium text-accent">3</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.div>
    </div>
  );
};