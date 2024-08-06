import React from "react";
import Payment from "../payment/Payment";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Herosection from "../herosection/Herosection";

const Paymentpage = () => {
  return (
    <>
      <Header />
      <Herosection
        imageUrl="\Images\Herosection\donation.png"
        heading="Donate"
        description="Home/ Donate"
      />
      <div className="flex-col justify-center items-center">
        <h1 className="bg-shfOrange flex items-center justify-center text-3xl font-bold h-16 w-full text-white self-center">Donation For Food</h1>
      </div>
      <Payment />
      <Footer />
    </>
  );
};

export default Paymentpage;
