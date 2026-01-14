import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
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
  Line,
  AreaChart,
  Area,
  Legend
} from 'recharts';
import { 
  TrendingUp, 
  TrendingDown,
  Users, 
  Calendar, 
  Activity,
  Download,
  Filter,
  Star,
  FileText,
  Clock,
  Heart,
  Leaf,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
  Sparkles,
  Target,
  Stethoscope,
  Building2
} from 'lucide-react';

export const Reports = () => {
  const [selectedMonth, setSelectedMonth] = useState('September 2024');

  // Monthly summary data
  const monthlySummary = {
    totalPatients: 234,
    newPatients: 42,
    completedTherapies: 156,
    revenue: '₹12,45,000',
    avgSessionDuration: '75 min',
    satisfactionScore: 4.8,
    therapiesPerDay: 18,
    returningPatients: '68%'
  };

  // Recovery trend data
  const recoveryData = [
    { month: 'Jan', patients: 45, recovered: 38, satisfaction: 4.5 },
    { month: 'Feb', patients: 52, recovered: 44, satisfaction: 4.6 },
    { month: 'Mar', patients: 48, recovered: 41, satisfaction: 4.7 },
    { month: 'Apr', patients: 61, recovered: 55, satisfaction: 4.6 },
    { month: 'May', patients: 58, recovered: 52, satisfaction: 4.8 },
    { month: 'Jun', patients: 67, recovered: 61, satisfaction: 4.9 }
  ];

  // Therapy type distribution
  const therapyDistribution = [
    { name: 'Abhyanga', value: 35, color: 'hsl(145, 25%, 35%)' },
    { name: 'Shirodhara', value: 25, color: 'hsl(160, 30%, 45%)' },
    { name: 'Panchakarma', value: 20, color: 'hsl(25, 85%, 65%)' },
    { name: 'Virechana', value: 12, color: 'hsl(35, 80%, 60%)' },
    { name: 'Others', value: 8, color: 'hsl(40, 20%, 75%)' }
  ];

  const occupancyData = [
    { name: 'Occupied', value: 60, color: 'hsl(145, 25%, 35%)' },
    { name: 'Available', value: 40, color: 'hsl(25, 85%, 65%)' }
  ];

  // Weekly patient flow
  const weeklyPatientFlow = [
    { day: 'Mon', patients: 22, appointments: 25 },
    { day: 'Tue', patients: 28, appointments: 30 },
    { day: 'Wed', patients: 25, appointments: 28 },
    { day: 'Thu', patients: 32, appointments: 35 },
    { day: 'Fri', patients: 30, appointments: 32 },
    { day: 'Sat', patients: 35, appointments: 38 },
    { day: 'Sun', patients: 15, appointments: 18 }
  ];

  // Revenue trend
  const revenueTrend = [
    { month: 'Jan', revenue: 850000, expenses: 420000 },
    { month: 'Feb', revenue: 920000, expenses: 450000 },
    { month: 'Mar', revenue: 880000, expenses: 430000 },
    { month: 'Apr', revenue: 1050000, expenses: 480000 },
    { month: 'May', revenue: 1120000, expenses: 510000 },
    { month: 'Jun', revenue: 1245000, expenses: 540000 }
  ];

  // Top therapists performance
  const therapistPerformance = [
    { name: 'Dr. Arjun Nair', sessions: 48, rating: 4.9, speciality: 'Panchakarma' },
    { name: 'Dr. Priya Sharma', sessions: 45, rating: 4.8, speciality: 'Shirodhara' },
    { name: 'Dr. Vikram Das', sessions: 42, rating: 4.7, speciality: 'Abhyanga' },
    { name: 'Dr. Meera Patel', sessions: 38, rating: 4.9, speciality: 'Virechana' }
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
          i < rating ? 'text-amber-400 fill-current' : 'text-muted-foreground/30'
        }`}
      />
    ));
  };

  const StatCard = ({ 
    title, 
    value, 
    icon: Icon, 
    trend, 
    trendValue, 
    subtitle 
  }: { 
    title: string; 
    value: string | number; 
    icon: any; 
    trend?: 'up' | 'down'; 
    trendValue?: string;
    subtitle?: string;
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Card className="healing-card overflow-hidden">
        <CardContent className="p-6">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">{title}</p>
              <p className="text-3xl font-bold text-foreground">{value}</p>
              {trend && trendValue && (
                <div className={`flex items-center gap-1 ${trend === 'up' ? 'text-emerald-600' : 'text-rose-500'}`}>
                  {trend === 'up' ? (
                    <ArrowUpRight className="h-4 w-4" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4" />
                  )}
                  <span className="text-xs font-medium">{trendValue}</span>
                </div>
              )}
              {subtitle && (
                <p className="text-xs text-muted-foreground">{subtitle}</p>
              )}
            </div>
            <div className="p-3 rounded-xl bg-primary/10">
              <Icon className="h-6 w-6 text-primary" />
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <div className="min-h-screen therapy-gradient">
      <div className="max-w-7xl mx-auto p-6 space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4"
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-xl bg-primary/10">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <h1 className="text-3xl font-bold text-foreground">Clinic Insights & Reports</h1>
            </div>
            <p className="text-muted-foreground">
              Comprehensive analytics for AyurSutra Wellness Center • {selectedMonth}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
            <Button variant="outline" className="gap-2">
              <Calendar className="h-4 w-4" />
              {selectedMonth}
            </Button>
            <Button className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground">
              <Download className="h-4 w-4" />
              Download Report
            </Button>
          </div>
        </motion.div>

        {/* Monthly Summary Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="overflow-hidden border-0 bg-gradient-to-r from-primary/90 to-primary">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="h-5 w-5 text-primary-foreground/80" />
                <h2 className="text-lg font-semibold text-primary-foreground">Monthly Summary</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary-foreground">{monthlySummary.totalPatients}</p>
                  <p className="text-xs text-primary-foreground/70">Total Patients</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary-foreground">{monthlySummary.newPatients}</p>
                  <p className="text-xs text-primary-foreground/70">New Patients</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary-foreground">{monthlySummary.completedTherapies}</p>
                  <p className="text-xs text-primary-foreground/70">Therapies</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary-foreground">{monthlySummary.revenue}</p>
                  <p className="text-xs text-primary-foreground/70">Revenue</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary-foreground">{monthlySummary.avgSessionDuration}</p>
                  <p className="text-xs text-primary-foreground/70">Avg Session</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary-foreground">{monthlySummary.satisfactionScore}</p>
                  <p className="text-xs text-primary-foreground/70">Satisfaction</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary-foreground">{monthlySummary.therapiesPerDay}</p>
                  <p className="text-xs text-primary-foreground/70">Per Day</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary-foreground">{monthlySummary.returningPatients}</p>
                  <p className="text-xs text-primary-foreground/70">Returning</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Key Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard 
            title="Total Patients" 
            value="234" 
            icon={Users}
            trend="up"
            trendValue="+12% from last month"
          />
          <StatCard 
            title="Recovery Rate" 
            value="91.2%" 
            icon={Heart}
            trend="up"
            trendValue="+5.3% this quarter"
          />
          <StatCard 
            title="Sessions Today" 
            value="18" 
            icon={Stethoscope}
            subtitle="3 therapy rooms available"
          />
          <StatCard 
            title="Avg Rating" 
            value="4.8" 
            icon={Star}
            subtitle="Based on 156 reviews"
          />
        </div>

        {/* Tabs for Different Report Sections */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="bg-card/80 backdrop-blur-sm border border-border/50 p-1">
            <TabsTrigger value="overview" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Overview
            </TabsTrigger>
            <TabsTrigger value="patients" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Patients
            </TabsTrigger>
            <TabsTrigger value="therapies" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Therapies
            </TabsTrigger>
            <TabsTrigger value="revenue" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Revenue
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Patient Recovery Trends */}
              <Card className="healing-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <Activity className="h-5 w-5 text-primary" />
                        Patient Recovery Trends
                      </CardTitle>
                      <CardDescription>
                        Monthly patient recovery rates and satisfaction
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="text-primary border-primary/30">
                      +8.5% YoY
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={280}>
                    <BarChart data={recoveryData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                      <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                      <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                      <Tooltip 
                        contentStyle={{
                          backgroundColor: 'hsl(var(--card))',
                          border: '1px solid hsl(var(--border))',
                          borderRadius: '12px',
                          boxShadow: 'var(--shadow-soft)'
                        }}
                      />
                      <Bar dataKey="patients" fill="hsl(var(--muted))" name="Total Patients" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="recovered" fill="hsl(var(--primary))" name="Recovered" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Therapy Distribution */}
              <Card className="healing-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <Leaf className="h-5 w-5 text-primary" />
                        Therapy Distribution
                      </CardTitle>
                      <CardDescription>
                        Popular treatments this month
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-6">
                    <ResponsiveContainer width="50%" height={200}>
                      <PieChart>
                        <Pie
                          data={therapyDistribution}
                          cx="50%"
                          cy="50%"
                          innerRadius={50}
                          outerRadius={80}
                          paddingAngle={3}
                          dataKey="value"
                        >
                          {therapyDistribution.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                    <div className="flex-1 space-y-3">
                      {therapyDistribution.map((item, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div 
                              className="w-3 h-3 rounded-full" 
                              style={{ backgroundColor: item.color }}
                            />
                            <span className="text-sm font-medium text-foreground">{item.name}</span>
                          </div>
                          <span className="text-sm text-muted-foreground">{item.value}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Weekly Patient Flow */}
            <Card className="healing-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-primary" />
                      Weekly Patient Flow
                    </CardTitle>
                    <CardDescription>
                      Daily patient visits vs appointments booked
                    </CardDescription>
                  </div>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20">This Week</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={280}>
                  <AreaChart data={weeklyPatientFlow}>
                    <defs>
                      <linearGradient id="patientGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(145, 25%, 35%)" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="hsl(145, 25%, 35%)" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="appointmentGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(25, 85%, 65%)" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="hsl(25, 85%, 65%)" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                    <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '12px'
                      }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="appointments" 
                      stroke="hsl(25, 85%, 65%)" 
                      fill="url(#appointmentGradient)" 
                      name="Appointments"
                      strokeWidth={2}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="patients" 
                      stroke="hsl(145, 25%, 35%)" 
                      fill="url(#patientGradient)" 
                      name="Actual Visits"
                      strokeWidth={2}
                    />
                    <Legend />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="patients" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Room Occupancy */}
              <Card className="healing-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-primary" />
                    Room Occupancy
                  </CardTitle>
                  <CardDescription>Current therapy room utilization</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie
                        data={occupancyData}
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={80}
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

              {/* Top Therapists */}
              <Card className="healing-card lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    Top Performing Therapists
                  </CardTitle>
                  <CardDescription>This month's standout practitioners</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {therapistPerformance.map((therapist, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                            {index + 1}
                          </div>
                          <div>
                            <p className="font-medium text-foreground">{therapist.name}</p>
                            <p className="text-xs text-muted-foreground">{therapist.speciality}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-6">
                          <div className="text-center">
                            <p className="font-semibold text-foreground">{therapist.sessions}</p>
                            <p className="text-xs text-muted-foreground">Sessions</p>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 text-amber-400 fill-current" />
                            <span className="font-semibold text-foreground">{therapist.rating}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Patient Feedback */}
            <Card className="healing-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-primary" />
                      Recent Patient Feedback
                    </CardTitle>
                    <CardDescription>Latest reviews from therapy sessions</CardDescription>
                  </div>
                  <Button variant="outline" size="sm">View All</Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="hover:bg-transparent">
                      <TableHead>Patient</TableHead>
                      <TableHead>Therapy</TableHead>
                      <TableHead>Rating</TableHead>
                      <TableHead className="hidden md:table-cell">Feedback</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {feedbackData.map((item) => (
                      <TableRow key={item.id} className="hover:bg-muted/30">
                        <TableCell className="font-medium">{item.patient}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="border-primary/30 text-primary">
                            {item.therapy}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            {renderStars(item.rating)}
                          </div>
                        </TableCell>
                        <TableCell className="hidden md:table-cell max-w-xs truncate text-muted-foreground">
                          {item.feedback}
                        </TableCell>
                        <TableCell className="text-muted-foreground text-sm">
                          {item.date}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="therapies" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="healing-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Leaf className="h-5 w-5 text-primary" />
                    </div>
                    <span className="font-medium text-foreground">Abhyanga</span>
                  </div>
                  <p className="text-3xl font-bold text-foreground mb-2">54</p>
                  <p className="text-sm text-muted-foreground">Sessions this month</p>
                  <Progress value={75} className="mt-3 h-2" />
                </CardContent>
              </Card>
              <Card className="healing-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-accent/10">
                      <Sparkles className="h-5 w-5 text-accent" />
                    </div>
                    <span className="font-medium text-foreground">Shirodhara</span>
                  </div>
                  <p className="text-3xl font-bold text-foreground mb-2">38</p>
                  <p className="text-sm text-muted-foreground">Sessions this month</p>
                  <Progress value={60} className="mt-3 h-2" />
                </CardContent>
              </Card>
              <Card className="healing-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Heart className="h-5 w-5 text-primary" />
                    </div>
                    <span className="font-medium text-foreground">Panchakarma</span>
                  </div>
                  <p className="text-3xl font-bold text-foreground mb-2">31</p>
                  <p className="text-sm text-muted-foreground">Sessions this month</p>
                  <Progress value={45} className="mt-3 h-2" />
                </CardContent>
              </Card>
              <Card className="healing-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-accent/10">
                      <Activity className="h-5 w-5 text-accent" />
                    </div>
                    <span className="font-medium text-foreground">Virechana</span>
                  </div>
                  <p className="text-3xl font-bold text-foreground mb-2">18</p>
                  <p className="text-sm text-muted-foreground">Sessions this month</p>
                  <Progress value={30} className="mt-3 h-2" />
                </CardContent>
              </Card>
            </div>

            {/* Therapy Success Rates */}
            <Card className="healing-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Therapy Success Rates
                </CardTitle>
                <CardDescription>Patient recovery by therapy type</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    { name: 'Abhyanga Massage', rate: 94, patients: 54 },
                    { name: 'Shirodhara', rate: 91, patients: 38 },
                    { name: 'Panchakarma', rate: 88, patients: 31 },
                    { name: 'Virechana', rate: 92, patients: 18 },
                    { name: 'Nasya', rate: 85, patients: 15 }
                  ].map((therapy, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-foreground">{therapy.name}</span>
                        <div className="flex items-center gap-4">
                          <span className="text-sm text-muted-foreground">{therapy.patients} patients</span>
                          <span className="font-semibold text-primary">{therapy.rate}%</span>
                        </div>
                      </div>
                      <Progress value={therapy.rate} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="revenue" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
              <StatCard 
                title="Total Revenue" 
                value="₹12.45L" 
                icon={DollarSign}
                trend="up"
                trendValue="+18% from last month"
              />
              <StatCard 
                title="Expenses" 
                value="₹5.40L" 
                icon={TrendingDown}
                trend="down"
                trendValue="-3% optimized"
              />
              <StatCard 
                title="Net Profit" 
                value="₹7.05L" 
                icon={TrendingUp}
                trend="up"
                trendValue="+24% growth"
              />
            </div>

            {/* Revenue Chart */}
            <Card className="healing-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <DollarSign className="h-5 w-5 text-primary" />
                      Revenue vs Expenses
                    </CardTitle>
                    <CardDescription>6-month financial overview</CardDescription>
                  </div>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Download className="h-4 w-4" />
                    Export
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={320}>
                  <AreaChart data={revenueTrend}>
                    <defs>
                      <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(145, 25%, 35%)" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="hsl(145, 25%, 35%)" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="expenseGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(25, 85%, 65%)" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="hsl(25, 85%, 65%)" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                    <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <YAxis 
                      stroke="hsl(var(--muted-foreground))" 
                      fontSize={12}
                      tickFormatter={(value) => `₹${value / 100000}L`}
                    />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '12px'
                      }}
                      formatter={(value: number) => [`₹${(value / 100000).toFixed(2)}L`, '']}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="revenue" 
                      stroke="hsl(145, 25%, 35%)" 
                      fill="url(#revenueGradient)"
                      strokeWidth={2}
                      name="Revenue"
                    />
                    <Area 
                      type="monotone" 
                      dataKey="expenses" 
                      stroke="hsl(25, 85%, 65%)" 
                      fill="url(#expenseGradient)"
                      strokeWidth={2}
                      name="Expenses"
                    />
                    <Legend />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
