import React from 'react';
import './App.css';
import playcircle from './images/playcircle.svg';
import onk1 from './images/onk1.svg';



const Section = () => {
  return (
<>
        {/*section*/}
        <div className="section">
          <div className="sectioncontent"><br /><br /><br /><br /><br /><br /><br /><br />
            <div className="sectioncontent1">
              <h1>
                The work is on us 
                The focus is you
              </h1>
            </div>       
            <div className="sectioncontent2">
              <h2>Tap into a pool of skilled, vetted, tested<br /> and qualified technical talents for your </h2>

                  <div className="text-wrapper">
                    <div className="box b1" style={{color: '#E6D0C4'}}>Construction Agencies</div>
                    <div className="box b2" style={{color: '#E8D1CB'}}>Real Estate Development</div>
                    <div className="box b3" style={{color: '#D9E2DD'}}>Startups &amp; Organization</div>
                    <div className="box b4" style={{color: '#DAD2D3'}}>Home Owners</div>
                    <div className="box b5" style={{color: '#E6DFEF'}}>Hospitality &amp; Resort Agencies</div>
                  </div>
            </div>
            <div className="textonbottomofhomescreen">
              <a href=" waitinglist.html"><div className="button1">I WANT A TECHNICIAN NOW &gt;</div></a>
              <a href="waitinglist.html"><div className="textonbottomofhomescreen1">
                  <div className="text2"><img src={playcircle} /></div>
                  <div className="button2">Our vision for you</div>
                  <div className="message"><img src={onk1}height="39.75757598876953px;" width="32px;" left="16px;" top="512.121337890625px;" border-radius="0px;" style={{position: 'fixed', marginLeft: '-15px', marginTop: '13px'}} /></div>
                </div></a></div></div></div>
        {/*end of section*/}
</>
  )
}

export default Section;