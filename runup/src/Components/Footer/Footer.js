import React from 'react'
import logo from '../Assets/run.png';
const Footer = () => {
  return (
    <footer class="text-timberwolf py-8">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap">
        <div class="w-full md:w-1/3 mb-6 md:mb-0">
          <h2 class="text-xl font-bold mb-4 underline underline-offset-4">Hakkımızda</h2>
          <img src={logo} alt="Resim 2" className='w-64 h-48 object-cover rounded-lg shadow-md' />
          <p class="text-timberwolf">RunUp Sport, fitness, crossfit, plates, box, squash ve daha fazlasıyla üyelerine hizmet veren bir spor salonudur.</p>
        </div>
        <div class="w-full md:w-1/3 mb-6 md:mb-0">
          <h2 class="text-xl font-bold mb-4 underline underline-offset-4">Hızlı Linkler</h2>
          <ul>
            <li class="mb-2"><a href="/main" class="text-timberwolf hover:text-gray-500">Anasayfa</a></li>
            <li class="mb-2"><a href="#" class="text-timberwolf hover:text-gray-500">Hizmetlerimiz</a></li>
            <li class="mb-2"><a href="#" class="text-timberwolf hover:text-gray-500">Hakkımızda</a></li>
            <li class="mb-2"><a href="/contact" class="text-timberwolf hover:text-gray-500">İletişim</a></li>
          </ul>
        </div>
        <div class="w-full md:w-1/3">
          <h2 class="text-xl font-bold mb-4 underline underline-offset-4">İletişim</h2>
          <p class="text-timberwolf mb-2">Adres: Horozluhan, Yeni İstanbul Cd. No:58, 42060 Horozluhan Osb/Selçuklu/Konya</p>
          <p class="text-timberwolf mb-2">Telefon: +90 530 259 88 00</p>
          <p class="text-timberwolf">Email: iletisim@runupsports.com</p>
        </div>
      </div>
    </div>
    <div class="bg-sage py-4 mt-8">
      <div class="container mx-auto text-center text-timberwolf">
        © 2024 RunUp Sport. Tüm hakları saklıdır.
      </div>
    </div>
  </footer>
  )
}

export default Footer
