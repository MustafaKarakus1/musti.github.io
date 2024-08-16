import React from 'react';
import Navbar from '../Navbar/Navbar';
import cafe from '../Assets/cafe.jpg';
import Footer from '../Footer/Footer';
import cafespor from '../Assets/cafespor.jpg';
import image1 from '../Assets/slider-1.jpg';
import image2 from '../Assets/slider-2.jpg';
import image3 from '../Assets/slider-3.jpg';
import FButton from '../ButtonFloat/FButton';
import Carousel from '../Pages/Carousel'; // Import the Carousel component
import { motion } from 'framer-motion';

const RunUpCafe = () => {
  const slides = [image1, image2, image3];

  return (
    <motion.div className="font-serif bg-brunswick-green"
    initial={{width: 0}}
    animate={{width: "100vw"}}
    exit={{x: window.innerWidth}}
    >
    <div className='bg-sage'>
      <Navbar/>
      <div className='relative'>
        <img src={cafe} alt="page-image" className='w-full h-[50vh] md:h-[60vh] lg:h-[76vh] object-cover'/>
        <div className="absolute inset-0 flex items-center pl-12">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">RunUp Cafe</h1>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="text-white relative flex flex-col gap-y-4 items-start justify-center w-full p-6 md:p-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-left pb-6 md:pb-12">RunUp Cafe</h2>
          <span className="text-lg md:text-xl lg:text-2xl text-left">
            RunUp Kafe’de kahvenizi içerken, kahve, t-shirt, protein tozu, ayakkabı, havlu ve daha pek çok spor eşyasını bulabilir, alışveriş kısmında alışverişinizi yapabilir, arkadaşlarınızla keyifli vakit geçirebilirsiniz.
          </span>
        </div>

        <div className="relative flex items-center justify-center w-full p-6 md:p-12">
          <img 
            src={cafespor} 
            alt="Resim 1" 
            className="w-full h-full max-w-[70vh] max-h-[70vh] min-w-[250px] min-h-[250px] object-cover rounded-lg shadow-md" 
          />
        </div>
      </div>
      
      <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[500px] overflow-hidden m-0 p-0">
        <Carousel slides={slides} />
      </div>


    </div>
    <Footer/>
    <FButton/>
    </motion.div>
  )
}

export default RunUpCafe;
