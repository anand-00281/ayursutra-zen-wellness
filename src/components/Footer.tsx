import React from 'react';
import { Leaf, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-primary/5 border-t border-border/50 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Leaf className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xl font-display font-bold text-foreground">
                🌿 AyurSutra
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Healing through Ayurveda and Technology. 
              Digital Panchakarma management for a healthier tomorrow.
            </p>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>contact@ayursutra.com</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Kerala, India</span>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Services</h3>
            <div className="space-y-2 text-muted-foreground">
              <div>Panchakarma Therapy</div>
              <div>Patient Management</div>
              <div>Digital Health Records</div>
              <div>Wellness Tracking</div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border/30 mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 AyurSutra. All rights reserved. Healing through Ayurveda and Technology.</p>
        </div>
      </div>
    </footer>
  );
};