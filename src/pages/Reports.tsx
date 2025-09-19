import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line
} from 'recharts';
import { 
  TrendingUp, 
  Users, 
  Calendar, 
  Activity,
  Download,
  Filter,
  Star
} from 'lucide-react';

export const Reports = () => {
  // Dummy data for charts
  const recoveryData = [
    { month: 'Jan', patients: 45, recovered: 38 },
    { month: 'Feb', patients: 52, recovered: 44 },
    { month: 'Mar', patients: 48, recovered: 41 },
    { month: 'Apr', patients: 61, recovered: 55 },
    { month: 'May', patients: 58, recovered: 52 },
    { month: 'Jun', patients: 67, recovered: 61 }
  ];

  const occupancyData = [
    { name: 'Occupied Rooms', value: 60, color: '#5d7c5d' },
    { name: 'Available Rooms', value: 40, color: '#f4a261' }
  ];

  const feedbackData = [
    {
      id: 1,
      patient: 'Anjali Sharma',
      therapy: 'Abhyanga Massage',
      rating: 5,
      feedback: 'Excellent service and very relaxing experience.',
      date: '18 Sep 2024'
    },
    {
      id: 2,
      patient: 'Rohit Patel',
      therapy: 'Shirodhara',
      rating: 4,
      feedback: 'Good therapy, felt much better after the session.',
      date: '17 Sep 2024'
    },
    {
      id: 3,
      patient: 'Priya Nair',
      therapy: 'Panchakarma',
      rating: 5,
      feedback: 'Life-changing experience. Highly recommended!',
      date: '16 Sep 2024'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

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
            <h1 className="text-3xl font-bold text-foreground">Reports & Analytics</h1>
            <p className="text-muted-foreground mt-2">
              Comprehensive insights into patient recovery and therapy effectiveness
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
            <Button className="gap-2 primary-gradient">
              <Download className="h-4 w-4" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="healing-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Patients</p>
                  <p className="text-2xl font-bold text-primary">234</p>
                </div>
                <Users className="h-8 w-8 text-primary/60" />
              </div>
              <div className="flex items-center gap-1 mt-2">
                <TrendingUp className="h-4 w-4 text-green-600" />
                <span className="text-xs text-green-600">+12% from last month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="healing-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Recovery Rate</p>
                  <p className="text-2xl font-bold text-primary">91.2%</p>
                </div>
                <Activity className="h-8 w-8 text-primary/60" />
              </div>
              <div className="flex items-center gap-1 mt-2">
                <TrendingUp className="h-4 w-4 text-green-600" />
                <span className="text-xs text-green-600">+5.3% this quarter</span>
              </div>
            </CardContent>
          </Card>

          <Card className="healing-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Sessions Today</p>
                  <p className="text-2xl font-bold text-primary">18</p>
                </div>
                <Calendar className="h-8 w-8 text-primary/60" />
              </div>
              <div className="flex items-center gap-1 mt-2">
                <span className="text-xs text-accent">3 rooms available</span>
              </div>
            </CardContent>
          </Card>

          <Card className="healing-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Avg Rating</p>
                  <p className="text-2xl font-bold text-primary">4.8</p>
                </div>
                <Star className="h-8 w-8 text-yellow-400 fill-current" />
              </div>
              <div className="flex items-center gap-1 mt-2">
                <span className="text-xs text-muted-foreground">Based on 156 reviews</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Patient Recovery Rates */}
          <Card className="healing-card">
            <CardHeader>
              <CardTitle>Patient Recovery Trends</CardTitle>
              <CardDescription>
                Monthly patient recovery rates and treatment effectiveness
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={recoveryData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar dataKey="patients" fill="hsl(var(--muted))" name="Total Patients" />
                  <Bar dataKey="recovered" fill="hsl(var(--primary))" name="Recovered" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Room Occupancy */}
          <Card className="healing-card">
            <CardHeader>
              <CardTitle>Therapy Room Occupancy</CardTitle>
              <CardDescription>
                Current utilization of therapy rooms and facilities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={occupancyData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {occupancyData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex justify-center gap-6 mt-4">
                {occupancyData.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm text-muted-foreground">
                      {item.name}: {item.value}%
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Patient Feedback */}
        <Card className="healing-card">
          <CardHeader>
            <CardTitle>Recent Patient Feedback</CardTitle>
            <CardDescription>
              Latest reviews and ratings from completed therapy sessions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Patient</TableHead>
                  <TableHead>Therapy</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead>Feedback</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {feedbackData.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.patient}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{item.therapy}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        {renderStars(item.rating)}
                      </div>
                    </TableCell>
                    <TableCell className="max-w-xs truncate">
                      {item.feedback}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {item.date}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};