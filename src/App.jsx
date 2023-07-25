import React from 'react';
import { Route, Routes} from "react-router-dom";
import Section from './sections/Section.jsx';
import Waitlist from './waitlist/Waitlist.jsx';
import Faq from './sections/Section5.jsx';
import './App.css';
import Navbar from './sections/Navbar.jsx';
import Waitlistform from './waitlist/Waitlistform.jsx';



function App() {

  return (
    <>
        <Navbar />
        <Routes>        
        <Route path="/" element={<Section />} /> 
        <Route path="/waitlist" element={<Waitlist />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/waitlistform" element={<Waitlistform />} />
        </Routes>
    </>
  )
}

export default App;
