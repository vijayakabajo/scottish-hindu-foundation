import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Herosection from "../herosection/Herosection";

const Echeque = () => {
  return (
    <div>
      <Header />
      <Herosection
        imageUrl="/Images/Herosection/donation.png"
        heading="Donate"
        description="Home/ Donate"
      />

      {/* MAIN CONTENT */}
      <div className="max-w-2xl mx-auto my-16 p-6 bg-white rounded-lg">
        <h2 className="text-2xl font-medium mb-4 text-shfOrange">E-Cheque</h2>
        <p className="mb-6 text-gray-700 ml-4 font-normal text-lg">
          To pay by electronic cheque, please fill out the fields below:
        </p>

        {/* FORM */}
        <form className="font-inter font-medium flex flex-col justify-center items-center mx-2 xl:mx-16">
          <div className="mb-4 w-full flex justify-between items-center">
            <label
              className="block text-gray-700 text-base mb-2 mr-2"
              htmlFor="nameOnAccount"
            >
              Name on Account:
            </label>
            <input
              type="text"
              id="nameOnAccount"
              className="shadow appearance-none text-sm border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder=""
            />
          </div>

          <div className="mb-4 w-full flex justify-between items-center">
            <label
              className="block text-gray-700 text-base mb-2 mr-2"
              htmlFor="nameOfBank"
            >
              Name of Bank:
            </label>
            <input
              type="text"
              id="nameOfBank"
              className="shadow appearance-none text-sm border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder=""
            />
          </div>

          <div className="mb-4 w-full flex justify-between items-center">
            <label
              className="block text-gray-700 text-base mb-2 mr-2"
              htmlFor="typeOfAccount"
            >
              Type of Account:
            </label>
            <select
              id="typeOfAccount"
              className="shadow appearance-none text-sm border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option>Savings</option>
              <option>Checking</option>
            </select>
          </div>

          <div className="mb-4 w-full flex justify-between items-center">
            <label
              className="block text-gray-700 text-base mb-2 mr-2"
              htmlFor="chequeNumber"
            >
              Cheque number:
            </label>
            <input
              type="text"
              id="chequeNumber"
              className="shadow appearance-none text-sm border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder=""
            />
          </div>



          {/* REST TWO */}

          <div className="inline-flex justify-between w-full">
            <div className="mb-4 w-full flex flex-col justify-between items-center">
            <input
                type="text"
                id="routingNumber"
                className="shadow appearance-none text-sm border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder=""
              />

              <label
                className="block text-gray-700 text-base mb-2 mr-2"
                htmlFor="routingNumber"
              >
                Routing number:
              </label>

            </div>

            <div className="mb-4 w-full flex flex-col justify-between items-center">

            <input
                type="text"
                id="accountNumber"
                className="shadow appearance-none text-sm border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder=""
              />

              <label
                className="block text-gray-700 text-base mb-2 mr-2"
                htmlFor="accountNumber"
              >
                Account number:
              </label>
            </div>

          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-shfOrange hover:bg-shfPurple text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Echeque;
