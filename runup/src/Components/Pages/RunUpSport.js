import React from 'react'
import Navbar from '../Navbar/Navbar'; 
import Footer from '../Footer/Footer';
import RunSpor from '../Assets/RunSpor.png';
import page from '../Assets/page.png';
import FButton from '../ButtonFloat/FButton';
import { motion } from 'framer-motion';


const RunUpSport = () => {
  return (
    <motion.div className="font-serif bg-brunswick-green"
    initial={{width: 0}}
    animate={{width: "100vw"}}
    exit={{x: window.innerWidth}}
    >
    <div className='bg-sage'>
      <Navbar/>
      <div className='relative '>
        <img src={page} alt="page-image" className='w-full'/>
        <div className="absolute inset-0 flex items-center pl-12">
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">RunUp Sport</h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-white">
        <div className="relative flex flex-col gap-y-4 items-start justify-center w-full aspect-square p-12">
          <h2 className="text-5xl font-bold text-left pb-12 ">RunUp Sport</h2>
          <span className='text-2xl text-left '>
              RunUp Spor, üyelerine fitness, crossfit, spinning, pilates, squash, zumba, step aerobik, basketbol, boks ve daha pek çok alanda spor yapma olanağı sunan, 3000 metrekare kapalı alanı, 5.5m yüksek tavanı, kapalı ve açık otoparkı, saunası ve buhar odası ile hizmet sunan, Konya’nın en büyük spor kompleksi… Sahip olduğu alanda üyelerine haftanın her günü 7:00-23:00 hizmet veren RunUp, siz değerli ziyaretçimizi de kompleksimizde görmekten mutluluk duyar. Bize ulaşabilmek için aşağıdaki bilgileri kullanabilirsiniz.
          </span>
        </div>
        <div className="relative flex items-center justify-center w-full aspect-square p-12">
          <img src={RunSpor} alt="Resim 1" className="w-full h-full max-w-[70vh] max-h-[70vh] min-w-[250px] min-h-[250px] object-cover rounded-lg shadow-md" />
        </div>
      </div>
      </div>
      <Footer/>
      <FButton/>
    </motion.div>
  )
}

export default RunUpSport
