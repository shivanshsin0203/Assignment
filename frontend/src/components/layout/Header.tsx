import React from 'react';
import MobileMenuButton from './MobileMenuButton';
import SearchBar from './SearchBar';
import NotificationIcons from './NotificationIcons';
import UserProfile from './UserProfile';

interface HeaderProps {
  onToggleSidebar: () => void;
}

export default function Header({ onToggleSidebar }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 bg-white border-b px-4 py-3">
      <div className="flex items-center justify-between max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-4 flex-1">
          <MobileMenuButton onClick={onToggleSidebar} />
          <SearchBar />
        </div>
        
        <div className="flex items-center space-x-2 md:space-x-4">
          <NotificationIcons />
          <UserProfile />
        </div>
      </div>
    </header>
  );
}