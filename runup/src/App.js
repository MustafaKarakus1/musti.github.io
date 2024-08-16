import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import MainPage from './Components/Pages/MainPage';
import RunUpCafe from './Components/Pages/RunUpCafe';
import Supplement from './Components/Pages/Supplement';
import RunUpSport from './Components/Pages/RunUpSport';
import Trainers from './Components/Pages/Trainers';
import ContactPage from './Components/Pages/ContactPage';
import Blog from './Components/Pages/Blog';
import AnimatedRoutes from './Components/Sidebar/AnimatedRoutes';

function App() {
  return (
    <Router>
      {/*<Routes>
        <Route path='/main' element={<MainPage />}/>
        <Route path='/sport' element={<RunUpSport />}/>
        <Route path='/cafe' element={<RunUpCafe />}/>
        <Route path='/supplement' element={<Supplement />}/>
        <Route path='/trainers' element={<Trainers />}/>
        <Route path='/contact' element={<ContactPage />}/>
        <Route path='/blog' element={<Blog />} />
      </Routes>
      */}
      <AnimatedRoutes/>
    </Router>
  );
}

export default App;
