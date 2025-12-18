import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Scale, LogOut, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const OfficialNavbar = () => {
    const navigate = useNavigate();
    const { user, logout } = useAuth();
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState({ title: '', body: '' });

    const handleNavClick = (item) => {
        let content = { title: item, body: `Information about ${item}` };

        switch (item) {
            case 'Home':
                content = {
                    title: 'Welcome Home',
                    body: 'You are currently on the Home Page of the Integrated Digital Case Hearing System.'
                };
                if (window.location.pathname === '/') {
                    setModalContent(content);
                    setShowModal(true);
                } else {
                    navigate('/');
                }
                return;
            case 'Contact Us':
                content = {
                    title: 'Contact Information',
                    body: (
                        <div className="space-y-2">
                            <p className="font-semibold text-blue-800">24/7 Helpline Numbers:</p>
                            <p>General Enquiry: <span className="font-mono bg-slate-100 px-1 rounded">1800-11-1212</span></p>
                            <p>Technical Support: <span className="font-mono bg-slate-100 px-1 rounded">1800-420-9999</span></p>
                            <p className="mt-4 font-semibold text-blue-800">Email:</p>
                            <p>support@ecourts.gov.in</p>
                        </div>
                    )
                };
                break;
            case 'Cause List':
                content = { title: 'Cause List', body: 'View the daily list of cases scheduled for hearing.' };
                break;
            case 'Judgments':
                content = { title: 'Judgments', body: 'Search and view past judgments and orders.' };
                break;
            case 'E-Filing':
                content = { title: 'E-Filing', body: 'File new cases securely online.' };
                break;
            default:
                break;
        }

        setModalContent(content);
        setShowModal(true);
    };

    return (
        <div className="w-full">
            {/* Main Header with Tricolor & Logos */}
            <div className="bg-white shadow-sm font-sans relative z-40">
                {/* Tricolor Strip */}
                <div className="h-1.5 w-full flex">
                    <div className="h-full w-1/3 bg-[#FF9933]"></div>
                    <div className="h-full w-1/3 bg-white"></div>
                    <div className="h-full w-1/3 bg-[#138808]"></div>
                </div>

                {/* Branding Area */}
                <div className="container mx-auto px-4 md:px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
                    {/* Left: Emblem & Title */}
                    <div className="flex items-center gap-4 w-full md:w-auto justify-center md:justify-start">
                        <img
                            src="/satyamev_jayate.jpg"
                            alt="National Emblem"
                            className="h-20 w-auto object-contain mix-blend-multiply"
                        />
                        <img
                            src="/sc_emblem.png"
                            alt="Supreme Court Emblem"
                            className="h-20 w-auto object-contain"
                        />
                        <img
                            src="/additional_logo.jpg"
                            alt="Additional Emblem"
                            className="h-20 w-auto object-contain mix-blend-multiply"
                        />
                        <img
                            src="/sc_news_img_new.png"
                            alt="Supreme Court News"
                            className="h-20 w-auto object-contain mix-blend-multiply rounded-md"
                        />
                        <div className="flex flex-col text-center md:text-left">
                            <h1 className="text-slate-900 font-extrabold text-2xl tracking-tight leading-none">
                                e-Courts India Services
                            </h1>
                            <span className="text-slate-600 text-sm font-serif font-medium tracking-wide mt-1">
                                सत्यमेव जयते (Satyamev Jayate)
                            </span>
                            <span className="text-blue-700 text-xs font-bold uppercase tracking-wider mt-0.5">
                                Department of Justice, Ministry of Law & Justice
                            </span>
                        </div>
                    </div>

                    {/* Right: Partner Logo & Auth */}
                    <div className="flex items-center gap-6">
                        <img
                            src="/digital_india_logo.png"
                            alt="Digital India"
                            className="h-16 w-auto object-contain hidden md:block"
                        />

                        {user ? (
                            <div className="flex items-center gap-4">
                                <div className="hidden lg:flex flex-col items-end">
                                    <span className="text-sm font-bold text-slate-900">{user.name}</span>
                                    <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded-full border border-slate-200 text-slate-500 font-bold uppercase tracking-tighter">
                                        {user.role}
                                    </span>
                                </div>
                                <button
                                    onClick={() => navigate('/dashboard')}
                                    className="w-10 h-10 bg-blue-50 text-blue-700 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors border border-blue-100"
                                >
                                    <User size={20} />
                                </button>
                                <button
                                    onClick={logout}
                                    className="w-10 h-10 bg-red-50 text-red-600 rounded-full flex items-center justify-center hover:bg-red-100 transition-colors border border-red-100"
                                    title="Logout"
                                >
                                    <LogOut size={20} />
                                </button>
                            </div>
                        ) : (
                            <div className="flex gap-3">
                                <button
                                    onClick={() => navigate('/login')}
                                    className="px-4 py-2 text-blue-800 font-bold hover:bg-blue-50 rounded-lg transition-colors text-sm border border-blue-200"
                                >
                                    Login
                                </button>
                                <button
                                    onClick={() => navigate('/signup')}
                                    className="px-4 py-2 bg-gradient-to-r from-blue-700 to-indigo-800 text-white rounded-lg font-bold shadow-md hover:shadow-lg transition-all text-sm"
                                >
                                    Register
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Navigation Menu */}
                <div className="bg-slate-900 text-white/90 shadow-md">
                    <div className="container mx-auto px-4">
                        <ul className="flex flex-wrap justify-center md:justify-start gap-1 text-sm font-medium">
                            {['Home', 'About Us', 'Services', 'Cause List', 'Judgments', 'E-Filing', 'Statistics', 'Contact Us'].map((item) => (
                                <li key={item}>
                                    <button
                                        onClick={() => handleNavClick(item)}
                                        className="px-4 py-3 hover:bg-white/10 hover:text-white border-b-2 border-transparent hover:border-orange-400 transition-all font-semibold"
                                    >
                                        {item}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Modal Overlay */}
            {showModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-200">
                    <div className="bg-white rounded-xl shadow-2xl max-w-md w-full overflow-hidden transform transition-all scale-100">
                        {/* Modal Header */}
                        <div className="bg-[#1a237e] text-white px-6 py-4 flex justify-between items-center">
                            <h3 className="text-xl font-bold flex items-center gap-2">
                                <Scale size={20} className="text-orange-400" />
                                {modalContent.title}
                            </h3>
                            <button
                                onClick={() => setShowModal(false)}
                                className="text-white/80 hover:text-white hover:bg-white/10 rounded-full p-1 transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="p-6 text-slate-700 text-lg leading-relaxed">
                            {modalContent.body}
                        </div>

                        {/* Modal Footer */}
                        <div className="bg-slate-50 px-6 py-3 flex justify-end">
                            <button
                                onClick={() => setShowModal(false)}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-bold text-sm shadow-md transition-all"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default OfficialNavbar;
