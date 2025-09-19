import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { 
  Palette, 
  Globe, 
  Bell, 
  Shield, 
  Moon, 
  Sun,
  Calendar,
  Smartphone,
  Mail,
  MessageSquare,
  Volume2,
  Eye,
  Lock,
  Download,
  Trash2,
  HelpCircle
} from 'lucide-react';

export const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('english');
  const [notifications, setNotifications] = useState({
    appointments: true,
    reminders: true,
    progress: false,
    marketing: false,
    push: true,
    email: true,
    sms: false
  });

  const handleNotificationChange = (key: string, value: boolean) => {
    setNotifications(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="min-h-screen therapy-gradient p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto space-y-6"
      >
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Settings</h1>
          <p className="text-muted-foreground mt-2">
            Customize your AyurSutra experience and preferences
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Appearance */}
          <Card className="healing-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5 text-primary" />
                Appearance
              </CardTitle>
              <CardDescription>
                Customize the look and feel of your interface
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="text-sm font-medium">Theme</Label>
                    <p className="text-xs text-muted-foreground">
                      Choose between light and dark modes
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sun className="h-4 w-4 text-amber-500" />
                    <Switch
                      checked={darkMode}
                      onCheckedChange={setDarkMode}
                    />
                    <Moon className="h-4 w-4 text-indigo-500" />
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <Label className="text-sm font-medium">Color Scheme</Label>
                  <div className="grid grid-cols-3 gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-12 bg-gradient-to-r from-green-400 to-emerald-500 border-primary"
                    >
                      <span className="text-xs">Healing</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-12 bg-gradient-to-r from-blue-400 to-cyan-500"
                    >
                      <span className="text-xs">Ocean</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-12 bg-gradient-to-r from-purple-400 to-pink-500"
                    >
                      <span className="text-xs">Sunset</span>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Language & Region */}
          <Card className="healing-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                Language & Region
              </CardTitle>
              <CardDescription>
                Set your preferred language and regional settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="language">Display Language</Label>
                <Select value={language} onValueChange={setLanguage}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="english">🇺🇸 English</SelectItem>
                    <SelectItem value="hindi">🇮🇳 हिंदी (Hindi)</SelectItem>
                    <SelectItem value="sanskrit">🕉️ संस्कृत (Sanskrit)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="timezone">Timezone</Label>
                <Select defaultValue="ist">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ist">🇮🇳 IST (UTC+5:30)</SelectItem>
                    <SelectItem value="pst">🇺🇸 PST (UTC-8)</SelectItem>
                    <SelectItem value="est">🇺🇸 EST (UTC-5)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="dateformat">Date Format</Label>
                <Select defaultValue="dmy">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dmy">DD/MM/YYYY</SelectItem>
                    <SelectItem value="mdy">MM/DD/YYYY</SelectItem>
                    <SelectItem value="ymd">YYYY-MM-DD</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="healing-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-primary" />
                Quick Actions
              </CardTitle>
              <CardDescription>
                Common settings and helpful resources
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start gap-2">
                <Download className="h-4 w-4" />
                Export Data
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2">
                <Eye className="h-4 w-4" />
                Privacy Center
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2">
                <Lock className="h-4 w-4" />
                Security Settings
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2 text-red-600 hover:text-red-700">
                <Trash2 className="h-4 w-4" />
                Delete Account
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Notifications */}
        <Card className="healing-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-primary" />
              Notification Preferences
            </CardTitle>
            <CardDescription>
              Choose what notifications you want to receive and how
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Notification Types */}
              <div className="space-y-6">
                <h4 className="font-medium text-sm">Notification Types</h4>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <Label className="text-sm font-medium">Appointment Reminders</Label>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Get notified about upcoming therapy sessions
                      </p>
                    </div>
                    <Switch
                      checked={notifications.appointments}
                      onCheckedChange={(value) => handleNotificationChange('appointments', value)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Bell className="h-4 w-4 text-primary" />
                        <Label className="text-sm font-medium">Therapy Reminders</Label>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Pre and post-therapy care instructions
                      </p>
                    </div>
                    <Switch
                      checked={notifications.reminders}
                      onCheckedChange={(value) => handleNotificationChange('reminders', value)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Volume2 className="h-4 w-4 text-primary" />
                        <Label className="text-sm font-medium">Progress Updates</Label>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Weekly progress reports and achievements
                      </p>
                    </div>
                    <Switch
                      checked={notifications.progress}
                      onCheckedChange={(value) => handleNotificationChange('progress', value)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <MessageSquare className="h-4 w-4 text-primary" />
                        <Label className="text-sm font-medium">Marketing & Tips</Label>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Wellness tips and promotional content
                      </p>
                    </div>
                    <Switch
                      checked={notifications.marketing}
                      onCheckedChange={(value) => handleNotificationChange('marketing', value)}
                    />
                  </div>
                </div>
              </div>

              {/* Delivery Methods */}
              <div className="space-y-6">
                <h4 className="font-medium text-sm">Delivery Methods</h4>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Smartphone className="h-4 w-4 text-primary" />
                        <Label className="text-sm font-medium">Push Notifications</Label>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Instant notifications on your device
                      </p>
                    </div>
                    <Switch
                      checked={notifications.push}
                      onCheckedChange={(value) => handleNotificationChange('push', value)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-primary" />
                        <Label className="text-sm font-medium">Email Notifications</Label>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Receive notifications via email
                      </p>
                    </div>
                    <Switch
                      checked={notifications.email}
                      onCheckedChange={(value) => handleNotificationChange('email', value)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <MessageSquare className="h-4 w-4 text-primary" />
                        <Label className="text-sm font-medium">SMS Notifications</Label>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Text message notifications
                      </p>
                    </div>
                    <Switch
                      checked={notifications.sms}
                      onCheckedChange={(value) => handleNotificationChange('sms', value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Save Changes */}
        <div className="flex justify-end gap-3">
          <Button variant="outline">
            Reset to Defaults
          </Button>
          <Button className="primary-gradient">
            Save Changes
          </Button>
        </div>
      </motion.div>
    </div>
  );
};