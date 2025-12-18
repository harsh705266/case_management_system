import React from 'react';
import { Users, FileText, Gavel, Shield, TrendingUp, Activity, Bell, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useUsers } from '../../context/UserContext';

const AdminDashboard = ({ user, cases }) => {
    const navigate = useNavigate();

    const { users } = useUsers();

    // Stats
    const totalUsers = users.length;
    const activeCases = cases.filter(c => c.status === 'Active').length;
    const pendingCases = cases.filter(c => c.status === 'Pending').length;
    const closedCases = cases.filter(c => c.status === 'Closed').length;

    return (
        <div className="p-2 space-y-6">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-900 text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
                <div className="relative z-10 w-full md:w-auto">
                    <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 text-xs font-bold uppercase tracking-wider rounded-full border border-indigo-500/30">System Administrator</span>
                        <div className="flex items-center text-green-400 text-xs font-bold gap-1">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            Online
                        </div>
                    </div>
                    <h2 className="text-3xl font-bold">Welcome back, {user.name}</h2>
                    <p className="text-slate-400 mt-1">Here's what's happening in your judicial system today.</p>
                </div>

                <div className="relative z-10 flex gap-3">
                    <button className="p-3 bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors border border-slate-700">
                        <Bell size={20} className="text-slate-300" />
                    </button>
                    <button className="p-3 bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors border border-slate-700">
                        <Settings size={20} className="text-slate-300" />
                    </button>
                </div>

                {/* Decorative Background */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600 rounded-full opacity-10 filter blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600 rounded-full opacity-10 filter blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div onClick={() => navigate('/users')} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group cursor-pointer">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-blue-50 text-blue-600 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            <Users size={24} />
                        </div>
                        <span className="flex items-center text-green-500 text-xs font-bold bg-green-50 px-2 py-1 rounded-full">
                            <TrendingUp size={12} className="mr-1" /> +12%
                        </span>
                    </div>
                    <h3 className="text-3xl font-bold text-slate-800 mb-1">{totalUsers}</h3>
                    <p className="text-slate-500 text-sm font-medium">Total Users</p>
                </div>

                <div onClick={() => navigate('/cases')} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group cursor-pointer">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                            <FileText size={24} />
                        </div>
                        <span className="flex items-center text-green-500 text-xs font-bold bg-green-50 px-2 py-1 rounded-full">
                            <TrendingUp size={12} className="mr-1" /> +5%
                        </span>
                    </div>
                    <h3 className="text-3xl font-bold text-slate-800 mb-1">{cases.length}</h3>
                    <p className="text-slate-500 text-sm font-medium">Total Cases</p>
                </div>

                <div onClick={() => navigate('/cases', { state: { status: 'Active' } })} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group cursor-pointer">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-amber-50 text-amber-600 rounded-lg group-hover:bg-amber-600 group-hover:text-white transition-colors">
                            <Activity size={24} />
                        </div>
                        <span className="text-slate-400 text-xs font-bold px-2 py-1">
                            Live
                        </span>
                    </div>
                    <h3 className="text-3xl font-bold text-slate-800 mb-1">{activeCases}</h3>
                    <p className="text-slate-500 text-sm font-medium">Active Proceedings</p>
                </div>

                <div onClick={() => navigate('/cases', { state: { status: 'Closed' } })} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group cursor-pointer">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                            <Gavel size={24} />
                        </div>
                        <span className="flex items-center text-green-500 text-xs font-bold bg-green-50 px-2 py-1 rounded-full">
                            <TrendingUp size={12} className="mr-1" /> +8%
                        </span>
                    </div>
                    <h3 className="text-3xl font-bold text-slate-800 mb-1">{closedCases}</h3>
                    <p className="text-slate-500 text-sm font-medium">Cases Resolved</p>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="grid lg:grid-cols-3 gap-6">
                {/* Recent Activity / System Health */}
                <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-100 p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="font-bold text-lg text-slate-800">System Overview</h3>
                        <select className="bg-slate-50 border-none text-sm text-slate-500 rounded-lg focus:ring-0 cursor-pointer hover:text-slate-700">
                            <option>This Week</option>
                            <option>This Month</option>
                        </select>
                    </div>

                    {/* Visual Representation (Mock Layout) */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-gradient-to-br from-indigo-50 to-white p-4 rounded-xl border border-indigo-50">
                            <h4 className="text-indigo-900 font-bold mb-2">New Registrations</h4>
                            <div className="flex items-end gap-2">
                                <div className="w-2 bg-indigo-200 h-8 rounded-t"></div>
                                <div className="w-2 bg-indigo-300 h-12 rounded-t"></div>
                                <div className="w-2 bg-indigo-400 h-10 rounded-t"></div>
                                <div className="w-2 bg-indigo-500 h-16 rounded-t"></div>
                                <div className="w-2 bg-indigo-600 h-14 rounded-t"></div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-purple-50 to-white p-4 rounded-xl border border-purple-50">
                            <h4 className="text-purple-900 font-bold mb-2">Case Clearance Rate</h4>
                            <div className="flex items-end gap-2">
                                <div className="w-2 bg-purple-200 h-6 rounded-t"></div>
                                <div className="w-2 bg-purple-300 h-8 rounded-t"></div>
                                <div className="w-2 bg-purple-400 h-12 rounded-t"></div>
                                <div className="w-2 bg-purple-500 h-10 rounded-t"></div>
                                <div className="w-2 bg-purple-600 h-14 rounded-t"></div>
                            </div>
                        </div>
                    </div>

                    <h4 className="font-bold text-sm text-slate-400 uppercase tracking-wider mb-4">Recent Audit Logs</h4>
                    <div className="space-y-4">
                        {[1, 2, 3].map((_, i) => (
                            <div key={i} className="flex items-center gap-4 p-3 hover:bg-slate-50 rounded-lg transition-colors border-b border-dashed border-slate-100 last:border-0">
                                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                                    <Shield size={18} />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-semibold text-slate-800">New Lawyer Added</p>
                                    <p className="text-xs text-slate-500">Admin User created account for "Atticus Finch"</p>
                                </div>
                                <span className="text-xs text-slate-400 font-mono">10:42 AM</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Actions Panel */}
                <div className="space-y-6">
                    <div className="bg-slate-900 text-white rounded-xl p-6 shadow-lg">
                        <h3 className="font-bold text-lg mb-4">Quick Actions</h3>
                        <div className="grid grid-cols-2 gap-3">
                            <button
                                onClick={() => navigate('/users/new')}
                                className="flex flex-col items-center justify-center p-4 bg-slate-800 hover:bg-indigo-600 rounded-xl transition-all group"
                            >
                                <Users className="mb-2 text-indigo-400 group-hover:text-white" size={24} />
                                <span className="text-xs font-bold">Add User</span>
                            </button>
                            <button
                                onClick={() => navigate('/cases/new')}
                                className="flex flex-col items-center justify-center p-4 bg-slate-800 hover:bg-indigo-600 rounded-xl transition-all group"
                            >
                                <FileText className="mb-2 text-indigo-400 group-hover:text-white" size={24} />
                                <span className="text-xs font-bold">New Case</span>
                            </button>
                            <button className="flex flex-col items-center justify-center p-4 bg-slate-800 hover:bg-indigo-600 rounded-xl transition-all group">
                                <Settings className="mb-2 text-indigo-400 group-hover:text-white" size={24} />
                                <span className="text-xs font-bold">Config</span>
                            </button>
                            <button className="flex flex-col items-center justify-center p-4 bg-slate-800 hover:bg-indigo-600 rounded-xl transition-all group">
                                <Shield className="mb-2 text-indigo-400 group-hover:text-white" size={24} />
                                <span className="text-xs font-bold">Security</span>
                            </button>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
                        <h3 className="font-bold text-slate-800 mb-4">System Status</h3>
                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between text-xs font-medium mb-1">
                                    <span className="text-slate-600">Database Load</span>
                                    <span className="text-green-600">Healthy</span>
                                </div>
                                <div className="w-full bg-slate-100 rounded-full h-2">
                                    <div className="bg-green-500 h-2 rounded-full w-1/4"></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-xs font-medium mb-1">
                                    <span className="text-slate-600">Storage Usage</span>
                                    <span className="text-indigo-600">45%</span>
                                </div>
                                <div className="w-full bg-slate-100 rounded-full h-2">
                                    <div className="bg-indigo-500 h-2 rounded-full w-5/12"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
