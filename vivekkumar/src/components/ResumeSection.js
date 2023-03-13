import React from 'react'

export default function ResumeSection() {
  return (
    <>
      {/* <!-- ======= Resume Section ======= --> */}
  <section id="resume" className="resume">
    <div className="container">

      <div className="section-title">
        <h2>Resume</h2>
      </div>

      <div className="row">
        <div className="col-lg-6" data-aos="fade-up">
          {/* <!-- <h3 className="resume-title">Sumary</h3> --> */}
          {/* <!-- <div className="resume-item pb-0">
            <h4>Alex Smith</h4>
            <p><em>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</em></p>
            <ul>
              <li>Portland par 127,Orlando, FL</li>
              <li>(123) 456-7891</li>
              <li>alice.barkley@example.com</li>
            </ul>
          </div> --> */}

          <h3 className="resume-title">Education</h3>
          <div className="resume-item">
            <h4>Bachelor of technology</h4>
            <h5>2019 - 2023</h5>
            <p><em>Feroze Gandhi Institute of engineering and technology Raebareli</em></p>
            <p>Graduation in Computer Science and Engineering</p>
            <p>Secure :- 8.4 CGPA</p>
          </div>
          <div className="resume-item">
            <h4>Intermediate</h4>
            <h5>2017 - 2018</h5>
            <p><em>Aps Aditya Public School cholapur Varanasi</em></p>
            <p>Passed with percentage :- 86%</p>
          </div>
          <div className="resume-item">
            <h4>High School</h4>
            <h5>2015 - 2016</h5>
            <p><em>Aps Aditya Public School cholapur Varanasi</em></p>
            <p>Passed with CGPA :- 8.8</p>
          </div>
        </div>
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
          <h3 className="resume-title">Professional Experience</h3>
          <div className="resume-item">
            <h4>Full stack with javascript</h4>
            <h5>2022 Aug - 2022 Nov</h5>
            <p><em>Fynd Academy</em></p>
            <ul>
              <li>3 months training in Full stack with javascript</li>
              <li>Learn MongoDB, Express, Vuejs, Nodejs </li>
              <li>I developed two minor projects during your training - Typing Master and E-commerce website Technostore - as well as one major project called Coding Profile Manager</li>
              
            </ul>
          </div>
          {/* <!-- <div className="resume-item">
            <h4>Graphic design specialist</h4>
            <h5>2017 - 2018</h5>
            <p><em>Stepping Stone Advertising, New York, NY</em></p>
            <ul>
              <li>Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</li>
              <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
              <li>Recommended and consulted with clients on the most appropriate graphic design</li>
              <li>Created 4+ design presentations and proposals a month for clients and account managers</li>
            </ul>
          </div> --> */}

        </div>
      </div>

    </div>
  </section>
  {/* <!-- End Resume Section --> */}
    </>
  )
}



