
import React from 'react';
import Logo from "../header/Logo";
import Subscribe from "./Subscribe";
import Footercontent from "./Footercontent";

const Footer = () => {
  return (
    <div className="bg-shfPurple w-full flex flex-col items-center justify-center gap-y-8 py-8 sm:flex-row sm:justify-around lg:pt-8 lg:pb-">
      <div className="hidden lg:block w-full justify-center">
        <div className="bg-white flex justify-center items-center w-1/2 ml-16">
          <Logo logoUrl="\Images\fullLogoSHF.png" />
        </div>
      </div> 
      <Footercontent />
      <Subscribe />
    </div>
  );
};

export default Footer;
