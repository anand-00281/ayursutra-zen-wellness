import React, { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Bell, Calendar, Droplets, AlertCircle, CheckCircle } from 'lucide-react';

export const NotificationDropdown = () => {
  const [unreadCount, setUnreadCount] = useState(3);

  const notifications = [
    {
      id: 1,
      type: 'therapy',
      title: 'Upcoming Therapy Session',
      message: 'Your Abhyanga massage is scheduled for tomorrow at 10 AM',
      time: '2 hours ago',
      icon: Calendar,
      unread: true
    },
    {
      id: 2,
      type: 'care',
      title: 'Pre-therapy Reminder',
      message: 'Drink warm water before your therapy session tomorrow',
      time: '4 hours ago',
      icon: Droplets,
      unread: true
    },
    {
      id: 3,
      type: 'alert',
      title: 'Session Completed',
      message: 'Great! Your Shirodhara session has been marked as completed',
      time: '1 day ago',
      icon: CheckCircle,
      unread: false
    },
    {
      id: 4,
      type: 'reminder',
      title: 'Follow-up Care',
      message: 'Remember to rest for 30 minutes after your session',
      time: '2 days ago',
      icon: AlertCircle,
      unread: true
    }
  ];

  const markAsRead = () => {
    setUnreadCount(0);
  };

  const getIconColor = (type: string) => {
    switch (type) {
      case 'therapy': return 'text-primary';
      case 'care': return 'text-blue-600';
      case 'alert': return 'text-green-600';
      case 'reminder': return 'text-accent';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <Badge 
              variant="destructive" 
              className="absolute -top-1 -right-1 h-5 w-5 p-0 text-xs flex items-center justify-center"
            >
              {unreadCount}
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80 bg-card/95 backdrop-blur-sm border-border/50">
        <DropdownMenuLabel className="flex items-center justify-between">
          <span>Notifications</span>
          {unreadCount > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={markAsRead}
              className="text-xs text-primary hover:text-primary/80"
            >
              Mark all read
            </Button>
          )}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        
        <div className="max-h-96 overflow-y-auto">
          {notifications.map((notification) => {
            const IconComponent = notification.icon;
            return (
              <DropdownMenuItem
                key={notification.id}
                className={`flex items-start gap-3 p-3 cursor-pointer ${
                  notification.unread ? 'bg-primary/5' : ''
                }`}
              >
                <div className={`mt-1 ${getIconColor(notification.type)}`}>
                  <IconComponent className="h-4 w-4" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">{notification.title}</p>
                    {notification.unread && (
                      <div className="h-2 w-2 bg-primary rounded-full" />
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {notification.message}
                  </p>
                  <p className="text-xs text-muted-foreground/70">
                    {notification.time}
                  </p>
                </div>
              </DropdownMenuItem>
            );
          })}
        </div>

        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-center text-sm text-primary cursor-pointer justify-center">
          View all notifications
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};