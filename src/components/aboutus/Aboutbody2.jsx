const Aboutbody2 = () => {
  return (
    <div className="flex flex-col-reverse items-center justify-center md:flex-row md:space-x-4 sm:px-32 mt-16">
      <div className="flex flex-col p-4 md:p-8 space-y-3">
        <p className="text-gray-700 text-sm font-semibold">Our Governance</p>
        <h1 className="text-3xl font-bold">
          Let Us Come Together<br/>To Make a Difference
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
        <button className="bg-shfOrange hover:bg-shfPurple  text-white font-bold py-2 px-4 w-fit rounded-full">Contact Us</button>

      </div>

      <img
        className="object-cover w-full md:w-1/2 rounded-lg md:rounded-none"
        src="\Images\aboutus\about-image-3456.png"
        alt="pic"
      />
    
    </div>
  );
};

export default Aboutbody2;
