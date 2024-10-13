import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid gird-colls-[3fr_1fr_fr] gap-4 my-10 mt-40 text-sm'> 
            <div>
                <img src={assets.logo} className='mb-5 w-32' alt=""/>
                <p className='w-full md:w-2/3 text-gray-600'>
                   Lorem Ipsum is simply dummy text of the printing and typsetting in industry
                </p>
            </div>

        </div>
        <div>
            <p className='text-xl font-medium mb-5'> COMPANY</p>
            <ul  className='flex flex-col gap-1 text-gray-600'> 
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'> GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600 ' >
            <li>83093-273878</li>
            <li>contact@bhavya.com</li>
            </ul>
        </div>
        <div>
            <hr/>
            <p className='py-5 text-sm text-center'>Copyright 2024@ bhavya.com- All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer