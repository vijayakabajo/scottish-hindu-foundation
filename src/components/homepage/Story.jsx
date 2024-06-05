import { Link } from "react-router-dom";

const Story = () => {
  return (
    <div className="flex flex-col items-center justify-center my-12 mx-4 md:flex-row md:space-x-4
    sm:mx-8 sm:my-32 sm:gap-x-8
    md:mx-16
    lg:mx-32">
      {/* Image Div */}
      <div className="relative w-72 h-72">
        {/* Base image */}
        <img
          src="/Images/homepage/card-1-1.jfif"
          alt="Base"
          className="w-2/3 h-2/3 object-cover border-8 border-orange-500"
          style={{ borderColor: "rgba(251, 191, 36, 0.3)" }}
        />

        {/* Overlay image */}
        <img
          src="/Images/homepage/card-1-2.jfif"
          alt="Overlay"
          className="absolute w-3/5 h-3/5 bottom-0 right-0 object-cover border-8 border-orange-500"
          style={{ borderColor: "rgba(251, 191, 36, 0.3)" }}
        />
      </div>


{/* RIGHT TEXT */}
      <div className="flex flex-col mt-7 md:mt-0 md:w-1/2 lg:w-2/3 justify-center">
        <hr className="w-[50px] border-t-1 border-shfOrange" />
        <p className="text-gray-700 text-md font-semibold">
          A journey, A Story
        </p>
        <h1 className="text-3xl font-bold">HINDUS IN SCOTLAND</h1>
        <p className="text-gray-700 mt-3">
          Our Organisation Is Dedicated To Preserving And Promoting The Vibrant
          Tapestry Of Hindu Culture In Scotland We Bridge The Gap Between The
          Hindu Community And The Wider Scottish Society, Fostering
          Understanding And Cultural Exchange. The Convergence Of Scottish Ethos
          And Hinduism Reflects A Fascinating Interplay Between Two Rich And
          Diverse Cultural Traditions, Scottish Ethos, Characterized By
          Resilience, Tenacity, And A Deep Sense Of Community, Finds Resonance
          With The Profound Spiritual Teachings And Vibrant Rituals Of Hinduism.
          This Unique Amalgamation Creates A Harmonious Tapestry, Blending
          Elements Of Heritage, Spirituality And Collective Identity.
        </p>

        {/* Button */}
        <Link to="/about">
          <button className="bg-shfOrange hover:bg-shfPurple font-base text-white py-2 px-4 mt-4 focus:outline-none w-fit rounded-full">
            More About Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Story;
