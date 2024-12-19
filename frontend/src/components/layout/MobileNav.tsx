import React from 'react';
import { Menu } from 'lucide-react';

interface MobileNavProps {
  onToggleSidebar: () => void;
}

export default function MobileNav({ onToggleSidebar }: MobileNavProps) {
  return (
    <button 
      onClick={onToggleSidebar}
      className="p-2 md:hidden rounded-lg hover:bg-gray-100"
      aria-label="Toggle Menu"
    >
      <Menu className="h-6 w-6 text-gray-600" />
    </button>
  );
}