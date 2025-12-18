import React from 'react';
import { Gavel, Clock, BookOpen, User, Calendar, FileText, CheckCircle, AlertTriangle } from 'lucide-react';

import { useNavigate } from 'react-router-dom';

const JudgeDashboard = ({ user, cases }) => {
    const navigate = useNavigate();
    // Filter cases for this judge
    const myCases = cases.filter(c => c.assignedJudgeId === user.id);
    const pendingCases = myCases.filter(c => c.status === 'Pending');
    const activeCases = myCases.filter(c => c.status === 'Active');

    // Profile Modal State
    const [showProfile, setShowProfile] = React.useState(false);
    const [selectedOrder, setSelectedOrder] = React.useState(null);
    const [showAddModal, setShowAddModal] = React.useState(false);

    // Mock History Data State
    const [judgmentHistory, setJudgmentHistory] = React.useState([
        { id: 'JC-2023-001', title: 'State vs. Metropolitan Infrastructure', date: '2023-11-15', verdict: 'Dismissed', type: 'Civil', description: 'The appeal filed against the High Court order regarding land acquisition compensation is dismissed due to lack of merit. The initial compensation awarded is deemed sufficient based on the current market valuation reports submitted by the court-appointed surveyor.' },
        { id: 'JC-2023-089', title: 'Ramesh Kumar vs. Union of India', date: '2023-10-02', verdict: 'Allowed', type: 'Constitutional', description: 'The writ petition challenging the validity of the new notificiation is allowed. The court holds that the notification violates the fundamental right to equality under Article 14. The respondents are directed to withdraw the circular with immediate effect.' },
        { id: 'JC-2023-112', title: 'EcoGreen Foundation vs. State Pollution Board', date: '2023-09-20', verdict: 'Disposed', type: 'PIL', description: 'The Public Interest Litigation is disposed of with directions to the State Pollution Control Board to form a committee reset guidelines for industrial waste disposal within 3 months.' },
        { id: 'JC-2023-156', title: 'City Municipal Corp vs. Trade Union', date: '2023-08-14', verdict: 'Allowed', type: 'Labor', description: 'The special leave petition is allowed. The termination orders of the contractual workers are set aside, and the Corporation is directed to reinstate them with 50% back wages.' },
    ]);

    return (
        <div className="space-y-8 font-serif relative">
            {/* ... (rest of the component) */}

            {/* Note: Ideally I'd use multi-replace, but targeting the return statement is safer with context. 
               However, since I can't easily jump, I will assume the previous content is fine and just inject the Add button lower down.
               Actually, I need to replace the Header of the History section to add the button.
            */}

            {/* Profile Modal */}
            {showProfile && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden border border-amber-100 transform transition-all scale-100">
                        <div className="bg-slate-900 text-white p-6 relative">
                            <button
                                onClick={() => setShowProfile(false)}
                                className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
                            >
                                ✕
                            </button>
                            <div className="flex items-center gap-4">
                                <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center text-3xl font-bold border-4 border-slate-800">
                                    {user.name.charAt(0)}
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold">Hon. {user.name}</h2>
                                    <p className="text-amber-400 text-sm font-sans uppercase tracking-wider">Supreme Court Justice</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 font-sans space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                    <p className="text-xs text-slate-500 uppercase font-bold mb-1">Experience</p>
                                    <p className="text-2xl font-bold text-slate-800">25 Years</p>
                                </div>
                                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                    <p className="text-xs text-slate-500 uppercase font-bold mb-1">Appointment</p>
                                    <p className="text-2xl font-bold text-slate-800">2010</p>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <h3 className="font-bold text-slate-800 border-b pb-2">Judicial Record</h3>
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-600">Judgments Delivered</span>
                                    <span className="font-bold text-slate-900">1,240</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-600">Specialization</span>
                                    <span className="font-bold text-slate-900">Constitutional Law</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-600">Current Bench</span>
                                    <span className="font-bold text-slate-900">Court No. 3</span>
                                </div>
                            </div>

                            <div className="bg-amber-50 p-4 rounded-lg border border-amber-100 text-sm text-amber-900 italic">
                                "Dedicated to upholding the constitution and delivering impartial justice."
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Judicial Header */}
            <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Gavel size={150} />
                </div>
                <div className="relative z-10">
                    <div className="flex items-center gap-6">
                        {/* Profile Logo/Avatar */}
                        <div
                            onClick={() => setShowProfile(true)}
                            className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center border-4 border-amber-500 cursor-pointer hover:bg-slate-700 transition-all shadow-lg group relative"
                        >
                            <span className="text-3xl font-bold text-amber-500">{user.name.charAt(0)}</span>
                            <div className="absolute -bottom-1 -right-1 bg-green-500 w-5 h-5 rounded-full border-2 border-slate-900"></div>
                        </div>

                        <div>
                            <h1 className="text-4xl font-bold mb-2">Honorable Justice {user.name}</h1>
                            <div className="flex items-center gap-2 text-amber-500 text-sm font-bold uppercase tracking-widest">
                                <ScaleIcon /> Judicial Chambers
                            </div>
                        </div>
                    </div>

                    <p className="text-slate-400 max-w-xl">
                        "Justice delayed is justice denied." Manage your docket efficiently and ensure fair trials for all active cases.
                    </p>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl border-l-4 border-indigo-600 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-gray-500 text-sm font-sans font-medium uppercase">Active Docket</p>
                            <h3 className="text-4xl font-bold text-slate-800 mt-2">{activeCases.length}</h3>
                        </div>
                        <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg">
                            <BookOpen size={24} />
                        </div>
                    </div>
                    <p className="text-xs text-gray-400 mt-4 font-sans">Cases currently in hearing</p>
                </div>

                <div className="bg-white p-6 rounded-xl border-l-4 border-amber-500 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-gray-500 text-sm font-sans font-medium uppercase">Pending Judgments</p>
                            <h3 className="text-4xl font-bold text-slate-800 mt-2">{pendingCases.length}</h3>
                        </div>
                        <div className="p-3 bg-amber-50 text-amber-600 rounded-lg">
                            <Clock size={24} />
                        </div>
                    </div>
                    <p className="text-xs text-gray-400 mt-4 font-sans">Requires immediate attention</p>
                </div>

                <div className="bg-white p-6 rounded-xl border-l-4 border-emerald-500 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-gray-500 text-sm font-sans font-medium uppercase">Hearings Today</p>
                            <h3 className="text-4xl font-bold text-slate-800 mt-2">3</h3>
                        </div>
                        <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg">
                            <Calendar size={24} />
                        </div>
                    </div>
                    <p className="text-xs text-gray-400 mt-4 font-sans">Scheduled hearings</p>
                </div>
            </div>

            {/* Docket Table */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-slate-50">
                    <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                        <FileText size={20} className="text-slate-400" /> Current Docket
                    </h3>
                    <span className="text-xs font-sans bg-slate-200 text-slate-600 px-3 py-1 rounded-full">
                        {myCases.length} Records Found
                    </span>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left font-sans">
                        <thead className="bg-slate-100 text-slate-600 uppercase text-xs font-bold">
                            <tr>
                                <th className="px-6 py-4">Case Details</th>
                                <th className="px-6 py-4">Hearing Date</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4">Parties</th>
                                <th className="px-6 py-4 text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {myCases.map(c => (
                                <tr key={c.id} className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="font-bold text-slate-800">{c.title}</div>
                                        <div className="text-xs text-slate-400 font-mono mt-1">ID: {c.id}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2 text-slate-600">
                                            <Calendar size={14} />
                                            {c.nextHearing || "Not Scheduled"}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${c.status === 'Active' ? 'bg-indigo-50 text-indigo-700 border-indigo-100' :
                                            c.status === 'Pending' ? 'bg-amber-50 text-amber-700 border-amber-100' :
                                                'bg-emerald-50 text-emerald-700 border-emerald-100'
                                            }`}>
                                            {c.status === 'Active' && <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></div>}
                                            {c.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm text-slate-600 flex items-center gap-2">
                                            <User size={14} /> Plaintiff vs Defendant
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button
                                            onClick={() => navigate('/cases', { state: { caseId: c.id } })}
                                            className="text-slate-900 border border-slate-300 hover:bg-slate-900 hover:text-white px-4 py-2 rounded-lg text-xs font-bold transition-all"
                                        >
                                            View Details
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {myCases.length === 0 && (
                        <div className="p-8 text-center text-gray-500 font-sans">
                            <CheckCircle size={48} className="mx-auto text-gray-300 mb-3" />
                            <p>No cases assigned to your docket.</p>
                        </div>
                    )}
                </div>
            </div>
            {/* Historical Judgments Section */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-slate-50">
                    <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                        <Gavel size={20} className="text-slate-400" /> Historical Case Judgment History
                    </h3>
                    <div className="flex items-center gap-2">
                        <span className="text-xs font-sans bg-amber-100 text-amber-800 px-3 py-1 rounded-full border border-amber-200">
                            Archived Records
                        </span>
                        <button
                            onClick={() => setShowAddModal(true)}
                            className="text-xs font-sans bg-slate-900 text-white px-3 py-1 rounded-full hover:bg-slate-700 transition-colors shadow-sm flex items-center gap-1"
                        >
                            + Add Record
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left font-sans">
                        <thead className="bg-slate-100 text-slate-600 uppercase text-xs font-bold">
                            <tr>
                                <th className="px-6 py-4">Case Title</th>
                                <th className="px-6 py-4">Judgment Date</th>
                                <th className="px-6 py-4">Verdict</th>
                                <th className="px-6 py-4">Citation</th>
                                <th className="px-6 py-4 text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {judgmentHistory.map((history, idx) => (
                                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="font-bold text-slate-800">{history.title}</div>
                                        <div className="text-xs text-slate-400 font-mono mt-1">ID: {history.id}</div>
                                    </td>
                                    <td className="px-6 py-4 text-slate-600 text-sm">
                                        {history.date}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${history.verdict === 'Allowed' ? 'bg-green-50 text-green-700 border-green-100' :
                                            history.verdict === 'Dismissed' ? 'bg-red-50 text-red-700 border-red-100' :
                                                'bg-blue-50 text-blue-700 border-blue-100'
                                            }`}>
                                            {history.verdict}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-slate-500 text-sm italic">
                                        {new Date(history.date).getFullYear()} SC {1000 + idx}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-slate-400 hover:text-indigo-600 text-xs font-bold transition-all">
                                            View Order
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Order Details Modal */}
            {
                selectedOrder && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden border border-slate-200 transform transition-all scale-100 animate-in fade-in zoom-in duration-200">
                            <div className="bg-slate-50 border-b border-slate-100 p-6 flex justify-between items-center">
                                <div className="flex items-center gap-3">
                                    <div className="bg-indigo-100 p-2 rounded-lg text-indigo-600">
                                        <FileText size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-800">Judgment Order</h3>
                                        <p className="text-sm text-slate-500 font-mono">Case ID: {selectedOrder.id}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setSelectedOrder(null)}
                                    className="text-slate-400 hover:text-slate-600 transition-colors p-2 hover:bg-slate-100 rounded-full"
                                >
                                    ✕
                                </button>
                            </div>

                            <div className="p-8 max-h-[60vh] overflow-y-auto">
                                <div className="mb-6">
                                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Case Title</h4>
                                    <p className="text-lg font-semibold text-slate-800">{selectedOrder.title}</p>
                                </div>

                                <div className="grid grid-cols-2 gap-6 mb-8">
                                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                                        <p className="text-xs text-slate-500 uppercase font-bold mb-1">Verdict</p>
                                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${selectedOrder.verdict === 'Allowed' ? 'bg-green-50 text-green-700 border-green-100' :
                                            selectedOrder.verdict === 'Dismissed' ? 'bg-red-50 text-red-700 border-red-100' :
                                                'bg-blue-50 text-blue-700 border-blue-100'
                                            }`}>
                                            {selectedOrder.verdict}
                                        </span>
                                    </div>
                                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                                        <p className="text-xs text-slate-500 uppercase font-bold mb-1">Date of Order</p>
                                        <p className="font-bold text-slate-700">{selectedOrder.date}</p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100 pb-2">Order Summary / Abstract</h4>
                                    <div className="font-serif text-slate-700 leading-relaxed space-y-4 text-justify">
                                        <p>
                                            {selectedOrder.description || "The court has reviewed the evidence presented by both parties. After careful consideration of the constitutional validity of the arguments, the bench has arrived at this conclusion."}
                                        </p>
                                        <p>
                                            It is hereby ordered that the petition is <strong>{selectedOrder.verdict}</strong>. The arguments raised by the petitioner regarding the violation of fundamental rights were examined in detail. The court found substantial merit in the submissions made regarding Article 21.
                                        </p>
                                        <p className="italic text-slate-500 mt-4">
                                            "Digital copy generated for e-Courts India System. Valid for reference purposes."
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-slate-50 p-4 border-t border-slate-100 flex justify-end gap-3">
                                <button
                                    onClick={() => setSelectedOrder(null)}
                                    className="px-4 py-2 text-slate-600 hover:bg-slate-200 rounded-lg text-sm font-bold transition-colors"
                                >
                                    Close Viewer
                                </button>
                                <button className="px-4 py-2 bg-slate-900 text-white hover:bg-slate-800 rounded-lg text-sm font-bold transition-colors flex items-center gap-2">
                                    <FileText size={16} /> Download Full Order
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }

            {/* Add Judgment Modal */}
            {showAddModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200">
                        <div className="bg-slate-900 text-white p-6 flex justify-between items-center">
                            <h3 className="font-bold text-lg flex items-center gap-2">
                                <Gavel size={20} className="text-amber-500" /> New Judgment Entry
                            </h3>
                            <button onClick={() => setShowAddModal(false)} className="text-slate-400 hover:text-white">✕</button>
                        </div>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            const formData = new FormData(e.target);
                            const newEntry = {
                                id: `JC-${new Date().getFullYear()}-${Math.floor(Math.random() * 1000)}`,
                                title: formData.get('title'),
                                date: formData.get('date'),
                                verdict: formData.get('verdict'),
                                type: 'Civil', // Default
                                description: formData.get('description'),
                            };
                            setJudgmentHistory([newEntry, ...judgmentHistory]);
                            setShowAddModal(false);
                        }} className="p-6 space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Case Title</label>
                                <input name="title" required className="w-full p-3 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-amber-500 outline-none" placeholder="e.g. Union of India vs..." />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Judgment Date</label>
                                    <input name="date" type="date" required className="w-full p-3 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-amber-500 outline-none" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Verdict</label>
                                    <select name="verdict" className="w-full p-3 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-amber-500 outline-none bg-white">
                                        <option value="Allowed">Allowed</option>
                                        <option value="Dismissed">Dismissed</option>
                                        <option value="Disposed">Disposed</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Order Summary</label>
                                <textarea name="description" rows="3" className="w-full p-3 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-amber-500 outline-none" placeholder="Brief abstract of the order..."></textarea>
                            </div>
                            <button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-lg transition-colors shadow-lg shadow-amber-500/30">
                                Record Judgment
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div >
    );
};

// Helper Icon
const ScaleIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
        <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
        <path d="M7 21h10" />
        <path d="M12 3v18" />
        <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
    </svg>
);

export default JudgeDashboard;
