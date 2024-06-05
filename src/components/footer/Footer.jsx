

import Logo from "../header/Logo";
import Subscribe from "./Subscribe";
import Footercontent from "./Footercontent";

const Footer = () => {
  return (
    <div className="bg-shfPurple w-full flex flex-col items-center justify-center space-y-6 py-4 md:flex-row md:justify-between space-x-16 md:space-x-4 md:py-12 md:pb-32">
      <div className="hidden md:block w-full justify-center">
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
