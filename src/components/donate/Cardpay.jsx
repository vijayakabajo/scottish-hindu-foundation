import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Herosection from "../herosection/Herosection";
import Cardpayment from "../payment/Cardpayment";

const Cardpay = () => {
  return (
    <>
      <Header />
      <Herosection
        imageUrl="\Images\Herosection\donation.png"
        heading="Donate"
        description="Home/ Donate"
      />
      
      <Cardpayment />
      <Footer />
    </>
  );
};

export default Cardpay;
