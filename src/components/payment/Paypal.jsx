import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Herosection from "../herosection/Herosection";

const Paypal = () => {
  return (
    <>
      <Header />
      <Herosection
        imageUrl="/Images/Herosection/donation.png"
        heading="Donate"
        description="Home/ Donate"
      />

      {/* MAIN CONTENT */}

      <div className="bg-white rounded-lg w-96 mx-auto my-16">
        <img
          src="./Images/payment/Paypal.png"
          alt="PayPal Logo"
          className="h-7 mb-6"
        />
        <hr className="mb-4 bg-gray-800 border-1" />
        <h2 className="text-2xl font-medium mb-6 text-shfOrange text-center font-montserrat">
          Choose a way to pay
        </h2>



        <div className="space-y-8 px-8 font-inter">
          <label className="flex items-center space-x-3">
            <input
              type="radio"
              name="payment"
              className="form-radio h-4 w-4 text-blue-500"
            />
            <img
              src="./Images/payment/Visa.png"
              alt="PayPal Logo"
              className="h-5 mr-2"
            />
            <span className="text-base">VISA Debit/Credit card</span>
          </label>
          <label className="flex items-center space-x-3">
            <input
              type="radio"
              name="payment"
              className="form-radio h-4 w-4 text-blue-500"
            />

            <div className="flex flex-col">
              <div className="text-base flex items-center">
                <img
                  src="./Images/payment/Paypal.png"
                  alt="PayPal Logo"
                  className="h-7 mr-2"
                />
                Wallet/Balance
                
              </div>
              <div className="text-base text-gray-500"> <span className="text-black">$200</span> Available</div>
            </div>
          
          
          </label>
          <div className="text-black flex items-center cursor-pointer">
            <span className="text-3xl text-blue-500">+</span>
            <span className="ml-2 text-lg">
              Use a different card
            </span>
          </div>
        </div>

        {/* BUTTON */}
        <div className="flex justify-center">
          <button className="mt-6 bg-shfOrange text-white py-3 px-12 rounded-full text-sm hover:bg-shfPurple">
            Next
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Paypal;
