import { createContext, useState, useContext } from 'react';
import SideBar from "./SideBar";
import Navbar from "./Navbar";

const Layouts = ({ children, className, id }: any) => {
  return (
    <>
      <main className={className + ` max-w-6xl w-full min-h-screen flex mx-auto p-5`}>
        <SideBar id={id} />
        <div className="ml-20 w-full mb-20">
          <Navbar />
          {children}
        </div>
      </main>
    </>
  );
};

export default Layouts;
