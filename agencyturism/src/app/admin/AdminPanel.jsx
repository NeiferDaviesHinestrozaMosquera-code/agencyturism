"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminLogin from './AdminLogin';
import AdminDashboard from './AdminDashboard';
import AdminBookings from './bookings/AdminBookings';
import AdminDestinations from './destinations/AdminDestinations';
import AdminUsers from './users/AdminUsers';
import AdminSettings from './settings/AdminSettings';
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
import { useAuth } from './AuthContext';

const AdminPanel = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const router = useRouter();

  if (!isAuthenticated) {
    return <AdminLogin />;
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader setSidebarOpen={setIsSidebarOpen} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;


