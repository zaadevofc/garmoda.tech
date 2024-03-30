import React from "react";
import { LuLeaf } from "react-icons/lu";

const Loading = () => {
  return (
    <>
      <main className="fixed z-[999999] bg-white flex w-full justify-center items-center min-h-screen">
        <div className="flex items-center text-3xl animate-pulse gap-3">
          <LuLeaf className="fill-emerald-600" />
          <h1 className="font-black underlines underline-offset-8 decoration-2 decoration-wavy decoration-emerald-600">
            Loading...
          </h1>
        </div>
      </main>
    </>
  );
};

export default Loading;
