import React from 'react';
import { Link } from 'react-router-dom';
import { Feather } from 'lucide-react';

export default function Logo() {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <Feather className="h-8 w-8" />
      <span className="text-xl font-bold">Quyl</span>
    </Link>
  );
}