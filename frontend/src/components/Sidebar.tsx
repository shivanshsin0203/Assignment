import React from 'react';
import { LayoutDashboard, Users, BookOpen, HelpCircle, BarChart2, Settings } from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, text: 'Dashboard', active: false },
  { icon: Users, text: 'Students', active: true },
  { icon: BookOpen, text: 'Chapter', active: false },
  { icon: HelpCircle, text: 'Help', active: false },
  { icon: BarChart2, text: 'Reports', active: false },
  { icon: Settings, text: 'Settings', active: false },
];

export default function Sidebar() {
  return (
    <div className="hidden md:flex flex-col w-64 bg-white h-screen border-r">
      <div className="p-4 border-b">
        <img src="/logo.svg" alt="Quyl" className="h-8" />
      </div>
      <nav className="flex-1 p-4">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`flex items-center p-3 rounded-lg mb-1 cursor-pointer ${
              item.active
                ? 'bg-gray-100 text-black'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <item.icon className="h-5 w-5 mr-3" />
            <span className="font-medium">{item.text}</span>
          </div>
        ))}
      </nav>
    </div>
  );
}