import React from "react";

import { useStore } from "counterStore/counterStore";

const Footer = (props) => {
  console.log("footer-rendered");
  
  const {counter, inc} = useStore();

  return (
    <div className="p-5 bg-blue-500 text-white text-3xl font-bold">
    <span>Footer By Akam Super Platform Team </span>
    <br />
    <button 
      className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 mt-4 border border-gray-400 rounded shadow" 
      onClick={inc}
      >
        Increase
      </button>
    </div>
  );
};

export default Footer;
