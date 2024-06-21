import React from 'react';
import { MapContainer, TileLayer, CircleMarker, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';
import 'tailwindcss/tailwind.css';

// Register Chart.js components
ChartJS.register(...registerables);

const generateRandomPoints = () => {
  const points = [];
  const regions = [
    { name: 'Africa', latRange: [-35, 37], lonRange: [-17, 51] },
    { name: 'Asia', latRange: [1, 55], lonRange: [60, 150] },
    { name: 'Europe', latRange: [36, 71], lonRange: [-10, 60] },
    { name: 'North America', latRange: [15, 72], lonRange: [-168, -52] },
    { name: 'South America', latRange: [-55, 12], lonRange: [-81, -35] },
    { name: 'Australia', latRange: [-45, -10], lonRange: [110, 155] }
  ];

  regions.forEach(region => {
    const numPoints = Math.floor(1000 / regions.length);
    for (let i = 0; i < numPoints; i++) {
      let latitude, longitude;
      do {
        latitude = (Math.random() * (region.latRange[1] - region.latRange[0]) + region.latRange[0]).toFixed(4);
        longitude = (Math.random() * (region.lonRange[1] - region.lonRange[0]) + region.lonRange[0]).toFixed(4);
      } while (isInOcean(latitude, longitude));
      const hospital_name = `Hospital ${points.length + 1}`;
      const wallet_address = `0x${Math.random().toString(36).substring(2, 15)}`;
      const average_revenue = Math.floor(Math.random() * 2000 + 500); // Random revenue between 500 and 2500
      const total_transactions = Math.floor(Math.random() * 100 + 1); // Random transactions between 1 and 100
      const data_contributor = Math.random() > 0.5 ? `0x${Math.random().toString(36).substring(2, 15)}` : ''; // Random contributor or empty
      const occupied = Math.random() > 0.5;

      points.push({
        position: [latitude, longitude],
        hospital_name,
        wallet_address,
        average_revenue,
        total_transactions,
        data_contributor,
        occupied,
      });
    }
  });
  return points;
};

const isInOcean = (lat, lon) => {
  // Approximate check for being in ocean using bounding boxes of major land masses
  const landBounds = [
    { latMin: -34, latMax: 37, lonMin: -17, lonMax: 51 },  // Africa
    { latMin: 1, latMax: 55, lonMin: 60, lonMax: 150 },   // Asia
    { latMin: 36, latMax: 71, lonMin: -10, lonMax: 60 },  // Europe
    { latMin: 15, latMax: 72, lonMin: -168, lonMax: -52 },// North America
    { latMin: -55, latMax: 12, lonMin: -81, lonMax: -35 },// South America
    { latMin: -45, latMax: -10, lonMin: 110, lonMax: 155 } // Australia
  ];

  return !landBounds.some(bound => lat >= bound.latMin && lat <= bound.latMax && lon >= bound.lonMin && lon <= bound.lonMax);
};

const points = generateRandomPoints();

const Map = () => {
  return (
    <MapContainer center={[20, 0]} zoom={2} className="h-full w-full rounded-lg">
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a>'
      />
      {points.map((point, index) => (
        <CircleMarker
          key={index}
          center={point.position}
          pathOptions={{ color: point.occupied ? 'red' : 'green' }}
          radius={8}
        >
          <Tooltip direction="top" offset={[0, -10]} opacity={1} permanent={false}>
            <div className="bg-gray-800 p-2 rounded shadow-lg text-white">
              <p className="text-lg font-bold">{point.hospital_name}</p>
              <p><strong>Wallet:</strong> {point.wallet_address}</p>
              <p><strong>Average Revenue:</strong> {point.average_revenue}</p>
              <p><strong>Transactions:</strong> {point.total_transactions}</p>
              <p><strong>Contributor:</strong> {point.data_contributor || "None"}</p>
              {!point.data_contributor && <button className="mt-2 bg-blue-500 text-white p-1 rounded hover:bg-blue-600 text-sm">Become a Contributor</button>}
            </div>
          </Tooltip>
        </CircleMarker>
      ))}
    </MapContainer>
  );
};

const Dashboard = () => {
  // Sample data for chart with 12 months of data
  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Average Revenue',
        data: [1000, 1100, 1050, 1150, 1200, 1250, 1300, 1350, 1400, 1450, 1500, 1600],
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  // Sample stats data
  const stats = {
    average_revenue: "1500",
    top_ten_wallets: ["0x123...", "0x456...", "0x789..."],
    total_data_entries: "1000",
    total_transactions: "5000",
    total_token_issuance: "1000000"
  };

  return (
    <div className="p-6  h-full bg-gray-900 rounded-lg shadow-lg text-white">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Average Revenue</h2>
        <Line data={chartData} options={{ plugins: { legend: { labels: { color: 'white' } } }, scales: { x: { ticks: { color: 'white' } }, y: { ticks: { color: 'white' } } } }} />
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">Statistics</h2>
        <div className="grid grid-cols-1 gap-4">
          <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <p className="text-lg font-bold">Average Revenue</p>
            <p>{stats.average_revenue}</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <p className="text-lg font-bold">Top 10 Wallets</p>
            <p>{stats.top_ten_wallets.join(', ')}</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <p className="text-lg font-bold">Total Data Entries</p>
            <p>{stats.total_data_entries}</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <p className="text-lg font-bold">Total Transactions</p>
            <p>{stats.total_transactions}</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <p className="text-lg font-bold">Total Token Issuance</p>
            <p>{stats.total_token_issuance}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const DefiDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-800 text-white">
      <div className="w-1/2 p-4">
        <h1 className="text-3xl font-bold mb-4">Save the Life DeFi Dashboard</h1>
        <div className="h-[95%]">
          <Map />
        </div>
      </div>
      <div className="w-1/2 p-4">
        <Dashboard />
      </div>
    </div>
  );
};

export default DefiDashboard;
