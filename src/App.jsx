import React from 'react';
import Section from './Section.jsx'
import Section1 from './Section1.jsx'
import Section2 from './Section2.jsx'
import Section3 from './Section3.jsx'
import Section4 from './Section4.jsx'
import Section5 from './Section5.jsx'
import Footer from './Footer.jsx'
import './App.css';
import blaa1 from './images/blaa1.svg';


function App() {

  function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }


  function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }
  return (
    <>
  <div>
        {/*Navbar*/}
        <div id="myNav" className="overlay">
          <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>×</a>
          <div className="overlay-content">
            <a href="waitinglist.html">About Us</a>
            <a href="waitinglist.html">Services</a>
            <a href="waitinglist.html">Contact Us</a>
            <a href="waitinglist.html">Blog</a>
            <a href="waitinglist.html">FAQS</a>
            <a href=" waitinglist.html"><div className="buttononnavbarr">Get Started</div></a>
          </div>
        </div>
        <div className="navbar">
          <div className="leftnavber">
            <img src={blaa1} style={{height: '39.32389450073242px', width: '122.71342468261719px', borderRadius: '0px', marginTop: '37px'}} />
            <div className="linksonnavbar">
              <a href="waitinglist.html">About Us</a>
              <a href="waitinglist.html">Services</a>
              <a href="waitinglist.html">Contact Us</a>
              <a href="waitinglist.html">Blog</a>
              <a href="waitinglist.html">FAQS</a>
            </div>
          </div>
          <div className="rightnavbar">
            <a href=" waitinglist.html"><div className="buttononnavbar">Get Started</div></a>
            <spann onClick={openNav}>☰</spann>
          </div>
        </div>
        {/*end of Navbar*/}
        </div>
  
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Footer />
    </>
  )
}

export default App;
