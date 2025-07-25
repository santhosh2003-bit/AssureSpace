import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Contact = () => {
  return (
    <div className="container mx-auto p-4 sm:p-6">
      <div className="mt-6 flex flex-col items-center gap-4 mb-6 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold">AssureSpace</h1>
        <p className="text-lg sm:text-xl">
          201, Vanayu’s Grandiflora, Kompally, Hyderabad, Telangana, India
        </p>
        <span className="text-lg sm:text-xl">+91 7816071471</span>
      </div>
      <MapContainer
        center={null}
        zoom={13}
        style={{ height: "300px", width: "100%" }}
        className="mb-6 rounded-lg shadow-md"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
      <h1 className="text-start text-2xl sm:text-3xl font-semibold mb-6">
        Contact Us
      </h1>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-2/3">
          <p className="mb-4 text-start text-base sm:text-lg">
            Complete the information for a customized proposal to meet the needs
            of your association.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <form className="space-y-4 w-full sm:w-2/3">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm sm:text-base font-medium text-gray-700"
                >
                  Name*
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 text-sm sm:text-base"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm sm:text-base font-medium text-gray-700"
                >
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 text-sm sm:text-base"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm sm:text-base font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 text-sm sm:text-base"
                  rows="4"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 text-sm sm:text-base"
              >
                SEND
              </button>
            </form>
            <div className="w-full sm:w-1/3 mt-4 sm:mt-0">
              <h2 className="text-xl sm:text-2xl font-semibold mb-2">Hours</h2>
              <p className="text-gray-600 text-base sm:text-lg">Today Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
