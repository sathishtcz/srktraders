import React from 'react'
import { Link } from 'react-router-dom';
import Ringer from '/assets/images/Contact/Ringer.png'
import Address from '/assets/images/Contact/Address.png'
import Mail from '/assets/images/Contact/Mail.png'
import Facebook from '/assets/images/Contact/Facebook.png'
import Instagram from '/assets/images/Contact/Instagram.png'



function Contact() {
  return (
    <>
      <div
        className="relative bg-cover bg-center flex flex-col items-center justify-around h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] 2xl:h-[450px]"
        style={{ backgroundImage: "url('/assets/images/About/Banner.png')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#001C2B] opacity-50"></div>
        <div></div>

        {/* Centered Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          {/* Title */}
          <h1 className="alice-regular text-3xl sm:text-4xl md:text-[40px] text-white">
            Contact Us
          </h1>

          {/* Breadcrumb */}
          <nav className="mt-2 sm:mt-4">
            <ol className="flex space-x-2 text-white text-sm sm:text-base poppins-light">
              <li>
                <Link to="/" className="hover:text-[#00A8FF] text-[18px]">
                  Home
                </Link>
              </li>
              <li className="text-[#00A8FF] text-[18px]">/</li>
              <li className="text-[#00A8FF] poppins-medium text-[18px]">Contact Us</li>
            </ol>
          </nav>
        </div>
      </div>



      {/* Contact */}

      <div className="pt-6 sm:pt-8 md:pt-10 lg:pt-[50px] pb-6 sm:pb-8 md:pb-10 lg:pb-[50px] px-4 sm:px-6 md:px-8 lg:px-[150px] bg-white">
        {/* Heading and Subheading */}
        <div className="text-center mb-4 sm:mb-6 md:mb-8 lg:mb-10">
          <div className="grid grid-cols-3 items-center">
            <hr className="border-gray-500" />
            <h2 className="alice-regular text-base sm:text-2xl md:text-3xl lg:text-[35px] text-[#080808]">
              GET IN TOUCH WITH US
            </h2>
            <hr className="border-gray-500" />
          </div>
          <p className="text-sm sm:text-sm md:text-base lg:text-[18px] poppins-regular leading-relaxed sm:leading-[24px] md:leading-[28px] lg:leading-[32px] mt-2 text-pretty max-w-[60rem] mx-auto">
            Have any questions, feedback, or need assistance? Feel free to reach out – drop us a message, and our team will get back to you as soon as possible!
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-[52px] bg-white rounded-lg p-4 sm:p-6 md:p-8 lg:p-10 max-w-[85rem] mx-auto shadow-[0_4px_8px_rgba(0,0,0,0.1),0_-4px_8px_rgba(0,0,0,0.1),4px_0_8px_rgba(0,0,0,0.1),-4px_0_8px_rgba(0,0,0,0.1)] ">
          {/* Left Column - Contact Information */}
          <div className="bg-[#001C2B] text-white p-4 sm:p-6 md:p-8 rounded-lg flex flex-col space-y-4 sm:space-y-6 md:space-y-8">
            {/* Contact Information */}
            <div>
              <h3 className="poppins-medium text-lg sm:text-xl md:text-2xl lg:text-[25px] mb-3 sm:mb-4">
                Contact Information
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center space-x-3">
                  <img src={Ringer} alt="Phone Icon" className="w-4 h-8 sm:w-5 sm:h-10 md:w-[23px] md:h-[47px]" />
                  <p className="text-sm sm:text-sm md:text-base lg:text-[16px] poppins-light">
                    <span className="poppins-medium">Call us</span>
                    <br />
                    9486883084, 8012433084
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <img src={Mail} alt="Email Icon" className="w-4 h-6 sm:w-5 sm:h-8 md:w-[25px] md:h-[40px]" />
                  <p className="text-sm sm:text-sm md:text-base lg:text-[16px] poppins-light">
                    <span className="poppins-medium">Mail us</span>
                    <br />
                    srktraders290584@gmail.com
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <img src={Address} alt="Location Icon" className="w-4 h-6 sm:w-5 sm:h-8 md:w-[26px] md:h-[40px] mt-1" />
                  <p className="text-sm sm:text-sm md:text-base lg:text-[16px] poppins-light">
                    <span className="poppins-medium">Visit us</span>
                    <br />
                    3/14A, 3/14B, Kamalam Ramasamy Nagar, Kandamanadi, Near Aavin Depot, Villupuram-605401
                  </p>
                </div>
              </div>
            </div>

            {/* Follow Us on Social Platform */}
            <div>
              <h3 className="poppins-medium text-lg sm:text-xl md:text-2xl lg:text-[25px] mb-3 sm:mb-4">
                Follow Us on Social Platform
              </h3>
              <div className="flex space-x-3 sm:space-x-4">
                <a href="https://www.facebook.com/profile.php?id=61574050083773" target="_blank" rel="noopener noreferrer">
                  <img src={Facebook} alt="Facebook" className="w-6 h-6 sm:w-8 sm:h-8 md:w-[40px] md:h-[40px]" />
                </a>
                <a href="https://www.instagram.com/srktraders25/?hl=en" target="_blank" rel="noopener noreferrer">
                  <img src={Instagram} alt="Instagram" className="w-6 h-6 sm:w-8 sm:h-8 md:w-[40px] md:h-[40px] mt-0 sm:mt-[2px]" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm sm:text-sm md:text-base lg:text-[20px] poppins-regular text-gray-900 mb-1 sm:mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your Name"
                className="w-full p-3 sm:p-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00A8FF] text-xs sm:text-sm md:text-base"
                required
              />
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-sm sm:text-sm md:text-base lg:text-[20px] poppins-regular text-gray-900 mb-1 sm:mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-full p-3 sm:p-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00A8FF] text-xs sm:text-sm md:text-base"
                required
              />
            </div>

            {/* Mobile */}
            <div>
              <label className="block text-sm sm:text-sm md:text-base lg:text-[20px] poppins-regular text-gray-900 mb-1 sm:mb-2">
                Mobile
              </label>
              <input
                type="tel"
                placeholder="Enter your Mobile No"
                className="w-full p-3 sm:p-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00A8FF] text-xs sm:text-sm md:text-base"
                required
              />
            </div>

            {/* Select Category */}
            <div>
              <label className="block text-sm sm:text-sm md:text-base lg:text-[20px] poppins-regular text-gray-900 mb-1 sm:mb-2">
                Select Category
              </label>
              <select
                className="w-full p-3 sm:p-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00A8FF] text-xs sm:text-sm md:text-base text-gray-500"
              >
                <option value="" disabled>Select Category</option>
                <option value="general">General Inquiry</option>
                <option value="support">Support</option>
                <option value="feedback">Feedback</option>
              </select>
            </div>

            {/* Message */}
            <div className="col-span-1 sm:col-span-2">
              <label className="block text-sm sm:text-sm md:text-base lg:text-[20px] poppins-regular text-gray-900 mb-1 sm:mb-2">
                Message
              </label>
              <textarea
                placeholder="Write your message"
                className="w-full p-3 sm:p-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00A8FF] text-xs sm:text-sm md:text-base h-24 sm:h-28 md:h-32 lg:h-36"
                rows={5}
              />
            </div>

            {/* Send Message Button */}
            <button
              type="submit"
              className="col-span-1 sm:col-span-2 ml-auto bg-[#00A8FF] text-white py-2 sm:py-2 md:py-3 px-4 sm:px-4 md:px-6 rounded-lg text-sm sm:text-sm md:text-base lg:text-[16px] poppins-regular hover:bg-[#0088cc] transition-colors cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-[85rem] mx-auto mb-10">  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7807.859142139595!2d79.4680418982621!3d11.909989812966726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a53579840d05847%3A0xfef21153daff2115!2sSRK%20TRADERS!5e0!3m2!1sen!2sin!4v1742908194614!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-full h-[400px] rounded-tr-[50px] rounded-bl-[50px] shadow-lg ' /></div>


    </>
  )
}

export default Contact