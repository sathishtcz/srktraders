import React, { useState, useEffect, useRef } from 'react';
import SRKlogo from '/assets/images/Header/SRKlogo.png';
import SRKlogo2 from '/assets/images/Header/SRKlogo2.png';
import { Link, useLocation } from 'react-router-dom';
import blackhamburger from '/assets/images/Header/blackhamburger.png';
import whitehamburger from '/assets/images/Header/whitehamburger.png';
import whitecross from '/assets/images/Header/whitecross.png';
import blackcross from '/assets/images/Header/blackcross.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const toggleButtonRef = useRef(null); // Added ref for the toggle button

  const location = useLocation();
  const linkClass = (path) =>
    `${isScrolled ? 'text-black' : 'text-white'} ${
      location.pathname === path ? 'bg-[#00A8FF] text-white px-2 sm:px-3 py-1 rounded' : ''
    }`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target) && // Exclude clicks on the toggle button
        isMobileMenuOpen
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isScrolled ? 'bg-white' : ''
        }`}
      >
        <div
          className={`mx-auto px-4 sm:px-6 md:px-7 lg:px-10 xl:px-12 flex ${
            isScrolled
              ? 'md:flex-row md:h-[80px] lg:h-[100px]'
              : 'md:flex-col md:gap-4 lg:gap-[32px]'
          } flex-row justify-between items-center h-[70px] sm:h-[80px] md:h-[70px]`}
        >
          <div className="flex justify-center items-center">
            <Link to="/">
              <img
                src={isScrolled ? SRKlogo2 : SRKlogo}
                alt="Srk Traders Logo"
                className={`${
                  isScrolled
                    ? 'md:w-[180px] md:min-w-[180px] lg:w-[200px] lg:min-w-[200px]'
                    : 'md:w-[240px] md:min-w-[240px] lg:w-[284px] lg:min-w-[284px] md:mt-4 lg:mt-[32px]'
                } w-[150px] min-w-[150px] sm:w-[180px] sm:min-w-[180px] transition-all duration-300 ease-in-out`}
              />
            </Link>
          </div>

          {/* Mobile Menu Button - visible only on mobile */}
          <button
            ref={toggleButtonRef} // Added ref to the toggle button
            className="md:hidden flex items-center px-2 sm:px-3 py-2"
            onClick={toggleMobileMenu}
          >
            <img
              src={
                isMobileMenuOpen
                  ? isScrolled
                    ? blackcross
                    : whitecross
                  : isScrolled
                    ? blackhamburger
                    : whitehamburger
              }
              alt="Menu Icon"
              className="w-5 h-5 sm:w-6 sm:h-6"
            />
          </button>

          {!isScrolled && (
            <hr className="md:block hidden w-screen -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-10 xl:-mx-12 border-t border-white" />
          )}

          <div
            className={`${
              isScrolled
                ? 'hidden md:flex justify-between'
                : 'hidden md:flex mx-auto'
            } justify-center items-center`}
          >
            <div
              className="flex flex-wrap justify-center space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10 xl:space-x-[47px] font-medium text-sm sm:text-base md:text-[16px] lg:text-[18px]"
            >
              <Link to="/" className={linkClass('/')}>
                Home
              </Link>
              <Link to="/aboutus" className={linkClass('/aboutus')}>
                About Us
              </Link>
              <Link to="/our-products" className={linkClass('/our-products')}>
                Our Products
              </Link>
              {/* <Link
                to="/other-products"
                className={linkClass('/other-products')}
              >
                Other Products
              </Link> */}
              <Link to="/contactus" className={linkClass('/contactus')}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          ref={mobileMenuRef}
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-96' : 'max-h-0'
          }`}
        >
          <div
            className={`border-t border-gray-400 ${
              isScrolled ? 'bg-white' : 'bg-white'
            }`}
          >
            <div className="px-4 py-6 flex flex-col space-y-6 sm:space-y-6 font-medium text-base sm:text-base md:text-[16px]">
              <Link
                to="/"
                className={`${isScrolled ? 'text-black' : 'text-black'}`}
                onClick={toggleMobileMenu}
              >
                Home
              </Link>
              <Link
                to="/aboutus"
                className={`${isScrolled ? 'text-black' : 'text-black'}`}
                onClick={toggleMobileMenu}
              >
                About Us
              </Link>
              <Link
                to="/our-products"
                className={`${isScrolled ? 'text-black' : 'text-black'}`}
                onClick={toggleMobileMenu}
              >
                Our Products
              </Link>
              <Link
                to="/other-products"
                className={`${isScrolled ? 'text-black' : 'text-black'}`}
                onClick={toggleMobileMenu}
              >
                Other Products
              </Link>
              <Link
                to="/contactus"
                className={`${isScrolled ? 'text-black' : 'text-black'}`}
                onClick={toggleMobileMenu}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;