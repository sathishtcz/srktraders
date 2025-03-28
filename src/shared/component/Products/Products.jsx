// src/components/ProductDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProducts } from '../../services/productService';

function Products() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const data = getProducts();
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
                        Our Products
                    </h1>

                    {/* Breadcrumb */}
                    <nav className="mt-2 sm:mt-4">
                        <ol className="flex space-x-2 text-white text-sm sm:text-base poppins-light">
                            <li>
                                <Link to="/" className="hover:text-[#00A8FF] text-[18px]">
                                    Home
                                </Link>
                            </li>
                            <li className=" text-[18px]">/</li>
                            <Link to="/our-products" className=" poppins-medium text-[18px]">Our Products</Link>
                            <li className="text-[#00A8FF] text-[18px]">/</li>
                            <li className="text-[#00A8FF]  poppins-medium text-[18px]">{product.category} Tiles</li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div className="pt-4 sm:pt-6 md:pt-8 lg:pt-10 xl:pt-12 pb-4 sm:pb-6 md:pb-8 lg:pb-10 xl:pb-12 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 max-w-full sm:max-w-[95%] md:max-w-[90%] lg:max-w-[85%] xl:max-w-[80%] 2xl:max-w-[75%] mx-auto">
                <div className="flex flex-col md:flex-row gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10">
                    {/* Product Image */}
                    <div className="w-full md:w-1/2">
                        <div className="border p-1 sm:p-2 md:p-3 lg:p-4 xl:p-6">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[320px] xl:h-[360px] 2xl:h-[380px] object-cover"
                            />
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className="w-full md:w-1/2">
                        <Link
                            to="/our-products"
                            className="text-[#00A8FF] hover:underline mb-2 sm:mb-3 md:mb-3 lg:mb-3 xl:mb-3 2xl:mb-3 inline-block text-lg sm:text-xl md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl"
                        >
                            &lt;  View Collection
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
                                <span className="poppins-medium text-gray-900">Size:</span> {product.size}
                            </p>
                            <p className="text-gray-700 text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-lg text-justify leading-relaxed">
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
    );
}

export default Products;