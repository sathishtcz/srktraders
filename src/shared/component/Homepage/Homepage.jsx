import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import kajaria1 from '/assets/images/carousel/kajaria1.png';
import kerovit2 from '/assets/images/carousel/kerovit2.png';
import simero3 from '/assets/images/carousel/simero3.png';
import colortile4 from '/assets/images/carousel/colortile4.png';
import suzora5 from '/assets/images/carousel/suzora5.png';
import Srklogo from '/assets/images/About/Srklogo.png';
import SRK from '/assets/images/About/SRK.png';
// Brand logo images
import kajariaslide from '/assets/images/carousel/kajariaslide.png';
import kerovitslide from '/assets/images/carousel/kerovitslide.png';
import simeroslide from '/assets/images/carousel/simeroslide.png';
import colortileslide from '/assets/images/carousel/colortileslide.png';
import suzoraslide from '/assets/images/carousel/suzoraslide.png';
// Arrow images
import leftarrow from '/assets/images/carousel/leftarrow.png';
import rightarrow from '/assets/images/carousel/rightarrow.png';

import Floor from '/assets/images/explore/floor.png';
import Wall from '/assets/images/explore/wall.png';
import Step from '/assets/images/explore/step.png';
import Kitchen from '/assets/images/explore/kkitchen.png';
import Bathroom from '/assets/images/explore/bathroom.png';
import Parking from '/assets/images/explore/parking.png';
import Roof from '/assets/images/explore/roof.png';



import image1 from '/assets/images/gallery/image1.png';
import image2 from '/assets/images/gallery/image2.png';
import image3 from '/assets/images/gallery/image3.png';
import image4 from '/assets/images/gallery/image4.png';
import image5 from '/assets/images/gallery/image5.png';


import kajariabrand from '/assets/images/Kajaria/kajariabrand.png';
import kajariatiles2 from '/assets/images/Kajaria/kajariatiles2.png';
import kajariatiles3 from '/assets/images/Kajaria/kajariatiles3.png';
import kajariaatiles1 from '/assets/images/Kajaria/kajariaatiles1.png';

import choose1 from '/assets/images/Chooseus/choose1.png';
import choose2 from '/assets/images/Chooseus/choose2.png';
import choose3 from '/assets/images/Chooseus/choose3.png';
import choose4 from '/assets/images/Chooseus/choose4.png';

