import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Stethoscope, 
  Users, 
  Calendar, 
  Bed, 
  Activity, 
  Clock,
  UserCheck,
  AlertCircle,
  TrendingUp,
  MapPin,
  ClipboardList
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { PanchakarmaTimeline } from '@/components/PanchakarmaTimeline';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const patientData = [
  { name: 'Anjali Sharma', therapy: 'Abhyanga', time: '10:00 AM', status: 'Scheduled', progress: 85 },
  { name: 'Rajesh Kumar', therapy: 'Shirodhara', time: '2:00 PM', status: 'In Progress', progress: 60 },
  { name: 'Priya Nair', therapy: 'Herbal Steam', time: '4:00 PM', status: 'Completed', progress: 95 },
];

const roomData = [
  { room: 'Room 1', status: 'Occupied', patient: 'Anjali S.', therapy: 'Abhyanga' },
  { room: 'Room 2', status: 'Occupied', patient: 'Rajesh K.', therapy: 'Shirodhara' },
  { room: 'Room 3', status: 'Occupied', patient: 'Priya N.', therapy: 'Steam Bath' },
  { room: 'Room 4', status: 'Available', patient: '-', therapy: '-' },
  { room: 'Room 5', status: 'Available', patient: '-', therapy: '-' },
];

const workloadData = [
  { time: '9 AM', patients: 2 },
  { time: '11 AM', patients: 5 },
  { time: '1 PM', patients: 3 },
  { time: '3 PM', patients: 6 },
  { time: '5 PM', patients: 4 },
  { time: '7 PM', patients: 1 },
];

export const TherapistDashboard = () => {
  const [selectedPatient, setSelectedPatient] = useState<string | null>(null);

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 space-y-8">
        {/* Welcome Section */}
        <div className="space-y-2">
          <h1 className="text-3xl font-display font-bold text-foreground">
            🙏 Welcome, Dr. Sharma
          </h1>
          <p className="text-muted-foreground">Managing healing journeys with compassion and expertise</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="healing-card">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">12</p>
                  <p className="text-sm text-muted-foreground">Today's Patients</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="healing-card">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-accent/10 rounded-full">
                  <Calendar className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold">8</p>
                  <p className="text-sm text-muted-foreground">Completed Sessions</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="healing-card">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Bed className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">3/5</p>
                  <p className="text-sm text-muted-foreground">Rooms Occupied</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="healing-card">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-accent/10 rounded-full">
                  <TrendingUp className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold">94%</p>
                  <p className="text-sm text-muted-foreground">Success Rate</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Assigned Patients */}
            <Card className="healing-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <UserCheck className="h-5 w-5 text-primary" />
                  <span>Today's Patient Schedule</span>
                </CardTitle>
                <CardDescription>
                  Manage your assigned patients and therapy sessions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {patientData.map((patient, index) => (
                    <div key={index} className="p-4 bg-muted/30 rounded-lg border border-border/50">
                      <div className="flex items-center justify-between">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-3">
                            <h3 className="font-semibold">{patient.name}</h3>
                            <Badge 
                              variant={
                                patient.status === 'Completed' ? 'default' : 
                                patient.status === 'In Progress' ? 'secondary' : 'outline'
                              }
                            >
                              {patient.status}
                            </Badge>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Stethoscope className="h-4 w-4" />
                              <span>{patient.therapy}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="h-4 w-4" />
                              <span>{patient.time}</span>
                            </div>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div 
                              className="bg-primary h-2 rounded-full transition-all duration-300" 
                              style={{ width: `${patient.progress}%` }}
                            ></div>
                          </div>
                        </div>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm" className="gap-1">
                              <ClipboardList className="h-3.5 w-3.5" />
                              Timeline
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle>Treatment Timeline</DialogTitle>
                            </DialogHeader>
                            <PanchakarmaTimeline patientName={patient.name} isTherapistView />
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Real-time Load Monitoring */}
            <Card className="healing-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Activity className="h-5 w-5 text-primary" />
                  <span>Daily Workload Distribution</span>
                </CardTitle>
                <CardDescription>
                  Monitor patient flow throughout the day
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={workloadData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" />
                      <YAxis stroke="hsl(var(--muted-foreground))" />
                      <Tooltip 
                        contentStyle={{
                          backgroundColor: 'hsl(var(--card))',
                          border: '1px solid hsl(var(--border))',
                          borderRadius: '8px'
                        }}
                      />
                      <Bar dataKey="patients" fill="hsl(var(--primary))" radius={4} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Room Allocation */}
            <Card className="healing-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Room Allocation</span>
                </CardTitle>
                <CardDescription>
                  Current room occupancy status
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {roomData.map((room, index) => (
                  <div key={index} className="p-3 bg-muted/30 rounded-lg border border-border/50">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium text-sm">{room.room}</span>
                          <Badge 
                            variant={room.status === 'Occupied' ? 'default' : 'secondary'}
                            className="text-xs"
                          >
                            {room.status}
                          </Badge>
                        </div>
                        {room.status === 'Occupied' && (
                          <div className="text-xs text-muted-foreground">
                            <p>{room.patient}</p>
                            <p>{room.therapy}</p>
                          </div>
                        )}
                      </div>
                      <div className={`w-3 h-3 rounded-full ${
                        room.status === 'Occupied' ? 'bg-accent' : 'bg-primary'
                      }`}></div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="healing-card">
              <CardHeader>
                <CardTitle className="text-sm font-medium">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="healing" className="w-full justify-start" size="sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule New Session
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <Users className="h-4 w-4 mr-2" />
                  View All Patients
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <AlertCircle className="h-4 w-4 mr-2" />
                  Emergency Protocol
                </Button>
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card className="healing-card">
              <CardHeader>
                <CardTitle className="text-sm font-medium">Important Updates</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-accent/10 rounded-lg border border-accent/20">
                  <div className="text-sm">
                    <p className="font-medium">Room 3 Ready</p>
                    <p className="text-muted-foreground">Steam bath session completed</p>
                  </div>
                </div>
                
                <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                  <div className="text-sm">
                    <p className="font-medium">New Patient</p>
                    <p className="text-muted-foreground">Consultation scheduled at 6 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};