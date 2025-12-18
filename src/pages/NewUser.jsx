import { useState } from "react";
import { useUsers } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { UserPlus, User, Mail, Shield, Key } from "lucide-react";

export default function NewUser() {
    const { addUser } = useUsers();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        id: `user${Date.now()}`,
        name: "",
        email: "",
        role: "Person", // Default
        password: "", // In a real app, this might be auto-generated or handled differently
    });

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!form.name || !form.email || !form.password) {
            alert("Please fill in all required fields!");
            return;
        }

        addUser(form);
        navigate("/users", { state: { message: "New user registered successfully!" } });
    }

    return (
        <div className="min-h-screen bg-gray-100 p-10 flex justify-center">
            <div className="bg-white shadow-xl rounded-lg border border-gray-300 w-full max-w-2xl">

                {/* HEADER */}
                <div className="bg-indigo-600 text-white p-6 flex items-center gap-3">
                    <UserPlus size={32} />
                    <h1 className="text-3xl font-bold">Register New User</h1>
                </div>

                {/* FORM STARTS */}
                <form onSubmit={handleSubmit} className="p-8 space-y-6">

                    {/* User Details */}
                    <div>
                        <h2 className="text-xl font-semibold text-indigo-700 mb-4">User Details</h2>

                        <div className="space-y-4">

                            {/* Name */}
                            <div className="flex items-center gap-2 border p-3 rounded-lg shadow bg-gray-50 focus-within:ring-2 ring-indigo-200">
                                <User size={18} className="text-indigo-600" />
                                <input
                                    name="name"
                                    placeholder="Full Name"
                                    onChange={handleChange}
                                    className="w-full bg-transparent outline-none text-gray-700"
                                    required
                                />
                            </div>

                            {/* Email */}
                            <div className="flex items-center gap-2 border p-3 rounded-lg shadow bg-gray-50 focus-within:ring-2 ring-indigo-200">
                                <Mail size={18} className="text-indigo-600" />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    onChange={handleChange}
                                    className="w-full bg-transparent outline-none text-gray-700"
                                    required
                                />
                            </div>

                            {/* Password */}
                            <div className="flex items-center gap-2 border p-3 rounded-lg shadow bg-gray-50 focus-within:ring-2 ring-indigo-200">
                                <Key size={18} className="text-indigo-600" />
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    onChange={handleChange}
                                    className="w-full bg-transparent outline-none text-gray-700"
                                    required
                                />
                            </div>

                            {/* Role */}
                            <div className="flex items-center gap-2 border p-3 rounded-lg shadow bg-gray-50 focus-within:ring-2 ring-indigo-200">
                                <Shield size={18} className="text-indigo-600" />
                                <select
                                    name="role"
                                    onChange={handleChange}
                                    className="w-full bg-transparent outline-none text-gray-700"
                                >
                                    <option value="Person">Person (Client)</option>
                                    <option value="Lawyer">Lawyer</option>
                                    <option value="Judge">Judge</option>
                                    <option value="Admin">Admin</option>
                                </select>
                            </div>

                        </div>
                    </div>

                    {/* SUBMIT BUTTON */}
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-3 rounded-lg text-lg font-bold shadow hover:bg-indigo-700 transition transform hover:-translate-y-0.5"
                    >
                        Create User Account
                    </button>

                </form>
            </div>
        </div>
    );
}
