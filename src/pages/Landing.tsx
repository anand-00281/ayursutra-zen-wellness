import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Leaf, Heart, Calendar, TrendingUp, Users, Shield } from 'lucide-react';
import heroImage from '@/assets/ayurveda-hero.jpg';

const benefits = [
  {
    icon: Heart,
    title: "Holistic Healing",
    description: "Comprehensive Panchakarma therapy management with traditional Ayurvedic wisdom integrated with modern technology."
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "Intelligent therapy scheduling system that optimizes treatment plans and therapist availability for best outcomes."
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description: "Real-time health monitoring and progress visualization to track your healing journey with detailed analytics."
  }
];

export const Landing = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 therapy-gradient"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-6xl font-display font-bold text-foreground leading-tight">
                  Digital Panchakarma Management for a{' '}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Healthier Tomorrow
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Seamlessly blend ancient Ayurvedic healing traditions with cutting-edge technology. 
                  Manage patients, schedule therapies, and track healing progress all in one platform.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="healing" size="lg" asChild>
                  <Link to="/patient" className="flex items-center space-x-2">
                    <Users className="h-5 w-5" />
                    <span>Register as Patient</span>
                  </Link>
                </Button>
                <Button variant="therapeutic" size="lg" asChild>
                  <Link to="/therapist" className="flex items-center space-x-2">
                    <Shield className="h-5 w-5" />
                    <span>Login as Therapist</span>
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="healing-card p-2 transform rotate-3 hover:rotate-0 transition-all duration-500">
                <img 
                  src={heroImage} 
                  alt="Peaceful Ayurveda healing center with natural elements"
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground">
              Benefits of Panchakarma Management
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the perfect harmony of traditional healing wisdom and modern healthcare technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="healing-card group">
                <CardHeader className="text-center space-y-4">
                  <div className="mx-auto p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-all duration-300">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground">
              Start Your Healing Journey Today
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands who have experienced the transformative power of digital Ayurveda
            </p>
            <div className="flex justify-center">
              <Button variant="healing" size="lg" asChild>
                <Link to="/patient" className="flex items-center space-x-2">
                  <Leaf className="h-5 w-5" />
                  <span>Begin Your Journey</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};