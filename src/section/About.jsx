import React, { useEffect } from 'react'
import { userDarkMode } from '../components/DarkModeContext'
import aboutimg from '../components/images/hero.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'

const About = () => {

   useEffect(() => {
      AOS.init({
        offset:200,
        duration: 800,
        easing: 'ease-in-sine',
        delay: 100,
     });
    }, [])

    const {darkMode, toggleDarkMode } = userDarkMode();


 return (
   <section id='about' className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'} w-full m-auto lg:px-40 px-10 py-20 grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10 `}>
    <div>
      <img data-aos="zoom-in" src={aboutimg} alt="about img" className='rounded-2xl lg:w-[500px] lg:h-[600px]' />
    </div>
    <div className='flex flex-col justify-center items-start gap-8'>
      <h1 data-aos="zoom-in" className='text-red-600 dark:text-white'> WHO WE ARE</h1>
      <h1 data-aos="zoom-in" data-aos-delay="200" className='text-black text-[20px] font-semibold leading-10 dark:text-white'>We specialize in buying, selling, and renting properties, offering expert guidance to help you find your dream home or the perfect investment. </h1>
      <p data-aos="zoom-in" data-aos-delay="400" className='text-xl text-gray-600 dark:text-white text-justify'>At NextDoor Realty, we specialize in helping buyers, sellers, and investors navigate the real estate market with confidence. Whether you're looking for your dream home, selling a property, or making a smart investment, our expert team is here to guide you every step of the way.</p>
      <button className='bg-red-600 dark:bg-red-700 hover:bg-black dark:hover:bg-white dark:hover:text-black text-lg p-4   text-white font-semibold rounded-xl cursor-pointer transform hover:scale-110 transition-transform duration-300'>READ MORE</button>

    </div>

   </section>
  )
}

export default About
