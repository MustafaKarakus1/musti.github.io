import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather'; 

export default function Carousel({ slides }) {
  const [curr, setCurr] = useState(0);

  const prev = () => setCurr(curr === 0 ? slides.length - 1 : curr - 1);
  const next = () => setCurr(curr === slides.length - 1 ? 0 : curr + 1);

  return (
    <div className="relative w-full max-w-screen-lg mx-auto h-64 md:h-80 lg:h-[500px] overflow-hidden">
      <div
        className="flex transition-transform ease-in-out duration-1000"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Slide ${index}`}
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        ))}
      </div>
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/80 text-gray-800 hover:bg-white"
      >
        <ChevronLeft size={30} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/80 text-gray-800 hover:bg-white"
      >
        <ChevronRight size={30} />
      </button>
      <div className="absolute bottom-4 right-0 left-0 flex items-center justify-center">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`transition-all w-3 h-3 bg-white rounded-full ${curr === i ? 'p-2' : 'bg-opacity-50'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
