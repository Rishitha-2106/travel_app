// data/trips.ts
export type Trip = {
  id: number;
  destination: string;
  costPerPerson: number;
  type: string;
  highlights: string[];
  image: string;
};

export const allTrips: Trip[] = [
  {
    id: 1,
    destination: 'Goa',
    costPerPerson: 7000,
    type: 'friends',
    highlights: ['Beach', 'Water Sports', 'Nightlife'],
    image: 'https://images.unsplash.com/photo-1601568876503-96c4cfc2d2f7?auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 2,
    destination: 'Manali',
    costPerPerson: 9000,
    type: 'family',
    highlights: ['Snowfall', 'Hiking', 'Mountain Views'],
    image: 'https://images.unsplash.com/photo-1579869847552-20707d8a5d1d?auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 3,
    destination: 'Ooty',
    costPerPerson: 6000,
    type: 'couple',
    highlights: ['Tea Gardens', 'Toy Train', 'Hills'],
    image: 'https://images.unsplash.com/photo-1627843563095-2618f8c3a2c7?auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 4,
    destination: 'Jaipur',
    costPerPerson: 5500,
    type: 'solo',
    highlights: ['Palaces', 'Culture', 'Food'],
    image: 'https://images.unsplash.com/photo-1595240700899-1c50aee60475?auto=format&fit=crop&w=800&q=60'
  },
];
