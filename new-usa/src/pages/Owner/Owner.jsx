import React from "react";

const Owner = () => {
  return (
    <div className="container mx-auto p-4 font-sans text-[rgb(133,114,114)]">
      <main className="mb-8">
        <h2 className="text-3xl sm:text-4xl font-normal mb-4 text-center font-sans">
          Property Management
        </h2>
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="w-full sm:w-[70%] md:w-[60%] lg:w-[50%] border p-4 hover:bg-gray-100 duration-100 cursor-pointer">
            <button className="font-bold text-base sm:text-lg w-full text-center block">
              Tenant Screening
            </button>
          </div>
          <div className="w-full sm:w-[70%] md:w-[60%] lg:w-[50%] border p-4 hover:bg-gray-100 duration-100 cursor-pointer">
            <button className="font-bold text-base sm:text-lg w-full text-center block">
              Guarantees
            </button>
          </div>
          <div className="w-full sm:w-[70%] md:w-[60%] lg:w-[50%] border p-4 hover:bg-gray-100 duration-100 cursor-pointer">
            <button className="font-bold text-base sm:text-lg w-full text-center block">
              Maintenance
            </button>
          </div>
        </div>
      </main>
      <footer className="text-start text-sm mt-8 px-4 sm:px-6 lg:px-8 py-2">
        <p>COPYRIGHT © 2025 ASSURESPACE - ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
};

export default Owner;
