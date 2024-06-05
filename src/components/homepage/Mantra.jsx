// const Mantra = () => {
//   return (
//     <div className="h-96 w-full bg-orange-500 flex flex-col justify-center items-center text-white">
//       <h1 className="text-xl font-base mt-4">Mantra Of The Month</h1>
//       <div className="h-36 w-36 rounded-full overflow-hidden mt-10 hover:scale-110 transition duration-200">
//         <img className="w-full h-full object-cover" src="\Images\krishna-geeta.jpeg" alt="lord-krishna-photo" />
//       </div>
//       <div className="w-full px-64 mt-4">
//         <p className="mt-4 text-center font-thin hover:scale-125 transition duration-300">
//           "You Have The Right To Perform Your Prescribed Duties, But You Are Not
//           Entitled To The Fruits Of Your Actions. Never Consider Yourself To Be
//           The Cause Of The Results Of Your Activities, And Never Be Attached To
//           Not Doing Your Duty" ~Bhagavad Gita
//         </p>
//       </div>
//     </div>
//   );
// };
// ;
// export default Mantra;


const Mantra = () => {
  return (
    <div className="w-full bg-shfOrange flex flex-col justify-center items-center text-white py-8 px-4 space-y-6">
      <div className="inline-flex justify-center items-center space-x-2">
        <hr className="w-[60px]"/> 
        <h1 className="text-md md:text-lg font-normal">Mantra Of The Month</h1>
        <hr className="w-[60px]"/> 
      </div>
      
      <div className="h-28 w-28 shadow-orange-800 shadow-xl
       md:h-28 md:w-28 rounded-full overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="/Images/krishna-geeta.jpeg"
          alt="lord-krishna-photo"
        />
      </div>
      <div className="w-full px-8 md:px-64">
        <p className="text-center text-sm font-thin md:text-md mb-8">
          &quot;You Have The Right To Perform Your Prescribed Duties, But You Are Not
          Entitled To The Fruits Of Your Actions. Never Consider Yourself To Be
          The Cause Of The Results Of Your Activities, And Never Be Attached To
          Not Doing Your Duty&quot; <br/>~Bhagavad Gita
        </p>
      </div>
    </div>
  );
};

export default Mantra;
