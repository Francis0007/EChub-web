import { useState } from 'react'
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  
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

  var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

var coll = document.getElementsByClassName("collapsiblef");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

  return (
    <>
  <div>
        {/*Navbar*/}
        <div id="myNav" className="overlay">
          <a href="javascript:void(0)" className="closebtn" onClick="closeNav()">×</a>
          <div className="overlay-content">
            <a href="waitinglist.html">About Us</a>
            <a href="waitinglist.html">Services</a>
            <a href="waitinglist.html">Contact Us</a>
            <a href="waitinglist.html">Blog</a>
            <a href="waitinglist.html">FAQS</a>
          </div>
        </div>
        <div className="navbar">
          <div className="leftnavber">
            <img src="./images/blaa1.svg" style={{height: '39.32389450073242px', width: '122.71342468261719px', borderRadius: '0px', marginTop: '37px'}} />
            <div className="linksonnavbar">
              <a href="waitinglist.html">About Us</a>
              <a href="waitinglist.html">Services</a>
              <a href="waitinglist.html">Contact Us</a>
              <a href="waitinglist.html">Blog</a>
              <a href="waitinglist.html">FAQS</a>
            </div>
          </div>
          <div className="rightnavbar">
            <a href=" waitinglist.html"><div className="buttononnavbar">Join the team</div></a>
            <span onClick="openNav()">☰</span>
          </div>
        </div>
        {/*end of Navbar*/}
        {/*section*/}
        <div className="section">
          <div className="sectioncontent">
            <div className="sectioncontent1">
              <h1>
                The work is on us<br />
                The focus is you
              </h1>
            </div>       
            <div className="sectioncontent2">
              <h2>Skilled, vetted, tested and qualified technical talents for your construction, maintenance, installation, repairs, renovation and verification services for</h2>
              <div className="banner">
                <div className="banner-text">
                  <div className="text-wrapper">
                    <div className="box b1" style={{color: '#E6D0C4'}}>Construction Agencies</div>
                    <div className="box b2" style={{color: '#E8D1CB'}}>Real Estate Development</div>
                    <div className="box b3" style={{color: '#D9E2DD'}}>Startups &amp; Organization</div>
                    <div className="box b4" style={{color: '#DAD2D3'}}>Home Owners</div>
                    <div className="box b5" style={{color: '#E6DFEF'}}>Hospitality &amp; Resort Agencies</div>
                  </div></div></div>
            </div>
            <div className="textonbottomofhomescreen">
              <a href=" waitinglist.html"><div className="button1">I WANT A TECHNICIAN NOW &gt;</div></a>
              <a href="waitinglist.html"><div className="textonbottomofhomescreen1">
                  <div className="text2"><img src="images/play-circle.svg" /></div>
                  <div className="button2">See the new offer for homeowners</div>
                  <div className="message"><img src="images/onk1.svg" height="39.75757598876953px;" width="32px;" left="316px;" top="512.121337890625px;" border-radius="0px;" style={{position: 'fixed', marginLeft: '16px', marginTop: '13px'}} /></div>
                </div></a></div></div></div>
        {/*end of section*/}
        {/*section1*/}
        <div className="section1">
          <div className="section1left"> 
            <h2 className="section1h2">
              Are you presently facing these<br />
              challenges?
            </h2>
            <div className="textonsection1">
              <img src="images/check-circle-1.svg" />
              <div className="button4" style={{marginTop: '-1px'}}>
                Constant troubles with quack technicians.    
              </div>
            </div>
            <div className="textonsection1">
              <img src="images/check-circle-1.svg" />
              <div className="button4" style={{marginTop: '-1px'}}>
                Difficulty in tracking your maintenance request leading to a
                long time on closing maintenance requests.
              </div>
            </div>
            <div className="textonsection1">
              <img src="images/check-circle-1.svg" />
              <div className="button4" style={{marginTop: '0px'}}>
                Unexplained cost that result in a lack of transparency.
              </div>
            </div>
            <div className="textonsection1">
              <img src="images/check-circle-1.svg" />
              <div className="button4" style={{marginTop: '0px'}}>
                Distractions from core business areas due to frequent facilities
                management issues.
              </div>
            </div></div>
          <a href="waitinglist.html"><div className="button10">SWITCH TO COMPETENCE &gt;</div></a> 
          <div className="rightsection1">
            <img src="images/play-circle.svg" className="imagesrightsection1" />
          </div>
        </div>
        {/*end of section1*/}
        {/*section2*/}
        <div className="section2">
          <div className="section2left">
            {/*mobile view*/}
            <h2>Why you should switch to competence</h2>
            <div className="topnav">
              <a href="waitinglist.html">
                <div className="listoftopnav">           
                  <div className="boxes" style={{backgroundColor: '#E6D0C4'}}>
                    <img src="images/un2.svg" className="imageonsection2" /><br />
                    <h2>
                      Smart Monitoring
                    </h2>
                    <p className="lastonsection2">
                      Utilising the power of tehnology, monitor your facility and power usage in real time, utilising the technology of Internet of Things.         
                    </p>
                  </div>
                  <div className="boxes" style={{backgroundColor: '#E8D1CB'}}>
                    <img src="images/un.svg" className="imageonsection2" /><br />
                    <h2>
                      Hands-On Support
                    </h2>
                    <p className="lastonsection2">
                      From helping with on boarding to execution to sharing best practices, our success team is there every step of the way with 24hrs customer emergency support &amp; Help Desk
                    </p>
                  </div></div></a>
              <a href="waitinglist.html">   
                <div className="listoftopnav">       
                  <div className="boxes" style={{backgroundColor: '#D9E2DD'}}>
                    <img src="images/engineering.png" className="imageonsection2" /><br />
                    <h2>
                      facility Health Status and Lifespan
                    </h2>
                    <p className="lastonsection2">
                      With this valuable information, you can proactively plan for maintenance, replacement, and upgrades, avoiding unexpected diisruptions and costly repairs
                    </p>
                  </div>
                  <div className="boxes" style={{backgroundColor: '#DAD2D3'}}>
                    <img src="images/manage_accounts.png" className="imageonsection2" /><br />
                    <h2>
                      Best Talent
                    </h2>
                    <p className="lastonsection2">
                      Tap into a talent pool that spans multiple regions. The best technicians aren't always in your backyard, they are at Blue Collar
                    </p>
                  </div></div></a>
              <a href="waitinglist.html">   
                <div className="listoftopnav" style={{marginRight: '30px'}}>           
                  <div className="boxes" style={{backgroundColor: '#E6DFEF'}}>
                    <img src="images/summarize.png" className="imageonsection2" /><br />
                    <h2>
                      Maintenance Report &amp; Audit
                    </h2>
                    <p className="lastonsection2">
                      You get reports on every maintenance carried out with expenses, consultations and suggestions to aid in the technical maintenance. Here, technicians cannot cheat or overcharge or underperform or even try to smuggle you.
                    </p>
                  </div>
                  <div className="boxes" style={{backgroundColor: '#EADCE8'}}>
                    <img src="images/verified.png" className="imageonsection2" /><br />
                    <h2>
                      The best offer
                    </h2>
                    <p className="lastonsection2">
                      We are ready to offer you a 10% reduction in price of your cheapest technicians with more improved service at that. (T &amp;C applies)
                    </p>
                  </div></div></a>
            </div>
            {/*end of mobile view*/}
            <div className="link">
              <div className="boxes" style={{backgroundColor: '#E6D0C4'}}>
                <img src="images/engineering.png" className="imageonsection2" /><br />
                <h2>
                  facility Health Status and Lifespan
                </h2>
                <p className="lastonsection2">
                  With this valuable information, you can proactively plan for maintenance, replacement, and upgrades, avoiding unexpected diisruptions and costly repairs
                </p>
              </div>
              <div className="boxes" style={{backgroundColor: '#E8D1CB'}}>
                <img src="images/manage_accounts.png" className="imageonsection2" /><br />
                <h2>
                  Best Talent
                </h2>
                <p className="lastonsection2">
                  Tap into a talent pool that spans multiple regions. The best technicians aren’t always in your backyard, they are at Blue Collar
                </p>
              </div>
            </div>
            <div className="link">
              <div className="boxes" style={{backgroundColor: '#D9E2DD'}}>
                <img src="images/summarize.png" className="imageonsection2" /><br />
                <h2>
                  Maintenance report &amp; audit
                </h2>
                <p className="lastonsection2">
                  You get reports on every maintenance carried out with expenses, consultations and suggestions to aid in the technical maintenance. Here, technicians cannot cheat or overcharge or underperform or even try to smuggle you.
                </p>
              </div>
              <div className="boxes" style={{backgroundColor: '#DAD2D3'}}>
                <img src="images/verified.png" className="imageonsection2" /><br />
                <h2>
                  The best offer
                </h2>
                <p className="lastonsection2">
                  We are ready to offer you a 10% reduction in price of your cheapest technicians with more improved service at that. (T &amp;C applies)
                </p>
              </div>
            </div>
            <div className="link">
              <div className="boxes" style={{backgroundColor: '#E6DFEF'}}>
                <img src="images/un2.svg" className="imageonsection2" /><br />
                <h2>
                  Smart Monitoring
                </h2>
                <p className="lastonsection2">
                  Utilising the power of tehnology, monitor your facility and power usage in real time, utilising the technology of Internet of Things.            
                </p>
              </div>
              <div className="boxes" style={{backgroundColor: '#EADCE8'}}>
                <img src="images/un.svg" className="imageonsection2" /><br />
                <h2>
                  Hands-On Support
                </h2>
                <p className="lastonsection2">
                  From helping with on boarding to execution to sharing best practices, our success team is there every step of the way with 24hrs customer emergency support &amp; Help Desk
                </p>
              </div>
            </div></div>
          <div className="sectionleft2">
            <h2>
              Why top companies prefer<br />
              Blue Collars' talents
            </h2>
            <div className="textonsection">
              <img src="images/check-circle-1.svg" />
              <div className="button5" style={{marginTop: '-13px'}}>We train and equip our artisans</div>
            </div>
            <div className="textonsection">
              <img src="images/check-circle-1.svg" />
              <div className="button5" style={{marginTop: '-13px'}}>
                Full imediate follow up report and audits
              </div>
            </div>
            <div className="textonsection">
              <img src="images/check-circle-1.svg" />
              <div className="button5" style={{marginTop: '-13px'}}>
                IoT &amp; Smart home device to top recurring clients
              </div>
            </div>
            <div className="textonsection">
              <img src="images/check-circle-1.svg" />
              <div className="button5" style={{marginTop: '-13px'}}>
                24hrs customer emergency support &amp; Help Desk
              </div></div></div><br /></div>
        {/*end of section2*/}
        {/*section3*/}
        <div className="section3"><br />
          <h3>Services</h3>
          <div className="topnavv">
            <a href="waitinglist.html">           
              <div className="sec3boxes" style={{backgroundColor: '#C1D6F6'}}>
                <h2>Electrical</h2>
                <img src="images/ec-1.png" width="300px" height="270px" style={{borderRadius: '0px 0px 20px 20px', marginTop: '20.3240966796875px', marginLeft: '0px'}} />
                <div className="buttononsection3boxes" style={{backgroundColor: '#085BDA'}} >Explore &gt; </div>
              </div></a>
            <a href="waitinglist.html">           
              <div className="sec3boxes" style={{backgroundColor: '#C1D6F6'}}>
                <h2>Plumbering</h2><h2>
                  <img src="images/Plumbing.png" width="300px" height="270px" style={{borderRadius: '0px 0px 20px 20px', marginTop: '20.3240966796875px', marginLeft: '0px'}} />
                  <div className="buttononsection3boxes" style={{backgroundColor: '#085BDA'}}>Explore &gt;</div>
                </h2></div></a>
            <a href="waitinglist.html">           
              <div className="sec3boxes" style={{backgroundColor: '#C1D6F6',}}>
                <h2>Carpentry</h2>
                <img src="images/Carpentry.png" width="300px" height="270px" style={{borderRadius: '0px 0px 20px 20px', marginTop: '20.3240966796875px', marginLeft: '0px'}} />
                <div className="buttononsection3boxes" style={{backgroundColor: '#085BDA'}}>Explore &gt;</div>
              </div></a>
            <a href="waitinglist.html" style={{marginRight: '20px'}}>           
              <div className="sec3boxes" style={{backgroundColor: '#C1D6F6'}}>
                <h2>Electriconics &amp; Gadgets</h2>
                <img src="images/Electronics and gadgets.png" width="300px" height="270px" style={{borderRadius: '0px 0px 20px 20px', marginTop: '20.3240966796875px', marginLeft: '0px'}} />
                <div className="buttononsection3boxes" style={{backgroundColor: '#085BDA'}}>Explore &gt;</div>
              </div></a>
          </div>
          <br />
          <center>
            <h1 className="section3textontop3">HIRE ECHUB FOR YOUR FACILITY
              MAINTENANCE/<br />MANAGEMENT AND GET 80% STRESS OFF YOUR <br />SHOULDER
              OR WE WORK FOR FREE!!!
            </h1></center><br /></div>
        {/*end of section3*/}
        {/*section4*/}
        <div className="section4"><center>
            <div className="topnavvv">
              <a><img src="images/logo 2-2.png" style={{height: '34.75492477416992px', width: '177.99267578125px', borderRadius: '0px'}} /></a>
              <a><img src="images/1__DA8kc1ZxuJQ9-QIUj8C_A 1-1.png" style={{height: '45.19302749633789px', width: '145.35855102539062px'}} /></a>
              <a><img src="images/322fa75b297a913f924f8683351d6027 1-1.png" style={{height: '35px', width: '112px', top: '13.596527099609375px', borderRadius: '0px'}} /></a>
              <a><img src="images/logo_0 1-2.png" style={{height: '35px', width: '112px', top: '13.596527099609375px', borderRadius: '0px'}} /></a>
              <a><img src="images/Layer_x0020_1-3.png" style={{height: '52.621646881103516px', width: '77.40977096557617px'}} /></a>
              <a><img src="images/logo 1-3.png" style={{height: '49.388580322265625px', width: '156.20103454589844px'}} /></a>
              <a><img src="images/nieee 1-1.png" style={{height: '35.66952896118164px', width: '99.96865844726562px'}} /></a>
            </div></center>
          <div className="remarbyusers">
            <h2>The wall of 💙</h2>
            <div className="topnavv">
              <a>
                <div className="remarks">
                  <div className="imageonremark">
                  </div><br /><br /><br />
                  <h2>Emily</h2>
                  <p>CEO</p>
                  <div className="stars">
                    <img src="images/stars.svg" style={{height: '21.893749237060547px', width: '21.82916831970215px', left: '194.58547973632812px'}} />
                    <img src="images/stars.svg" style={{height: '21.893749237060547px', width: '21.82916831970215px', left: '194.58547973632812px'}} />
                    <img src="images/stars.svg" style={{height: '21.893749237060547px', width: '21.82916831970215px', left: '194.58547973632812px'}} />
                    <img src="images/stars.svg" style={{height: '21.893749237060547px', width: '21.82916831970215px', left: '194.58547973632812px'}} />
                    <img src="images/stars.svg" style={{height: '21.893749237060547px', width: '21.82916831970215px', left: '194.58547973632812px'}} />
                  </div>
                  <p>With real-time project reports, repair history, and facility health insight 
                    at out fingertips, we can make informed decision that drive efficiency and cost 
                    savings. I hoghly recommend to any CEO looking to streamline their 
                    maintenance operations and leverage the power of data-driven solutions.
                  </p>
                </div>
              </a>     
              <a>
                <div className="remarks">
                  <div className="imageonremark">
                  </div><br /><br /><br />
                  <h2>Matthias</h2>
                  <p>Real Estate developer</p>
                  <div className="stars">
                    <img src="images/stars.svg" style={{height: '21.893749237060547px', width: '21.82916831970215px', left: '194.58547973632812px'}} />
                    <img src="images/stars.svg" style={{height: '21.893749237060547px', width: '21.82916831970215px', left: '194.58547973632812px'}} />
                    <img src="images/stars.svg" style={{height: '21.893749237060547px', width: '21.82916831970215px', left: '194.58547973632812px'}} />
                    <img src="images/stars.svg" style={{height: '21.893749237060547px', width: '21.82916831970215px', left: '194.58547973632812px'}} />
                    <img src="images/stars.svg" style={{height: '21.893749237060547px', width: '21.82916831970215px', left: '194.58547973632812px'}} />
                  </div>
                  <p>You guys really pulled a lot of weight off me when you handled the construction
                    of my Lekki project and the renovation of my shortlet at Akoka</p>
                </div>
              </a>
              <a>
                <div className="remarks">
                  <div className="imageonremark">
                  </div><br /><br /><br />
                  <h2>Sarah</h2>
                  <p>Homeowner</p>
                  <div className="stars">
                    <img src="images/stars.svg" style={{height: '21.893749237060547px', width: '21.82916831970215px', left: '194.58547973632812px'}} />
                    <img src="images/stars.svg" style={{height: '21.893749237060547px', width: '21.82916831970215px', left: '194.58547973632812px'}} />
                    <img src="images/stars.svg" style={{height: '21.893749237060547px', width: '21.82916831970215px', left: '194.58547973632812px'}} />
                    <img src="images/stars.svg" style={{height: '21.893749237060547px', width: '21.82916831970215px', left: '194.58547973632812px'}} />
                    <img src="images/stars.svg" style={{height: '21.893749237060547px', width: '21.82916831970215px', left: '194.58547973632812px'}} />
                  </div>
                  <p>Thanks to you guys, our home maintenance has become effortless. Your technology 
                    and skilled talents ensure our facilities are always in top shape. How are you this 
                    affordable?</p><p>
                  </p></div>
              </a>
            </div></div>
          <br />
          <center>
            <div className="boardoftrustees">
              <div className="boardoftrusteesleft"><br />
                <h1>We are trusted by</h1>
              </div>
              <div className="boardoftrusteesright">
                <div className="board2listing">
                  <div className="boardoftrusteesimages">
                    <img src="images/divi.png" width="95px" height="70px" style={{marginTop: '24px'}} />         
                  </div>
                  <div className="boardoftrusteesimages">
                    <img src="images/images.png" width="90px" height="80px" style={{marginTop: '20px'}} />         
                  </div>
                  <div className="boardoftrusteesimages">
                    <img src="images/List of Courses in Yaba College Of Technology (YABATECH).jpg" width="80px" height="80px" style={{marginTop: '20px'}} />         
                  </div></div>
                <div className="board2listing">
                  <div className="boardoftrusteesimages" style={{marginTop: '10px'}}>
                    <img src="images/echub.png" width="90px" height="30px" style={{marginTop: '44px'}} />         
                  </div>
                  <div className="board2listing">
                    <div className="boardoftrusteesimages">
                      <img src="images/pennee-logo-1.svg" width="95px" height="80px" style={{marginTop: '20px'}} />         
                    </div>
                    <div className="boardoftrusteesimages">
                      <img src="images/bsks.jpg" width="90px" height="80px" style={{marginTop: '20px'}} />         
                    </div></div>
                </div></div></div> </center></div>
        {/*section4*/}
        {/*section5*/}
        <div className="section5">
          <center>
            <h1>Frequently Asked Questions</h1>
            {/*mobile view*/}
            <br />
            <center>
              <div className="formatright2">
                <div id="faqs-listf" style={{marginTop: '-50px', marginLeft: '2%'}}>
                  <div className="panelf">
                    <button className="collapsiblef">What services does your company provide?</button>
                    <div className="contentf">
                      <p>
                        We provide installation, repairs, maintenance, management, and verification services for homes and organizations. Our qualified artisans handle electrical, plumbing, smart home devices, security systems, HVAC systems, and more.
                      </p>
                    </div>
                    <div id="faqs-listf">
                      <div className="panelf">
                        <button className="collapsiblef">How can I trust the quality of your artisans?</button>
                        <div className="contentf">
                          <p>
                            We take pride in our rigorous vetting process. Each artisan is carefully selected based on their qualifications, experience, and track record. We ensure they meet our high standards of professionalism and expertise.
                          </p>
                        </div>
                        <div id="faqs-listf">
                          <div className="panelf">
                            <button className="collapsiblef">Can I monitor and manage my facilities remotely?</button>
                            <div className="contentf">
                              <p>
                                Absolutely! Our web app allows you to conveniently monitor and manage your facilities from anywhere. You can access real-time project reports, repair history, and facility health status, empowering you with valuable insights.
                              </p>
                            </div>
                            <div id="faqs-listf">
                              <div className="panelf">
                                <button className="collapsiblef">Can I customize a maintenance plan that suits my specific needs?</button>
                                <div className="contentf">
                                  <p>
                                    Yes, you can subscribe to a customized maintenance plan. We understand that every facility has unique requirements, so we work closely with you to design a plan that aligns with your goals and ensures optimal facility performance.
                                  </p>
                                </div>
                                <div id="faqs-listf">
                                  <div className="panelf">
                                    <button className="collapsiblef">How does the Internet of Things (IoT) benefit facility monitoring?</button>
                                    <div className="contentf">
                                      <p>
                                        By harnessing IoT technology, you can smartly monitor your facilities based on factors like power consumption and current dissipation. This data-driven approach allows you to make informed decisions, optimize efficiency, and identify potential issues in real-time.
                                      </p>
                                    </div>
                                    <div id="faqs-listf">
                                      <div className="panelf">
                                        <button className="collapsiblef">How do I book your services?</button>
                                        <div className="contentf">
                                          <p>
                                            Booking our services is simple. You can visit our website and use our user-friendly web app to schedule appointments, select the services you need, and receive transparent pricing details. It's hassle-free and saves you time
                                          </p>
                                        </div>
                                        <div id="faqs-listf">
                                          <div className="panelf">
                                            <button className="collapsiblef">
                                              What if I need urgent repairs outside of regular business hours?
                                            </button>
                                            <div className="contentf">
                                              <p>
                                                We understand that emergencies can happen at any time. Our services are available round the clock, including weekends and holidays. Simply reach out to our customer support, and we'll promptly assist you.
                                              </p>
                                            </div>
                                            <div id="faqs-listf">
                                              <div className="panelf">
                                                <button className="collapsiblef">
                                                  Do you offer compliance and verification services?
                                                </button>
                                                <div className="contentf">
                                                  <p>
                                                    Yes, we provide verification and compliance services. Our expert team conducts electrical safety checks, ensures plumbing compliance, performs fire safety inspections, conducts energy efficiency audits, and assesses code compliance
                                                  </p>
                                                </div>
                                                <div id="faqs-listf">
                                                  <div className="panelf">
                                                    <button className="collapsiblef">
                                                      How do you ensure data privacy and security?
                                                    </button>
                                                    <div className="contentf">
                                                      <p>
                                                        We prioritize the confidentiality and security of your data. Our web app utilizes industry-standard security measures to protect your information. We comply with data privacy regulations and take appropriate measures to safeguard your data.
                                                      </p>
                                                    </div>
                                                    <div id="faqs-listf">
                                                      <div className="panelf">
                                                        <button className="collapsiblef">
                                                          What are the benefits of subscribing to a maintenance plan?
                                                        </button>
                                                        <div className="contentf">
                                                          <p>
                                                            Subscribing to a maintenance plan offers several benefits. It helps extend the lifespan of your facilities, reduces the likelihood of unexpected breakdowns, lowers maintenance costs over time, and ensures consistent performance and optimal efficiency.
                                                          </p>
                                                        </div>
                                                      </div>
                                                    </div><br /><br />
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div></div></div></div></div></div></div></div></div></div></div></div></div></div></center>
            {/*end of mobile view*/}
            <div className="formatright2">
              <div className="ques" style={{marginLeft: '160px'}}>
                <div id="faqs-list">
                  <div className="panel">
                    <button className="collapsible">What services does your company provide?</button>
                    <div className="content">
                      <p>
                        We provide installation, repairs, maintenance, management, and verification services for homes and organizations. Our qualified artisans handle electrical, plumbing, smart home devices, security systems, HVAC systems, and more.
                      </p>
                    </div>
                    <div id="faqs-list" style={{marginTop: '60px'}}>
                      <div className="panel">
                        <button className="collapsible">How can I trust the quality of your artisans?</button>
                        <div className="content">
                          <p>
                            We take pride in our rigorous vetting process. Each artisan is carefully selected based on their qualifications, experience, and track record. We ensure they meet our high standards of professionalism and expertise.
                          </p>
                        </div></div></div></div></div></div>
              <div className="ques">
                <div id="faqs-list">
                  <div className="panel">
                    <button className="collapsible">Can I monitor and manage my facilities remotely?</button>
                    <div className="content">
                      <p>
                        Absolutely! Our web app allows you to conveniently monitor and manage your facilities from anywhere. You can access real-time project reports, repair history, and facility health status, empowering you with valuable insights.
                      </p>
                    </div>
                    <div id="faqs-list" style={{marginTop: '60px'}}>
                      <div className="panel">
                        <button className="collapsible">
                          Can I customize a maintenance plan that suits my specific needs?
                        </button>
                        <div className="content">
                          <p>
                            Yes, you can subscribe to a customized maintenance plan. We understand that every facility has unique requirements, so we work closely with you to design a plan that aligns with your goals and ensures optimal facility performance.
                          </p>
                        </div></div></div></div></div></div></div>
            <div className="formatright2" style={{marginTop: '50px'}}>
              <div className="ques" style={{marginLeft: '160px'}}>
                <div id="faqs-list">
                  <div className="panel">
                    <button className="collapsible">How does the Internet of Things (IoT) benefit facility monitoring?</button>
                    <div className="content">
                      <p>
                        By harnessing IoT technology, you can smartly monitor your facilities based on factors like power consumption and current dissipation. This data-driven approach allows you to make informed decisions, optimize efficiency, and identify potential issues in real-time.
                      </p>
                    </div>
                    <div id="faqs-list" style={{marginTop: '60px'}}>
                      <div className="panel">
                        <button className="collapsible">How do I book your services?</button>
                        <div className="content">
                          <p>
                            Booking our services is simple. You can visit our website and use our user-friendly web app to schedule appointments, select the services you need, and receive transparent pricing details. It's hassle-free and saves you time
                          </p>
                        </div></div></div></div></div></div>
              <div className="ques">
                <div id="faqs-list">
                  <div className="panel">
                    <button className="collapsible"> What if I need urgent repairs outside of regular business hours?</button>
                    <div className="content">
                      <p>
                        We understand that emergencies can happen at any time. Our services are available round the clock, including weekends and holidays. Simply reach out to our customer support, and we'll promptly assist you.
                      </p>
                    </div>
                    <div id="faqs-list" style={{marginTop: '60px'}}>
                      <div className="panel">
                        <button className="collapsible">
                          Do you offer compliance and verification services?
                        </button>
                        <div className="content">
                          <p>
                            Yes, we provide verification and compliance services. Our expert team conducts electrical safety checks, ensures plumbing compliance, performs fire safety inspections, conducts energy efficiency audits, and assesses code compliance
                          </p>
                        </div></div></div></div></div></div></div>
          </center>
        </div>
        {/*end of section5*/}
        {/*start of mobile footer*/}
        <footerf>
          <div className="footercontent1"><br /><br />
            <h2>Newsletter</h2>
            <form1>
              <input type="email" placeholder="Type Email Address" /><br /><br /><br />
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
          <div className="footercontent4">
            <h2>About Us</h2>
            <a>Who are we</a><br />
            <a>Blogs</a><br />
            <a>Events</a><br />
            <a>Projects</a>
          </div><br />
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
      </div>
    </>
  )
}

export default App
