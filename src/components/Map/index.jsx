import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({ points }) => {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {points.map((point, index) => (
        <Marker key={index} position={point.position} icon={point.icon}>
          <Popup>
            <div>
              <p><strong>Hospital:</strong> {point.hospital_name}</p>
              <p><strong>Wallet Address:</strong> {point.wallet_address}</p>
              <p><strong>Expected Revenue:</strong> {point.expected_revenue}</p>
              <p><strong>Total Transactions:</strong> {point.total_transactions}</p>
              <p><strong>Data Contributor:</strong> {point.data_contributor || "None"}</p>
              {!point.data_contributor && <button>Become a Contributor</button>}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
