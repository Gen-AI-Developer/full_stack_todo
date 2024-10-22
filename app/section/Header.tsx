import React from "react";

const Header = () => {
  return (
    <div className="sticky top-0 bg-[#1e1e1e] text-white p-4 md:p-6 lg:p-8 shadow-blue-400">
      <header className="flex justify-between items-center">
        <h1 className="text-4xl font-extrabold">
          <div className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Full Stack Todo
          </div>
        </h1>
        <div className="font-xl font-semibold flex flex-row gap-3 shadow rounded px-4 py-1 bg-[#3a3a3a]">
          <div>Show completed</div>
          <div>About Developer</div>
        </div>
      </header>
    </div>
  );
};

export default Header;
