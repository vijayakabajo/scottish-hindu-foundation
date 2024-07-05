import Footer from "../footer/Footer";
import Header from "../header/Header";
import Herosection from "../herosection/Herosection";
import Introcard from "./Introcard";
import Donationscards from "./Donationscards";
import Bankdetails from "./Bankdetails";
import React from 'react';

const Donate = () => {
  return (
    <>
      <Header />
      <Herosection
        imageUrl="\Images\Herosection\donation.png"
        heading="Donate"
        description="Home/ Donate"
      />
      {/* Body Start */}
{/* part1 */}
      <div className="flex items-center justify-center my-5 md:my-20 w-full">
        <Introcard />
      </div>

{/* part2 */}
      <div className="mt-16 mb-4">
        <h1 className="text-4xl font-bold text-center text-shfOrange my-6 underline md:no-underline">Make An Impact</h1>
        {/* CArds */}
        <div className="px-4 w-full flex flex-col justify-center items-center space-y-16 
        md:inline-flex md:flex-row sm:space-x-6 lg:space-x-16 sm:px-8 lg:px-32 md:space-y-0">
          <Donationscards
            src="/Images/donate/card-2-1.png"
            title="Food Donation"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
          />
          <Donationscards
            src="/Images/donate/card-2-2.png"
            title="Donation to an Orphanage"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
          />
          <Donationscards
            src="/Images/donate/card-2-3.png"
            title="Donation for education"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
          />
        </div>
      </div>

      {/* part3 */}

      <div className="Payment px-4 mt-16 mb-8 md:px-20 w-full">
        <Bankdetails/>
      </div>

      {/* Body End */}
      <Footer />
    </>
  );
};

export default Donate;
