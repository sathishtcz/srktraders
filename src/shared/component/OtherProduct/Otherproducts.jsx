import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { otherproducts } from '../../services/otherproductservice';
import whitecross from '/assets/images/Header/whitecross.png';

function Otherproducts() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [displayCount, setDisplayCount] = useState(16);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isFilterFixed, setIsFilterFixed] = useState(false);
  const filterSidebarRef = useRef(null);
  const filterButtonRef = useRef(null);
  const filterButtonContainerRef = useRef(null);

  const categories = ['Cement', 'Pipe', 'Paint', 'Electrical', 'Steel'];

  const categoryBrandMapping = {
    Cement: ['Chettinad Cement', 'Coromandel King', 'Penna Cement'],
    Pipe: ['Finolex Pipes'],
    Paint: ['Asian Paints'],
    Electrical: ['Hindware', 'Crompton', 'RR Kabel', 'Legrand'],
    Steel: ['JSW Steel', 'Kamachi TMT Bars'],
  };

  useEffect(() => {
    const data = otherproducts();
    setProducts(data);
    setFilteredProducts(data);
    setSelectedCategories([]);
    setSelectedBrands([]);
    setDisplayCount(16);
  }, []);

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

    const brandsToKeep = updatedCategories.flatMap((cat) => categoryBrandMapping[cat] || []);
    const updatedBrands = selectedBrands.filter((brand) => brandsToKeep.includes(brand));
    setSelectedBrands(updatedBrands);

    updateFilteredProducts(updatedCategories, updatedBrands);
  };

  const handleBrandChange = (brand) => {
    const isBrandSuitable = selectedCategories.some((category) =>
      categoryBrandMapping[category]?.includes(brand)
    );

    if (!isBrandSuitable) return;

    let updatedBrands;
    if (selectedBrands.includes(brand)) {
      updatedBrands = selectedBrands.filter((b) => b !== brand);
    } else {
      updatedBrands = [...selectedBrands, brand];
    }

    setSelectedBrands(updatedBrands);

    updateFilteredProducts(selectedCategories, updatedBrands);
  };

  const updateFilteredProducts = (categories, brands) => {
    let filtered = products;

    if (categories.length === 0) {
      setFilteredProducts(filtered);
      setDisplayCount(16);
      return;
    }

    filtered = filtered.filter((product) => categories.includes(product.category));

    if (brands.length === 0) {
      setFilteredProducts(filtered);
      setDisplayCount(16);
      return;
    }

    const finalFiltered = filtered.filter((product) => {
      const relevantBrandsForCategory = categoryBrandMapping[product.category] || [];
      const selectedRelevantBrands = brands.filter((brand) =>
        relevantBrandsForCategory.includes(brand)
      );

      if (selectedRelevantBrands.length === 0) {
        return true;
      }

      return selectedRelevantBrands.includes(product.brand);
    });

    setFilteredProducts(finalFiltered);
    setDisplayCount(16);
  };

  const isBrandDisabled = (brand) => {
    if (selectedCategories.length === 0) return false;
    return !selectedCategories.some((category) =>
      categoryBrandMapping[category]?.includes(brand)
    );
  };

  const getVisibleBrands = () => {
    if (selectedCategories.length === 0) return [];
    const visibleBrands = new Set(
      selectedCategories.flatMap((category) => categoryBrandMapping[category] || [])
    );
    return Array.from(visibleBrands);
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
            Other Products
          </h1>

          <nav className="mt-2 sm:mt-4">
            <ol className="flex space-x-2 text-white text-sm sm:text-base poppins-light">
              <li>
                <Link to="/" className="hover:text-[#00A8FF] text-[18px]">
                  Home
                </Link>
              </li>
              <li className="text-[#00A8FF] text-[18px]">/</li>
              <li className="text-[#00A8FF] poppins-medium text-[18px]">Other Products</li>
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
              TRUSTED BUILDING ESSENTIALS
            </h2>
            <hr className="border-gray-500" />
          </div>
          <p className="text-sm sm:text-sm md:text-base lg:text-[18px] poppins-regular leading-relaxed sm:leading-[24px] md:leading-[28px] lg:leading-[32px] mt-2 text-pretty max-w-[60rem] mx-auto">
            From Cement and Steel to Pipes, Electricals, and Paints — Explore leading Brands that deliver unmatched strength, reliability, and lasting performance for every construction need!
          </p>
        </div>

        {/* Filter Button for md, sm, xs */}
        <div ref={filterButtonContainerRef}>
          <div
            ref={filterButtonRef}
            className={`lg:hidden ${
              isFilterFixed
                ? 'fixed top-[68px] sm:top-[76px] md:top-[78px] left-0 right-0 z-20'
                : 'relative '
            } bg-white shadow-md px-4 py-2 flex justify-between items-center`}
          >
            <div className="flex items-center">
              <img
               onClick={() => setIsFilterOpen(true)}
                src="/assets/images/Ourproducts/filter.png"
                alt="Filter Icon"
                className="w-6 h-6 mr-2"
              />
              <button
                onClick={() => setIsFilterOpen(true)}
                className="text-lg font-semibold text-[#080808]"
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
            <button onClick={() => setIsFilterOpen(false)}>
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
                  <span className="poppins-regular">{category}</span>
                </label>
                <hr className="mt-1 w-full" />
              </li>
            ))}
          </ul>

          {selectedCategories.length > 0 && (
            <>
              <div className="bg-[#00A8FF] text-white px-4 py-2 flex justify-center items-center">
                <h2 className="text-lg font-semibold whitespace-normal">Filter By Brand</h2>
              </div>
              <ul className="p-4">
                {getVisibleBrands().map((brand) => (
                  <li key={brand} className="mb-2">
                    <label
                      className={`flex items-center ${
                        isBrandDisabled(brand) ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand)}
                        onChange={() => handleBrandChange(brand)}
                        disabled={isBrandDisabled(brand)}
                        className="mr-2 h-5 w-5 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="poppins-regular">{brand}</span>
                    </label>
                    <hr className="mt-1 w-full" />
                  </li>
                ))}
              </ul>
            </>
          )}

          <div className="absolute bottom-4 right-4">
            <button
              onClick={() => setIsFilterOpen(false)}
              className="bg-[#00A8FF] text-white px-6 py-2 rounded-lg hover:bg-[#008ECC] transition-colors duration-300 poppins-medium"
            >
              Apply
            </button>
          </div>
        </div>

        {isFilterOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsFilterOpen(false)}
          />
        )}

        <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-40px ml-0 sm:ml-3">
          {/* Filter Section for lg and larger */}
          <div className="hidden lg:block w-full md:w-1/4 lg:w-[250px] md:sticky md:top-[calc(64px+2.5rem)] self-start">
            <div className="bg-white shadow">
              <div className="bg-[#00A8FF] text-white px-1 py-2 flex justify-center items-center">
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
                      <span className="poppins-regular">{category}</span>
                    </label>
                    <hr className="mt-1 w-full" />
                  </li>
                ))}
              </ul>

              {selectedCategories.length > 0 && (
                <>
                  <div className="bg-[#00A8FF] text-white px-4 py-2 flex justify-center items-center">
                    <img
                      src="/assets/images/Ourproducts/filter.png"
                      alt="Filter Icon"
                      className="w-7 h-7 mr-2 bg-white p-1 rounded"
                    />
                    <h2 className="text-lg font-semibold whitespace-normal">Brand</h2>
                  </div>
                  <ul className="p-4">
                    {getVisibleBrands().map((brand) => (
                      <li key={brand} className="mb-2">
                        <label
                          className={`flex items-center ${
                            isBrandDisabled(brand) ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={selectedBrands.includes(brand)}
                            onChange={() => handleBrandChange(brand)}
                            disabled={isBrandDisabled(brand)}
                            className="mr-2 h-5 w-5 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <span className="poppins-regular">{brand}</span>
                        </label>
                        <hr className="mt-1 w-full" />
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>

          {/* Products Grid */}
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-0  lg:py-0 py-4">
            <div className="hidden lg:block mb-4 text-sm text-gray-600 poppins-regular">
              Total Results: {filteredProducts.length}
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl">
                There is No Product Image Found
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-[20px]">
                  {filteredProducts.slice(0, displayCount).map((product) => (
                    <Link
                      to={`/other-category/${product.id}`}
                      key={product.id}
                      className="block"
                    >
                      {/* w-full aspect-[4/3] max-h-[400px] md:max-h-[300px] sm:max-h-[250px] xs:max-h-[200px] */}
                      
                      <div className="overflow-hidden  hover:shadow-lg transition-shadow duration-300 border border-gray-300 rounded">
                      <div className='w-full aspect-[26/15] sm:aspect-[26/15] md:aspect-[156/101] lg:aspect-[140/101] xl:aspect-[156/101] p-4'>
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full  object-contain rounded "
                        />
                        <p className="mt-2 text-sm sm:text-base md:text-base lg:text-lg poppins-regular text-[#080808] text-center">
                          {product.name}
                        </p>
                      </div>
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

export default Otherproducts;

// next i want as same as for my Other products...dont chnage the category and brand filter logic ...it should work for all devices
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { otherproducts } from '../../services/otherproductservice';

// function Otherproducts() {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [selectedCategories, setSelectedCategories] = useState([]);
//   const [selectedBrands, setSelectedBrands] = useState([]);

//   const categories = ['Cement', 'Pipe', 'Paint', 'Electrical' ,'Steel'];
//   const brands = [
//     'Chettinad Cement',
//     'Coromandel King',
//     'Penna Cement',
//     'Finolex Pipes',
//     'Asian Paints',
//     'Hindware',
//     'Crompton',
//     'RR Kabel',
//     'Legrand',
//     'JSW Steel',
//     'Kamachi TMT Bars'
//   ];

//   // Define category-brand mapping
//   const categoryBrandMapping = {
//     Cement: ['Chettinad Cement', 'Coromandel King', 'Penna Cement'],
//     Pipe: ['Finolex Pipes'],
//     Paint: ['Asian Paints'],
//     Electrical: ['Hindware', 'Crompton', 'RR Kabel', 'Legrand'],
//     Steel: ['JSW Steel', 'Kamachi TMT Bars']
//   };

//   // Define brand-category mapping (reverse mapping)
//   const brandCategoryMapping = {
//     'Chettinad Cement': ['Cement'],
//     'Coromandel King': ['Cement'],
//     'Penna Cement': ['Cement'],
//     'Finolex Pipes': ['Pipe'],
//     'Asian Paints': ['Paint'],
//     'Hindware': ['Electrical'],
//     'Crompton': ['Electrical'],
//     'RR Kabel': ['Electrical'],
//     'Legrand': ['Electrical'],
//     'JSW Steel': ['Steel'],
//     'Kamachi TMT Bars': ['Steel']
//   };

//   useEffect(() => {
//     const data = otherproducts();
//     setProducts(data);
//     // Initially show all products, but don't tick any categories or brands
//     setFilteredProducts(data);
//     setSelectedCategories([]);
//     setSelectedBrands([]);
//   }, []);

//   const handleCategoryChange = (category) => {
//     let updatedCategories;
//     if (selectedCategories.includes(category)) {
//       updatedCategories = selectedCategories.filter((cat) => cat !== category);
//     } else {
//       updatedCategories = [...selectedCategories, category];
//     }

//     setSelectedCategories(updatedCategories);

//     // Filter selected brands to only include those relevant to the updated categories
//     const brandsToKeep = updatedCategories.flatMap((cat) => categoryBrandMapping[cat] || []);
//     const updatedBrands = selectedBrands.filter((brand) => brandsToKeep.includes(brand));
//     setSelectedBrands(updatedBrands);

//     // Update filtered products
//     updateFilteredProducts(updatedCategories, updatedBrands);
//   };

//   const handleBrandChange = (brand) => {
//     // Check if the brand is suitable for any of the selected categories
//     const isBrandSuitable = selectedCategories.some((category) =>
//       categoryBrandMapping[category]?.includes(brand)
//     );

//     if (!isBrandSuitable) return; // Do nothing if brand is not suitable

//     let updatedBrands;
//     if (selectedBrands.includes(brand)) {
//       updatedBrands = selectedBrands.filter((b) => b !== brand);
//     } else {
//       updatedBrands = [...selectedBrands, brand];
//     }

//     setSelectedBrands(updatedBrands);

//     // Update filtered products
//     updateFilteredProducts(selectedCategories, updatedBrands);
//   };

//   const updateFilteredProducts = (categories, brands) => {
//     let filtered = products;

//     // If no categories are selected, show all products
//     if (categories.length === 0) {
//       setFilteredProducts(filtered);
//       return;
//     }

//     // Filter by categories
//     filtered = filtered.filter((product) => categories.includes(product.category));

//     // If no brands are selected, show all products for the selected categories
//     if (brands.length === 0) {
//       setFilteredProducts(filtered);
//       return;
//     }

//     // For each product, check if its category has a relevant selected brand
//     const finalFiltered = filtered.filter((product) => {
//       // Get the brands relevant to this product's category
//       const relevantBrandsForCategory = categoryBrandMapping[product.category] || [];
//       // Get the selected brands that are relevant to this product's category
//       const selectedRelevantBrands = brands.filter((brand) =>
//         relevantBrandsForCategory.includes(brand)
//       );

//       // If no selected brands are relevant to this product's category, include the product
//       if (selectedRelevantBrands.length === 0) {
//         return true;
//       }

//       // Otherwise, only include the product if its brand is one of the selected relevant brands
//       return selectedRelevantBrands.includes(product.brand);
//     });

//     setFilteredProducts(finalFiltered);
//   };

//   const isBrandDisabled = (brand) => {
//     // If no categories are selected, no brands are disabled (though brand filter won't be visible)
//     if (selectedCategories.length === 0) return false;

//     // Check if the brand is suitable for any of the selected categories
//     return !selectedCategories.some((category) =>
//       categoryBrandMapping[category]?.includes(brand)
//     );
//   };

//   // Get the list of brands to display based on selected categories
//   const getVisibleBrands = () => {
//     if (selectedCategories.length === 0) return [];
//     // Get all brands associated with the selected categories
//     const visibleBrands = new Set(
//       selectedCategories.flatMap((category) => categoryBrandMapping[category] || [])
//     );
//     return Array.from(visibleBrands);
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
//             Other Products
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
//               <li className="text-[#00A8FF] poppins-medium text-[18px]">Other Products</li>
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
//               TRUSTED BUILDING ESSENTIALS
//             </h2>
//             <hr className="border-gray-500" />
//           </div>
//           <p className="text-sm sm:text-sm md:text-base lg:text-[18px] poppins-regular leading-relaxed sm:leading-[24px] md:leading-[28px] lg:leading-[32px] mt-2 text-pretty max-w-[60rem] mx-auto">
//             From Cement and Steel to Pipes, Electricals, and Paints — Explore leading Brands that deliver unmatched strength, reliability, and lasting performance for every construction need!
//           </p>
//         </div>

//         <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-[75px] ml-0 sm:ml-3">
//           {/* Filter Section */}
//           <div className="w-full md:w-1/4 lg:w-[250px] md:sticky md:top-4 self-start">
//             <div className="bg-white shadow">
//               {/* Filter by Category */}
//               <div className="bg-[#00A8FF] text-white px-6 py-2 flex items-center">
//                 <img
//                   src="/assets/images/Ourproducts/filter.png"
//                   alt="Filter Icon"
//                   className="w-7 h-7 mr-2 bg-white p-1 rounded"
//                 />
//                 <h2 className="text-lg font-semibold whitespace-nowrap">Filter By Category</h2>
//               </div>
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
//                       <span className="poppins-regular">{category}</span>
//                     </label>
//                     <hr className="mt-1 w-full" />
//                   </li>
//                 ))}
//               </ul>

//               {/* Filter by Brand (only visible if categories are selected) */}
//               {selectedCategories.length > 0 && (
//                 <>
//                   <div className="bg-[#00A8FF] text-white px-4 py-2 flex items-center">
//                     <img
//                       src="/assets/images/Ourproducts/filter.png"
//                       alt="Filter Icon"
//                       className="w-7 h-7 mr-2 bg-white p-1 rounded"
//                     />
//                     <h2 className="text-lg font-semibold whitespace-nowrap">Filter By Brand</h2>
//                   </div>
//                   <ul className="p-4">
//                     {getVisibleBrands().map((brand) => (
//                       <li key={brand} className="mb-2">
//                         <label
//                           className={`flex items-center ${
//                             isBrandDisabled(brand) ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
//                           }`}
//                         >
//                           <input
//                             type="checkbox"
//                             checked={selectedBrands.includes(brand)}
//                             onChange={() => handleBrandChange(brand)}
//                             disabled={isBrandDisabled(brand)}
//                             className="mr-2 h-5 w-5 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
//                           />
//                           <span className="poppins-regular">{brand}</span>
//                         </label>
//                         <hr className="mt-1 w-full" />
//                       </li>
//                     ))}
//                   </ul>
//                 </>
//               )}
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
//                     to={`/other-category/${product.id}`}
//                     key={product.id}
//                     className="block"
//                   >
//                     <div className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-300">
//                       <img
//                         src={product.image}
//                         alt={product.name}
//                         className="w-full h-[202px] md:h-[202px] lg:h-[202px] sm:h-[180px] lg:w-[280px] sm:w-[312px] xl:w-[312px] xl:h-[202px] object-contain"
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

// export default Otherproducts;



//s