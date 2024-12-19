import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Users, BookOpen, HelpCircle, BarChart2, Settings, X } from 'lucide-react';
import Logo from './Logo';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { icon: LayoutDashboard, text: 'Dashboard', path: '/' },
  { icon: Users, text: 'Students', path: '/students' },
  { icon: BookOpen, text: 'Chapter', path: '/chapter' },
  { icon: HelpCircle, text: 'Help', path: '/help' },
  { icon: BarChart2, text: 'Reports', path: '/reports' },
  { icon: Settings, text: 'Settings', path: '/settings' },
];

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();

  return (
    <>
      {/* Mobile Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-200 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <aside
        className={`
          fixed md:sticky top-0 left-0 z-40 h-screen w-64
          transform md:transform-none transition-transform duration-200
          ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          bg-white border-r
        `}
      >
        <div className="p-4 border-b flex items-center justify-between">
          <Logo />
          <button 
            onClick={onClose}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <nav className="p-4">
          {menuItems.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={index}
                to={item.path}
                onClick={onClose}
                className={`
                  flex items-center p-3 rounded-lg mb-1
                  transition-colors duration-150
                  ${isActive ? 'bg-gray-100 text-black' : 'text-gray-600 hover:bg-gray-50'}
                `}
              >
                <item.icon className="h-5 w-5 mr-3 flex-shrink-0" />
                <span className="font-medium">{item.text}</span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}