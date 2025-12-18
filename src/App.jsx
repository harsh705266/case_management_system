import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Layout from './components/Layout';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Landing from './pages/Landing';
import CaseManagement from './pages/CaseManagement';
import UserManagement from './pages/UserManagement';
import NewCase from "./pages/NewCase";
import NewUser from "./pages/NewUser";

const RequireAuth = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>

          {/* Public Route */}
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected Routes with Layout */}
          <Route
            element={
              <RequireAuth>
                <Layout />
              </RequireAuth>
            }
          >
            <Route path="/dashboard" element={<Dashboard />} />

            {/* CASE ROUTES */}
            <Route path="/cases" element={<CaseManagement />} />
            <Route path="/cases/new" element={<NewCase />} />

            {/* USERS ROUTE */}
            <Route path="/users" element={<UserManagement />} />
            <Route path="/users/new" element={<NewUser />} />
          </Route>

        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
