'use client';

import { useParams } from 'next/navigation';
import { allTrips } from '@/data/trips';
import Link from 'next/link';

export default function TripDetail() {
  const params = useParams();
  const tripId = Number(params?.id);
  const trip = allTrips.find((t) => t.id === tripId);

  if (!trip) {
    return <p className="text-center text-red-600">Trip not found</p>;
  }

  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <Link href="/trips" className="text-blue-600 underline block mb-4">
        ← Back to Trips
      </Link>
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded p-6">
        <img src={trip.image} alt={trip.destination} className="w-full h-64 object-cover rounded mb-4" />
        <h1 className="text-3xl font-bold mb-2">{trip.destination}</h1>
        <p className="text-gray-700 mb-2">Cost per person: ₹{trip.costPerPerson}</p>
        <p className="text-gray-700 mb-2">Trip type: {trip.type}</p>
        <h2 className="text-xl font-semibold mt-4 mb-1">Highlights:</h2>
        <ul className="list-disc list-inside text-gray-600">
          {trip.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
