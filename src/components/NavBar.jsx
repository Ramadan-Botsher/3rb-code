import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ toggleDarkMode }) => {
  return (
    <nav className="flex justify-between items-center p-4">
      <div>
        <Link to="/" className="text-xl font-bold">My React App</Link>
      </div>
      <div>
        <button onClick={toggleDarkMode} className="px-4 py-2 bg-primary text-white rounded">
          Toggle Dark Mode
        </button>
      </div>
    </nav>
  );
};

export default Navbar;