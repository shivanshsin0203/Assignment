
import { ChevronDown, Plus } from 'lucide-react';
import { useState } from 'react';
import Userstore from '../store/store';
import axios from 'axios';

export default function Filters() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', cohort: '' });
  const { addUser } = Userstore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://assignment-26746338369.asia-south1.run.app/addUser', formData);
      console.log(response.data)
      addUser(response.data.data.id, response.data.data.name,response.data.data.cohort);
      setIsModalOpen(false);
      setFormData({ name: '', cohort: '' });
    } catch (error) {
      console.log('Error adding user:', error);
    }
  };

  return (
    <>
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
        <button 
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg w-full md:w-auto justify-center"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add new Student
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Add New Student</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full p-2 border rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Cohort</label>
                <input
                  type="text"
                  value={formData.cohort}
                  onChange={(e) => setFormData({...formData, cohort: e.target.value})}
                  className="w-full p-2 border rounded-lg"
                  required
                />
              </div>
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}