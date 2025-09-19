import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Flame, 
  Star, 
  Trophy, 
  Award,
  Target,
  Zap,
  Gift,
  Crown
} from 'lucide-react';

export const RewardsCard = () => {
  const currentStreak = 5;
  const streakGoal = 7;
  const progressPercentage = (currentStreak / streakGoal) * 100;

  const badges = [
    {
      id: 1,
      name: 'Detox Beginner',
      icon: Star,
      earned: true,
      description: 'Completed first Panchakarma session'
    },
    {
      id: 2,
      name: 'Consistency Star',
      icon: Flame,
      earned: true,
      description: '5-day therapy streak'
    },
    {
      id: 3,
      name: 'Wellness Warrior',
      icon: Trophy,
      earned: false,
      description: 'Complete 10 therapy sessions'
    },
    {
      id: 4,
      name: 'Ayurveda Expert',
      icon: Crown,
      earned: false,
      description: 'Complete full Panchakarma cycle'
    }
  ];

  const achievements = [
    {
      title: 'Sessions Completed',
      current: 8,
      total: 15,
      icon: Target,
      color: 'text-green-600'
    },
    {
      title: 'Days Consistent',
      current: 5,
      total: 7,
      icon: Zap,
      color: 'text-blue-600'
    },
    {
      title: 'Goals Achieved',
      current: 3,
      total: 5,
      icon: Award,
      color: 'text-purple-600'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Wellness Streak */}
      <Card className="healing-card">
        <CardHeader className="text-center">
          <div className="mx-auto w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center mb-3">
            <Flame className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-xl">Wellness Streak</CardTitle>
          <CardDescription>
            Keep your healing momentum going!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              {currentStreak} Days
            </div>
            <p className="text-sm text-muted-foreground">
              Current streak • Goal: {streakGoal} days
            </p>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress to next reward</span>
              <span>{currentStreak}/{streakGoal}</span>
            </div>
            <Progress value={progressPercentage} className="h-3" />
          </div>

          <div className="bg-accent/10 rounded-lg p-3 text-center">
            <Gift className="h-5 w-5 mx-auto mb-1 text-accent" />
            <p className="text-xs text-muted-foreground">
              {streakGoal - currentStreak} more days for your next reward!
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Badges */}
      <Card className="healing-card">
        <CardHeader>
          <CardTitle>Achievement Badges</CardTitle>
          <CardDescription>
            Unlock badges as you progress on your wellness journey
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            {badges.map((badge) => {
              const IconComponent = badge.icon;
              return (
                <div
                  key={badge.id}
                  className={`text-center p-4 rounded-lg border-2 transition-all ${
                    badge.earned
                      ? 'border-primary bg-primary/5 shadow-sm'
                      : 'border-dashed border-muted-foreground/30 opacity-60'
                  }`}
                >
                  <div
                    className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-2 ${
                      badge.earned
                        ? 'bg-primary/20 text-primary'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h4 className="text-sm font-medium mb-1">{badge.name}</h4>
                  <p className="text-xs text-muted-foreground">{badge.description}</p>
                  {badge.earned && (
                    <Badge variant="secondary" className="mt-2 text-xs">
                      Earned
                    </Badge>
                  )}
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <Card className="healing-card">
        <CardHeader>
          <CardTitle>Progress Overview</CardTitle>
          <CardDescription>
            Your wellness journey at a glance
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            const percentage = (achievement.current / achievement.total) * 100;
            
            return (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <IconComponent className={`h-4 w-4 ${achievement.color}`} />
                    <span className="text-sm font-medium">{achievement.title}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {achievement.current}/{achievement.total}
                  </span>
                </div>
                <Progress value={percentage} className="h-2" />
              </div>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
};