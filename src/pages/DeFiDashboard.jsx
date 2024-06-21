import React from 'react';
import { MapContainer, TileLayer, CircleMarker, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Line, Bar, Doughnut, Pie, Radar } from 'react-chartjs-2';
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
    <div className="col-span-2 row-span-2 bg-gray-800 rounded-lg shadow-lg p-4">
      <MapContainer center={[20, 0]} zoom={4} className="h-full w-full rounded-lg">
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
              <div className="bg-white p-2 rounded shadow-lg text-black">
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
    </div>
  );
};

const DashboardCard = ({ title, stats, children }) => (
  <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 h-72 flex flex-col">
    <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>
    <div className="text-xl font-bold mb-2 text-white">{stats}</div>
    <div className="flex-grow">
      {children}
    </div>
  </div>
);

const Dashboard = () => {
  // Sample data for charts
  const dataUploadStatusData = {
    labels: ['Dataset 1', 'Dataset 2', 'Dataset 3', 'Dataset 4'],
    datasets: [
      {
        label: 'Data Upload Status',
        data: [200, 150, 300, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  const participationByCountryData = {
    labels: ['USA', 'Canada', 'UK', 'Germany', 'France'],
    datasets: [
      {
        label: 'Participation by Country',
        data: [500, 400, 300, 200, 100],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgb(75, 192, 192)',
        borderWidth: 1,
      },
    ],
  };

  const transactionOccurrenceData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Transactions',
        data: [20, 30, 40, 50],
        fill: false,
        borderColor: '#4BC0C0',
      },
    ],
  };

  const revenueAccumulationData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Revenue',
        data: [10000, 15000, 20000, 25000],
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  const claimStatusData = {
    labels: ['Open', 'In Progress', 'Resolved'],
    datasets: [
      {
        label: 'Claims',
        data: [30, 20, 50],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const participationByEthnicityData = {
    labels: ['Ethnicity 1', 'Ethnicity 2', 'Ethnicity 3'],
    datasets: [
      {
        label: 'Participation by Ethnicity',
        data: [300, 150, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const maintenanceStatusData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Maintenance',
        data: [5, 10, 3, 15, 8, 12, 6, 14, 9, 11, 4, 13],
        fill: false,
        borderColor: '#FF6384',
      },
    ],
  };

  const participationByGenderData = {
    labels: ['Male', 'Female', 'Other'],
    datasets: [
      {
        label: 'Participation by Gender',
        data: [500, 400, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const hospitalUploadQueueStatusData = {
    labels: ['Hospital 1', 'Hospital 2', 'Hospital 3', 'Hospital 4'],
    datasets: [
      {
        label: 'Queue Status',
        data: [30, 20, 40, 10],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgb(75, 192, 192)',
        borderWidth: 1,
      },
    ],
  };

  const equipmentFailureStatusData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Failures',
        data: [2, 5, 1, 4, 3, 7, 8, 6, 9, 10, 12, 11],
        fill: false,
        borderColor: '#FFCE56',
      },
    ],
  };

  const depositStatusData = {
    labels: ['Group A', 'Group B', 'Group C'],
    datasets: [
      {
        label: 'Deposit Status',
        data: [100, 200, 300],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <div className="grid grid-cols-5 gap-4">
      <h1 className="col-span-5 text-3xl font-bold text-white">SL DeFi Dashboard</h1>
      <Map />
      <DashboardCard title="Data Upload Status" stats="650m">
        <Doughnut data={dataUploadStatusData} options={{ responsive: true, maintainAspectRatio: false, layout: { padding: 0 }, plugins: { legend: { position: 'bottom', labels: { color: 'white' } } } }} />
      </DashboardCard>
      <DashboardCard title="Participation by Country" stats="1,600k">
        <Bar data={participationByCountryData} options={{ responsive: true, maintainAspectRatio: false, layout: { padding: 0 }, plugins: { legend: { position: 'bottom', labels: { color: 'white' } } }, scales: { x: { ticks: { color: 'white' } }, y: { ticks: { color: 'white' } } } }} />
      </DashboardCard>
      <DashboardCard title="Transaction Occurrence" stats="210m">
        <Line data={transactionOccurrenceData} options={{ responsive: true, maintainAspectRatio: false, layout: { padding: 0 }, plugins: { legend: { position: 'bottom', labels: { color: 'white' } } }, scales: { x: { ticks: { color: 'white' } }, y: { ticks: { color: 'white' } } } }} />
      </DashboardCard>
      <DashboardCard title="Revenue Accumulation" stats="$7.5k">
        <Line data={revenueAccumulationData} options={{ responsive: true, maintainAspectRatio: false, layout: { padding: 0 }, plugins: { legend: { position: 'bottom', labels: { color: 'white' } } }, scales: { x: { ticks: { color: 'white' } }, y: { ticks: { color: 'white' } } } }} />
      </DashboardCard>
      <DashboardCard title="Claim Status" stats="100">
        <Pie data={claimStatusData} options={{ responsive: true, maintainAspectRatio: false, layout: { padding: 0 }, plugins: { legend: { position: 'bottom', labels: { color: 'white' } } } }} />
      </DashboardCard>
      <DashboardCard title="Participation by Ethnicity" stats="350k">
        <Radar data={participationByEthnicityData} options={{ responsive: true, maintainAspectRatio: false, layout: { padding: 0 }, plugins: { legend: { position: 'bottom', labels: { color: 'white' } } } }} />
      </DashboardCard>
      <DashboardCard title="Maintenance Status" stats="1500">
        <Line data={maintenanceStatusData} options={{ responsive: true, maintainAspectRatio: false, layout: { padding: 0 }, plugins: { legend: { position: 'bottom', labels: { color: 'white' } } }, scales: { x: { ticks: { color: 'white' } }, y: { ticks: { color: 'white' } } } }} />
      </DashboardCard>
      <DashboardCard title="Participation by Gender" stats="800k">
        <Doughnut data={participationByGenderData} options={{ responsive: true, maintainAspectRatio: false, layout: { padding: 0 }, plugins: { legend: { position: 'bottom', labels: { color: 'white' } } } }} />
      </DashboardCard>
      <DashboardCard title="Hospital Upload Queue Status" stats="15m">
        <Bar data={hospitalUploadQueueStatusData} options={{ responsive: true, maintainAspectRatio: false, layout: { padding: 0 }, plugins: { legend: { position: 'bottom', labels: { color: 'white' } } }, scales: { x: { ticks: { color: 'white' } }, y: { ticks: { color: 'white' } } } }} />
      </DashboardCard>
      <DashboardCard title="Equipment Failure Status" stats="120">
        <Line data={equipmentFailureStatusData} options={{ responsive: true, maintainAspectRatio: false, layout: { padding: 0 }, plugins: { legend: { position: 'bottom', labels: { color: 'white' } } }, scales: { x: { ticks: { color: 'white' } }, y: { ticks: { color: 'white' } } } }} />
      </DashboardCard>
      <DashboardCard title="Deposit Status" stats="$50m">
        <Pie data={depositStatusData} options={{ responsive: true, maintainAspectRatio: false, layout: { padding: 0 }, plugins: { legend: { position: 'bottom', labels: { color: 'white' } } } }} />
      </DashboardCard>
    </div>
  );
};

const DefiDashboard = () => {
  return (
    <div className="p-4 bg-gray-900 text-white h-screen overflow-hidden">
      <Dashboard />
    </div>
  );
};

export default DefiDashboard;
