import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../Components/Title';
import ProductItem from '../Components/ProductItem';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevent');

  // Category toggle
  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  // Subcategory toggle
  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  // Apply filter and sort combined
  useEffect(() => {
    let productsCopy = [...products];

    // Apply search filter
    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Apply category filter
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    // Apply subcategory filter
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    // Apply sorting
    if (sortType === 'low-high') {
      productsCopy.sort((a, b) => a.price - b.price);
    } else if (sortType === 'high-low') {
      productsCopy.sort((a, b) => b.price - a.price);
    }

    setFilterProducts(productsCopy); // Update filtered products
  }, [category, subCategory, search, showSearch, sortType, products]);

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
        {/* Filter options */}
        <div className="min-w-60">
          <p onClick={() => setShowFilter(!showFilter)} className="my-2 text-xl flex items-center cursor-pointer gap-2">
            FILTERS
          </p>
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />

          {/* Category filter */}
          <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
            <p className="mb-3 text-sm font-medium">CATEGORY</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <p className="flex gap-2">
                <input className="w-3" type="checkbox" value="Men" onChange={toggleCategory} />Men
              </p>
              <p className="flex gap-2">
                <input className="w-3" type="checkbox" value="Women" onChange={toggleCategory} />Women
              </p>
              <p className="flex gap-2">
                <input className="w-3" type="checkbox" value="Kids" onChange={toggleCategory} />Kids
              </p>
            </div>
          </div>

          {/* SubCategory Filter */}
          <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
            <p className="mb-3 text-sm font-medium">TYPE</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <p className="flex gap-2">
                <input className="w-3" type="checkbox" value="Topwear" onChange={toggleSubCategory} />Topwear
              </p>
              <p className="flex gap-2">
                <input className="w-3" type="checkbox" value="Bottomwear" onChange={toggleSubCategory} />Bottomwear
              </p>
              <p className="flex gap-2">
                <input className="w-3" type="checkbox" value="Winterwear" onChange={toggleSubCategory} />Winterwear
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1">
        <div className="flex justify-center text-base sm:text-2xl mb-4">
          <Title text1="ALL" text2="COLLECTIONS" />
          {/* PRODUCT SORT */}
          <select onChange={(e) => setSortType(e.target.value)} className="mx-20 border-2 border-gray-300 text-sm px-2">
            <option value="relevent">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>
        {/* Map Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.length > 0 ? (
            filterProducts.map((item, index) => (
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collection;
