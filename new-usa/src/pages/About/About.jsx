import React from "react";

const About = () => {
  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8 font-sans text-start text-[rgb(133,114,114)]">
      <main className="  mb-8">
        <h2 className="text-lg sm:text-xl lg:text-2xl text-start text-gray-500 mb-4">
          MEET OUR FOUNDER
        </h2>
        <div className="w-full flex flex-col items-center justify-center ">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Anil Reddy Pola
          </h1>
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8fDA%3D"
            alt="Anil Reddy Pola"
            className="w-32 sm:w-40 lg:w-48 h-32 sm:h-40 lg:h-48 rounded-full mb-4 object-cover"
          />
        </div>
        <p className="mb-4 text-sm sm:text-base lg:text-lg">
          With a Master’s degree in Information Systems and over a decade of
          hands-on experience managing retail and food businesses, I bring a
          unique blend of technical expertise, operational efficiency, and
          customer-centric focus to the property management industry. My
          background in running fast-paced businesses has honed my ability to
          manage complex systems, optimize processes, and deliver excellent
          service under pressure—skills that are directly transferable to
          managing properties effectively.
        </p>
        <p className="mb-4 text-sm sm:text-base lg:text-lg">
          Throughout my career, I have worked in high-demand environments, where
          I was responsible for managing resources, overseeing teams, and
          ensuring timely maintenance and repairs, coordinating with vendors,
          and managing upkeep schedules.
        </p>
        <ul className="text-left list-disc pl-5 mb-4 text-sm sm:text-base lg:text-lg">
          <li>
            <span className="font-bold">
              Property Maintenance & Vendor Coordination:
            </span>{" "}
            Ensuring timely maintenance and repairs, coordinating with vendors,
            and managing upkeep schedules.
          </li>
          <li>
            <span className="font-bold">
              Tech-Savvy & Process Optimization:
            </span>{" "}
            Utilizing technology to enhance operational efficiency, from digital
            lease management to automated property monitoring.
          </li>
          <li>
            <span className="font-bold">Leadership & Team Management:</span>{" "}
            Leading teams to achieve business goals, managing employee
            performance, and fostering a collaborative environment.
          </li>
        </ul>
        <p className="mb-4 text-sm sm:text-base lg:text-lg">
          I am now focused on leveraging my diverse background to drive
          operational success in property management, contributing to the growth
          and profitability of real estate assets, and ensuring that all
          stakeholders enjoy an exceptional experience.
        </p>
        <p className="mb-4 text-sm sm:text-base lg:text-lg">
          At AssureSpace, we believe in providing our clients with personalized
          service that meets their unique needs. We take the time to understand
          our clients’ goals and work closely with them to develop a customized
          property management plan that meets those goals.
        </p>
      </main>
      <footer className="text-start text-gray-500 text-sm mt-8 px-4 sm:px-6 lg:px-8 py-2">
        <p>COPYRIGHT © 2025 ASSURESPACE - ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
};

export default About;
