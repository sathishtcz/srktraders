import React from 'react';
import { Link } from 'react-router-dom';
import collage from '/assets/images/About/collage.png'
import consultation from '/assets/images/About/consultation.png'
import selection from '/assets/images/About/selection.png'
import handover from '/assets/images/About/handover.png'
import Rating from '/assets/images/About/Rating.png'
import Quality from '/assets/images/About/Quality.png'
import Checkmark from '/assets/images/About/Checkmark.png'
import Man from '/assets/images/About/Man.png'
import showroom from '/assets/images/About/showroom.png'
import CountUp from 'react-countup';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


const About = () => {

  const navigate = useNavigate();
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
        const element = document.querySelector(hash);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }
}, []);
  return (
    <>
      <div
        className="relative bg-cover bg-center flex flex-col items-center justify-around h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] 2xl:h-[450px]"
        style={{ backgroundImage: "url('/assets/images/About/Banner.png')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#001C2B] opacity-50"></div>
        <div className='lg:block hidden'></div>
   

        {/* Centered Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          {/* Title */}
          <h1 className="alice-regular text-3xl sm:text-4xl md:text-[40px] text-white">
            About Us
          </h1>

          {/* Breadcrumb */}
          <nav className="mt-2 sm:mt-4">
            <ol className="flex space-x-2 text-white text-sm sm:text-base poppins-light">
              <li>
                <Link to="/" className="hover:text-[#00A8FF] text-[18px]">
                  Home
                </Link>
              </li>
              <li className="text-[#00A8FF]">/</li>
              <li className="text-[#00A8FF] poppins-medium text-[18px]">About Us</li>
            </ol>
          </nav>
        </div>
      </div>


      { /* About */}
      <div   id='about' className="pt-10 sm:pt-12 md:pt-16 lg:pt-[75px] pb-10 sm:pb-12 md:pb-16 lg:pb-[75px] px-4 sm:px-6 md:px-10 lg:px-[150px]">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2 gap-4 sm:gap-3 md:gap-4 lg:gap-[28px] ">

       
            <div className="relative">
              <img
                src={collage}
                alt="Collage of modern tiles and construction"
                className="w-full h-auto max-h-[732px] object-cover"
              />

            </div>
       
          {/* <div className="absolute -left-4 sm:-left-6 top-0 h-full flex items-center">
            <p className="text-[#00A8FF] text-xl sm:text-2xl md:text-[25px] alice-regular transform -rotate-90 whitespace-nowrap">
              About Us
            </p>
          </div> */}
          {/* Right Column - Text Content */}
          <div  className="flex flex-col justify-center space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-3">
            <p className="lg:block hidden text-[#00A8FF] text-xl sm:text-2xl md:text-[25px] alice-regular lg:text-start text-center">
              About Us
            </p>

            <h2 className="text-[25px] sm:text-[32px] md:text-[36px] lg:text-[40px] alice-regular leading-tight sm:leading-[45px] md:leading-[45px] text-[#001C2B]">
              Explore the Beauty of Modern Tiles: Trends, Designs, and Innovations
            </h2>

            {/* Horizontal Line */}
            <hr className="border- w-full" />

            {/* Subheading */}
            <h3 className="text-[#00A8FF] text-xl sm:text-2xl md:text-[28px] poppins-regular">
              SRK Traders – Villupuram's First Kajaria Tile Showroom
            </h3>

            {/* Paragraphs */}
            <p className="text-justify text-gray-800 text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-lg poppins-regular leading-relaxed sm:leading-[30px] md:leading-[35px]">
              SRK Traders dealers and supplies all the necessary products for the construction industry, including retail, commercial and industrial sectors. It is a one-stop-shop for buying Steel, Cement, Electricals, Pipe, Paint, and Premium Tiles. With a showroom space of 6000 sq. ft. and a warehouse of 6000 sq. ft, we deal premium brands like Kajaria, Asian Paints, Legrand, Hindware, Coromandel, etc.
            </p>
            <p className="text-justify text-gray-800 text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-lg poppins-regular leading-relaxed sm:leading-[30px] md:leading-[35px]">
              We are the only dealers for Kajaria Tiles in Villupuram, and we offer the most comprehensive range of tiles at the most competitive price. We also have a well-experienced team that can meet the needs of our customers in terms of both quality and quantity.
            </p>
            <p className="text-justify text-gray-800 text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-lg poppins-regular leading-relaxed sm:leading-[30px] md:leading-[35px]">
              Visit our store and experience this yourself.
            </p>

            {/* Button */}
            <div className='lg:text-start text-center'> <button onClick={() =>navigate('/contactus')} className=" cursor-pointer mt-4 sm:mt-6 px-4 py-2 sm:px-6 sm:py-3 bg-[#001C2B] text-white rounded-[6px] text-sm sm:text-base poppins-regular hover:bg-[#003a5d] transition-colors w-fit">
              Get in Touch
            </button></div>
           
          </div>
        </div>
      </div>

      {/* Our process */}
      <div
        className="relative bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/explore/pattern.png')" }}
      >
        <div className="pt-5 sm:pt-8 md:pt-10 lg:pt-[40px] pb-10 sm:pb-12 md:pb-14 lg:pb-[75px] px-4 sm:px-6 md:px-10 lg:px-[150px]">
          <div className="flex flex-col gap-8 sm:gap-10 md:gap-[30px]">
            {/* Heading */}
            <p className="alice-regular text-[#001C2B] text-2xl sm:text-3xl md:text-[36px] lg:text-[40px]">
              Our Process
            </p>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-[40px]">
              {/* Consultation Card */}
              <div className="relative">
                <img
                  src={consultation}
                  alt="Consultation"
                  className="w-full max-w-[489px] h-auto max-h-[370px] object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-5">
                  <h3 className="poppins-medium text-[30px] mb-2">Consultation</h3>
                  <p className="poppins-regular text-[16px] leading-[28px] text-justify max-w-[80%]">
                    Company discuss with the client to understand their needs and budget.
                  </p>
                </div>
              </div>


              {/* Selection Card */}
              <div className="relative">
                <img
                  src={selection}
                  alt="Selection"
                  className="w-full max-w-[489px] h-auto max-h-[370px] object-cover "
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-5">
                  <h3 className="poppins-medium text-[30px] mb-2">
                    Selection
                  </h3>
                  <p className="poppins-regular text-[16px] leading-[28px] text-justify max-w-[80%]">
                    Help clients to choose the appropriate needs based on their requirements and lifestyle.
                  </p>
                </div>
              </div>

              {/* Handover Card */}
              <div className="relative">
                <img
                  src={handover}
                  alt="Handover"
                  className="w-full max-w-[489px] h-auto max-h-[370px] object-cover "
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-5">
                  <h3 className="poppins-medium text-[30px] mb-2">
                    Handover
                  </h3>
                  <p className="poppins-regular text-[16px] leading-[28px] text-justify max-w-[80%]">
                    We hand over a beautifully finished space ready to transform your home or business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* Showroom Rating */}
      <div className="pt-8 sm:pt-10 md:pt-12 lg:pt-[75px] pb-8 sm:pb-10 md:pb-12 lg:pb-[75px] px-4 sm:px-6 md:px-8 lg:px-[150px] bg-white">
        {/* Subheading and Main Heading */}
        <div className="mb-4 sm:mb-5 md:mb-6 text-center lg:text-left">
          <p className="text-[#00A8FF] alice-regular text-2xl sm:text-3xl md:text-[35px]">
            SRK Traders
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-[36px] lg:text-[40px] alice-regular leading-tight sm:leading-[40px] md:leading-[45px] lg:leading-[50px] text-[#001C2B] mt-2">
            Committed to Simplicity and Innovation
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-[40px]">
          {/* Left Column - Showroom Image */}
          <div className="flex justify-center lg:justify-start">
            <img
              src={showroom}
              alt="SRK Traders Showroom"
              className="w-full max-w-[874px] h-auto max-h-[553px] object-cover rounded-lg"
            />
          </div>

          {/* Right Column - Text and Descriptions */}
          <div className="flex flex-col space-y-4 sm:space-y-6 md:space-y-8">
            {/* Descriptions */}
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              <div className="flex items-start space-x-3">
                <img src={Rating} alt="Rating Icon" className="w-5 h-5 sm:w-6 sm:h-6 mt-1" />
                <p className="text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-lg text-justify poppins-regular leading-relaxed sm:leading-[28px] md:leading-[30px] lg:leading-[35px] text-gray-900">
                  <span className="poppins-semibold">Client Satisfaction:</span> Our priority has always been ensuring customers receive the highest quality products and services. We’ve built lasting relationships based on trust, reliability, and a commitment to exceeding expectations.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <img src={Quality} alt="Quality Icon" className="w-5 h-5 sm:w-6 sm:h-6 mt-1" />
                <p className="text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-lg text-justify poppins-regular leading-relaxed sm:leading-[28px] md:leading-[30px] lg:leading-[35px] text-gray-900">
                  <span className="poppins-semibold">Successful Project Completions:</span> From small-scale renovations to large commercial projects, we’ve successfully supplied materials for countless ventures – ensuring durability, style, and perfection every time.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <img src={Checkmark} alt="Checkmark Icon" className="w-5 h-5 sm:w-6 sm:h-6 mt-1" />
                <p className="text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-lg text-justify poppins-regular leading-relaxed sm:leading-[28px] md:leading-[30px] lg:leading-[35px] text-gray-900">
                  <span className="poppins-semibold">Unmatched Support:</span> Our team is always ready to assist, providing expert guidance and ensuring smooth, hassle-free service throughout the project. We’re here when you need us – before, during, and after the sale.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <img src={Man} alt="Man Icon" className="w-5 h-5 sm:w-6 sm:h-6 mt-1" />
                <p className="text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-lg text-justify poppins-regular leading-relaxed sm:leading-[28px] md:leading-[30px] lg:leading-[35px] text-gray-900">
                  <span className="poppins-semibold">Years of Expertise:</span> With extensive experience in the industry, we’ve gained deep insights and knowledge that allow us to offer only the best brands and solutions tailored to every client’s unique needs.
                  <br />
                  Each milestone is a reflection of our dedication to quality, innovation, and customer satisfaction – making SRK Traders a leader in Villupuram.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {/* 100% Client Satisfaction */}
          <div className="flex flex-col items-center text-center">
            <img src={Rating} alt="Rating Icon" className="w-12 h-12 sm:w-14 sm:h-14 md:w-[70px] md:h-[70px] mb-2 sm:mb-3" />
            <p className="text-[#000000] text-lg sm:text-xl md:text-2xl lg:text-[40px] poppins-semibold">
              <CountUp start={0} end={100} duration={3} suffix="%" />
            </p>
            <p className="text-gray-800 text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-lg poppins-semibold">
              Client Satisfaction
            </p>
          </div>

          {/* 100+ Project Completion */}
          <div className="flex flex-col items-center text-center">
            <img src={Quality} alt="Quality Icon" className="w-12 h-12 sm:w-14 sm:h-14 md:w-[70px] md:h-[70px] mb-2 sm:mb-3" />
            <p className="text-[#000000] text-lg sm:text-xl md:text-2xl lg:text-[40px] poppins-semibold">
              <CountUp start={0} end={100} duration={3} suffix="+" />
            </p>
            <p className="text-gray-800 text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-lg poppins-semibold">
              Project Completion
            </p>
          </div>

          {/* Mon-Sat Support Available */}
          <div className="flex flex-col items-center text-center">
            <img src={Checkmark} alt="Checkmark Icon" className="w-12 h-12 sm:w-14 sm:h-14 md:w-[70px] md:h-[70px] mb-2 sm:mb-3" />
            <p className="text-[#020202] text-lg sm:text-xl md:text-2xl lg:text-[40px] poppins-semibold">
              Mon–Sat
            </p>
            <p className="text-gray-800 text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-lg poppins-semibold">
              Support Available
            </p>
          </div>

          {/* 5+ Years of Expertise */}
          <div className="flex flex-col items-center text-center">
            <img src={Man} alt="Man Icon" className="w-12 h-12 sm:w-14 sm:h-14 md:w-[70px] md:h-[70px] mb-2 sm:mb-3" />
            <p className="text-[#000000] text-lg sm:text-xl md:text-2xl lg:text-[40px] poppins-semibold">
              <CountUp start={0} end={5} duration={4} suffix="+" />
            </p>
            <p className="text-gray-800 text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-lg poppins-semibold">
              Years of Expertise
            </p>
          </div>
        </div>
      </div>

    </>
  );
};

export default About;