import React from 'react';
import { Menu } from 'lucide-react';

interface MobileMenuButtonProps {
  onClick: () => void;
}

export default function MobileMenuButton({ onClick }: MobileMenuButtonProps) {
  return (
    <button
      onClick={onClick}
      className="block md:hidden p-2 rounded-lg hover:bg-gray-100"
      aria-label="Toggle Menu"
    >
      <Menu className="h-6 w-6 text-gray-600" />
    </button>
  );
}