import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import OfficialNavbar from './OfficialNavbar';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <OfficialNavbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
