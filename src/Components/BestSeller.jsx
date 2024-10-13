import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]); // Ensure consistent variable name

    useEffect(() => {
        const bestProduct = products.filter((item) => (item.bestSeller)); 
        setBestSeller(bestProduct.slice(0, 5)) // Update with consistent name
    }, []);

    return (
        <div className='my-10'>
            <div className='text-center text-3xl py-8'>
                <Title text1={'BEST'} text2={'SELLERS'} /> 
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-5'>  
                {
                    bestSeller.map((item, index) => ( // Make sure bestSellers is consistent
                        <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
                    ))
                }
            </div>
        </div>
    );
}


export default BestSeller;
