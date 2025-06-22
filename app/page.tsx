'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const [budget, setBudget] = useState('');
  const [people, setPeople] = useState('');
  const [tripType, setTripType] = useState('family');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/trips?budget=${budget}&people=${people}&tripType=${tripType}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 p-4">
      <h1 className="text-3xl font-bold mb-6">Budget Travel Planner 🌍</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-4">
        <div>
          <label className="block font-medium">Budget (₹):</label>
          <input
            type="number"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            required
            className="w-full border p-2 rounded mt-1"
          />
        </div>
        <div>
          <label className="block font-medium">Number of Travelers:</label>
          <input
            type="number"
            value={people}
            onChange={(e) => setPeople(e.target.value)}
            required
            className="w-full border p-2 rounded mt-1"
          />
        </div>
        <div>
          <label className="block font-medium">Trip Type:</label>
          <select
            value={tripType}
            onChange={(e) => setTripType(e.target.value)}
            className="w-full border p-2 rounded mt-1"
          >
            <option value="family">Family</option>
            <option value="solo">Solo</option>
            <option value="couple">Couple</option>
            <option value="friends">Friends</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Suggest Trips
        </button>
      </form>
    </div>
  );
}
