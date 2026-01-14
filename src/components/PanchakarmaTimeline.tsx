import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { 
  ChevronDown, 
  Clock, 
  Droplets, 
  MessageSquare, 
  User,
  Leaf,
  Sparkles
} from 'lucide-react';

interface DayData {
  day: number;
  therapyName: string;
  duration: string;
  oilsMedicines: string[];
  therapistNotes: string;
  patientFeedback: {
    emoji: string;
    text: string;
  };
  status: 'completed' | 'in-progress' | 'upcoming';
}

const mockTimelineData: DayData[] = [
  {
    day: 1,
    therapyName: 'Abhyanga (Oil Massage)',
    duration: '60 minutes',
    oilsMedicines: ['Sesame Oil', 'Bala Ashwagandha Oil', 'Mahanarayan Oil'],
    therapistNotes: 'Patient responded well to the initial massage. Focus areas: lower back and shoulders. Vata imbalance noted, recommend warm oil treatment continuation.',
    patientFeedback: {
      emoji: '😊',
      text: 'Felt very relaxed and calm after the session. Mild soreness expected.'
    },
    status: 'completed'
  },
  {
    day: 2,
    therapyName: 'Swedana (Steam Therapy)',
    duration: '45 minutes',
    oilsMedicines: ['Dashmoola Kwath', 'Eucalyptus Steam', 'Nirgundi Leaves'],
    therapistNotes: 'Steam therapy helped open channels (srotas). Patient sweating was adequate. Skin appears healthier. Continue hydration protocol.',
    patientFeedback: {
      emoji: '😌',
      text: 'Amazing detox feeling. Skin feels cleaner and lighter.'
    },
    status: 'completed'
  },
  {
    day: 3,
    therapyName: 'Virechana (Purgation Therapy)',
    duration: '90 minutes',
    oilsMedicines: ['Triphala Churna', 'Avipattikar Churna', 'Trivrit Avaleha'],
    therapistNotes: 'Pre-procedure diet followed well. Administered therapeutic purgation. Monitor for 4-6 bowel movements. Keep patient hydrated with warm water.',
    patientFeedback: {
      emoji: '😅',
      text: 'Challenging but effective. Feeling much lighter and energized now.'
    },
    status: 'completed'
  },
  {
    day: 4,
    therapyName: 'Shirodhara (Oil Pouring)',
    duration: '75 minutes',
    oilsMedicines: ['Brahmi Taila', 'Ksheerabala Oil', 'Chandanadi Taila'],
    therapistNotes: 'Continuous oil stream maintained for 45 minutes. Patient achieved deep relaxation state. Recommended for stress relief and mental clarity.',
    patientFeedback: {
      emoji: '🧘',
      text: 'Most peaceful experience ever. Mind feels so clear and calm.'
    },
    status: 'in-progress'
  },
  {
    day: 5,
    therapyName: 'Basti (Herbal Enema)',
    duration: '60 minutes',
    oilsMedicines: ['Dashamoola Kwath', 'Til Taila', 'Saindhav Lavana'],
    therapistNotes: 'Scheduled for Anuvasana Basti. Ensure patient fasts for 4 hours prior. Prepare warm decoction.',
    patientFeedback: {
      emoji: '🙂',
      text: 'Looking forward to completing the treatment cycle.'
    },
    status: 'upcoming'
  }
];

interface PanchakarmaTimelineProps {
  patientName?: string;
  isTherapistView?: boolean;
}

