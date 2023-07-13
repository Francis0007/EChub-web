import React from 'react';
import './App.css';




const Section5 = () => {
    
    var coll = document.getElementsByClassName("collapsible");
    var i;
    
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    }
    
    var coll = document.getElementsByClassName("collapsiblef");
    var i;
    
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    }
    
  return (
<>
 {/*section5*/}
 <div className="section5">
          <center>
            <h1>Frequently Asked Questions</h1>
            {/*mobile view*/}
            <br />
            <center>
              <div className="formatright2">
                <div id="faqs-listf" style={{marginTop: '-50px', marginLeft: '30px'}}>
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
       
</>

  )
}

export default Section5;