import React from 'react';
import { Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline'; 

const Popup = ({ isOpen, onClose, trainer }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
      <div className="bg-white rounded-lg max-w-4xl mx-4 p-6 relative overflow-y-auto max-h-screen">
        <button
          type="button"
          className="absolute top-3 right-3"
          onClick={onClose}
        >
          <XMarkIcon className="h-6 w-6 text-gray-600" aria-hidden="true" />
        </button>
        <div className="flex flex-col md:flex-row">
          <img src={trainer.imageUrl} alt={trainer.name} className="w-full md:w-1/3 h-64 object-cover rounded-lg" />
          <div className="ml-0 md:ml-6 flex-1">
            <h2 className="text-2xl font-semibold text-gray-800">{trainer.name}</h2>
            <p className="text-gray-600 mt-2">{trainer.description}</p>
            
            <div className="mt-4">
              <iframe
                width="800" 
                height="450" 
                src="https://www.youtube.com/embed/xune4SREFCE" 
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-[40vh]" 
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default Popup;
