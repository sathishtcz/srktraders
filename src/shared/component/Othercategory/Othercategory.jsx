import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { otherproducts } from '../../services/otherproductservice';

function Othercategory() {

    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const data = otherproducts();
        const selectedProduct = data.find(p => p.id === parseInt(id));
        if (selectedProduct) {
            setProduct(selectedProduct);
        } else {
            setError('Product not found');
        }
    }, [id]);

    if (error) return <div className="text-center text-red-600">{error}</div>;
    if (!product) return null;


    return (
        <>
            <div
                className="relative bg-cover bg-center flex flex-col items-center justify-around h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] 2xl:h-[450px]"
                style={{ backgroundImage: "url('/assets/images/About/Banner.png')" }}
            >
                <div className="absolute inset-0 bg-[#001C2B] opacity-50"></div>
                <div></div>

                <div className="relative z-10 flex flex-col items-center justify-center text-center">
                    <h1 className="alice-regular text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-white">
                        Other Products
                    </h1>

                    <nav className="mt-2 sm:mt-3 md:mt-4">
                        <ol className="flex flex-wrap justify-center space-x-2 text-white text-xs sm:text-sm md:text-base poppins-light">
                            <li>
                                <Link to="/" className="hover:text-[#00A8FF] text-[14px] sm:text-[16px] md:text-[18px]">
                                    Home
                                </Link>
                            </li>
                            <li className="text-[14px] sm:text-[16px] md:text-[18px]">/</li>
                            <li>
                                <Link to="/other-products" className="poppins-medium text-[14px] sm:text-[16px] md:text-[18px]">
                                    Other Products
                                </Link>
                            </li>
                            <li className="text-[#00A8FF] text-[14px] sm:text-[16px] md:text-[18px]">/</li>
                            <li className="text-[#00A8FF] poppins-medium text-[14px] sm:text-[16px] md:text-[18px]">
                                {product.category}
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div className="pt-4 sm:pt-6 md:pt-8 lg:pt-10 xl:pt-[50px] pb-4 sm:pb-6 md:pb-8 lg:pb-10 xl:pb-[50px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 max-w-full sm:max-w-[90%] md:max-w-[85%] lg:max-w-[80%] xl:max-w-[75%] 2xl:max-w-[70%] mx-auto">
                <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-[83px]">
                    {/* Left Column - Product Image */}
                    <div className="w-full md:w-1/2">
                        <div className="border p-1 sm:p-2 md:p-3 lg:p-4 xl:p-6">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-[250px] sm:h-[300px] md:h-[300px] lg:h-[350px] xl:h-[400px] 2xl:h-[400px] object-contain"
                            />
                        </div>
                    </div>

                    {/* Right Column - Product Details */}
                    <div className="w-full md:w-1/2">
                        <Link
                            to="/other-products"
                            className="text-[#00A8FF] hover:underline mb-2 sm:mb-3 md:mb-3 lg:mb-3 xl:mb-3 2xl:mb-3 inline-block text-lg sm:text-xl md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl"
                        >
                            &lt; View Collection
                        </Link>
                        <h1 className="text-2xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-3 lg:mb-3 xl:mb-3 2xl:mb-3">
                            {product.name}
                        </h1>
                        <hr className="mt-4 sm:mt-5 md:mt-5 lg:mt-6 xl:mt-6 2xl:mt-6" />

                        <div className="mt-3 sm:mt-4 md:mt-4 flex flex-col gap-3 sm:gap-4 md:gap-4 xl:gap-4 2xl:gap-4">
                            <h2 className="text-xl sm:text-xl md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl font-semibold text-gray-900 mb-1">
                                Details
                            </h2>
                            <p className="text-gray-700 text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-lg">
                                <span className="poppins-medium text-gray-900">Material:</span> {product.material}
                            </p>
                            <p className="text-gray-700 text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-lg">
                                <span className="poppins-medium text-gray-900">Type:</span> {product.type}
                            </p>
                            <p className="text-gray-700 text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-lg">
                                <span className="poppins-medium text-gray-900">Weight:</span> {product.weight}
                            </p>
                            <p className="text-gray-700 text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-lg text-justify">
                                <span className="poppins-medium text-gray-900">Suitable for:</span> {product.suitablefor}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Description Section */}
                <div className="mt-6 sm:mt-8 md:mt-8 lg:mt-8 xl:mt-8 2xl:mt-8">
                    <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl font-semibold text-gray-900 mb-2">
                        Description
                    </h2>
                    <p className="text-gray-800 text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-lg leading-6 sm:leading-7 md:leading-7 lg:leading-8 xl:leading-9 2xl:leading-9 text-justify">
                        {product.description}
                    </p>
                </div>
            </div>
        </>
    )
}

export default Othercategory