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
          <Route path = "/" element={<About/>}/>
          <Route path ="about" element={<About/>}/>
          <Route path ="contact" element={<Contact/>}/>
          <Route path ="portfolio" element={<Portfolio/>}/>
          <Route path ="resume" element={<Resume/>}/>
        </Routes>
      < Footer />
      </Router>

    
  ); 
}

export default App;
