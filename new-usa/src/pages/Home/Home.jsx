import React from "react";

const Home = () => {
  return (
    <div className="container mx-auto p-4 font-sans">
      <main className="flex flex-col md:flex-row mb-8">
        <div className="w-full md:w-2/3">
          <video
            src="/video.mp4"
            autoPlay
            loop
            className="w-full h-auto"
          ></video>
        </div>
        <div className="w-full md:w-1/3 bg-gray-100 p-6 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4">Welcome</h1>
          <h2 className="text-4xl font-serif font-bold mb-4">
            Expert Property Management Solutions
          </h2>
          <p className="mb-4">
            Streamline your property operations with our expert services.
          </p>
          <div className="flex justify-center items-center">
            <button className="bg-transparent border border-gray-300 w-fit text-gray-500 font-bold px-6 py-4 duration-75 cursor-pointer hover:bg-gray-300">
              LEARN MORE
            </button>
          </div>
        </div>
      </main>
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <h2 className="text-lg text-[rgb(133,114,114)] text-start mb-4">
              ABOUT ASSURESPACE
            </h2>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2U2bbHDJzEpelhInIVcE_P-62Up27z-Q56Q&s"
              alt="About AssureSpace"
              className="w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
            <h1 className="text-3xl font-normal mb-4">Our Mission</h1>
            <p className="mb-4">
              At AssureSpace, our mission is to provide exceptional property
              management services that streamline operations for both commercial
              and residential properties. We aim to maximize utility and
              optimize costs, ensuring that our clients unlock the full
              potential of their real estate assets.
            </p>
            <div className="flex justify-center items-center">
              <button className="bg-transparent border border-gray-300 w-fit text-gray-500 font-bold px-6 py-4 duration-75 cursor-pointer hover:bg-gray-300">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
        <footer className="text-start text-gray-500 text-sm mt-8">
          <p>COPYRIGHT © 2025 ASSURESPACE - ALL RIGHTS RESERVED.</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
