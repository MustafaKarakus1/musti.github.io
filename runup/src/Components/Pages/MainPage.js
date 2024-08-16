import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import 'tailwindcss/tailwind.css'; 
import Footer from '../Footer/Footer';
import image1 from '../Assets/slider-1.jpg';
import image2 from '../Assets/slider-2.jpg';
import image3 from '../Assets/slider-3.jpg';
import crossfit from '../Assets/crossfit.jpg';
import spinning from '../Assets/spinning.jpg';
import boks from '../Assets/boks.jpg';
import basketball from '../Assets/basketball.jpg';
import squash from '../Assets/squash.jpg';
import zumba from '../Assets/zumba.jpg';
import FButton from '../ButtonFloat/FButton';
import './style.css';
import { motion } from 'framer-motion';

const MainPage = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = [image1, image2, image3]; 

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex(prevIndex => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer); 
  }, [slides.length]);

  return (
    <motion.div className="font-serif bg-brunswick-green"
    initial={{width: 0}}
    animate={{width: "100vw"}}
    exit={{x: window.innerWidth}}
    >
      <Navbar />
      <div className="relative mt-[navbar-height]">
        <div className="relative w-full h-[76vh] overflow-hidden m-0 p-0">
          {slides.map((src, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                slideIndex === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={src}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover m-0 p-0"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="bg-sage p-12">
        <div className="relative flex items-center justify-center text-center text-white ">
          <div>
            <h2 className="text-5xl font-bold mb-12">Yeni Bir Yaşam Tarzı İçin Bize Katılın!</h2>
            <h2 className="text-xl font-bold mb-12">
              Konya'nın En Ferah Spor Salonu Açıldı! Hem de Şehrin Tam Ortasında. Hadi </h2>
              <h3 className="text-3xl font-bold mt-4 pt-2" data-text="#KendİnİGöster"> ................................. </h3>
          </div>
        </div>
        <div className="fit-container pt-8 p-12 border-t  border-brunswick-green">
          <span className="flex text-white font-bold items-center justify-center text-center text-3xl p-12 underline underline-offset-8">STÜDYOLAR</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 place-items-center">
          <div className="relative flex items-center justify-center w-[30vw] aspect-square">
            <img src={crossfit} alt="Crossfit" className="w-full h-full object-cover rounded-lg shadow-md" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg p-4">
              <span className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2">Crossfit</span>
            </div>
          </div>

          <div className="relative flex items-center justify-center w-[30vw] aspect-square">
            <img src={spinning} alt="Spinning" className="w-full h-full object-cover rounded-lg shadow-md" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <span className="text-white text-xl font-bold">Spinning</span>
            </div>
          </div>

          <div className="relative flex items-center justify-center w-[30vw] aspect-square">
            <img src={boks} alt="Boks" className="w-full h-full object-cover rounded-lg shadow-md" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <span className="text-white text-xl font-bold">Boks</span>
            </div>
          </div>

          <div className="relative flex items-center justify-center w-[30vw] aspect-square">
            <img src={basketball} alt="Basketbol" className="w-full h-full object-cover rounded-lg shadow-md" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <span className="text-white text-xl font-bold">Basketbol</span>
            </div>
          </div>

          <div className="relative flex items-center justify-center w-[30vw] aspect-square">
            <img src={squash} alt="Squash" className="w-full h-full object-cover rounded-lg shadow-md" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <span className="text-white text-xl font-bold">Squash</span>
            </div>
          </div>

          <div className="relative flex items-center justify-center w-[30vw] aspect-square">
            <img src={zumba} alt="Zumba" className="w-full h-full object-cover rounded-lg shadow-md" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <span className="text-white text-xl font-bold">Zumba</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <FButton />
    </motion.div>
  );
}

export default MainPage;
