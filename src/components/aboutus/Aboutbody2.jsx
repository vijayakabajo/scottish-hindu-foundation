import React from 'react';

const Aboutbody2 = () => {
  const itemData = [
    {
      img: '/Images/aboutus/about-image-3.png',
      title: 'Image 1',
    },
    {
      img: '/Images/aboutus/about-image-4.png',
      title: 'Image 2',
    },
    {
      img: '/Images/aboutus/about-image-5.png',
      title: 'Image 3',
    },
    {
      img: '/Images/aboutus/about-image-6.png',
      title: 'Image 4',
    },
  ];

  return (
    <div className="flex flex-col-reverse items-center justify-center md:flex-row md:space-x-4 sm:px-16 mt-8 pb-6">
      <div className="flex flex-col p-4 md:p-6 space-y-3 md:w-1/2">
        <p className="text-gray-700 text-sm font-semibold">Our Governance</p>
        <h1 className="text-2xl font-bold">
          Let Us Come Together<br />To Make a Difference
        </h1>
        <p className="text-gray-700 font-thin">
          The Scottish Hindu Foundation is registered as a Community Interest
          Company, is a type of legal structure in the United Kingdom that is
          specifically designed for social enterprises. CICs are businesses that
          aim to benefit the community. By registering as a CIC, the Scottish
          Hindu Foundation strengthens its position as all recognized and
          sustainable social enterprise, furthering its ability to fulfill its
          mission of promoting and preserving Hindu culture in Scotland.
        </p>
        <button className="bg-shfOrange hover:bg-shfPurple text-white font-bold py-2 px-4 w-fit rounded-full">Contact Us</button>
      </div>

      <div className="md:w-2/5">
        <div className="grid grid-cols-2 gap-2 border-8 bg-orange-200" style={{ borderColor: "rgba(251, 191, 36, 0.3)" }}>
          {itemData.map((item, index) => (
            <div key={index} className="overflow-hidden" style={{ width: '100%', paddingTop: '56.25%', position: 'relative' }}>
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Aboutbody2;
