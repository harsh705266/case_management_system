import React from 'react';
import { useNavigate } from 'react-router-dom';
import OfficialNavbar from '../components/OfficialNavbar';
import { Scale, Users, Gavel, ArrowRight, Shield, CheckCircle } from 'lucide-react';

const Landing = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white font-sans">
            <OfficialNavbar />


            {/* Hero Section */}
            <header className="relative overflow-hidden bg-slate-50 pt-0 pb-20">
                <div className="container mx-auto px-6 text-center max-w-4xl">
                    <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold mb-2 border border-blue-100">
                        <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-3 leading-tight tracking-tight">
                        Integrated Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Case Hearing System</span>
                    </h1>

                    <p className="text-xl text-slate-500 mb-6 max-w-2xl mx-auto leading-relaxed">
                        An initiative to streamline judicial processes, ensuring transparency and efficiency in case listings and hearing schedules. A step towards digital justice for all.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
                        <button
                            onClick={() => navigate('/signup')}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2"
                        >
                            Sign Up Free <ArrowRight size={20} />
                        </button>
                        <button
                            onClick={() => navigate('/login')}
                            className="bg-white text-slate-700 border border-slate-200 hover:border-blue-300 hover:text-blue-600 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2"
                        >
                            Login to Dashboard
                        </button>
                    </div>

                    {/* Supreme Court Video */}
                    <div className="relative mx-auto max-w-5xl rounded-2xl bg-white p-2 shadow-2xl ring-1 ring-gray-900/10 mt-10">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="rounded-xl w-full h-auto object-cover"
                        >
                            <source src="/hero_video.webm" type="video/webm" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </header>

            {/* Features Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Everything you need to run your firm</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">One simple, secure platform to manage cases, clients, documents, and billing.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all">
                            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Users size={28} strokeWidth={2.5} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Client Management</h3>
                            <p className="text-slate-500 mb-6 leading-relaxed">
                                Stop using spreadsheets. Keep all your contact details, notes, and specific case information in one secure searchable database.
                            </p>
                            <span className="text-blue-600 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">Learn more <ArrowRight size={16} /></span>
                        </div>

                        <div className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-900/5 transition-all">
                            <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Gavel size={28} strokeWidth={2.5} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Case Tracking</h3>
                            <p className="text-slate-500 mb-6 leading-relaxed">
                                Never miss a deadline. Manage hearings, track statutes of limitations, and assign tasks to your team automatically.
                            </p>
                            <span className="text-purple-600 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">Learn more <ArrowRight size={16} /></span>
                        </div>

                        <div className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-green-200 hover:shadow-xl hover:shadow-green-900/5 transition-all">
                            <div className="w-14 h-14 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Shield size={28} strokeWidth={2.5} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Secure Portal</h3>
                            <p className="text-slate-500 mb-6 leading-relaxed">
                                Share documents and invoices securely with clients through a dedicated portal. Bank-grade encryption for peace of mind.
                            </p>
                            <span className="text-green-600 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">Learn more <ArrowRight size={16} /></span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Proof */}
            <section className="py-20 bg-slate-900 text-white border-t border-slate-800">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-2xl font-bold mb-12 text-slate-300">Trusted by leading Indian Legal Institutions</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Mock Logos */}
                        <div className="flex items-center justify-center text-xl font-serif font-bold">Bar Council of India</div>
                        <div className="flex items-center justify-center text-xl font-serif font-bold">Shardul Amarchand Mangaldas</div>
                        <div className="flex items-center justify-center text-xl font-serif font-bold">Cyril Amarchand Mangaldas</div>
                        <div className="flex items-center justify-center text-xl font-serif font-bold">Khaitan & Co</div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Landing;
