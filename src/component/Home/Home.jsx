import React, { useState, useEffect, useCallback } from 'react';
import Homepage from "../../shared/component/Homepage/Homepage";
import { useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';

import kajaria1 from '/assets/images/carousel/kajaria1.png';
import kerovit2 from '/assets/images/carousel/kerovit2.png';
import simero3 from '/assets/images/carousel/simero3.png';
import colortile4 from '/assets/images/carousel/colortile4.png';
import suzora5 from '/assets/images/carousel/suzora5.png';

// Brand logo images
import kajariaslide from '/assets/images/carousel/kajariaslide.png';
import kerovitslide from '/assets/images/carousel/kerovitslide.png';
import simeroslide from '/assets/images/carousel/simeroslide.png';
import colortileslide from '/assets/images/carousel/colortileslide.png';
import suzoraslide from '/assets/images/carousel/suzoraslide.png';

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


import choose1 from '/assets/images/Chooseus/choose1.png';
import choose2 from '/assets/images/Chooseus/choose2.png';
import choose3 from '/assets/images/Chooseus/choose3.png';
import choose4 from '/assets/images/Chooseus/choose4.png';



export default function Home() {
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
        setTimeout(() => setIsTransitioning(false), 2000);
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

        <div>
            <Homepage activeSlide={activeSlide} setActiveSlide={setActiveSlide} isTransitioning={isTransitioning} setIsTransitioning={setIsTransitioning} navigate={navigate} carouselData={carouselData} brands={brands} cardData={cardData} originalTiles={originalTiles} gallerytiles={gallerytiles} changeSlide={changeSlide} handleNextSlide={handleNextSlide} handlePrevSlide={handlePrevSlide} handleBrandClick={handleBrandClick} testimonials={testimonials} />
        </div>
    );
}