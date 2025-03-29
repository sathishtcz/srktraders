import React from 'react'
import { useNavigate } from 'react-router-dom';

function Locateus() {
  const navigate = useNavigate();
  return (
    <>
      <div className="relative bg-cover bg-center  flex items-center justify-center "
        style={{ backgroundImage: "url('/assets/images/Locateus/locate.png')" }}>

        <div className="relative z-10 flex flex-col items-center justify-center px-4 max-w-5xl mx-auto pt-15 pb-10">
          <h2 className="alice-regular text-2xl sm:text-2xl md:text-3xl lg:text-[35px] text-white mb-6">LOCATE US</h2>
          <p className='text-justify   text-white  leading-relaxed sm:leading-[24px] md:leading-[28px] lg:leading-[32px]  poppins-medium text-base sm:text-base md:text-base lg:text-[18px]  mb-10'>
            Locate Us Easily On Google Maps And Take A 360° Virtual Tour To Experience Our Store From Anywhere. Explore Our Extensive Collection Of Premium Products Right From The Comfort Of Your Home With An Immersive, Interactive Online Experience — Bringing Our Showroom To You!
          </p>
          <div className="flex space-x-4">

            <button
              onClick={() => window.open("https://360views.lakshmiceramics.in/?ele=coimbatore", "_blank")}
              className="bg-[#00A8FF] text-white py-3 sm:py-2 md:py-3 px-2 sm:px-4 md:px-6 rounded-lg text-sm sm:text-sm md:text-base lg:text-[16px] poppins-regular hover:bg-[#0088cc] transition-colors cursor-pointer flex items-center"
            >
              <span>EXPERIENCE VIRTUALLY</span>
              <img src="/assets/images/Locateus/360-view.png" alt="VR Icon" className="ml-2 w-5 h-5" />
            </button>
{/* 
            <button onClick={() => navigate('/visitus')} className="bg-[#00A8FF] text-white py-3 sm:py-2 md:py-3 px-2 sm:px-4 md:px-6 rounded-lg text-sm sm:text-sm md:text-base lg:text-[16px] poppins-regular hover:bg-[#0088cc] transition-colors cursor-pointer flex items-center">
              <span>VISIT US</span>
              <img src="/assets/images/Locateus/location.png" alt="Location Icon" className="ml-2 w-5 h-5" />
            </button> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Locateus;


// import React from 'react';

// function Locateus() {
//   return (
//     <>
//       <div
//         className="relative bg-cover bg-center flex items-center justify-center h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] 2xl:h-[500px]"
//         style={{ backgroundImage: "url('/assets/images/Locateus/locate.jpg')" }}
//       >
//         {/* Overlay (optional, if needed to match the design) */}
//         <div className="absolute inset-0 bg-[#001C2B] opacity-50"></div>

//         <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 max-w-5xl mx-auto pt-8 sm:pt-10 md:pt-12 lg:pt-10 pb-8 sm:pb-10 md:pb-12 lg:pb-10">
//           {/* Heading */}
//           <h2 className="alice-regular text-2xl sm:text-3xl md:text-[36px] lg:text-[40px] text-white mb-4 sm:mb-6">
//             LOCATE US
//           </h2>

//           {/* Description */}
//           <p className="text-center text-white leading-relaxed sm:leading-[28px] md:leading-[32px] text-sm sm:text-base md:text-lg lg:text-[18px] poppins-medium mb-6 sm:mb-8 md:mb-10">
//             Locate Us Easily On Google Maps And Take A 360° Virtual Tour To Experience Our Store From Anywhere. Explore Our Extensive Collection Of Premium Products Right From The Comfort Of Your Home With An Immersive, Interactive Online Experience — Bringing Our Showroom To You!
//           </p>

//           {/* Buttons */}
//           <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
//             <button className="bg-[#00A8FF] text-white py-2 sm:py-3 px-4 sm:px-6 rounded flex items-center justify-center text-xs sm:text-sm md:text-base w-full sm:w-auto">
//               <span>EXPERIENCE VIRTUALLY</span>
//               <img src="/assets/images/Locateus/360-view.png" alt="VR Icon" className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
//             </button>
//             <button className="bg-[#00A8FF] text-white py-2 sm:py-3 px-4 sm:px-6 rounded flex items-center justify-center text-xs sm:text-sm md:text-base w-full sm:w-auto">
//               <span>VISIT US</span>
//               <img src="/assets/images/Locateus/location.png" alt="Location Icon" className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Locateus;