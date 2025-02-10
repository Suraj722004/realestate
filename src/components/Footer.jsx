import React from 'react'
import { userDarkMode } from './DarkModeContext'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaBuilding, FaMobile, FaFax, FaArrowUp, FaSun, FaMoon } from 'react-icons/fa'
import { Link } from 'react-scroll'
import { IoMdMail } from 'react-icons/io'
import prop2 from '../assets/images/prop2.jfif'
import prop4 from '../assets/images/prop4.jpg'

const Footer = () => {

  const { darkMode, toggleDarkMode } = userDarkMode();

  return (
    <>
    <footer className={`${darkMode ? 'dark:bg-black' :'light bg-gray-800 ' } w-full m-auto lg:px-20 px-10 py-20 grid lg:grid-cols-3 grid-cols-1 justify-center items-start lg:gap-20 gap-10`}>
      <div className='flex flex-col justify-center items-startgap-5'>
        <h1 className='text-white text-2xl font-semibold'>About us</h1>
        <p className='text-slate-200 text-justify '>Your trusted partner in real estate. We specialize in helping you find your dream home.</p>
        <div id='social-icons' className='flex justify-start items-center gap-4 mt-4 '>
          <div className='p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300'>
            <FaFacebookF className='size-5' />
            </div>
            <div className='p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300'>
            <FaInstagram className='size-5' />
            </div>
            <div className='p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300'>
            <FaTwitter className='size-5' />
            </div>
            <div className='p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300'>
            <FaYoutube className='size-5' />
          </div>
        </div>
       <h1 className='text-white mt-8'>Copyright realestate, All rights reserved</h1>
      </div>

      <div className='flex flex-col justify-center items-start gap-5'>
        <h1 className='text-white text-2xl font-semibold'>Contact Us</h1>
        <div className='flex justify-center items-center gap-3'>
          <FaBuilding className='text-white size-5'/>
          <p className='text-slate-200'>We pride ourselves on our personalized service and commitment to our clients. Whether you are a first-time buyer or looking to invest, we are here to help!</p>
        </div>
        
        <div className='flex justify-center items-center gap-3'>
          <FaMobile className='text-white size-5'/>
          <p className='text-slate-200'>+91 8765345457</p>
        </div>
        <div className='flex justify-center items-center gap-3'>
          <FaFax className='text-white size-5'/>
          <p className='text-slate-200'>949445949</p>
        </div>
        <div className='flex justify-center items-center gap-3'>
          <IoMdMail className='text-white size-5'/>
          <p className='text-slate-200'>demo@gmail.com</p>
        </div>
      </div>
      <div className='flex flex-col justify-center items-start gap-5'>
         <h1 className='text-white text-2xl font-semibold '>Latest Properties</h1>
         <div className='flex justify-center items-center gap-4'>
          <img src={prop2} alt="" className='w-[120px] rounded-lg transform hover:scale-110 cursor-pointer transition-transform duration-300'/>
          <div >
            <h1 className='text-lg text-white'>Villa with amazing view</h1>
            <p className='text-slate-400'>₹ 80,00,000</p>
          </div>
         </div>
         <div className='flex justify-center items-center gap-4'>
          <img src={prop4} alt="" className='w-[120px] rounded-lg transform hover:scale-110 cursor-pointer transition-transform duration-300'/>
          <div >
            <h1 className='text-lg text-white'>Smart view from beach</h1>
            <p className='text-slate-400'>₹ 100,00,000</p>
          </div>
         </div>
      </div>
    </footer>

    <div id='icon-box' className='bg-red-600 p-4 rounded-full hover:bg-black cursor-pointer fixed lg:bottom-12 bottom-6 right-6'>
      <Link  to='hero' spy={true} offset={-100} smooth={true}>
      <FaArrowUp className='size-6 text-white'/>
      </Link>
    </div>

    <div>
      <button onClick={toggleDarkMode} className='flex items-center p-4 rounded-full bg-orange-500 fixed lg:top-52 right-6 top-6'>
        {darkMode ? <FaMoon size={25} className='text-black '/> : <FaSun size={25} className='text-black'/> }
      </button>
    </div>
    </>
  )
}

export default Footer
