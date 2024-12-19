
import axios from 'axios';
import { Book, Calculator, Trash2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import Userstore from '../store/store';

export default function StudentTable() {
  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3001/users/${id}`);
      removeUser(id);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };
  const {users,initialUser,removeUser}=Userstore();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:3001/users");
        const formattedUsers = response.data.users.map(user => ({
          id: user.id,
          name: user.name,
          cohort: user.cohort,
          date: '17. Nov. 2024',
          lastLogin: '17. Nov. 2024 4:16 PM',
          status: Math.random() < 0.5 // randomly assign true/false
        }));
        initialUser(formattedUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      }finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [initialUser]);
  return (
    <div className="bg-white rounded-lg shadow">
      {isLoading ? (
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600">
            <div className="h-6 w-6 rounded-full animate-ping bg-blue-600"></div>
          </div>
          <span className="ml-3 text-gray-600">Loading students...</span>
        </div>
      ) :(
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
            {users.map((student, index) => (
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
                <td>
                  <Trash2 onClick={() => handleDelete(student.id)} className=" cursor-pointer h-5 w-5 text-red-500 " />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
      </div>
      )}
    </div>
  );
}