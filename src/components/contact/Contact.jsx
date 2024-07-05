import React from "react";
import Contactus from "./Contactus";
import Header from "../header/Header"
import Herosection from "../herosection/Herosection"
import Footer from "../footer/Footer";

const Contact = () => {
    return (
        <>
            <Header />
            <Herosection
                imageUrl="Images/Herosection/contactus.jfif"
                heading="Contact Us"
                description="Home/ Contact Us"
            />
            <Contactus />
            <Footer />
        </>



    )
}

export default Contact;