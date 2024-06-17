import React from "react";
import {FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <div className="shadow bg-white p-6 rounded-lg md:m-12 m-2">
      <h1 className="text-xl font-semibold">Contact Details:</h1>

      <div className="mt-4" >
        <div className="flex flex-col md:flex-row gap-2">
          <p className="tracking-wide flex items-center gap-2 font-medium"> <SiGmail className="text-red-700" /> Email: </p>
          <a className="text-blue-500 block" href="mailto:apuchandradas5568@gmail.com">
            apuchandradas5568@gmail.com
          </a>
        </div>
        <div className="flex mt-2 flex-col md:flex-row gap-2">
          <p className="tracking-wide flex items-center gap-2  font-medium"> <FaWhatsapp className="text-green-600" />
          WhatsApp: </p>
          <a className="text-blue-500" target="_blank" href="https://wa.me/917046250401">
            +91 7046250401 </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