const Homepage = () => {
  // Carousel
  const [activeSlide, setActiveSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();

  // Carousel data
  const carouselData = [
    { image: kajaria1, text: 'Kajaria Tiles - Where Style Meets Strength' },
    { image: kerovit2, text: 'Kerovit - Redefining Bathrooms with Style, Comfort, and Innovation' },
    { image: simero3, text: 'Simero Tiles - Crafting luxury and style for timeless spaces' },
    { image: colortile4, text: 'ColorTile - Vibrant designs, lasting durability, transforming spaces beautifully' },
    { image: suzora5, text: 'Suzora Tiles - Crafted for elegance, built for lasting impressions' },
  ];

  // Brand logos for the bottom navigation
  const brands = [
    { name: 'Kajaria', logo: kajariaslide },
    { name: 'Kerovit', logo: kerovitslide },
    { name: 'Simero', logo: simeroslide },
    { name: 'Colortile', logo: colortileslide },
    { name: 'Suzora', logo: suzoraslide },
  ];

  const cardData = [
    {
      icon: choose1,
      title: 'Quality And Durability',
      description: 'Emphasize the high quality of your tiles, their durability, and longevity, assuring customers they are investing in a long-term solution.',
    },
    {
      icon: choose2,
      title: 'Variety and Style',
      description: 'Showcase a wide variety of tile styles, colors, patterns, and sizes to cater to diverse tastes and design preferences.',
    },
    {
      icon: choose3,
      title: 'Affordable Pricing',
      description: 'Offer competitive pricing and highlight any special deals or promotions to attract budget-conscious customers.',
    },
    {
      icon: choose4,
      title: 'Fast and Reliable Shipping',
      description: 'Offer fast and reliable shipping to ensure customers receive their orders promptly and in good condition.',
    },
  ];

  const originalTiles = [
    { image: Floor, label: 'Floor Tiles (GVT)', category: 'Floor' },
    { image: Wall, label: 'Wall Tiles', category: 'Wall' },
    { image: Step, label: 'Stair Tiles', category: 'Stair' },
    { image: Kitchen, label: 'Kitchen Tiles', category: 'Kitchen' },
    { image: Bathroom, label: 'Bathroom Tiles', category: 'Bathroom' },
    { image: Parking, label: 'Parking Tiles', category: 'Parking' },
    { image: Roof, label: 'Roof Tiles', category: 'Roof' },
  ];

  // Gallery
  const gallerytiles = [
    { image: image1 },
    { image: image2 },
    { image: image3 },
    { image: image4 },
    { image: image5 },
  ];

  // Automatic sliding effect carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === carouselData.length - 1 ? 0 : prev + 1));
    }, 7000);

    return () => clearInterval(interval);
  }, [carouselData.length]);

  // Debounced slide change handler
  const changeSlide = useCallback((direction) => {
    if (isTransitioning) return; // Prevent action during transition
    setIsTransitioning(true);

    setActiveSlide((prev) => {
      if (direction === 'next') {
        return prev === carouselData.length - 1 ? 0 : prev + 1;
      } else {
        return prev === 0 ? carouselData.length - 1 : prev - 1;
      }
    });

    // Reset transition state after the animation duration (1000ms)
    setTimeout(() => setIsTransitioning(false), 1500);
  }, [isTransitioning, carouselData.length]);

  const handleNextSlide = () => changeSlide('next');
  const handlePrevSlide = () => changeSlide('prev');

  const handleBrandClick = (index) => {
    if (isTransitioning) return; // Prevent click during transition
    setIsTransitioning(true);
    setActiveSlide(index);
    setTimeout(() => setIsTransitioning(false), 1000);
  };



  const testimonials = [
    {
      id: 1,
      content:
        'SRK Traders offers top-quality Kajaria tiles with a wide range of stylish and durable designs. Their excellent customer service, competitive pricing, and timely delivery make them a trusted choice. The tiles are of premium quality, ensuring a stunning finish for homes and offices. Highly recommended for tile purchases!',
      name: 'KARTHIK S',
    },
    {
      id: 2,
      content:
        'I was impressed by the extensive collection at SRK Traders. The variety of designs and textures available made my renovation project so much easier. The staff was knowledgeable and helped me select the perfect tiles for my kitchen. The delivery was prompt and the installation support was excellent.',
      name: 'PRIYA M',
    },
    {
      id: 3,
      content:
        'After comparing multiple suppliers, I chose SRK Traders for my office renovation. Their professional approach and quality products exceeded my expectations. The durability of their tiles is exceptional, and the pricing was very reasonable compared to other suppliers. Would definitely use their services again.',
      name: 'RAJESH K',
    },
    {
      id: 4,
      content:
        'The customer service at SRK Traders is unmatched. They went above and beyond to help me find the exact shade and pattern I was looking for. Their after-sales support was excellent when I needed additional tiles. The quality speaks for itself - my bathroom looks stunning with their premium tiles.',
      name: 'ANANYA D',
    },
    {
      id: 5,
      content:
        'SRK Traders has been our go-to supplier for all our construction projects. Their consistent quality and reliable delivery timelines have made our work much easier. The range of options they provide ensures we can meet any client’s design requirements. Truly a valuable business partner.',
      name: 'VIKRAM P',
    },
  ];

  return (
    <>
      <section className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen">
        {/* Carousel Images and Text */}
        <div className="relative w-full h-full overflow-hidden">
          {carouselData.map((slide, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-transform duration-1000 ease-in-out ${index === activeSlide ? 'translate-x-0 active-zoom' :
                index < activeSlide ? '-translate-x-full' : 'translate-x-full'
                }`}
            >
              <img src={slide.image} alt={brands[index].name} className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-[#001C2B] opacity-40"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <p className="alice-regular text-[20px] text-center 2xl:text-[50px] lg:text-[35px] md:text-[25px]">{slide.text}</p>
                <button
                  onClick={() => navigate('/our-products')}
                  className="cursor-pointer mt-2 2xl:px-[45px] px-[10px] py-2 bg-[#00A8FF] text-white rounded-[6px] transition-colors duration-300"
                >
                  Discover More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrevSlide}
          className="absolute left-4 top-1/2 bg-[#72777B] rounded-full p-2 sm:p-5 flex items-center justify-center cursor-pointer"
          disabled={isTransitioning}
        >
          <img src={leftarrow} alt="Previous" className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>
        <button
          onClick={handleNextSlide}
          className="absolute right-4 top-1/2 bg-[#72777B] rounded-full p-2 sm:p-5 flex items-center justify-center cursor-pointer"
          disabled={isTransitioning}
        >
          <img src={rightarrow} alt="Next" className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>

        {/* Brand Logos with Active Indicator */}
        <div className="absolute bottom-10 sm:bottom-20 left-0 right-0 flex justify-center">
          <div className="relative flex justify-center space-x-4 sm:space-x-14">
            {brands.map((brand, index) => {
              // Determine visibility based on activeSlide and screen size
              const isActive = index === activeSlide;
              const isWithinXsLimit = isActive; // xs: only active logo
              const isWithinSmLimit = isActive || Math.abs(index - activeSlide) === 1; // sm: active + 1 neighbor
              const isWithinMdLimit = isActive || Math.abs(index - activeSlide) <= 1; // md: active + 2 neighbors
              const isWithinLgLimit = true; // lg: all logos visible

              return (
                <div
                  key={index}
                  className={`flex flex-col items-center cursor-pointer pl-1 ml-1 
            ${isWithinXsLimit ? 'block' : 'hidden'} 
            ${isWithinSmLimit ? 'sm:block' : 'sm:hidden'} 
            ${isWithinMdLimit ? 'md:block' : 'md:hidden'} 
            ${isWithinLgLimit ? 'lg:block' : 'lg:hidden'}`}
                  onClick={() => handleBrandClick(index)}
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className={`w-16 h-auto sm:w-20 md:w-24 lg:w-28 transition-all duration-300 ${activeSlide === index ? 'scale-100 opacity-100' : 'scale-75 opacity-50'
                      } hover:opacity-100`} loading="lazy"
                  />
                </div>
              );
            })}
            <div className="absolute bottom-[-10px] w-full h-0.5 bg-white opacity-50 lg:mr-9" />
          </div>
        </div>
      </section>

      {/* About */}
      <div className="pt-8 sm:pt-10 md:pt-12 lg:pt-[60px] pb-8 sm:pb-10 md:pb-12 lg:pb-[60px] px-4 sm:px-6 md:px-8 lg:px-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center mx-auto gap-5 md:gap-10">
          <div className='lg:hidden block '><p className="alice-regular text-[28px] sm:text-[40px] lg:text-[45px] text-[#001C2B] z-10 text-center">
            About <span className='text-[#00A8FF]'>SRK Traders</span>
          </p>
          </div>

          <div className="flex justify-center items-center w-full h-full">

            <img src={Srklogo} alt="SRK" className="" />
          </div>
          <div className="relative flex flex-col justify-center items-center lg:items-start">
            <img
              src={SRK}
              alt="Background"
              className="absolute w-[300px] sm:w-[400px] lg:w-[545px] h-auto"
            />
            <p className="lg:block hidden alice-regular text-[28px] sm:text-[40px] lg:text-[45px] text-[#001C2B] z-10 ">
              About Us
            </p>
            <p className="lg:block hidden alice-regular text-[20px] sm:text-[24px] lg:text-[30px] text-[#00A8FF] z-10">
              SRK Traders
            </p>
            <p className="text-sm sm:text-[14px] lg:text-[16px] leading-[25px] sm:leading-[25px] lg:leading-[35px] text-justify z-10">
              SRK Traders dealers and supplies all the necessary products for the
              construction industry, including retail, commercial and industrial
              sectors. It is a one-stop-shop for buying Premium Tiles, Steel, Cement,
              Electricals, Pipe, and Paint. With a showroom space of 6000 sq. ft. and a
              warehouse of 6000 sq. ft, we deal premium brands like Kajaria, Asian
              Paints, Legrand, Hindware, Coromandel, etc.
            </p>
            <button
              onClick={() => navigate('/aboutus#about')}
              className="cursor-pointer mt-4 px-4 py-2 sm:px-6 sm:py-3 bg-[#001C2B] text-white rounded-[6px] text-sm sm:text-base z-10"
            >
              Know More
            </button>
          </div>
        </div>
      </div>

      {/* Explore Collection */}
      <div
        className="relative bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/explore/pattern.png')" }}
      >
        <div className="pt-[2px] pb-[20px] px-4 sm:px-6 md:px-8 lg:px-[100px] mx-auto">
          <div className="flex flex-row justify-between items-center mt-4">
            <h2 className="alice-regular text-[28px] sm:text-[35px] lg:text-[45px] text-[#001C2B]">
              Explore Collection
            </h2>
            <div className="flex gap-4">
              <button className="explore-prev bg-[#001C2B] rounded-full p-2 sm:p-3 lg:p-4 cursor-pointer">
                <img src={leftarrow} alt="Previous" className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6" />
              </button>
              <button className="explore-next bg-[#001C2B] rounded-full p-2 sm:p-3 lg:p-4 cursor-pointer">
                <img src={rightarrow} alt="Next" className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6" />
              </button>
            </div>
          </div>

          <div className="mt-5">
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={{
                prevEl: '.explore-prev',
                nextEl: '.explore-next',
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              slidesPerView={4}
              spaceBetween={40}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
              }}
              className="mySwiper"
            >
              {originalTiles.map((tile, index) => (
                <SwiperSlide key={`tile-${index}`}>
                  <div className="flex flex-col items-center">
                    <div
                      className="overflow-hidden cursor-pointer"
                      onClick={() => navigate(`/our-products?category=${tile.category}`)}
                    >
                      <img
                        src={tile.image}
                        alt={tile.label}
                        className="w-full h-auto object-cover transition-transform duration-500 hover:scale-120"
                        style={{ aspectRatio: '389 / 358' }}
                      />
                    </div>
                    <p className="text-center poppins-medium  mt-4 text-[#001C2B] text-[18px] sm:text-[22px] lg:text-[26px]">
                      {tile.label}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="pt-[10px] pb-[20px] px-4 sm:px-6 md:px-8 lg:px-[100px] mx-auto">
        <div className="flex flex-row justify-between items-center mt-4">
          <h2 className="alice-regular text-[28px] sm:text-[35px] lg:text-[45px] text-[#001C2B]">
            Our Gallery
          </h2>
          <div className="flex gap-4">
            <button className="gallery-prev bg-[#001C2B] rounded-full p-2 sm:p-3 lg:p-4 cursor-pointer">
              <img src={leftarrow} alt="Previous" className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6" />
            </button>
            <button className="gallery-next bg-[#001C2B] rounded-full p-2 sm:p-3 lg:p-4 cursor-pointer">
              <img src={rightarrow} alt="Next" className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6" />
            </button>
          </div>
        </div>

        <div className="mt-5">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: '.gallery-prev',
              nextEl: '.gallery-next',
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            slidesPerView={4}
            spaceBetween={40}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
            className="mySwiper"
          >
            {gallerytiles.map((tile, index) => (
              <SwiperSlide key={`tile-${index}`}>
                <div className="flex flex-col items-center">
                  <div className="overflow-hidden">
                    <img
                      src={tile.image}
                      alt="gallery"
                      className="w-full h-auto object-cover transition-transform duration-500 hover:scale-120"
                      style={{ aspectRatio: '389 / 358' }}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Kajaria */}
      <div className="pt-[30px] pb-[20px] px-4 sm:px-6 md:px-8 lg:px-[100px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-[40px]">
          <p className="lg:hidden block text-center alice-regular text-[28px] sm:text-[40px] lg:text-[45px] text-[#00A8FF]">
            Kajaria
          </p>
          <div className='lg:hidden block '>
            <div className="flex justify-center items-center">
              <img src={kajariabrand} alt="SRK kajaria" className="" />
            </div>
            <div className=" grid grid-cols-3 gap-4 sm:gap-6 lg:gap-[35px] mt-4 sm:mt-8">
              <img src={kajariaatiles1} alt="SRK kajaria" className="w-full h-auto" />
              <img src={kajariatiles2} alt="SRK kajaria" className="w-full h-auto" />
              <img src={kajariatiles3} alt="SRK kajaria" className="w-full h-auto" />
            </div>
          </div>
          <div className='lg:block hidden'>
            <div className="flex justify-center items-center">
              <img src={kajariabrand} alt="SRK kajaria" className="" />
            </div>
          </div>

          <div className="flex flex-col justify-center lg:items-start items-center">
            <p className="lg:block hidden alice-regular text-[28px] sm:text-[40px] lg:text-[45px] text-[#00A8FF]">
              Kajaria
            </p>
            <p className="text-sm sm:text-[14px] lg:text-[16px] leading-[20px] sm:leading-[25px] lg:leading-[30px] text-justify">
              "Kajaria Tiles bring together style, strength, and innovation to transform any space. Known for their durability, stain resistance, and low maintenance, they’re perfect for both residential and commercial use."
            </p>
            <button
              onClick={() => navigate('/our-products')}
              className="cursor-pointer mt-4 px-4 py-2 sm:px-6 sm:py-3 bg-[#001C2B] text-white rounded-[6px] text-sm sm:text-base"
            >
              Discover More
            </button>
            <div className='lg:block hidden '> <div className=" grid grid-cols-3 gap-4 sm:gap-6 lg:gap-[35px] mt-4 sm:mt-8">
              <img src={kajariaatiles1} alt="SRK kajaria" className="w-full h-auto" />
              <img src={kajariatiles2} alt="SRK kajaria" className="w-full h-auto" />
              <img src={kajariatiles3} alt="SRK kajaria" className="w-full h-auto" />
            </div></div>

          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div
        className="relative bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/Chooseus/pattern.png')" }}
      >
        <div className="px-4 md:px-[50px] lg:px-[197px] mx-auto pb-[61px]">
          <div className="flex flex-col mt-8">
            <h2 className="alice-regular text-[32px] sm:text-[38px] md:text-[45px] text-white mt-5 text-left mb-4">
              Why Choose Us
            </h2>
            <div className="grid 2xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-[81px] lg:gap-[40px] mt-12">
              {cardData.map((card, index) => (
                <div key={index} className="relative mx-auto w-full mb-7">
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="absolute -top-14 left-1/2 transform -translate-x-1/2 z-10 md:w-[150px] md:h-[150px] w-[120px] h-[120px]"
                  />
                  <div className="bg-white px-6 py-10 shadow-md mt-7 h-full flex flex-col rounded">
                    <div className="flex flex-col gap-5 mt-15 flex-grow">
                      <p className="text-[#00A8FF] text-center alice-regular text-[22px]">
                        {card.title}
                      </p>
                      <p className="text-[#001C2B] leading-[28px] text-sm text-justify">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <div className="max-w-full sm:max-w-4xl lg:max-w-6xl mx-auto py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-8">
        <h2 className="text-[28px] sm:text-[35px] lg:text-[45px] alice-regular text-center mb-6 sm:mb-8 lg:mb-3">
          What Our Client Say
        </h2>
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: '.testimonial-prev',
              nextEl: '.testimonial-next',
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            slidesPerView={1}
            className="mySwiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="w-full px-12 text-center">
                  <p className="text-justify lg:text-center text-[#001C2B] mb-4 sm:mb-6 lg:mb-8 leading-[25px] sm:leading-[25px] md:leading-[30px] lg:leading-[35px] poppins-light text-sm sm:text-sm md:text-base lg:text-[16px]">
                    {testimonial.content}
                  </p>
                  <h3 className="text-[20px] sm:text-[24px] lg:text-[30px] text-[#00A8FF] poppins-semibold tracking-wide">
                    {testimonial.name}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            className="testimonial-prev bg-[#00A8FF] rounded-full p-2 sm:p-3 absolute left-0 top-1/2 transform -translate-y-1/2 hover:bg-[#0088cc] transition-colors cursor-pointer z-10"
            aria-label="Previous testimonial"
          >
            <img src={leftarrow} alt="Arrow" className="w-4 sm:w-5 h-4 sm:h-5" />
          </button>
          <button
            className="testimonial-next bg-[#00A8FF] rounded-full p-2 sm:p-3 absolute right-0 top-1/2 transform -translate-y-1/2 hover:bg-[#0088cc] transition-colors cursor-pointer z-10"
            aria-label="Next testimonial"
          >
            <img src={rightarrow} alt="Arrow" className="w-4 sm:w-5 h-4 sm:h-5" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Homepage;