import React from 'react';
import './App.css';




const Footer = () => {
  return (
<>
{/*start of mobile footer*/}
<footerf>
          <div className="footercontent1"><br />
            <h2>Newsletter</h2>
            <form1>
              <input type="email" placeholder="Type Email Address" /><br /><br />
              <input type="submit" className="submit" defaultValue="subscribe" />
            </form1>
          </div>
          <div className="footercontent23">
            <div className="footercontent2">
              <h2>Join BlueCollar</h2>
              <a style={{marginTop: '-40px'}}>For BlueCollar technology</a><br />
              <a>Learning Community</a><br />
              <a>Leadership Program</a><br />
              <a>Become a Partner</a>
            </div>
            <div className="footercontent3">
              <h2>Services</h2>
              <a>Electrical</a><br />
              <a>Company</a><br />
              <a>Plumbering</a><br />
              <a>Electronics &amp; Gadgets</a>
            </div></div>
            <div className="footercontent23">
          <div className="footercontent4">
            <h2>About Us</h2>
            <a>Who are we</a><br />
            <a>Blogs</a><br />
            <a>Events</a><br />
            <a>Projects</a>
          </div>
        
          <div className="footercontent33">
              <a>Echubafrica@gmail.com</a><br />
              <a href='tel:2348148143284'>08148143284</a><br /><br />
              <a>66 Ibukun Olu St, Akoka 102216,<br /> Lagos</a><br />
            </div></div>
          <a className="fa fa-facebook" />
          <a className="fa fa-linkedin" />
          <a className="fa fa-twitter" />
          <a className="fa fa-instagram" />

        </footerf>
        {/*end of mobile footer*/}
        {/*start of footer*/}
        <footer>
          <div className="leftfooter">
            <div className="textonbottom">Blue Collar</div>
            <div className="socialsonfooter">
              <a className="fa fa-facebook" />
              <a className="fa fa-linkedin" />
              <a className="fa fa-twitter" />
              <a className="fa fa-instagram" /></div>
          </div><hr />
          <div className="rightfooter">
            <h2>Want to know what we are up to?</h2>
            <div className="form1">
              <input type="email" placeholder="Type Email Address" />
              <button7 type="submit">Subscribe</button7>
            </div>
            <div className="rightfooterlist">
              <div className="footercontent2">
                <h2>Join BlueCollar</h2>
                <a>For Blue Collar technology</a><br />
                <a>Learning Community</a><br />
                <a>Leadership Program</a><br />
                <a>Become a Partner</a>
              </div>
              <div className="footercontent3">
                <h2>Services</h2>
                <a>Electrical</a><br />
                <a>Company</a><br />
                <a>Plumbering</a><br />
                <a>Electronics &amp; Gadgets</a>
              </div>
              <div className="footercontent4">
                <h2>About Us</h2>
                <a>Who are we</a><br />
                <a>Blogs</a><br />
                <a>Events</a><br />
                <a>Projects</a>
              </div></div>
          </div>
        </footer>
        {/*end of footer*/}

</>

  )
}

export default Footer;