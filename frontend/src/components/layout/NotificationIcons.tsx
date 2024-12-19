import React from 'react';
import { HelpCircle, MessageSquare, Bell } from 'lucide-react';

export default function NotificationIcons() {
  return (
    <div className="flex items-center space-x-2">
      <button className="p-2 hover:bg-gray-100 rounded-full">
        <HelpCircle className="h-6 w-6 text-gray-600" />
      </button>
      <button className="p-2 hover:bg-gray-100 rounded-full relative">
        <MessageSquare className="h-6 w-6 text-gray-600" />
        <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
      </button>
      <button className="p-2 hover:bg-gray-100 rounded-full relative">
        <Bell className="h-6 w-6 text-gray-600" />
        <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
      </button>
    </div>
  );
}