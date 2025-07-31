import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Eye, EyeOff, ImagePlus } from "lucide-react";
import { motion } from "framer-motion";

const AdminSignUp = () => {
  const [formData, setFormData] = useState({
    adminname: "",
    role: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const masterAdminEmail = "admin@portal.com";
    const masterAdminPassword = "admin123";

    if (
      formData.email !== masterAdminEmail ||
      formData.password !== masterAdminPassword
    ) {
      toast.error("Unauthorized access. Only verified admins can sign up.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    const existingAdmins = JSON.parse(localStorage.getItem("admin_list")) || [];

    if (existingAdmins.length >= 5) {
      toast.error("Admin limit reached. Only 5 admins allowed.");
      return;
    }

    try {
      const adminData = {
        ...formData,
        profileImage: previewImage,
      };

      const updatedAdmins = [...existingAdmins, adminData];
      localStorage.setItem("admin_list", JSON.stringify(updatedAdmins));

      toast.success("Admin account created!");
      navigate("/admin/signin");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row font-sans bg-gradient-to-tr from-[#020420] via-[#0c1f36] to-[#040612]">
      {/* Left Panel */}
      <div className="lg:w-1/2 flex items-center justify-center bg-gradient-to-tr from-[#0f0f3f] via-black to-[#0b0b2d] py-20 px-10 text-center">
        <div>
          <h2 className="text-5xl font-extrabold mb-4 animate-pulse">
            Welcome Admin{formData.role ? `, ${formData.role}!` : "!"}
          </h2>
          <p className="text-lg mb-6">
            Already have access? Sign in to your admin dashboard.
          </p>
          <Link
            to="/admin/signin"
            className="inline-block px-8 py-3 border-2 border-white rounded-full font-semibold hover:bg-white hover:text-purple-800 transition-all duration-300"
          >
            ADMIN SIGN IN
          </Link>
        </div>
      </div>

      {/* Right Panel */}
      <div className="lg:w-1/2 flex items-center justify-center py-16 px-6">
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
              className="cursor-pointer text-cyan-400 hover:text-cyan-300 flex items-center gap-2 animate-bounce hover:animate-none"
            >
              <ImagePlus size={22} />
              Upload Profile Image
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
                className="mt-3 w-20 h-20 object-cover rounded-full shadow border-2 border-cyan-500"
              />
            )}
          </div>

          <h2 className="text-3xl font-bold text-center text-cyan-400 mb-2">
            Admin Sign Up
          </h2>
          <p className="text-center text-gray-400 mb-6">
            Only authorized personnel allowed
          </p>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <input
              type="text"
              name="adminname"
              value={formData.adminname}
              onChange={handleChange}
              placeholder="Admin Name"
              required
              className="w-full px-4 py-3 bg-black/20 text-white border border-cyan-500 rounded-lg focus:ring-2 focus:ring-cyan-400 outline-none"
            />

            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              placeholder="Admin Role (e.g. SuperAdmin)"
              className="w-full px-4 py-3 bg-black/20 text-white border border-cyan-500 rounded-lg focus:ring-2 focus:ring-cyan-400 outline-none"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full px-4 py-3 bg-black/20 text-white border border-cyan-500 rounded-lg focus:ring-2 focus:ring-cyan-400 outline-none"
            />

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword.password ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                required
                className="w-full px-4 py-3 bg-black/20 text-white border border-cyan-500 rounded-lg focus:ring-2 focus:ring-cyan-400 outline-none"
              />
              <span
                onClick={() =>
                  setShowPassword((prev) => ({
                    ...prev,
                    password: !prev.password,
                  }))
                }
                className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-400 hover:text-cyan-300"
              >
                {showPassword.password ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </span>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <input
                type={showPassword.confirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                required
                className="w-full px-4 py-3 bg-black/20 text-white border border-cyan-500 rounded-lg focus:ring-2 focus:ring-cyan-400 outline-none"
              />
              <span
                onClick={() =>
                  setShowPassword((prev) => ({
                    ...prev,
                    confirmPassword: !prev.confirmPassword,
                  }))
                }
                className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-400 hover:text-cyan-300"
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
              SIGN UP AS ADMIN
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminSignUp;
