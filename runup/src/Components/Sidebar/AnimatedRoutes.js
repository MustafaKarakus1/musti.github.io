import React from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import MainPage from '../Pages/MainPage';
import RunUpCafe from '../Pages/RunUpCafe';
import Supplement from '../Pages/Supplement';
import RunUpSport from '../Pages/RunUpSport';
import Trainers from '../Pages/Trainers';
import ContactPage from '../Pages/ContactPage';
import Blog from '../Pages/Blog';
import {AnimatePresence} from 'framer-motion';


function AnimatedRoutes() {
const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/main' element={<MainPage />}/>
        <Route path='/sport' element={<RunUpSport />}/>
        <Route path='/cafe' element={<RunUpCafe />}/>
        <Route path='/supplement' element={<Supplement />}/>
        <Route path='/trainers' element={<Trainers />}/>
        <Route path='/contact' element={<ContactPage />}/>
        <Route path='/blog' element={<Blog />} />
      </Routes>  
      </AnimatePresence>
    
        
  )
}

export default AnimatedRoutes
