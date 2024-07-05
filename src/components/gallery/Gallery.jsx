import Footer from "../footer/Footer";
import Header from "../header/Header";
import Herosection from "../herosection/Herosection";
import MasonryGallery from "./MasonryGallery";
import React from 'react';



const Gallery = () => {
  return (
    <div>
      <Header />
      <Herosection
        imageUrl="\Images\Herosection\gallery.png"
        heading="Gallery"
        description="Home/ Gallery"
      />
<div className="px-3 py-2 md:px-40 md:py-4">
      <MasonryGallery/>
    </div>
      
    

      <Footer />
    </div>
  );
};

export default Gallery;
