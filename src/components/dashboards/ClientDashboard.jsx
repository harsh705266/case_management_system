import React, { useState } from 'react';
import { FileText, Calendar, Shield, ArrowRight, User, Clock, CheckCircle, AlertCircle, Phone, Mail, MapPin } from 'lucide-react';

const ClientDashboard = ({ user, cases }) => {
    const [activeTab, setActiveTab] = useState('overview');

    const myCases = cases.filter(c => c.clientId === user.id);
    const activeCases = myCases.filter(c => c.status === 'Active');
    const activeCase = activeCases[0]; // For sidebar/upcoming status
    const pastCases = myCases.filter(c => c.status !== 'Active');

    // Dummy data for profile since auth simplified
    const userProfile = {
        ...user,
        phone: "+91 98765 43210",
        address: "123, Civil Lines, New Delhi, India",
        dob: "12-Aug-1985"
    };

    const renderOverview = () => (
        <div className="grid lg:grid-cols-3 gap-8 animate-in fade-in duration-300">
            {/* Main Case Status */}
            <div className="lg:col-span-2 space-y-6">
                <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                    <FileText className="text-indigo-600" /> Current Case Status
                </h3>

                {/* Active Cases List */}
                {activeCases.length > 0 ? (
                    <div className="space-y-6">
                        {activeCases.map((caseItem) => (
                            <div key={caseItem.id} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow">
                                <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                                    <div>
                                        <div className="flex items-center gap-3 mb-1">
                                            <h4 className="font-bold text-lg text-slate-900">{caseItem.title}</h4>
                                            <span className="text-xs font-mono bg-slate-100 px-2 py-0.5 rounded text-slate-500 border border-slate-200">
                                                CNR: DLHC01-004321-2024
                                            </span>
                                        </div>
                                        <p className="text-sm text-slate-500">Case ID: #{caseItem.id} &bull; <span className="font-medium text-slate-700">Civil Writ Petition</span></p>
                                    </div>
                                    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${caseItem.status === 'Active' ? 'bg-blue-100 text-blue-700 border-blue-200' :
                                        'bg-emerald-100 text-emerald-700 border-emerald-200'
                                        }`}>
                                        {caseItem.status}
                                    </span>
                                </div>

                                <div className="p-6 space-y-6">
                                    <div className="grid grid-cols-3 gap-4 text-sm border-b border-slate-100 pb-4">
                                        <div>
                                            <p className="text-slate-400 text-xs uppercase font-bold">Filing Date</p>
                                            <p className="font-medium text-slate-800">12 Jan 2024</p>
                                        </div>
                                        <div>
                                            <p className="text-slate-400 text-xs uppercase font-bold">Court</p>
                                            <p className="font-medium text-slate-800">High Court of Delhi</p>
                                        </div>
                                        <div>
                                            <p className="text-slate-400 text-xs uppercase font-bold">Next Date</p>
                                            <p className="font-medium text-slate-800">{caseItem.nextHearing || 'Awaited'}</p>
                                        </div>
                                    </div>

                                    <div>
                                        <h5 className="text-sm font-medium text-slate-500 uppercase tracking-wide mb-2">Case Summary</h5>
                                        <p className="text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-lg border border-slate-100">
                                            {caseItem.description}
                                        </p>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="p-4 rounded-lg border border-slate-200 bg-white">
                                            <h5 className="text-xs font-semibold text-slate-400 uppercase mb-1">Assigned Lawyer</h5>
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">L</div>
                                                <span className="font-medium text-slate-800">Atticus Finch</span>
                                            </div>
                                        </div>
                                        <div className="p-4 rounded-lg border border-slate-200 bg-white">
                                            <h5 className="text-xs font-semibold text-slate-400 uppercase mb-1">Presiding Judge</h5>
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold">J</div>
                                                <span className="font-medium text-slate-800">Hon. Judge Smith</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Connected Matters Section */}
                                    <div className="bg-blue-50/50 rounded-lg p-4 border border-blue-100">
                                        <h5 className="text-sm font-bold text-blue-800 mb-2 flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                                            Connected Applications
                                        </h5>
                                        <ul className="space-y-2">
                                            <li className="flex justify-between text-sm text-slate-700 border-b border-blue-100 pb-1 last:border-0 last:pb-0">
                                                <span>Interim Relief Application (IA 402/2024)</span>
                                                <span className="text-orange-600 font-medium text-xs bg-orange-50 px-2 rounded">Pending</span>
                                            </li>
                                            <li className="flex justify-between text-sm text-slate-700">
                                                <span>Exemption from Filing Certified Copies</span>
                                                <span className="text-emerald-600 font-medium text-xs bg-emerald-50 px-2 rounded">Allowed</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="bg-white p-12 text-center rounded-xl border border-dashed border-slate-300">
                        <CheckCircle className="mx-auto h-12 w-12 text-slate-300 mb-4" />
                        <h3 className="text-lg font-medium text-slate-900">All caught up!</h3>
                        <p className="text-slate-500">No active cases found at the moment.</p>
                    </div>
                )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
                {/* Upcoming Events */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
                    <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                        <Calendar className="text-indigo-600" size={20} /> Upcoming
                    </h3>
                    {activeCase?.nextHearing ? (
                        <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-16 h-16 bg-indigo-100 rounded-bl-full -mr-8 -mt-8 opacity-50"></div>
                            <p className="text-sm text-indigo-600 font-semibold mb-1">Next Hearing</p>
                            <p className="text-lg font-bold text-indigo-900">{activeCase.nextHearing}</p>
                            <p className="text-xs text-indigo-500 mt-2 flex items-center gap-1">
                                <Clock size={12} /> 10:00 AM &bull; Room 304
                            </p>
                        </div>
                    ) : (
                        <p className="text-sm text-slate-500 italic">No upcoming hearings scheduled.</p>
                    )}
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
                    <h3 className="text-lg font-bold text-slate-800 mb-4">Quick Actions</h3>
                    <div className="space-y-3">
                        {[
                            'Upload Documents',
                            'Contact Lawyer',
                            'Request Adjournment',
                            'View Orders',
                            'Online Payments',
                            'Apply for Legal Aid',
                            'Case Status Report',
                            'File Grievance'
                        ].map((action) => (
                            <button key={action} className="w-full text-left px-4 py-3 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all flex items-center justify-between group">
                                <span className="text-sm font-medium text-slate-600 group-hover:text-indigo-600">{action}</span>
                                <ArrowRight size={16} className="text-slate-300 group-hover:text-indigo-600 transition-colors" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Notifications / Recent Activity Sidebar */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
                    <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                        <AlertCircle className="text-orange-500" size={20} /> Recent Activity
                    </h3>
                    <div className="space-y-4">
                        <div className="flex gap-3">
                            <div className="mt-1 w-2 h-2 rounded-full bg-blue-500 shrink-0"></div>
                            <div>
                                <p className="text-sm text-slate-800 font-medium">New Order Uploaded</p>
                                <p className="text-xs text-slate-500">Yesterday, 4:30 PM</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <div className="mt-1 w-2 h-2 rounded-full bg-slate-300 shrink-0"></div>
                            <div>
                                <p className="text-sm text-slate-800 font-medium">Hearing Rescheduled</p>
                                <p className="text-xs text-slate-500">15 Dec, 10:00 AM</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <div className="mt-1 w-2 h-2 rounded-full bg-slate-300 shrink-0"></div>
                            <div>
                                <p className="text-sm text-slate-800 font-medium">Document Verified</p>
                                <p className="text-xs text-slate-500">14 Dec, 2:15 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderProfile = () => (
        <div className="max-w-4xl mx-auto animate-in fade-in duration-300">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="h-32 bg-gradient-to-r from-slate-800 to-indigo-900"></div>
                <div className="px-8 pb-8">
                    <div className="relative flex justify-between items-end -mt-12 mb-8">
                        <div className="flex items-end gap-6">
                            <div className="w-24 h-24 rounded-2xl bg-white p-1 shadow-lg">
                                <div className="w-full h-full bg-slate-100 rounded-xl flex items-center justify-center text-slate-400">
                                    <User size={40} />
                                </div>
                            </div>
                            <div className="mb-1">
                                <h2 className="text-2xl font-bold text-slate-900">{userProfile.name}</h2>
                                <p className="text-slate-500 font-medium">Citizen / Petitioner</p>
                            </div>
                        </div>
                        <button className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-lg text-sm font-medium hover:bg-indigo-100 transition-colors">
                            Edit Profile
                        </button>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <h3 className="text-lg font-bold text-slate-900 border-b pb-2">Personal Information</h3>
                            <div className="space-y-4">
                                <div className="flex gap-4">
                                    <Mail className="text-slate-400 shrink-0" size={20} />
                                    <div>
                                        <p className="text-sm text-slate-500">Email Address</p>
                                        <p className="font-medium text-slate-900">{userProfile.email}</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <Phone className="text-slate-400 shrink-0" size={20} />
                                    <div>
                                        <p className="text-sm text-slate-500">Phone Number</p>
                                        <p className="font-medium text-slate-900">{userProfile.phone}</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <Calendar className="text-slate-400 shrink-0" size={20} />
                                    <div>
                                        <p className="text-sm text-slate-500">Date of Birth</p>
                                        <p className="font-medium text-slate-900">{userProfile.dob}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-lg font-bold text-slate-900 border-b pb-2">Address & Identification</h3>
                            <div className="space-y-4">
                                <div className="flex gap-4">
                                    <MapPin className="text-slate-400 shrink-0" size={20} />
                                    <div>
                                        <p className="text-sm text-slate-500">Permanent Address</p>
                                        <p className="font-medium text-slate-900">{userProfile.address}</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <Shield className="text-slate-400 shrink-0" size={20} />
                                    <div>
                                        <p className="text-sm text-slate-500">Aadhar / ID Number</p>
                                        <p className="font-medium text-slate-900">XXXX-XXXX-1234</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 border-t border-slate-200 pt-8">
                        <h3 className="text-lg font-bold text-slate-900 mb-6">Account Settings</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between">
                                <div>
                                    <p className="font-semibold text-slate-900">Notifications</p>
                                    <p className="text-xs text-slate-500">Email & SMS alerts</p>
                                </div>
                                <div className="w-10 h-6 bg-indigo-600 rounded-full relative cursor-pointer">
                                    <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1"></div>
                                </div>
                            </div>
                            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between">
                                <div>
                                    <p className="font-semibold text-slate-900">Language</p>
                                    <p className="text-xs text-slate-500">English (Preferred)</p>
                                </div>
                                <button className="text-xs font-bold text-indigo-600 uppercase">Change</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderHistory = () => (
        <div className="animate-in fade-in duration-300">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="p-6 border-b border-slate-200 flex justify-between items-center">
                    <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                        <Clock className="text-slate-400" /> Case History Archive
                    </h3>
                    <div className="flex gap-2">
                        <select className="text-sm border-gray-200 rounded-lg">
                            <option>All Years</option>
                            <option>2024</option>
                            <option>2023</option>
                        </select>
                    </div>
                </div>

                {pastCases.length > 0 ? (
                    <div className="divide-y divide-slate-100">
                        {pastCases.map((c) => (
                            <div key={c.id} className="p-6 hover:bg-slate-50 transition-colors flex flex-col md:flex-row justify-between md:items-center gap-4">
                                <div>
                                    <div className="flex items-center gap-3 mb-1">
                                        <h4 className="font-bold text-slate-900">{c.title}</h4>
                                        <span className="px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">
                                            {c.status}
                                        </span>
                                    </div>
                                    <p className="text-sm text-slate-500">Case ID: #{c.id} &bull; Decided on: {c.lastUpdated || 'N/A'}</p>
                                </div>
                                <button className="text-indigo-600 text-sm font-semibold hover:underline">
                                    View Judgment
                                </button>
                            </div>
                        ))}
                        {/* Mock historical entry if empty */}
                        <div className="p-6 hover:bg-slate-50 transition-colors flex flex-col md:flex-row justify-between md:items-center gap-4 opacity-75">
                            <div>
                                <div className="flex items-center gap-3 mb-1">
                                    <h4 className="font-bold text-slate-900">Property Dispute: Sharma vs. State</h4>
                                    <span className="px-2 py-0.5 rounded text-xs font-medium bg-emerald-100 text-emerald-700 border border-emerald-200">
                                        Won
                                    </span>
                                </div>
                                <p className="text-sm text-slate-500">Case ID: #OLD-2022-89 &bull; Decided on: 15 Oct 2023</p>
                            </div>
                            <button className="text-indigo-600 text-sm font-semibold hover:underline">
                                View Judgment
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="p-12 text-center">
                        <div className="p-6 hover:bg-slate-50 transition-colors flex flex-col md:flex-row justify-between md:items-center gap-4">
                            <div className="text-left">
                                <div className="flex items-center gap-3 mb-1">
                                    <h4 className="font-bold text-slate-900">Property Dispute: Sharma vs. State</h4>
                                    <span className="px-2 py-0.5 rounded text-xs font-medium bg-emerald-100 text-emerald-700 border border-emerald-200">
                                        Won
                                    </span>
                                </div>
                                <p className="text-sm text-slate-500">Case ID: #OLD-2022-89 &bull; Decided on: 15 Oct 2023</p>
                            </div>
                            <button className="text-indigo-600 text-sm font-semibold hover:underline">
                                View Judgment
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );

    return (
        <div className="space-y-8 font-sans">
            {/* Header */}
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden">
                <div className="relative z-10 flex flex-col md:flex-row justify-between md:items-end gap-6">
                    <div>
                        <h2 className="text-3xl font-bold mb-2">Welcome, {user.name}</h2>
                        <p className="text-slate-300 max-w-xl">
                            Managing your legal proceedings with transparency and ease.
                        </p>
                    </div>

                    {/* Tabs */}
                    <div className="flex p-1 bg-slate-800/50 backdrop-blur-md rounded-xl border border-slate-700/50">
                        {[
                            { id: 'overview', icon: FileText, label: 'Overview' },
                            { id: 'profile', icon: User, label: 'My Profile' },
                            { id: 'history', icon: Clock, label: 'Case History' }
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === tab.id
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20'
                                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                <tab.icon size={16} />
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Decorative BG */}
                <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
            </div>

            {/* Tab Content */}
            <main>
                {activeTab === 'overview' && renderOverview()}
                {activeTab === 'profile' && renderProfile()}
                {activeTab === 'history' && renderHistory()}
            </main>
        </div>
    );
};

export default ClientDashboard;
