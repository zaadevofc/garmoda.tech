import React from "react";
import { LuMoreVertical, LuSearch } from "react-icons/lu";

const Navbar = ({ title }: any) => {
  return (
    <>
      <div className="flex flex-col w-full my-5 mb-5">
        <div className="flex font-black text-xl items-center justify-between w-full">
          <h1>Dashboard</h1>
          <LuMoreVertical />
        </div>
      </div>
    </>
  );
};

export default Navbar;
