import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Send, 
  Paperclip, 
  MoreVertical,
  Phone,
  Video,
  User,
  Stethoscope,
  Clock
} from 'lucide-react';

export const Chat = () => {
  const [message, setMessage] = useState('');
  const [selectedChat, setSelectedChat] = useState(1);

  const conversations = [
    {
      id: 1,
      name: 'Dr. Priya Sharma',
      role: 'Senior Ayurveda Therapist',
      avatar: '/placeholder.svg',
      lastMessage: 'Please drink warm water before your session tomorrow',
      timestamp: '2 min ago',
      unread: 2,
      online: true
    },
    {
      id: 2,
      name: 'Dr. Rajesh Gupta',
      role: 'Panchakarma Specialist',
      avatar: '/placeholder.svg',
      lastMessage: 'Your progress report looks excellent!',
      timestamp: '1 hour ago',
      unread: 0,
      online: false
    },
    {
      id: 3,
      name: 'Ayurveda Support',
      role: 'Support Team',
      avatar: '/placeholder.svg',
      lastMessage: 'How can we help you today?',
      timestamp: '1 day ago',
      unread: 0,
      online: true
    }
  ];

  const messages = [
    {
      id: 1,
      sender: 'Dr. Priya Sharma',
      text: 'Hello Anjali! I hope you\'re feeling well today. How was your rest after yesterday\'s Abhyanga session?',
      timestamp: '10:30 AM',
      isOwn: false
    },
    {
      id: 2,
      sender: 'You',
      text: 'Hello Doctor! I felt very relaxed and slept really well. The warm oil massage was incredibly soothing.',
      timestamp: '10:35 AM',
      isOwn: true
    },
    {
      id: 3,
      sender: 'Dr. Priya Sharma',
      text: 'That\'s wonderful to hear! Good sleep is a sign that your body is responding well to the treatment.',
      timestamp: '10:37 AM',
      isOwn: false
    },
    {
      id: 4,
      sender: 'Dr. Priya Sharma',
      text: 'For tomorrow\'s Shirodhara session, please remember to:',
      timestamp: '10:38 AM',
      isOwn: false
    },
    {
      id: 5,
      sender: 'Dr. Priya Sharma',
      text: '• Drink warm water 30 minutes before\n• Wear comfortable clothing\n• Avoid cold drinks for 2 hours after',
      timestamp: '10:38 AM',
      isOwn: false
    },
    {
      id: 6,
      sender: 'You',
      text: 'Thank you for the reminders! I\'ll make sure to follow all the instructions. What time should I arrive tomorrow?',
      timestamp: '10:42 AM',
      isOwn: true
    },
    {
      id: 7,
      sender: 'Dr. Priya Sharma',
      text: 'Please arrive 15 minutes early at 9:45 AM. This will give you time to settle in and prepare mentally for the session.',
      timestamp: '10:45 AM',
      isOwn: false
    },
    {
      id: 8,
      sender: 'Dr. Priya Sharma',
      text: 'Please drink warm water before your session tomorrow 🌿',
      timestamp: '2 min ago',
      isOwn: false
    }
  ];

  const selectedConversation = conversations.find(c => c.id === selectedChat);

  const handleSendMessage = () => {
    if (message.trim()) {
      // In a real app, this would send the message
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen therapy-gradient p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-foreground">Messages</h1>
          <p className="text-muted-foreground mt-2">
            Connect with your healthcare team
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 h-[calc(100vh-200px)]">
          {/* Conversations List */}
          <Card className="healing-card lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-lg">Conversations</CardTitle>
              <CardDescription>Your active chats</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <ScrollArea className="h-[500px]">
                {conversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    onClick={() => setSelectedChat(conversation.id)}
                    className={`p-4 cursor-pointer border-b border-border/50 hover:bg-accent/10 transition-colors ${
                      selectedChat === conversation.id ? 'bg-primary/5 border-l-4 border-l-primary' : ''
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="relative">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={conversation.avatar} />
                          <AvatarFallback className="bg-primary/10 text-primary">
                            {conversation.role === 'Support Team' ? '🌿' : 
                             conversation.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        {conversation.online && (
                          <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-green-500 border-2 border-background rounded-full"></div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium truncate">{conversation.name}</h4>
                          {conversation.unread > 0 && (
                            <Badge variant="destructive" className="h-5 w-5 p-0 text-xs flex items-center justify-center">
                              {conversation.unread}
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground mb-1">{conversation.role}</p>
                        <p className="text-sm text-muted-foreground truncate">{conversation.lastMessage}</p>
                        <p className="text-xs text-muted-foreground mt-1">{conversation.timestamp}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Chat Interface */}
          <Card className="healing-card lg:col-span-3 flex flex-col">
            {selectedConversation && (
              <>
                {/* Chat Header */}
                <CardHeader className="border-b border-border/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={selectedConversation.avatar} />
                        <AvatarFallback className="bg-primary/10 text-primary">
                          {selectedConversation.role === 'Support Team' ? '🌿' : 
                           selectedConversation.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold flex items-center gap-2">
                          {selectedConversation.name}
                          {selectedConversation.role !== 'Support Team' && (
                            <Stethoscope className="h-4 w-4 text-primary" />
                          )}
                        </h3>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          <div className={`h-2 w-2 rounded-full ${selectedConversation.online ? 'bg-green-500' : 'bg-gray-400'}`} />
                          {selectedConversation.online ? 'Online' : 'Offline'} • {selectedConversation.role}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        <Phone className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Video className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>

                {/* Messages Area */}
                <CardContent className="flex-1 p-0">
                  <ScrollArea className="h-[400px] p-4">
                    <div className="space-y-4">
                      {messages.map((msg) => (
                        <div
                          key={msg.id}
                          className={`flex ${msg.isOwn ? 'justify-end' : 'justify-start'}`}
                        >
                          <div className={`max-w-[70%] ${msg.isOwn ? 'order-2' : 'order-1'}`}>
                            <div
                              className={`rounded-2xl px-4 py-2 ${
                                msg.isOwn
                                  ? 'bg-primary text-primary-foreground'
                                  : 'bg-muted text-muted-foreground'
                              }`}
                            >
                              <p className="text-sm whitespace-pre-line">{msg.text}</p>
                            </div>
                            <div className={`flex items-center gap-1 mt-1 text-xs text-muted-foreground ${
                              msg.isOwn ? 'justify-end' : 'justify-start'
                            }`}>
                              <Clock className="h-3 w-3" />
                              <span>{msg.timestamp}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>

                {/* Message Input */}
                <div className="border-t border-border/50 p-4">
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      <Paperclip className="h-4 w-4" />
                    </Button>
                    <Input
                      placeholder="Type your message..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      className="flex-1"
                    />
                    <Button 
                      onClick={handleSendMessage}
                      disabled={!message.trim()}
                      className="primary-gradient"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </>
            )}
          </Card>
        </div>
      </motion.div>
    </div>
  );
};