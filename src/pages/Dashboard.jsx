import React from 'react';
import { useAuth } from '../context/AuthContext';
import { cases } from '../data/mockData';
import ClientDashboard from '../components/dashboards/ClientDashboard';
import JudgeDashboard from '../components/dashboards/JudgeDashboard';
import LawyerDashboard from '../components/dashboards/LawyerDashboard';

import AdminDashboard from '../components/dashboards/AdminDashboard';

const Dashboard = () => {
  const { user } = useAuth();

  // Role-based rendering
  const renderDashboard = () => {
    switch (user.role) {
      case 'Person':
        return <ClientDashboard user={user} cases={cases} />;
      case 'Judge':
        return <JudgeDashboard user={user} cases={cases} />;
      case 'Lawyer':
        return <LawyerDashboard user={user} cases={cases} />;
      case 'Admin':
        return <AdminDashboard user={user} cases={cases} />;
      default:
        // Default View
        return (
          <div className="p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Dashboard</h2>
            <p className="text-gray-500">Welcome, {user.name}.</p>
          </div>
        );
    }
  };

  return (
    <div className="container mx-auto">
      {renderDashboard()}
    </div>
  );
};

export default Dashboard;
