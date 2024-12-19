
import { Book, Calculator } from 'lucide-react';

const students = [
  { name: 'Anshuman Kashyap', cohort: 'AY 2024-25', date: '17. Nov. 2024', lastLogin: '17. Nov. 2024 4:16 PM', status: true },
  { name: 'Bansi Dadhaniya', cohort: 'AY 2024-25', date: '17. Nov. 2024', lastLogin: '17. Nov. 2024 4:16 PM', status: true },
  { name: 'Chandrika Valotia', cohort: 'AY 2024-25', date: '17. Nov. 2024', lastLogin: '17. Nov. 2024 4:16 PM', status: false },
  // Add more students as needed
];

export default function StudentTable() {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left border-b">
              <th className="px-6 py-3 text-gray-600">Student Name</th>
              <th className="px-6 py-3 text-gray-600">Cohort</th>
              <th className="px-6 py-3 text-gray-600">Courses</th>
              <th className="px-6 py-3 text-gray-600">Date Joined</th>
              <th className="px-6 py-3 text-gray-600">Last login</th>
              <th className="px-6 py-3 text-gray-600">Status</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index} className="border-b last:border-b-0">
                <td className="px-6 py-4">{student.name}</td>
                <td className="px-6 py-4">{student.cohort}</td>
                <td className="px-6 py-4">
                  <div className="flex space-x-2">
                    <span className="inline-flex items-center px-2 py-1 bg-gray-100 rounded-md text-sm">
                      <Book className="h-4 w-4 mr-1" />
                      CBSE 9 Science
                    </span>
                    <span className="inline-flex items-center px-2 py-1 bg-gray-100 rounded-md text-sm">
                      <Calculator className="h-4 w-4 mr-1" />
                      CBSE 9 Math
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">{student.date}</td>
                <td className="px-6 py-4">{student.lastLogin}</td>
                <td className="px-6 py-4">
                  <span className={`h-3 w-3 rounded-full inline-block ${student.status ? 'bg-green-500' : 'bg-red-500'}`}></span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}