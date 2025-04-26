import { useEffect, useState } from 'react';

export default function ParkingMonitor() {
  const [parkingSlots, setParkingSlots] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://panasheparking.vercel.app/api/parking-data');
        const data = await response.json();
        setParkingSlots(data.parkingSlots);
      } catch (error) {
        console.error('Error fetching parking data:', error);
      }
    };

    const interval = setInterval(fetchData, 1000); // Fetch data every second
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Live Parking Slot Monitor</h1>
      {parkingSlots !== null ? (
        <p>Available Slots: {parkingSlots}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}