import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 shadow-md font-semibold">
    <ul className="flex space-x-6">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/signup">Signup</Link></li>
      <li><Link to="/worker-signup">Worker Signup</Link></li>
      <li><Link to="/admin">Admin Panel</Link></li>
      <li><Link to="/chat">Chat</Link></li>
    </ul>
  </nav>
);

export default Navbar;