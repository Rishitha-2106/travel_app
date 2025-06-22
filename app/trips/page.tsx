'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';

type Trip = {
  id: number;
  destination: string;
  costPerPerson: number;
  type: string;
  highlights: string[];
};

const allTrips: Trip[] = [
  {
    id: 1,
    destination: 'Goa',
    costPerPerson: 7000,
    type: 'friends',
    highlights: ['Beach', 'Water Sports', 'Nightlife'],
  },
  {
    id: 2,
    destination: 'Manali',
    costPerPerson: 9000,
    type: 'family',
    highlights: ['Snowfall', 'Hiking', 'Mountain Views'],
  },
  {
    id: 3,
    destination: 'Ooty',
    costPerPerson: 6000,
    type: 'couple',
    highlights: ['Tea Gardens', 'Toy Train', 'Hills'],
  },
  {
    id: 4,
    destination: 'Jaipur',
    costPerPerson: 5500,
    type: 'solo',
    highlights: ['Palaces', 'Culture', 'Food'],
  },
];

export default function TripsPage() {
  const searchParams = useSearchParams();

  const budget = Number(searchParams.get('budget'));
  const people = Number(searchParams.get('people'));
  const tripType = searchParams.get('tripType');

  const [suggestedTrips, setSuggestedTrips] = useState<Trip[]>([]);

  useEffect(() => {
    const totalBudget = budget / people;

    const filtered = allTrips.filter(
      (trip) =>
        trip.costPerPerson <= totalBudget &&
        trip.type.toLowerCase() === tripType?.toLowerCase()
    );

    setSuggestedTrips(filtered);
  }, [budget, people, tripType]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 p-4">
      <Link href="/" className="text-blue-600 underline block mb-4 text-center">
        ← Back to Home
      </Link>
      <h1 className="text-2xl font-bold mb-4 text-center">Suggested Trips ✈️</h1>

      {suggestedTrips.length === 0 ? (
        <p className="text-center text-red-600">No trips found for your criteria.</p>
      ) : (
        <div className="grid gap-4 max-w-3xl mx-auto">
          {suggestedTrips.map((trip) => (
            <div key={trip.id} className="bg-white rounded shadow-md p-4">
              <h2 className="text-xl font-semibold mb-2">{trip.destination}</h2>
              <p className="text-sm text-gray-700 mb-1">Cost per person: ₹{trip.costPerPerson}</p>
              <p className="text-sm text-gray-700 mb-1">Trip Type: {trip.type}</p>
              <ul className="list-disc list-inside text-sm text-gray-600">
                {trip.highlights.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
