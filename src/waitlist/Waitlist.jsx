import React from 'react';
import './Waitlist.css';
import { Link } from 'react-router-dom';



const Waitlist = () => {
  return (
<>
<div className="section7"><br />
  <h1>Get early access<br />
          by joining our waitlist</h1>
          <p>Once you are in, you can climb the queue by inviting your friends.</p>
          <p>The closer to the top, the sooner you'll get the access</p><br />
          <center><Link to='/waitlistform'><div className="btn">STEP INSIDE</div></Link></center><br /><br /><br /><br />
        </div>
</>
  )
}

export default Waitlist;