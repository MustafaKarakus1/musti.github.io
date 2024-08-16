import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import trainerImage from '../Assets/trainer.jpeg';
import Popup from './Popup';
import adam from '../Assets/adam1.jpg';
import FButton from '../ButtonFloat/FButton';
import { motion } from 'framer-motion';


const trainersData = [
  { name: 'Burak Uğur', description: 'Burak Uğur 1980 yılında İstanbul’da doğdu. 6 yaşında Doğan Kılıç Shotokan Karate ile Savaş sanatları yaşamı başladı Siyah kuşağını aldı. 10 Yaşında boksa başladı; Büyük Dere Borankay’ın hocası Taner Özal ve Beşiktaş’ta boks yaptı. 1994’te İsmail Kırtay ile kick boksa başladı. 17 yaşında Hollanda’da yapılan “8 Men Tournament”ı kazandı. London College İşletme mezunu olan Burak Uğur 2003 Yılında BUJIN Fight Club’ı açtı. 2004’te Türkiye ye ilk Brazilian jiu-jitsu tekniğini getirdi Helio Soneca ile seminer düzenledi ve mavi kuşağını aldı. 2007 yılında K-1 de dövüştü ve kazandı. 2009’da fonksiyonel fitness ve yeni model antrenman metodları eğitimi aldı ve BFC metod atletik gelişim programlarını yarattı. 2013 Yılında dövüş hayatına son veren Uğur, 2017’de Polis Özel Harekat başkanlığı için EGKT yakın dövüş müfredatı oluşturdu. 2018’de Narkotik eğitim akademisinde görev yaptı. 2019’da Helio Soneca dan Brazilian Jiu-Jitsu siyah kuşağını aldı. Burak Uğur halen BUJIN boks ve Muay Thai eğitmenlik seminerleri ve ders modelleri hakkında sertifika programları ve eğitimler düzenliyor. Muay Thai Federasyonu 2. Kademe eğitmeni ve Kempo Federasyonu teknik komite üyesidir.', imageUrl: adam },
  { name: 'Mustafa', description: 'Mustafa açıklaması burada.', imageUrl: adam },
  { name: 'Mustafa', description: 'Mustafa açıklaması burada.', imageUrl: adam },
  { name: 'Mustafa', description: 'Mustafa açıklaması burada.', imageUrl: adam },
  { name: 'Mustafa', description: 'Mustafa açıklaması burada.', imageUrl: adam },
  { name: 'Mustafa', description: 'Mustafa açıklaması burada.', imageUrl: adam },

];

const Trainers = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedTrainer, setSelectedTrainer] = useState(null);

  const openPopup = (trainer) => {
    setSelectedTrainer(trainer);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedTrainer(null);
  };

  return (
    <motion.div className="font-serif bg-brunswick-green"
    initial={{width: 0}}
    animate={{width: "100vw"}}
    exit={{x: window.innerWidth}}
    >
    <div className='bg-sage'>
      <Navbar />
      <div className='relative'>
        <img src={trainerImage} alt="page-image" className='w-full h-[76vh]' />
        <div className="absolute inset-0 flex items-center text-left pl-12">
          <h2 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">Bizimle Tanışmanın <br /> Tam Zamanı!</h2>
        </div>
      </div>
      <div>
        <h2 className="text-white flex items-center justify-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold pt-12 pb-12 ">ANTRENÖRLERİMİZ</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-6">
        {trainersData.map((trainer, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden max-w-xs mx-auto cursor-pointer"
            onClick={() => openPopup(trainer)}
          >
            <img className="w-full h-48 object-cover" src={trainer.imageUrl} alt={trainer.name} />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{trainer.name}</h2>
              {/* Açıklama kaldırıldı */}
            </div>
          </div>
        ))}
      </div>
      {isPopupOpen && selectedTrainer && (
        <Popup isOpen={isPopupOpen} onClose={closePopup} trainer={selectedTrainer} />
      )}

    </div>
    <Footer />
    <FButton/>
    </motion.div>
  );
};

export default Trainers;
