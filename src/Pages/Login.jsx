import React, { useState } from 'react'

const Login = () => {
  const [currentState, setCurrentState]=useState('SignUp');
  const onSubmitHandler =async(event)=>{
    event.preventDefault();
  }

  return (
    
      <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[98%] sm:max-w-96 m-auto mt-4 gap-4 text-black' >
        <div className='inline-flex  items-center gap-2 mb-2 mt-10'>
          <p className='prata-regular text-3xl'>{currentState}</p>
          <hr className='border-none h-[1.5px]  w-8 bg-gray-800'/>
        </div>
       {currentState=='Login ' ? '' :<input  typeof="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Name' required  /> }
        <input typeof="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required  />
        <input typeof="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Password'   required />
        <div className='w-full flex justify-between  text-sm mt-[-8px]'>
          <p  className='cursor-pointer'>forgot your password</p>
          { 
            currentState=='Login'
           ? <p   onClick={()=> setCurrentState('')}  className='cursor-pointer'>Create account</p>
           : <p   onClick={()=> setCurrentState('')}  className='cursor-pointer'>Login Here</p>
          }
      
        </div>
        <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState}</button>
      </form>
  
  ) 
}

export default Login