import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar } from '@/components/ui/calendar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  MapPin, 
  Plus,
  User,
  Droplets,
  Leaf,
  Heart
} from 'lucide-react';
import { format } from 'date-fns';

export const Appointments = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [viewMode, setViewMode] = useState<'calendar' | 'list'>('calendar');

  const appointments = [
    {
      id: 1,
      title: 'Abhyanga Massage',
      patient: 'Anjali Sharma',
      therapist: 'Dr. Priya Sharma',
      date: '2024-09-22',
      time: '10:00 AM',
      duration: '90 min',
      room: 'Therapy Room 3',
      status: 'confirmed',
      type: 'abhyanga',
      icon: Droplets
    },
    {
      id: 2,
      title: 'Shirodhara',
      patient: 'Rohit Patel',
      therapist: 'Dr. Rajesh Gupta',
      date: '2024-09-22',
      time: '2:00 PM',
      duration: '60 min',
      room: 'Therapy Room 1',
      status: 'pending',
      type: 'shirodhara',
      icon: Leaf
    },
    {
      id: 3,
      title: 'Panchakarma Consultation',
      patient: 'Priya Nair',
      therapist: 'Dr. Priya Sharma',
      date: '2024-09-23',
      time: '11:30 AM',
      duration: '45 min',
      room: 'Consultation Room',
      status: 'confirmed',
      type: 'consultation',
      icon: Heart
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'pending': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'cancelled': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const selectedDateAppointments = appointments.filter(apt => 
    apt.date === format(selectedDate || new Date(), 'yyyy-MM-dd')
  );

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
            <h1 className="text-3xl font-bold text-foreground">Appointments</h1>
            <p className="text-muted-foreground mt-2">
              Manage your therapy sessions and consultations
            </p>
          </div>
          <Button className="gap-2 primary-gradient">
            <Plus className="h-4 w-4" />
            New Appointment
          </Button>
        </div>

        <Tabs value={viewMode} onValueChange={(value) => setViewMode(value as 'calendar' | 'list')}>
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="calendar">Calendar View</TabsTrigger>
            <TabsTrigger value="list">List View</TabsTrigger>
          </TabsList>

          <TabsContent value="calendar" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Calendar */}
              <Card className="healing-card lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CalendarIcon className="h-5 w-5 text-primary" />
                    Appointment Calendar
                  </CardTitle>
                  <CardDescription>
                    Select a date to view scheduled appointments
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="rounded-md border pointer-events-auto mx-auto"
                    modifiers={{
                      hasAppointment: appointments.map(apt => new Date(apt.date))
                    }}
                    modifiersStyles={{
                      hasAppointment: {
                        backgroundColor: 'hsl(var(--primary))',
                        color: 'hsl(var(--primary-foreground))',
                        borderRadius: '50%'
                      }
                    }}
                  />
                </CardContent>
              </Card>

              {/* Selected Date Appointments */}
              <Card className="healing-card">
                <CardHeader>
                  <CardTitle className="text-lg">
                    {selectedDate ? format(selectedDate, 'MMMM d, yyyy') : 'Select a date'}
                  </CardTitle>
                  <CardDescription>
                    {selectedDateAppointments.length} appointment(s) scheduled
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {selectedDateAppointments.length > 0 ? (
                    selectedDateAppointments.map((appointment) => {
                      const IconComponent = appointment.icon;
                      return (
                        <div key={appointment.id} className="border border-border/50 rounded-lg p-4 space-y-3">
                          <div className="flex items-start justify-between">
                            <div className="flex items-center gap-2">
                              <IconComponent className="h-4 w-4 text-primary" />
                              <h4 className="font-medium">{appointment.title}</h4>
                            </div>
                            <Badge className={getStatusColor(appointment.status)}>
                              {appointment.status}
                            </Badge>
                          </div>
                          
                          <div className="space-y-2 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <Clock className="h-3 w-3" />
                              <span>{appointment.time} ({appointment.duration})</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <User className="h-3 w-3" />
                              <span>{appointment.patient}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-3 w-3" />
                              <span>{appointment.room}</span>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div className="text-center py-8 text-muted-foreground">
                      <CalendarIcon className="h-12 w-12 mx-auto mb-3 opacity-50" />
                      <p>No appointments for this date</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="list" className="space-y-6">
            <div className="grid gap-4">
              {appointments.map((appointment) => {
                const IconComponent = appointment.icon;
                return (
                  <Card key={appointment.id} className="healing-card">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-primary/10 rounded-lg">
                            <IconComponent className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg">{appointment.title}</h3>
                            <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <CalendarIcon className="h-3 w-3" />
                                {format(new Date(appointment.date), 'MMM d, yyyy')}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {appointment.time}
                              </span>
                              <span className="flex items-center gap-1">
                                <User className="h-3 w-3" />
                                {appointment.patient}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge className={getStatusColor(appointment.status)}>
                            {appointment.status}
                          </Badge>
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
};