
import { Search, HelpCircle, MessageSquare, Bell } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white border-b px-4 py-3 flex items-center justify-between">
      <div className="flex items-center flex-1">
        <div className="relative max-w-md w-full">
          <input
            type="text"
            placeholder="Search your course"
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
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
      </div>
    </header>
  );
}