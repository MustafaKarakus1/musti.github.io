import React from 'react'
import Navbar from '../Navbar/Navbar'; 
import Footer from '../Footer/Footer';
import supplement from '../Assets/supplement.jpeg';
import proteintoz from '../Assets/proteintoz.png';
import glutamin from '../Assets/glutamin.png';
import kreatin from '../Assets/kreatin.png';
import bcaa from '../Assets/BCAA.png';
import gainer from '../Assets/gainer.png';
import FButton from '../ButtonFloat/FButton';
import './style.css';
import { motion } from 'framer-motion';


const Supplement = () => {
    return (
        <motion.div className="font-serif bg-brunswick-green"
            initial={{width: 0}}
            animate={{width: "100vw"}}
            exit={{x: window.innerWidth}}
            >        
            <div className='bg-sage'>
            <Navbar/>
            <div className='relative'>
                <img src={supplement} alt="page-image" className='w-full h-[76vh]'/>
                <div className="absolute inset-0 flex items-center pl-12">
                    <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">Supplement</h1>
                </div>
            </div>

            <div className=''>
                <h2 className="text-white flex items-center justify-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold pt-12 pb-6 ">Supplement</h2>
                <p className='text-white text-base md:text-lg leading-relaxed indent-8 p-4' > 
                    <strong>Supplementler,</strong> günlük beslenmenin yanı sıra vücut fonksiyonlarını desteklemek, 
                    performansı artırmak veya sağlık sorunlarına yardımcı olmak amacıyla kullanılan 
                    ek besin maddeleridir. Genellikle vitaminler, mineraller, proteinler, amino asitler, 
                    yağ asitleri ve bitkisel özler gibi çeşitli formlarda bulunurlar. Doğru kullanıldıklarında, 
                    supplementler eksik besin öğelerini tamamlayabilir, bağışıklık sistemini güçlendirebilir ve 
                    enerji seviyelerini artırabilir. Ancak, supplementlerin etkili ve güvenli bir şekilde kullanılması için, 
                    dengeli bir diyetle birlikte alınması ve bir sağlık uzmanının önerileri doğrultusunda kullanılması önemlidir. 
                    Kişisel sağlık durumuna ve beslenme ihtiyaçlarına göre uygun ürünlerin seçilmesi, sağlığın desteklenmesinde büyük rol oynar.</p>
            </div>
            <div className='bg-hunter-green'>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pb-6 text-white">
                <div className="relative flex flex-col gap-y-4 items-start justify-center w-full aspect-square p-12 ">
                    <h2 className="text-5xl font-bold text-left pb-12 ">Protein Tozu</h2>
                    <span className='text-2xl text-left indent-8 '>
                    <strong>Protein tozu,</strong> kas kütlesini artırmak, spor sonrası toparlanmayı hızlandırmak ve günlük protein ihtiyacını karşılamak amacıyla kullanılan bir besin takviyesidir. Genellikle sporcular ve aktif bireyler tarafından tercih edilir. Protein tozları, süt, yumurta, soya veya bezelye gibi çeşitli kaynaklardan elde edilir ve yüksek kaliteli protein içerir. Kas gelişimini destekler, metabolizmayı hızlandırır ve genel sağlık ve performansı iyileştirir.                    </span>
                </div>
                <div className="relative flex items-center justify-center w-full aspect-square p-12">
                    <img src={proteintoz} alt="Resim 12" className="w-full h-full max-w-[70vh] max-h-[70vh] min-w-[250px] min-h-[250px] object-cover rounded-lg shadow-md" />
                </div>
                <div className="relative flex flex-col gap-y-4 items-start justify-center w-full aspect-square p-12">
                    <h2 className="text-5xl font-bold text-left pb-12 ">Glutamin</h2>
                    <span className='text-2xl text-left indent-8 '>
                    <strong>Glutamin,</strong> Protein sentezine bağlı olan glutamin, vücutta en fazla bulunan amino asit çeşididir. Kas hücrelerinin yıkımını engelleyen glutamin, hücre büyümesinde de kilit işlev görür. Bağırsak sisteminde mucizevi iyileştirici etki gösteren, yaraların ve yanıkların hızlıca toparlanmasına katkı sağlayan glutamin, aynı zamanda büyüme hormonunun üretilmesine de yardımcı olur.</span>
                </div>
                <div className="relative flex items-center justify-center w-full aspect-square p-12">
                    <img src={glutamin} alt="Resim 13" className="w-full h-full max-w-[70vh] max-h-[70vh] min-w-[250px] min-h-[250px] object-cover rounded-lg shadow-md" />
                </div>
                <div className="relative flex flex-col gap-y-4 items-start justify-center w-full aspect-square p-12">
                    <h2 className="text-5xl font-bold text-left pb-12 ">Kreatin</h2>
                    <span className='text-2xl text-left indent-8 '>
                    <strong>Kreatin,</strong> Sporcuların bir diğer favorisi olan kreatin ise eksikliği sadece dışarıdan giderilebilecek vitaminler arasında bulunur. Sadece balık ve etten alınabilen ancak kilolarca et yenilse bile yeterli seviyeye gelmeyecek değerleri dengeleyen kreatin, kas gelişimine ve güçlenmesine büyük bir katkı sağlar. Anlık enerji üretimini arttıran, kas kütlesi artışını kaslarda su tutarak sağlayan kreatinin görevi sadece bunlarla sınırlı değil. Kreatin aynı zamanda hafızayı destekler, hücre üretim kapasitesini arttırır ve yaşlanma karşıtı etki gösterir.
                    </span>
                </div>                
                <div className="relative flex items-center justify-center w-full aspect-square p-12">
                    <img src={kreatin} alt="Resim 14" className="w-full h-full max-w-[70vh] max-h-[70vh] min-w-[250px] min-h-[250px] object-cover rounded-lg shadow-md" />
                </div>
                <div className="relative flex flex-col gap-y-4 items-start justify-center w-full aspect-square p-12">
                    <h2 className="text-5xl font-bold text-left pb-12 ">BCAA</h2>
                    <span className='text-2xl text-left indent-8 '>
                    <strong>BCAA,</strong> Valin, izolösin ve lösinden oluşan zincirli amino asit takviyesi olan BCAA, yağsız kas kütlesini arttırmak için tercih edilir. Kas yorgunluğunu azaltan supplement çeşidi, antrenman sırasında kaslardaki amino asit kaybını önler. Eğer sporcular düşük kalorili bir diyet programı uyguluyorsa protein sentezlenmesinin azalmasından dolayı da BCAA’ya ihtiyaç duyar.</span>
                </div>                
                <div className="relative flex items-center justify-center w-full aspect-square p-12">
                    <img src={bcaa} alt="Resim 15" className="w-full h-full max-w-[70vh] max-h-[70vh] min-w-[250px] min-h-[250px] object-cover rounded-lg shadow-md" />
                </div>
                <div className="relative flex flex-col gap-y-4 items-start justify-center w-full aspect-square p-12">
                    <h2 className="text-5xl font-bold text-left pb-12 ">Gainer</h2>
                    <span className='text-2xl text-left indent-8 '>
                    <strong>Gainer,</strong> yüksek kalorili ve protein içeren bir besin takviyesidir ve genellikle kilo almakta zorlanan veya kas kütlesini artırmak isteyen bireyler tarafından kullanılır. Genellikle karbonhidrat, protein ve bazen yağları dengeli bir şekilde içeren gainerler, vücudun ihtiyaç duyduğu ekstra kalorileri sağlar ve egzersiz sonrası toparlanmayı destekler. Kilo almayı ve kas geliştirmeyi teşvik eden bu ürünler, düzenli egzersiz ve dengeli beslenme ile birlikte kullanıldığında, enerji seviyelerini artırabilir ve kas büyümesini destekleyebilir.</span>
                </div>                
                <div className="relative flex items-center justify-center w-full aspect-square p-12">
                    <img src={gainer} alt="Resim 16" className="w-full h-full max-w-[70vh] max-h-[70vh] min-w-[250px] min-h-[250px] object-cover rounded-lg shadow-md" />
                </div>
              </div>
            </div>
        </div>
                    
        <Footer/>
        <FButton/>
        </motion.div>
      )
    }

export default Supplement
