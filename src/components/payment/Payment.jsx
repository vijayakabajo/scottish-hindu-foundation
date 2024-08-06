import React, { useState } from "react";
import { Link } from "react-router-dom";

const Payment = () => {
  const [selectedAmount, setSelectedAmount] = useState(100);
  const [customAmount, setCustomAmount] = useState("");

  const handleAmountClick = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (event) => {
    const value = event.target.value;
    setCustomAmount(value);
    setSelectedAmount(value);
  };

  return (
    <div className="bg-white-100 min-h-screen">
      <div className="container mx-auto p-4">
        <div
          className="bg-white border border-gray-500 w-full h-auto mt-4 mx-auto rounded-md shadow-md p-4"
          style={{ maxWidth: "800px" }}
        >
          <div className="px-4 sm:px-8 md:px-20">
            <div className="border border-orange-500 rounded-md mb-8">
              <div className="flex items-center">
                <div className="flex items-center bg-orange-500 p-2 rounded-md">
                  <span className="text-white font-bold mr-2"></span>
                  <select className="bg-orange-500 text-white font-bold focus:outline-none">
                    <option value="USD">$ </option>
                    <option value="INR">₹ </option>
                    <option value="POUND">£ </option>
                    <option value="EURO"> € </option>
                  </select>
                </div>
                <div className="text-gray-700 font-bold ml-4">
                  <span>{selectedAmount}</span>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {[10, 25, 50, 75].map((amount) => (
                  <button
                    key={amount}
                    onClick={() => handleAmountClick(amount)}
                    className={`border border-gray-300 p-4 rounded-md ${selectedAmount == amount ? "bg-orange-500 text-white" : "text-gray-700"} font-bold cursor-pointer`}
                  >
                    ${amount}
                  </button>
                ))}
                <input
                  type="text"
                  placeholder="Custom Input"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                  className="border border-gray-300 p-4 rounded-md text-gray-700 font-bold focus:outline-none focus:border-orange-500"
                />
              </div>
            </div>

            <div className="px-4 sm:px-8 md:px-16">
              <h1 className="text-orange-500 font-bold text-2xl md:text-3xl mb-4">
                Personal Info
              </h1>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Enter your name *"
                  className="w-full p-2 rounded-md text-gray-700 bg-gray-100 placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                  required
                />
                <input
                  type="text"
                  placeholder="Phone number *"
                  className="w-full p-2 rounded-md text-gray-700 bg-gray-100 placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                  required
                />
                <input
                  type="email"
                  placeholder="Email address *"
                  className="w-full p-2 rounded-md text-gray-700 bg-gray-100 placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                  required
                />
              </div>

              <div className="bg-white mt-8">
                <h2 className="text-orange-500 font-bold text-2xl md:text-3xl mt-8 mb-2">
                  Payment Method
                </h2>
                <p>Choose Your Payment Method</p>
                <div className="space-y-4 mt-4">
                  <div>
                    <Link to="/cardpayment">
                      <div className="border border-gray-300 p-4 rounded-md flex items-center justify-center cursor-pointer hover:border-orange-500">
                        <img
                          src="./Images/payment/Visa.png"
                          alt="Visa"
                          className="h-6 mr-2"
                        />
                        <span className="text-gray-700"></span>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link to="/paypal">
                      <div className="border border-gray-300 p-4 rounded-md flex items-center justify-center cursor-pointer hover:border-orange-500">
                        <img
                          src="./Images/payment/Paypal.png"
                          alt="PayPal"
                          className="h-6 mr-2"
                        />
                        <span className="text-gray-700"></span>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link to="/echeque">
                      <div className="border border-gray-300 p-4 rounded-md flex items-center justify-center cursor-pointer hover:border-orange-500">
                        <span className="text-gray-700 font-bold">
                          E-cheque
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="flex flex-col md:flex-row">
                <div className="bg-orange-500 text-white p-4 rounded-md md:rounded-l-md w-1/2 md:w-12/5">
                  <span className="font-bold">Payment Total</span>
                </div>
                <div className="bg-white border border-orange-500 text-gray-700 p-4 rounded-md md:rounded-r-md w-full md:w-10/12 flex justify-left items-center">
                  <span>{selectedAmount}</span>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button className="bg-orange-500 text-white p-4 rounded-md w-full md:w-64">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
