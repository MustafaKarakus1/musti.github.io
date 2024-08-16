import React from 'react'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import FButton from '../ButtonFloat/FButton';
import { Card } from 'antd';
import blog from '../Assets/blog.png';
import { motion } from 'framer-motion';


const Blog = () => {
  return (
    <motion.div className="font-serif bg-brunswick-green"
    initial={{width: 0}}
    animate={{width: "100vw"}}
    exit={{x: window.innerWidth}}
    >
      <Navbar/>
      <div className='relative'>
        <img src={blog} alt="page-image" className='w-full h-[50vh] md:h-[60vh] lg:h-[76vh] object-cover'/>
        <div className="absolute inset-0 flex items-center pl-12">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">BLOG</h1>
        </div>
      </div>
      <div className='pt-12 bg-sage indent-8'>  
      <Card className='bg-sage' style={{ border: 'none' }}>
            <Card  type="inner" title="SPİNNİNG" extra={<a href="#">More</a>}>
            <p className=" indent-8">Eğer kişilerin daha önce spinning deneyimi varsa, herhangi bir sağlık sorunu yoksa, kardiyo egzersizlerine alışıksa, evde spinning yapılmasında bir sorun görünmüyor. Spor konusunda deneyimli, vücudunun zorlandığını hissedebilen, herhangi bir sakatlığa karşı ısınma ve soğuma gibi adımları atlamayan kişiler, spinningi evde de rahatlıkla uygulayabiliyor. Ancak çalışmanın aktif dinlenme ve hareket aşamaları olduğu için bir antrenör yardımıyla yapılması tavsiye ediliyor. Daha verimli ve doğru bir egzersiz için birçok kişi, online antrenörlerle seanslar yapmayı veya video dersler üzerinden çalışmalara katılmayı tercih ediyor. 
            Evde spinning yapmak için hazırlık yapmak gerekiyor. Spinning için alınacak bisikletlerde geniş fiyat aralığı ve oldukça çeşitli ürün yelpazesi dikkat çekiyor. Kişilerin boyuna, kilosuna, egzersiz deneyimine ve evindeki alana uygun bisikletler tercih etmesi rahat bir spor için gerekli görülüyor. Bazı spin bikelar, direnç ayarlarında ek fonksiyonlar sunarken, bazıları temel spinning egzersizi için tasarlanıyor. Ürünlerin fiyatları da genellikle teknik özellikleri ile aynı oranda artıyor. Sen de evde spinning yapmayı düşünüyorsan, ihtiyaçlarını belirleyebilir ve seçimlerini antrenörünün yardımıyla yönlendirebilirsin. Pedal sertliği, pedal hızı, direnci, oturma kalkma hareketlerinin senkronizasyonu, tempo gibi konularda profesyonel destek almak çalışma verimini yüksek oranda artırıyor. 
            </p></Card>
            <Card
            style={{
                marginTop: 16,
            }}
            type="inner"
            title="CYCLİNG"
            extra={<a href="#">More</a>}
            >
            <p className='indent-8'>Antrenmanlar sayesinde cycling kalori yakmanıza katkıda bulunur. Üstelik cycling, bacak kaslarını da güçlendirdiğinden fiziksel anlamda çok daha dirençli bir yapıya kavuşmanız mümkün hale gelir. Bisiklet sürmek, bacakların yanı sıra kalça, diz ve baldır gibi pek çok kas grubunu çalıştırmanıza olanak tanır.
            </p></Card>
            <Card
            style={{
                marginTop: 16,
            }}
            type="inner"
            title="CROSSFİT"
            extra={<a href="#">More</a>}
            >
            <p className='indent-8'>Crossfit, sunduğu pek çok fayda sayesinde bu denli popüler.  Crossfit’in kişiye verebileceği faydaları sıralamamız gerekirse en başta on fiziksel yeteneği artıracağını söyleyebiliriz. Bunlar: kardiyovasküler seviye, dayanıklılık, esneklik, kuvvet, güç, hız, koordinasyon, çeviklik, denge ve isabetlilik. Bu özellikler hayatı boyunca bir insana fiziksel olarak yardım edecek yeteneklerdir. Aynı zamanda kaslı ve atletik bir görüntünüz olmasını da sağlayacaktır.
            </p></Card>
            <Card
            style={{
                marginTop: 16,
            }}
            type="inner"
            title="BESLENME DÜZENİ"
            extra={<a href="#">More</a>}
            >
            <p className='indent-8'>Beslenme ihtiyaçları sporcunun yaşına, fiziksel yeterliliğine, oynadığı alanın  rekabet düzeyine, çevreye, rekabetin süresine, maçlar arasında geçen süreye ve diğer birçok faktöre bağlı olarak belirlenir.
            Yapılan spor ne olursa, o spor veya aktivitede daha iyi performans gösterirsiniz.
            Sakatlıklara engel olur, daha fazla konsantrasyon sahibi olursunuz.
            Antrenman sonrasında daha az yorgunluk hissedersiniz.
            Doğru beslenme; enerji dengesini sağlayarak, vücut ağırlığı yönetimini ve vücudun en uygun şekilde fonksiyonlarını sürdürmesini sağlar.
            Besinlerle yeterli enerji alırsanız daha aktif olabilir, yeterli protein alırsanız kas kütlenizi koruyabilirsiniz.
            </p></Card>
            <Card
            style={{
                marginTop: 16,
            }}
            type="inner"
            title="SPOR YAPARKEN DÜZENLİ UYKUNUN ÖNEMİ"
            extra={<a href="#">More</a>}
            >
            <p className='indent-8'>Sporcu olun veya olmayın; uyku, genel sağlık ve refah için gereklidir. Yenilenmiş hissetmek ve ertesi gün hem fiziksel hem de zihinsel olarak iyi performans gösterebilmek için herkesin uykuya ihtiyacı vardır. Ama konumuz sporcu uykusu olduğuna göre öncelikle en önemli fiziksel faydalarına bakalım:

            Uyku kalbin dinlenmesi, hücrelerin ve dokuların onarılması için bir alan yaratır. Bu da fiziksel efordan sonra vücudunuzun iyileşmesine yardımcı olur. Ayrıca uyku evrelerinde ilerledikçe, kalp atış hızınızdaki ve gece boyu nefes alıp vermenizdeki değişiklikler kardiyovasküler sağlığı destekler.

            Uykunun bir önemli özelliği de hastalığı önlemesi veya hastalıktan kurtulmaya yardımcı olmasıdır. Uyku sırasında vücut, bağışıklık sisteminin enfeksiyonlarla savaşmasına yardımcı olan hormonları yani sitokinleri üretir. Tüm bu onarıcı etkiler, sporcuların toparlanması ve performansı için önemlidir.
            </p></Card>
        </Card>
        </div>
      <Footer/>
      <FButton/>
    </motion.div>
  )
}

export default Blog
