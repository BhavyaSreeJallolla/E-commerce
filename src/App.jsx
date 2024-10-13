import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Collection from './Pages/Collection'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Product from './Pages/Product'
import Card from './Pages/Card'
import Login from './Pages/Login'
import { PlaceOrder } from './Pages/PlaceOrder'
import Orders from './Pages/Orders'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import SearchBar from './Components/SearchBar'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar/>
      <SearchBar/>
      <Routes>
          <Route path='/' element={<Home/>}  />
          <Route path='/collection' element={<Collection/>}  />
          <Route path='/about' element={<About/>}  />
          <Route path='/contact' element={<Contact/>}  />
          <Route path='/product/:productId' element={<Product/>}  />
          <Route path='/card' element={<Card/>}  />
          <Route path='/login' element={<Login/>}  />
          <Route path='/place-order' element={<PlaceOrder/>}  />
          <Route path='/orders' element={<Orders/>}  />
      </Routes>
      <Footer/>

    </div>
  )
}

export default App