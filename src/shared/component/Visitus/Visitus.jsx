import React from 'react'
import { Link } from 'react-router-dom';

function Visitus() {
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
                        Visit Us
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
                            <li className="text-[#00A8FF] poppins-medium text-[18px]">Visit Us</li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div className="pt-6 sm:pt-8 md:pt-10 lg:pt-[50px]   px-4 sm:px-6 md:px-8 lg:px-[150px] ">
                {/* Heading and Subheading */}
                <div className="text-center mb-4 sm:mb-6 md:mb-8 lg:mb-10">
                    <div className="grid grid-cols-3 items-center">
                        <hr className="border-gray-500" />
                        <h2 className="alice-regular text-base sm:text-2xl md:text-3xl lg:text-[35px] text-[#080808]">
                            VISIT OUR STORE
                        </h2>
                        <hr className="border-gray-500" />
                    </div>
                    <p className="text-sm sm:text-sm md:text-base lg:text-[18px] poppins-regular leading-relaxed sm:leading-[24px] md:leading-[28px] lg:leading-[32px] mt-2 text-pretty max-w-[60rem] mx-auto">
                        Explore our premium collection at your convenience! We have stores in two locations, making it easier for you to find the perfect tiles for your space. Visit the store nearest to you and experience quality, variety, and unbeatable service firsthand!
                    </p>
                </div>


                <div className="flex justify-center items-center mb-10">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 max-w-[85rem] rounded">
                    <div className='flex flex-col justify-center items-center gap-4 border border-gray-400 rounded p-10 shadow-lg bg-gray-50'>
                        <h1 className='poppins-medium text-xl md:text-3xl lg:text-3xl'>Villupuram</h1>
                        <p className='text-justify lg:text-center'>3/14A, 3/14B, Kamalam Ramasamy Nagar, Kandamanadi, Near Aavin Depot, Villupuram - 605 401</p>
                        <p className='text-center'><span className='poppins-medium text-lg'>Call:</span> 9486883084, 8012433084</p>
                        <p className='text-center'><span  className='poppins-medium text-lg'>Email: </span>srktraders290584@gmail.com</p>
                        <a href="https://maps.app.goo.gl/MBh7QZAjyx257XtV9"  target="_blank"><button className="bg-[#00A8FF] text-white py-3 sm:py-2 md:py-3 px-2 sm:px-4 md:px-6 rounded-lg text-sm sm:text-sm md:text-base lg:text-[16px] poppins-regular hover:bg-[#0088cc] transition-colors cursor-pointer flex items-center">
                        <span>Get Direction</span>
                        <img src="/assets/images/Locateus/location.png" alt="Location Icon" className="ml-2 w-5 h-5" />
                    </button></a>
                        
                    </div>
                    <div className='flex flex-col justify-center items-center gap-4 border border-gray-400 rounded p-10 shadow-lg bg-gray-50'>
                        <h1 className='poppins-medium text-xl md:text-3xl lg:text-3xl'>Villupuram</h1>
                        <p className='text-justify  lg:text-center'>3/14A, 3/14B, Kamalam Ramasamy Nagar, Kandamanadi, Near Aavin Depot, Villupuram - 605 401</p>
                        <p className='text-center'> <span className='poppins-medium text-lg'>Call: </span>9489333085, 8012433084</p>
                        <p className='text-center'><span  className='poppins-medium text-lg  '>Email: </span>srktraders290584@gmail.com</p>
                        <a href="https://maps.app.goo.gl/U4fkZAAa1KQ7dskG7"  target="_blank">
                        <button className="bg-[#00A8FF] text-white py-3 sm:py-2 md:py-3 px-2 sm:px-4 md:px-6 rounded-lg text-sm sm:text-sm md:text-base lg:text-[16px] poppins-regular hover:bg-[#0088cc] transition-colors cursor-pointer flex items-center">
                            <span>Get Direction</span>
                            <img src="/assets/images/Locateus/location.png" alt="Location Icon" className="ml-2 w-5 h-5" />
                        </button>
                        </a>
                    </div>
                </div>
            </div>

            </div>
   

      

           


        </>
    )
}

export default Visitus