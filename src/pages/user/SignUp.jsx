import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Eye, EyeOff, ImagePlus } from "lucide-react";
import { motion } from "framer-motion";
import { auth } from "../../../db/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    nickname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [profileImage, setProfileImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreviewImage(reader.result);
      reader.readAsDataURL(file);
    } else {
      setPreviewImage(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    try {
      // Create user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      const user = userCredential.user;

      // Set display name and profile photo
      await updateProfile(user, {
        displayName: formData.nickname || formData.username,
        photoURL: previewImage || null,
      });

      toast.success("Signup successful!");
      navigate("/user/signin");
    } catch (error) {
      console.error("Signup Error:", error.message);
      toast.error(error.message);
    }
  };


  return (
    <div className="min-h-screen flex flex-col lg:flex-row font-sans">
      {/* Left Panel */}
      <div className="lg:w-1/2 flex items-center justify-center bg-gradient-to-br from-black via-[#0f0f3f] to-black text-white py-20 px-10 text-center border-r border-cyan-500/20">
        <div>
          <h2 className="text-5xl font-extrabold mb-4 animate-pulse text-cyan-400">
            Welcome Back
            {formData.nickname ? `, ${formData.nickname}!` : " User!"}
          </h2>
          <p className="text-lg mb-6 text-gray-400">
            To keep connected with us, please login with your personal info.
          </p>
          <Link
            to="/user/signin"
            className="inline-block px-8 py-3 border-2 border-cyan-400 rounded-full font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300"
          >
            SIGN IN
          </Link>
        </div>
      </div>

      {/* Right Panel */}
      <div className="lg:w-1/2 flex items-center justify-center py-16 px-6 bg-gradient-to-tr from-[#0f0f3f] via-black to-[#0b0b2d] text-white">
        <motion.div
          initial={{ opacity: 0, x: -100 }} // Slide from left
          animate={{ opacity: 1, x: 0 }} // To center
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-md bg-[#0b0b1e] rounded-xl shadow-lg p-8 border border-cyan-500/30"
        >
          {/* Upload Image */}
          <div className="flex flex-col items-center mb-4">
            <label
              htmlFor="profileImage"
              className="cursor-pointer text-cyan-400 hover:text-cyan-200 flex items-center gap-2 animate-bounce hover:animate-none transition-all duration-500"
              title="Upload Profile Image"
            >
              <ImagePlus size={24} />
            </label>
            <input
              id="profileImage"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
            {previewImage && (
              <img
                src={previewImage}
                alt="Preview"
                className="mt-3 w-20 h-20 object-cover rounded-full shadow border border-cyan-500/30"
              />
            )}
          </div>

          <h2 className="text-3xl font-bold text-center text-cyan-400 mb-2">
            Create Account
          </h2>
          <p className="text-center text-gray-400 mb-6">
            Or use your email for registration
          </p>

          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Fields */}
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              className="w-full px-4 py-3 bg-black/20 text-white border border-cyan-500 rounded-lg focus:ring-2 focus:ring-cyan-400 outline-none"
              required
            />
            <input
              type="text"
              name="nickname"
              value={formData.nickname}
              onChange={handleChange}
              placeholder="Nickname"
              className="w-full px-4 py-3 bg-black/20 text-white border border-cyan-500 rounded-lg focus:ring-2 focus:ring-cyan-400 outline-none"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-4 py-3 bg-black/20 text-white border border-cyan-500 rounded-lg focus:ring-2 focus:ring-cyan-400 outline-none"
              required
            />
            <div className="relative">
              <input
                type={showPassword.password ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full px-4 py-3 bg-black/20 text-white border border-cyan-500 rounded-lg focus:ring-2 focus:ring-cyan-400 outline-none"
                required
              />
              <span
                onClick={() =>
                  setShowPassword((prev) => ({
                    ...prev,
                    password: !prev.password,
                  }))
                }
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer hover:text-cyan-300 transition"
              >
                {showPassword.password ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </span>
            </div>
            <div className="relative">
              <input
                type={showPassword.confirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                className="w-full px-4 py-3 bg-black/20 text-white border border-cyan-500 rounded-lg focus:ring-2 focus:ring-cyan-400 outline-none"
                required
              />
              <span
                onClick={() =>
                  setShowPassword((prev) => ({
                    ...prev,
                    confirmPassword: !prev.confirmPassword,
                  }))
                }
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer hover:text-cyan-300 transition"
              >
                {showPassword.confirmPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </span>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-full font-semibold hover:from-cyan-600 hover:to-purple-700 transition duration-300 shadow-md shadow-cyan-400/30"
            >
              SIGN UP
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default SignUp;
