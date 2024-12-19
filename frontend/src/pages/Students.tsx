import React from 'react';
import Filters from '../components/Filters';
import StudentTable from '../components/StudentTable';

export default function Students() {
  return (
    <div className="p-4 md:p-6">
      <Filters />
      <StudentTable />
    </div>
  );
}