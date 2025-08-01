import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../db/firebase";

const SignIn = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      const user = userCredential.user;

      toast.success("Login successful!");
      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
    } catch (error) {
      toast.error("Invalid email or password.");
      console.error("Firebase SignIn Error:", error.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row font-sans bg-gradient-to-tr from-black via-[#0f0f3f] to-black text-white">
      <ToastContainer position="top-right" autoClose={2000} />

      {/* Left Panel */}
      <div className="lg:w-1/2 flex items-center justify-center py-20 px-10 bg-gradient-to-br from-black via-[#0f0f3f] to-black text-white text-center border-r border-cyan-500/20">
        <div>
          <h2 className="text-5xl font-extrabold mb-4 animate-pulse text-white">
            Hello, Friend!
          </h2>
          <p className="text-lg mb-6 text-gray-100">
            Enter your personal details and start your journey with us.
          </p>
          <Link
            to="/user/signup"
            className="inline-block px-8 py-3 border-2 border-white rounded-full font-semibold hover:bg-white hover:text-purple-800 transition-all duration-300"
          >
            SIGN UP
          </Link>
        </div>
      </div>

      {/* Right Panel */}
      <div className="lg:w-1/2 flex items-center justify-center py-16 px-6">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-md bg-[#0b0b1e] rounded-xl shadow-lg p-8 border border-cyan-500/30"
        >
          <h2 className="text-3xl font-bold text-center text-cyan-400 mb-2">
            Sign In
          </h2>
          <p className="text-center text-gray-400 mb-6">
            Use your email and password
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Email"
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black/20 text-white border border-cyan-500 rounded-lg focus:ring-2 focus:ring-cyan-400 outline-none transition-all duration-200"
                required
              />
            </div>

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                placeholder="Password"
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black/20 text-white border border-cyan-500 rounded-lg focus:ring-2 focus:ring-cyan-400 outline-none"
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer hover:text-cyan-300 transition"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </span>
            </div>

            {/* Submit Button */}
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

export default SignIn;
