import React from "react";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span className="text-xl flex flex-row">
          <FaRegCopyright className="mt-1 p-1"/> Akhilesh P S | 2024
        </span>
        <p className="text-white text-xl">
            Made with love :) <br />All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
