import React from 'react';
import DrawerAppBar from './components/Navbar';
import Footer from './components/Footer'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Portfolio from './components/Pages/Portfolio';
import Resume from './components/Pages/Resume';
// import Home from './components/Pages/About';

function App() {
  return (
    
      
      <Router>
      < DrawerAppBar />
        <Routes>
          <Route path = "/react-portfolio" element={<About/>}/>
          <Route path ="/react-portfolio/about" element={<About/>}/>
          <Route path ="/react-portfolio/contact" element={<Contact/>}/>
          <Route path ="/react-portfolio/portfolio" element={<Portfolio/>}/>
          <Route path ="/react-portfolio/resume" element={<Resume/>}/>
        </Routes>
      < Footer />
      </Router>

    
  ); 
}

export default App;
