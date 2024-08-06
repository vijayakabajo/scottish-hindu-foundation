import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Herosection from "../herosection/Herosection";

const Cardpayment = () => {
  return (
    <>
      <Header />
      <Herosection
        imageUrl="/Images/Herosection/donation.png"
        heading="Donate"
        description="Home/ Donate"
      />

      {/* MAIN CONTENT */}
      <div className="flex flex-col items-center justify-center my-20 px-4 sm:px-6 lg:px-8">
        <div className="mr-0 xl:mr-64">
          <h1 className="text-2xl text-shfOrange font-montserrat font-medium mb-10">
            Enter Card Details
          </h1>
        </div>

        <div className="bg-white w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4">
          <div className="w-full font-inter flex flex-col space-y-5 text-sm">
            <div className="flex flex-col md:flex-row gap-x-4">
              <div className="flex flex-col w-full md:w-2/3 mb-4 md:mb-0">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  className="border py-1 px-1 text-sm font-base mt-1 rounded-sm"
                  type="text"
                />
              </div>
              <div className="flex flex-col w-full md:w-1/3">
                <label htmlFor="expirationdate">Expiration Date</label>
                <input
                  id="expirationdate"
                  className="border py-1 px-1 text-sm font-base mt-1 rounded-sm"
                  type="text"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-x-4">
              <div className="flex flex-col w-full md:w-2/3 mb-4 md:mb-0">
                <label htmlFor="cardnumber">Card Number</label>
                <input
                  id="cardnumber"
                  className="border py-1 px-1 text-sm font-base mt-1 rounded-sm"
                  type="text"
                />
              </div>
              <div className="flex flex-col w-full md:w-1/3">
                <label htmlFor="cvv">CVV</label>
                <input
                  id="cvv"
                  className="border py-1 px-1 text-sm font-base mt-1 rounded-sm"
                  type="text"
                />
              </div>
            </div>

            <div className="flex justify-center items-center gap-x-4 mt-6">
              <button className="text-shfOrange bg-white border hover:bg-gray-200 border-shfOrange rounded-xl px-12 py-2 text-sm font-base">
                Cancel
              </button>
              <button className="bg-shfOrange text-white hover:bg-shfPurple rounded-xl px-12 py-2 text-sm font-base">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Cardpayment;
