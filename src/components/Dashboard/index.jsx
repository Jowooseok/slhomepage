import React from 'react';
import { Line } from 'react-chartjs-2';

const Dashboard = ({ chartData, stats }) => {
  return (
    <div className="p-6 overflow-y-auto h-screen">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Expected Revenue</h2>
        <Line data={chartData} />
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">Statistics</h2>
        <p><strong>Average Expected Revenue:</strong> {stats.average_expected_revenue}</p>
        <p><strong>Top 10 Wallets:</strong> {stats.top_ten_wallets.join(', ')}</p>
        <p><strong>Total Data Entries:</strong> {stats.total_data_entries}</p>
        <p><strong>Total Transactions:</strong> {stats.total_transactions}</p>
        <p><strong>Total Token Issuance:</strong> {stats.total_token_issuance}</p>
      </div>
    </div>
  );
};

export default Dashboard;
