import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-blue-500  top-0 left-0 right-0 flex items-center h-16 justify-around ">
      <div className="flex space-x-6">
        <Link to="/" className="text-white hover:text-gray-200">Home</Link>
        <Link to="/startImages" className="text-white hover:text-gray-200">Star Images</Link>
      </div>
    </nav>
  );
};

export default NavBar;
