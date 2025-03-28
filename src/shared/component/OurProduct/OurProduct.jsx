import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getProducts } from '../../services/productService';
import whitecross from '/assets/images/Header/whitecross.png';

function OurProduct() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [displayCount, setDisplayCount] = useState(16);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isFilterFixed, setIsFilterFixed] = useState(false);
  const filterSidebarRef = useRef(null);
  const filterButtonRef = useRef(null);
  const filterButtonContainerRef = useRef(null);

  const categories = ['Floor', 'Wall', 'Kitchen', 'Stair', 'Parking', 'Roof', 'Bathroom'];

  // Get the category from the URL query parameter
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialCategory = queryParams.get('category') || '';

  useEffect(() => {
    const data = getProducts();
    setProducts(data);
    setFilteredProducts(data);

    // If there's an initial category from the URL, set it as the selected category
    if (initialCategory && categories.includes(initialCategory)) {
      setSelectedCategories([initialCategory]);
      // Filter products based on the initial category
      setFilteredProducts(data.filter((product) => product.category === initialCategory));
    } else {
      setSelectedCategories([]);
      setFilteredProducts(data);
    }

    setDisplayCount(16);
  }, [initialCategory]); // Re-run when the initialCategory changes

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        filterSidebarRef.current &&
        !filterSidebarRef.current.contains(event.target) &&
        isFilterOpen
      ) {
        setIsFilterOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isFilterOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (filterButtonRef.current && filterButtonContainerRef.current) {
        const headerHeight = window.innerWidth < 640 ? 70 : 80;
        const filterButtonTop = filterButtonContainerRef.current.getBoundingClientRect().top;
        const scrollPosition = window.scrollY;

        const filterButtonOffsetTop = filterButtonContainerRef.current.offsetTop;

        if (filterButtonTop <= headerHeight && scrollPosition > filterButtonOffsetTop - headerHeight) {
          setIsFilterFixed(true);
        } else {
          setIsFilterFixed(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleCategoryChange = (category) => {
    let updatedCategories;
    if (selectedCategories.includes(category)) {
      updatedCategories = selectedCategories.filter((cat) => cat !== category);
    } else {
      updatedCategories = [...selectedCategories, category];
    }
    setSelectedCategories(updatedCategories);

    if (updatedCategories.length === 0) {
      setFilteredProducts(products);
      setDisplayCount(16);
    } else {
      setFilteredProducts(products.filter((product) => updatedCategories.includes(product.category)));
      setDisplayCount(16);
    }

    // Update the URL with the selected categories
    const query = updatedCategories.length > 0 ? `?category=${updatedCategories[0]}` : '';
    window.history.replaceState(null, '', `/our-products${query}`);
  };

  const handleLoadMore = () => {
    setDisplayCount((prevCount) => prevCount + 16);
  };

  return (
    <>
      <div
        className="relative bg-cover bg-center flex flex-col items-center justify-around h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] 2xl:h-[450px]"
        style={{ backgroundImage: "url('/assets/images/About/Banner.png')" }}
      >
        <div className="absolute inset-0 bg-[#001C2B] opacity-50"></div>
        <div></div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <h1 className="alice-regular text-3xl sm:text-4xl md:text-[40px] text-white">
            Our Products
          </h1>

          <nav className="mt-2 sm:mt-4">
            <ol className="flex space-x-2 text-white text-sm sm:text-base poppins-light">
              <li>
                <Link to="/" className="hover:text-[#00A8FF] text-[18px]">
                  Home
                </Link>
              </li>
              <li className="text-[#00A8FF] text-[18px]">/</li>
              <li className="text-[#00A8FF] poppins-medium text-[18px]">Our Products</li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="pt-6 sm:pt-8 md:pt-10 lg:pt-[50px] pb-6 sm:pb-8 md:pb-10 lg:pb-[50px] px-4 sm:px-6 md:px-8 lg:px-[150px]">
        {/* Heading and Subheading */}
        <div className="text-center mb-4 sm:mb-6 md:mb-8 lg:mb-10">
          <div className="grid grid-cols-3 items-center">
            <hr className="border-gray-500" />
            <h2 className="alice-regular text-base sm:text-2xl md:text-3xl lg:text-[35px] text-[#080808]">
              YOUR STYLE, OUR PRODUCTS
            </h2>
            <hr className="border-gray-500" />
          </div>
          <p className="text-sm sm:text-sm md:text-base lg:text-[18px] poppins-regular leading-relaxed sm:leading-[24px] md:leading-[28px] lg:leading-[32px] mt-2 text-pretty max-w-[60rem] mx-auto">
            Explore Our Premium and Signature Collection at Your Convenience
          </p>
        </div>

        {/* Filter Button for md, sm, xs */}
        <div ref={filterButtonContainerRef}>
          <div
            ref={filterButtonRef}
            className={`lg:hidden ${
              isFilterFixed
                ? 'fixed top-[70px] sm:top-[80px] md:top-[80px] left-0 right-0 z-20'
                : 'relative'
            } bg-white shadow-md px-4 py-2 flex justify-between items-center`}
          >
            <div className="flex items-center cursor-pointer">
              <img
                onClick={() => setIsFilterOpen(true)}
                src="/assets/images/Ourproducts/filter.png"
                alt="Filter Icon"
                className="w-6 h-6 mr-2"
              />
              <button
                onClick={() => setIsFilterOpen(true)}
                className="text-lg font-semibold text-[#080808] cursor-pointer"
              >
                Filter
              </button>
            </div>
            <div className="text-sm text-gray-600 poppins-regular">
              Total Results: {filteredProducts.length}
            </div>
          </div>
        </div>

        {/* Filter Sidebar for md, sm, xs */}
        <div
          ref={filterSidebarRef}
          className={`lg:hidden fixed top-0 right-0 h-full w-3/4 sm:w-2/3 md:w-1/2 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
            isFilterOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex justify-between items-center bg-[#00A8FF] text-white px-4 py-2">
            <h2 className="text-lg font-semibold">Filter By Category</h2>
            <button className="cursor-pointer" onClick={() => setIsFilterOpen(false)}>
              <img src={whitecross} alt="Close Filter" className="w-6 h-6" />
            </button>
          </div>
          <ul className="p-4">
            {categories.map((category) => (
              <li key={category} className="mb-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                    className="mr-2 h-5 w-5 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="poppins-regular">{category} Tiles</span>
                </label>
                <hr className="mt-1 w-full" />
              </li>
            ))}
          </ul>
          <div className="absolute bottom-4 right-4">
            <button
              onClick={() => setIsFilterOpen(false)}
              className="bg-[#00A8FF] text-white px-6 py-2 rounded-lg hover:bg-[#008ECC] transition-colors duration-300 poppins-medium cursor-pointer"
            >
              Apply
            </button>
          </div>
        </div>

        {/* Overlay for md, sm, xs when filter is open */}
        {isFilterOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsFilterOpen(false)}
          />
        )}

        <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-40px] ml-0 sm:ml-3">
          {/* Filter Section for lg and larger */}
          <div className="hidden lg:block w-full md:w-1/4 lg:w-[250px] md:sticky md:top-[calc(64px+2.5rem)] self-start">
            <div className="bg-white shadow">
              <div className="bg-[#00A8FF] text-white px-4 py-2 flex justify-center items-center">
                <img
                  src="/assets/images/Ourproducts/filter.png"
                  alt="Filter Icon"
                  className="w-7 h-7 mr-2 bg-white p-1 rounded"
                />
                <h2 className="text-lg font-semibold whitespace-normal">Category</h2>
              </div>
              <ul className="p-4">
                {categories.map((category) => (
                  <li key={category} className="mb-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => handleCategoryChange(category)}
                        className="mr-2 h-5 w-5 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="poppins-regular">{category} Tiles</span>
                    </label>
                    <hr className="mt-1 w-full" />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Products Grid */}
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-0 lg:py-0 py-4">
            <div className="hidden lg:block mb-4 text-sm text-gray-600 poppins-regular">
              Total Results: {filteredProducts.length}
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl">
                There is No Product Image Found
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-[20px]">
                  {filteredProducts.slice(0, displayCount).map((product) => (
                    <Link
                      to={`/products/${product.id}`}
                      key={product.id}
                      className="block"
                    >
                      <div className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-300 rounded p-4">
                        <div className="w-full aspect-[4/3] max-h-[400px] md:max-h-[300px] sm:max-h-[250px] xs:max-h-[200px]">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover object-center rounded"
                            loading="lazy"
                          />
                        </div>
                        <p className="mt-2 text-sm sm:text-base md:text-base lg:text-lg poppins-regular text-[#080808] text-center">
                          {product.name}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>

                {filteredProducts.length > displayCount && (
                  <div className="text-center mt-6">
                    <button
                      onClick={handleLoadMore}
                      className="bg-[#00A8FF] text-white px-6 py-2 rounded-lg hover:bg-[#008ECC] transition-colors duration-300 poppins-medium text-sm sm:text-base md:text-lg"
                    >
                      Load More Results
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default OurProduct;

// in this code i want the filter section is like in flipkart which is mentioned in image is only for md,sm,xs.... for lg it remains ok....see only the filter in flipkart dont see other ...i want only filter not want sort ..so place filter and its icon img of top after the heading and subheading section  for md,sm,xs devices  and that filter should fix top while scrolling...then when i click the filter button it should the filter cateegory from right side and i click checkbox give apply button in the bottom right side and the filter should work correctly as now  and i want  the product name should show in the below of that product image and i want to show total product result count and its also for filter count  dont chnage any others


// // src/components/OurProduct.jsx
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { getProducts } from '../../services/productService';

// function OurProduct() {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [selectedCategories, setSelectedCategories] = useState([]);

//   const categories = ['Floor', 'Wall', 'Kitchen', 'Stair', 'Parking', 'Roof'];

//   useEffect(() => {
//     const data = getProducts();
//     setProducts(data);
//     // Initially show all products, but don't tick any categories
//     setFilteredProducts(data);
//     // Keep selectedCategories empty so no checkboxes are ticked
//     setSelectedCategories([]);
//   }, []);

//   const handleCategoryChange = (category) => {
//     let updatedCategories;
//     if (selectedCategories.includes(category)) {
//       // Remove category if already selected
//       updatedCategories = selectedCategories.filter((cat) => cat !== category);
//     } else {
//       // Add category if not selected
//       updatedCategories = [...selectedCategories, category];
//     }

//     setSelectedCategories(updatedCategories);

//     // If no categories are selected, show all products
//     if (updatedCategories.length === 0) {
//       setFilteredProducts(products);
//     } else {
//       // Filter products based on selected categories
//       setFilteredProducts(products.filter((product) => updatedCategories.includes(product.category)));
//     }
//   };

//   return (
//     <>
//       <div
//         className="relative bg-cover bg-center flex flex-col items-center justify-around h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] 2xl:h-[450px]"
//         style={{ backgroundImage: "url('/assets/images/About/Banner.png')" }}
//       >
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-[#001C2B] opacity-50"></div>
//         <div></div>

//         {/* Centered Content */}
//         <div className="relative z-10 flex flex-col items-center justify-center text-center">
//           {/* Title */}
//           <h1 className="alice-regular text-3xl sm:text-4xl md:text-[40px] text-white">
//             Our Products
//           </h1>

//           {/* Breadcrumb */}
//           <nav className="mt-2 sm:mt-4">
//             <ol className="flex space-x-2 text-white text-sm sm:text-base poppins-light">
//               <li>
//                 <Link to="/" className="hover:text-[#00A8FF] text-[18px]">
//                   Home
//                 </Link>
//               </li>
//               <li className="text-[#00A8FF] text-[18px]">/</li>
//               <li className="text-[#00A8FF] poppins-medium text-[18px]">Our Products</li>
//             </ol>
//           </nav>
//         </div>
//       </div>

//       <div className="pt-6 sm:pt-8 md:pt-10 lg:pt-[50px] pb-6 sm:pb-8 md:pb-10 lg:pb-[50px] px-4 sm:px-6 md:px-8 lg:px-[150px]">
//         {/* Heading and Subheading */}
//         <div className="text-center mb-4 sm:mb-6 md:mb-8 lg:mb-10">
//           <div className="grid grid-cols-3 items-center">
//             <hr className="border-gray-500" />
//             <h2 className="alice-regular text-base sm:text-2xl md:text-3xl lg:text-[35px] text-[#080808]">
//               YOUR STYLE, OUR PRODUCTS
//             </h2>
//             <hr className="border-gray-500" />
//           </div>
//           <p className="text-sm sm:text-sm md:text-base lg:text-[18px] poppins-regular leading-relaxed sm:leading-[24px] md:leading-[28px] lg:leading-[32px] mt-2 text-pretty max-w-[60rem] mx-auto">
//             Explore Our Premium and Signature Collection at Your Convenience
//           </p>
//         </div>

//         <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-[75px] ml-0 sm:ml-3">
//           {/* Filter Section */}
//           <div className="w-full md:w-1/4 lg:w-[250px] md:sticky md:top-4 self-start">
//             <div className="bg-white shadow">
//               {/* Header */}
//               <div className="bg-[#00A8FF] text-white px-4 py-2 flex items-center">
//                 <img
//                   src="/assets/images/Ourproducts/filter.png"
//                   alt="Filter Icon"
//                   className="w-7 h-7 mr-2 bg-white p-1 rounded"
//                 />
//                 <h2 className="text-lg font-semibold">Filter By Category</h2>
//               </div>
//               {/* Filter Options */}
//               <ul className="p-4">
//                 {categories.map((category) => (
//                   <li key={category} className="mb-2">
//                     <label className="flex items-center">
//                       <input
//                         type="checkbox"
//                         checked={selectedCategories.includes(category)}
//                         onChange={() => handleCategoryChange(category)}
//                         className="mr-2 h-5 w-5 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
//                       />
//                       <span className="poppins-regular">{category} Tiles</span>
//                     </label>
//                     <hr className="mt-1 w-full" />
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           {/* Products Grid */}
//           <div className="w-full px-4 sm:px-6 md:px-8 lg:px-0">
//             {filteredProducts.length === 0 ? (
//               <div className="text-center text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl">
//                 There is No Product Image Found
//               </div>
//             ) : (
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-[20px]">
//                 {filteredProducts.map((product) => (
//                   <Link
//                     to={`/products/${product.id}`}
//                     key={product.id}
//                     className="block"
//                   >
//                     <div className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
//                       <img
//                         src={product.image}
//                         alt={product.name}
//                         className="w-full h-auto object-cover max-h-[500px] md:max-h-[400px] sm:max-h-[300px] xs:max-h-[200px]"
//                       />
//                     </div>
//                   </Link>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default OurProduct;

