import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Herosection from "../herosection/Herosection";

const Success = () => {
  return (
    <div>
      <Header />
      <Herosection
        imageUrl="/Images/Herosection/donation.png"
        heading="Donate"
        description="Home/ Donate"
      />

      {/* MAIN CONTENT */}
      <div className="flex flex-col justify-center items-center w-full my-6">
        <img src="./Images/payment/Success.gif" alt="Success gif" className="h-96 mb-1" />
        <p className="font-playfair text-shfOrange text-3xl font-bold mb-3">Success!</p>
        <p className="text-md font-inter mb-6">
          Thank you for donating to Scottish Hindu Foundation
        </p>
      </div>
      <Footer/>
    </div>
  );
};

export default Success;
