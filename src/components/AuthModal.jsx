import React, { useState } from "react";
import { MdCancel } from "react-icons/md";
import { toast } from "react-toastify";

function AuthModal({ onClose, onLogin }) {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      toast.error("Username & password required");
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];

    if (!isLogin) {
      const exists = users.find((u) => u.username === username);
      if (exists) {
        toast.error("User already exists");
        return;
      }

      const newUser = { username, email, password };
      localStorage.setItem('users', JSON.stringify([...users, newUser]));
      localStorage.setItem('user', JSON.stringify(newUser));
      toast.success("Signup successful!");
      onLogin(username);
      onClose();
    } else {
      const found = users.find((u) => u.username === username && u.password === password);
      if (!found) {
        toast.error("Invalid username or password");
        return;
      }

      localStorage.setItem('user', JSON.stringify(found));
      toast.success("Logged in successfully!");
      onLogin(username);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 px-4">
      <div className="bg-red-100 p-6 rounded-xl shadow-lg w-full max-w-sm relative">
        <MdCancel
          onClick={onClose}
          className="absolute top-3 right-3 text-[30px] cursor-pointer transition-colors duration-300 hover:text-red-600"
        />
        <h5 className="text-center text-[28px] font-bold mb-4">
          {isLogin ? "LOGIN" : "SIGNUP"}
        </h5>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {!isLogin && (
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          )}
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-black rounded-md py-2 text-white transition duration-300 hover:bg-red-600"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-600 hover:underline font-medium"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}

export default AuthModal;
