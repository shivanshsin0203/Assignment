import React from 'react';
import { ChevronDown, Plus } from 'lucide-react';

export default function Filters() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
      <div className="flex space-x-4 w-full md:w-auto">
        <button className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-lg">
          AY 2024-25
          <ChevronDown className="ml-2 h-4 w-4" />
        </button>
        <button className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-lg">
          CBSE 9
          <ChevronDown className="ml-2 h-4 w-4" />
        </button>
      </div>
      <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg w-full md:w-auto justify-center">
        <Plus className="h-4 w-4 mr-2" />
        Add new Student
      </button>
    </div>
  );
}