import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";

const AdminSignIn = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const admins = JSON.parse(localStorage.getItem("admin_list")) || [];
    const token = "admin_jwt_token_2025";

    if (admins.length === 0) {
      toast.error("No admin accounts found. Please sign up first.");
      return;
    }

    const foundAdmin = admins.find(
      (admin) =>
        admin.email.toLowerCase() === formData.email.trim().toLowerCase() &&
        admin.password === formData.password
    );

    if (foundAdmin) {
      toast.success("Login Successful!");
      setTimeout(() => {
        localStorage.setItem("admin_token", token);
        navigate("/admindashboard");
      }, 1000);
    } else {
      toast.error("Invalid credentials.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row font-sans bg-gradient-to-tr from-[#0f0f3f] via-black to-[#0b0b2d] text-white">
      <ToastContainer position="top-right" autoClose={2000} />

      {/* Left Panel */}
      <div className="lg:w-1/2 flex items-center justify-center py-20 px-10 bg-[#0b0b1e] text-white text-center border-r border-cyan-500/20">
        <div>
          <h2 className="text-5xl font-extrabold mb-4 text-cyan-400 animate-pulse">
            Admin Portal
          </h2>
          <p className="text-lg mb-6 text-gray-400">
            Access the admin dashboard and manage the system efficiently.
          </p>
          <Link
            to="/admin/signup"
            className="inline-block px-8 py-3 border-2 border-cyan-400 text-cyan-400 rounded-full font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300"
          >
            SIGN UP
          </Link>
        </div>
      </div>

      {/* Right Panel */}
      <div className="lg:w-1/2 flex items-center justify-center py-16 px-6 bg-gradient-to-tr from-[#0f0f3f] via-black to-[#0b0b2d]">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md bg-[#0b0b1e] rounded-xl shadow-lg p-8 border border-cyan-500/30"
        >
          <h2 className="text-3xl font-bold text-center text-cyan-400 mb-2">
            Admin Sign In
          </h2>
          <p className="text-center text-gray-400 mb-6">
            Use your admin credentials
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Admin Email"
                required
                className="w-full px-4 py-3 bg-black/20 text-white border border-cyan-500 rounded-lg focus:ring-2 focus:ring-cyan-400 outline-none"
              />
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                required
                className="w-full px-4 py-3 bg-black/20 text-white border border-cyan-500 rounded-lg focus:ring-2 focus:ring-cyan-400 outline-none"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer hover:text-cyan-300 transition"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-full font-semibold hover:from-cyan-600 hover:to-purple-700 transition duration-300 shadow-md shadow-cyan-400/30"
            >
              SIGN IN
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminSignIn;
