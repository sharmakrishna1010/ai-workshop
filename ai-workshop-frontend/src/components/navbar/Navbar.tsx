import React from "react";
const Navbar: React.FC = () => {
  return (
    <div className="text-center py-2 px-5 w-full bg-white">
      <div className="text-4xl font-logo tracking-widest">
        <span className="font-extrabold text-blue-500">A</span>
        <span className="font-extrabold text-lime-500">I</span>
        <span className="font-extrabold bg-linear-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
          -
        </span>
        <span className="font-extrabold text-green-500">W</span>
        <span className="font-extrabold text-green-400">O</span>
        <span className="font-extrabold text-orange-400">R</span>
        <span className="font-extrabold text-orange-300">K</span>
        <span className="font-extrabold text-yellow-400">S</span>
        <span className="font-extrabold text-yellow-300">H</span>
        <span className="font-extrabold text-pink-500">O</span>
        <span className="font-extrabold text-purple-500">P</span>
      </div>
    </div>
  );
};

export default Navbar;
