// pages/api/parking-data.js

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { parkingSlots } = req.body;

    // Log the data (you can replace this with a database or state management)
    console.log(`Received parking slot data: ${parkingSlots}`);

    // Respond with success
    res.status(200).json({ message: 'Data received successfully' });
  } else if (req.method === 'GET') {
    // Example data for parking slots
    const parkingSlots = 10; // Replace with dynamic data if needed

    // Respond with the parking slot data
    res.status(200).json({ parkingSlots });
  } else {
    res.setHeader('Allow', ['POST', 'GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}