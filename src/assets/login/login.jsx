import React, { useState } from "react";
import { FaGoogle, FaFacebook, FaEye, FaEyeSlash } from "react-icons/fa";

const App = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Toggle password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // Toggle confirm password visibility

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password || (!isLogin && !confirmPassword)) {
      setError("Please fill in all fields.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!isLogin && password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (!/(?=.*?[A-Z])/.test(password)) {
      setError("Password must contain at least one uppercase letter.");
      return;
    }
    if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
      setError("Password must contain at least one special character (# ? ! @ $ % ^ & * -).");
      return;
    }
    if (password.length < 6) {
      setError("Password should be at least six characters long.");
      return;
    }
    setError("");

    // Log the form data
    console.log("Email:", email, "Password:", password);
    if (!isLogin) {
      console.log("Confirm Password:", confirmPassword);
    }

    // Add your login/signup logic here (e.g., API call)
  };

  return (
    <div className="flex justify-center items-center h-screen bg-cover bg-center bg-gradient-to-r from-blue-500 to-purple-500">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md backdrop-blur-sm bg-opacity-90"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          {isLogin ? "Welcome Back" : "Create an Account"}
        </h2>
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4">
            {error}
          </div>
        )}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4 relative">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"} // Toggle between "text" and "password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            placeholder="Enter your password"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 mt-7"
          >
            {showPassword ? (
              <FaEyeSlash className="w-5 h-5 text-gray-500" />
            ) : (
              <FaEye className="w-5 h-5 text-gray-500" />
            )}
          </button>
        </div>
        {!isLogin && (
          <div className="mb-6 relative">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Confirm Password
            </label>
            <input
              type={showConfirmPassword ? "text" : "password"} // Toggle between "text" and "password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              placeholder="Confirm your password"
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)} // Toggle confirm password visibility
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 mt-7"
            >
              {showConfirmPassword ? (
                <FaEyeSlash className="w-5 h-5 text-gray-500" />
              ) : (
                <FaEye className="w-5 h-5 text-gray-500" />
              )}
            </button>
          </div>
        )}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          {isLogin ? "Login" : "Sign Up"}
        </button>
        <div className="text-center mt-4">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-sm text-blue-500 hover:text-blue-700 focus:outline-none"
          >
            {isLogin
              ? "Don't have an account? Sign Up"
              : "Already have an account? Login"}
          </button>
        </div>
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>
          <div className="mt-4 flex justify-center gap-4">
            <button
              type="button"
              className="flex items-center justify-center w-12 h-12 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 transition duration-200"
            >
              <FaGoogle className="w-6 h-6 text-red-600" />
            </button>
            <button
              type="button"
              className="flex items-center justify-center w-12 h-12 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 transition duration-200"
            >
              <FaFacebook className="w-6 h-6 text-blue-600" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default App;