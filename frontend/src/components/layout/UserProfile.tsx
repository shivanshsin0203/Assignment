import React from 'react';

export default function UserProfile() {
  return (
    <div className="flex items-center space-x-3">
      <img
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"
        alt="Profile"
        className="h-10 w-10 rounded-full object-cover"
      />
      <div className="hidden md:block">
        <div className="font-semibold">Adeline H. Dancy</div>
      </div>
    </div>
  );
}