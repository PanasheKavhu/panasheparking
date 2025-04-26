// pages/api/parking-data.js

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { parkingSlots } = req.body;

    // Log the data (you can replace this with a database or state management)
    console.log(`Received parking slot data: ${parkingSlots}`);

    // Respond with success
    res.status(200).json({ message: 'Data received successfully' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}