export const PanchakarmaTimeline: React.FC<PanchakarmaTimelineProps> = ({ 
  patientName = 'Anjali Sharma',
  isTherapistView = false 
}) => {
  const [expandedDays, setExpandedDays] = useState<number[]>([]);

  const toggleDay = (day: number) => {
    setExpandedDays(prev => 
      prev.includes(day) 
        ? prev.filter(d => d !== day) 
        : [...prev, day]
    );
  };

  const getStatusColor = (status: DayData['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-primary/20 text-primary border-primary/30';
      case 'in-progress':
        return 'bg-accent/20 text-accent border-accent/30';
      case 'upcoming':
        return 'bg-muted text-muted-foreground border-border';
    }
  };

  const getStatusBadge = (status: DayData['status']) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-primary/20 text-primary border-primary/30">Completed</Badge>;
      case 'in-progress':
        return <Badge className="bg-accent/20 text-accent border-accent/30">In Progress</Badge>;
      case 'upcoming':
        return <Badge variant="secondary">Upcoming</Badge>;
    }
  };

  return (
    <Card className="healing-card">
      <CardHeader className="border-b border-border/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-full">
              <Leaf className="h-5 w-5 text-primary" />
            </div>
            <div>
              <CardTitle className="text-xl">Panchakarma Treatment Timeline</CardTitle>
              <p className="text-sm text-muted-foreground mt-1">
                {isTherapistView ? `Patient: ${patientName}` : 'Your healing journey day by day'}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">60% Complete</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 space-y-3">
        {mockTimelineData.map((dayData, index) => (
          <motion.div
            key={dayData.day}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div
              className={`rounded-xl border ${getStatusColor(dayData.status)} overflow-hidden transition-all duration-300`}
            >
              {/* Day Header - Clickable */}
              <button
                onClick={() => toggleDay(dayData.day)}
                className="w-full p-4 flex items-center justify-between hover:bg-muted/30 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                    dayData.status === 'completed' ? 'bg-primary text-primary-foreground' :
                    dayData.status === 'in-progress' ? 'bg-accent text-accent-foreground' :
                    'bg-muted text-muted-foreground'
                  }`}>
                    {dayData.day}
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-foreground">{dayData.therapyName}</h3>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground mt-1">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {dayData.duration}
                      </span>
                      {getStatusBadge(dayData.status)}
                    </div>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: expandedDays.includes(dayData.day) ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="h-5 w-5 text-muted-foreground" />
                </motion.div>
              </button>

              {/* Expandable Content */}
              <AnimatePresence>
                {expandedDays.includes(dayData.day) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 pt-0 space-y-4 border-t border-border/30">
                      {/* Oils & Medicines */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                          <Droplets className="h-4 w-4 text-primary" />
                          Oils & Medicines Used
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {dayData.oilsMedicines.map((item, i) => (
                            <Badge 
                              key={i} 
                              variant="outline" 
                              className="bg-primary/5 border-primary/20"
                            >
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Therapist Notes */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                          <User className="h-4 w-4 text-primary" />
                          Therapist Notes
                        </div>
                        <div className="p-3 bg-muted/50 rounded-lg text-sm text-muted-foreground">
                          {dayData.therapistNotes}
                        </div>
                      </div>

                      {/* Patient Feedback */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                          <MessageSquare className="h-4 w-4 text-accent" />
                          Patient Feedback
                        </div>
                        <div className="p-3 bg-accent/5 rounded-lg border border-accent/20">
                          <div className="flex items-start gap-3">
                            <span className="text-2xl">{dayData.patientFeedback.emoji}</span>
                            <p className="text-sm text-muted-foreground">{dayData.patientFeedback.text}</p>
                          </div>
                        </div>
                        
                        {/* Add Feedback (for patient view on in-progress/upcoming) */}
                        {!isTherapistView && dayData.status !== 'completed' && (
                          <div className="space-y-2 pt-2">
                            <div className="flex gap-2">
                              {['😊', '😌', '😐', '😅', '🧘'].map((emoji) => (
                                <button
                                  key={emoji}
                                  className="text-2xl p-2 rounded-lg hover:bg-muted/50 transition-colors"
                                >
                                  {emoji}
                                </button>
                              ))}
                            </div>
                            <Textarea 
                              placeholder="Share your experience..." 
                              className="resize-none"
                              rows={2}
                            />
                            <Button size="sm" className="primary-gradient">
                              Submit Feedback
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </CardContent>
    </Card>
  );
};
