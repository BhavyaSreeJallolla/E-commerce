import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';

const Product = () => {
  const { productId } = useParams();
  const { products } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');

  // Logging to verify that products and productId are correct
  console.log('Product ID:', productId);
  console.log('Products:', products);

  const fetchProductsData = () => {
    if (products && products.length > 0) {
      const product = products.find((item) => item._id === productId);
      if (product) {
        setProductData(product);
        setImage(product.image[0]); // Default to the first image
      } else {
        console.log('Product not found!');
      }
    } else {
      console.log('Products are not available or still loading.');
    }
  };

  useEffect(() => {
    fetchProductsData();
  }, [productId, products]);

  const handleImageClick = (img) => {
    setImage(img);
  };

  if (!productData) {
    // Show loading state while the product data is being fetched
    return <div>Loading product data...</div>;
  }

  return (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Product data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product Images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => handleImageClick(item)}
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                alt={`Product Image ${index}`}
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="Main Product" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
