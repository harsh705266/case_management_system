import React from 'react';
import { Briefcase, Users, Calendar, Folder } from 'lucide-react';

const LawyerDashboard = ({ user, cases }) => {
    const myCases = cases.filter(c => c.assignedLawyerId === user.id);

    return (
        <div className="space-y-6">
            <div className="bg-slate-800 rounded-xl p-8 text-white shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center border-2 border-slate-600">
                        <span className="text-2xl font-serif">AF</span>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold font-serif tracking-wide">{user.name}</h2>
                        <p className="text-slate-400">Senior Partner • Criminal Defense</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-slate-700 pt-6">
                    <div>
                        <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">Active Cases</p>
                        <p className="text-2xl font-bold">{myCases.length}</p>
                    </div>
                    <div>
                        <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">Clients</p>
                        <p className="text-2xl font-bold">12</p>
                    </div>
                    <div>
                        <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">Hours Billed</p>
                        <p className="text-2xl font-bold">142</p>
                    </div>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center justify-between">
                        <h3 className="font-bold text-gray-800 flex items-center gap-2">
                            <Folder className="text-slate-600" size={20} /> Active Matters
                        </h3>
                        <button className="text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full uppercase tracking-wide hover:bg-indigo-100 transition-colors">
                            + New Case
                        </button>
                    </div>

                    <div className="grid gap-4">
                        {myCases.map(c => (
                            <div key={c.id} className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
                                <div className="flex justify-between items-start mb-3">
                                    <div>
                                        <h4 className="font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">{c.title}</h4>
                                        <p className="text-sm text-gray-500">{c.description}</p>
                                    </div>
                                    <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2 py-1 rounded">
                                        {c.status}
                                    </span>
                                </div>
                                <div className="flex items-center gap-4 text-xs text-slate-500 border-t border-gray-100 pt-3 mt-3">
                                    <div className="flex items-center gap-1">
                                        <Calendar size={12} />
                                        <span>Next: {c.nextHearing || 'TBD'}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Users size={12} />
                                        <span>Client ID: {c.clientId}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 sticky top-6">
                        <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                            <Calendar className="text-slate-600" size={20} /> Schedule
                        </h3>
                        <div className="space-y-4">
                            <div className="flex gap-3 pb-4 border-b border-gray-100">
                                <div className="text-center w-12 flex-shrink-0">
                                    <p className="text-xs font-bold text-indigo-600 uppercase">Nov</p>
                                    <p className="text-xl font-bold text-gray-800">15</p>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-800">State vs. Doe Hearing</p>
                                    <p className="text-xs text-gray-500">10:00 AM • Room 304</p>
                                </div>
                            </div>
                            <div className="flex gap-3 pb-4 border-b border-gray-100">
                                <div className="text-center w-12 flex-shrink-0">
                                    <p className="text-xs font-bold text-indigo-600 uppercase">Nov</p>
                                    <p className="text-xl font-bold text-gray-800">18</p>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-800">Client Meeting</p>
                                    <p className="text-xs text-gray-500">2:00 PM • Office</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LawyerDashboard;
