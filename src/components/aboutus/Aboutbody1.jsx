const Aboutbody1 = () => {
  return (
    <div className="flex flex-col items-center justify-center my-10 mx-3 md:flex-row md:space-x-4
    sm:mx-4 sm:gap-x-8
    md:mx-10 md:my-32
    lg:mx-36">
      {/* Image Div */}
      <div className="relative w-72 h-72">
        {/* Base image */}
        <img
          src="\Images\aboutus\about-image-1-1.png"
          alt="Base"
          className="w-2/3 h-2/3 object-cover border-8 border-orange-500"
          style={{ borderColor: "rgba(251, 191, 36, 0.3)" }}
        />

        {/* Overlay image */}
        <img
          src="/Images/aboutus/about-image-1-2.jfif"
          alt="Overlay"
          className="absolute w-3/5 h-3/5 bottom-0 right-0 object-cover border-8 border-orange-500"
          style={{ borderColor: "rgba(251, 191, 36, 0.3)" }}
        />
      </div>


{/* RIGHT TEXT */}
      <div className="flex flex-col mt-7 md:mt-0 md:w-1/2 lg:w-2/3 justify-center">
        <div className="inline-flex gap-2 items-center">
          <p className="text-gray-700 text-md font-semibold">
          A journey So Far
        </p>
        <hr className="w-[50px] border-t-1 border-shfOrange" />
        </div>
        
        <h1 className="text-3xl font-bold mt-4">HINDUS IN SCOTLAND</h1>
        <p className="text-black font-bold">Welcome to the official website of the Scottish Hindu Foundation! We are thrilled to have you here.</p>
        <p className="text-gray-700 mt-3">
          Our organization is dedicated to preserving and promoting the vibrant
          tapestry of Hindu culture in Scotland.We bridge the gap between the
          Hindu community and the wider Scottish society, fostering
          understanding and cultural exchange. Through festivals, seminars,
          workshops, and educational programs, we provide opportunities for
          individuals to explore the richness of Hinduism.We also offer support
          services to empower the Hindu community and ensure their needs are
          met. Join us in celebrating diversity, fostering harmony, and
          embracing a brighter future for Scotland.
        </p>
      </div>
    </div>

  );
};

export default Aboutbody1;
