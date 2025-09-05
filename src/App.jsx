import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Investor from './pages/Investor'
import Products from './pages/Products'
import Roadmap from './pages/Roadmap'
import About from './pages/About'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Support from './pages/Support'
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import Footer from './Components/Footer'

export default function App() {
  return (
    <div className='px-4 sm:px-[5vw md:px-[7vw] lg:px-[9vw]'>
       <Navbar/>
      <Routes>
       
      <Route path='/' element={<Home/>}/>
      <Route path='/investor' element={<Investor/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/roadmap' element={<Roadmap/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/support' element={<Support/>}/>

      </Routes>
      <Footer/>
    </div>
  )
}
