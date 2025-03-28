import React from 'react';
import { Link } from 'react-router-dom';
import logo from '/assets/images/Footer/logo.png';
import Ringer from '/assets/images/Footer/Ringer.png';
import Address from '/assets/images/Footer/Address.png';
import Letter from '/assets/images/Footer/Letter.png';
import Facebook from '/assets/images/Footer/Facebook.png';
import Instagram from '/assets/images/Footer/Instagram.png';

function Footer() {
  return (
    <>
      <div
        className="py-6 sm:py-8 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/Footer/footer.png')" }}
      >
        <div className="pt-2 sm:pt-4 md:pt-5 lg:pt-[10px] pb-2 sm:pb-4 md:pb-5 lg:pb-[10px] px-4 sm:px-6 md:px-8 lg:px-[150px] xl:px-[200px] 2xl:px-[300px]">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 justify-center items-start">
            {/* Left Column - Logo and Description */}
            <div className="flex flex-col space-y-4 sm:space-y-6">
              <Link to="/">
              <img
                src={logo}
                alt="SRK Traders Logo"
                className="w-[150px] sm:w-[180px] md:w-[200px] h-auto bg-white p-2 sm:p-3 rounded"
              />
              </Link>
             
              <p className="text-white text-sm sm:text-sm md:text-base lg:text-[16px] leading-relaxed sm:leading-[24px] md:leading-[28px] poppins-light text-justify">
                SRK Traders dealers and supplies all the necessary products for the construction industry, including retail, commercial, and industrial sectors.
              </p>
              <div className="flex space-x-3 sm:space-x-4 justify-start">
                <a
                  href="https://www.facebook.com/profile.php?id=61574050083773"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-75"
                >
                  <img src={Facebook} alt="Facebook" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />
                </a>
                <a
                  href="https://www.instagram.com/srktraders25/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-75"
                >
                  <img src={Instagram} alt="Instagram" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />
                </a>
              </div>
            </div>

            {/* Middle Column - Quick Links */}
            <div className="flex flex-col space-y-3 sm:space-y-4 md:space-y-5 lg:items-center">
              <h3 className="text-white poppins-semibold text-xl sm:text-xl md:text-xl lg:text-[20px]">
                Quick Links
              </h3>
              <div className="flex flex-col items-start space-y-2 sm:space-y-3 md:space-y-4">
                <Link to="/" className="text-white text-sm sm:text-sm md:text-base lg:text-[16px] poppins-light hover:text-[#00A8FF]">
                  • Home
                </Link>
                <Link to="/aboutus" className="text-white text-sm sm:text-sm md:text-base lg:text-[16px] poppins-light hover:text-[#00A8FF]">
                  • About Us
                </Link>
                <Link to="/our-products" className="text-white text-sm sm:text-sm md:text-base lg:text-[16px] poppins-light hover:text-[#00A8FF]">
                  • Our Products
                </Link>
                <Link to="/other-products" className="text-white text-sm sm:text-sm md:text-base lg:text-[16px] poppins-light hover:text-[#00A8FF]">
                  • Other Products
                </Link>
                <Link to="/contactus" className="text-white text-sm sm:text-sm md:text-base lg:text-[16px] poppins-light hover:text-[#00A8FF]">
                  • Contact Us
                </Link>
              </div>
            </div>

            {/* Right Column - Contact Us */}
            <div className="flex flex-col space-y-3 sm:space-y-4 md:space-y-6 items-start">
              <h3 className="text-white poppins-semibold text-xl sm:text-lg md:text-xl lg:text-[20px]">
                Contact Us
              </h3>
              <div className="flex items-center space-x-3">
                <img src={Ringer} alt="Phone" className="w-4 h-4 sm:w-5 sm:h-5" />
                <a
                  href="tel:+919486883084"
                  className="text-white text-sm sm:text-sm md:text-base lg:text-[16px] hover:text-[#00A8FF] poppins-light"
                >
                  9486883084, 8012433084
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <img src={Address} alt="Address" className="w-4 h-4 sm:w-5 sm:h-5 mt-1" />
                <a
                  href="https://maps.app.goo.gl/MBh7QZAjyx257XtV9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-sm sm:text-sm md:text-base lg:text-[16px] hover:text-[#00A8FF] poppins-light"
                >
                  3/14A, 3/14B, Kamalam Ramasamy Nagar,
                  <br />
                  Kandamanadi, Near Aavin Depot,
                  <br />
                  Villupuram - 605 401
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <img src={Letter} alt="Email" className="w-4 h-4 sm:w-5 sm:h-5" />
                <a
                  href="mailto:srktraders290584@gmail.com"
                  className="text-white text-sm sm:text-sm md:text-base lg:text-[16px] hover:text-[#00A8FF] poppins-light"
                >
                  srktraders290584@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <span className="text-[#00A8FF] poppins text-sm sm:text-sm md:text-base lg:text-[16px]">
                  GSTIN:
                </span>
                <span className="text-white text-sm sm:text-sm md:text-base lg:text-[16px] poppins-light">
                  33OPSP8782IQ1ZH
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#00A8FF] p-2 sm:p-3">
        <p className="text-center text-white poppins text-sm sm:text-sm md:text-[14px]">
          Copyright ©2025 All rights reserved. Developed by{' '}
          <span className="text-[#061C28] poppins">THIRSTY CROWZ</span>
        </p>
      </div>
    </>
  );
}

export default Footer;