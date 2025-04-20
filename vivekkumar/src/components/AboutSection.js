import React from 'react'

export default function AboutSection() {
  return (
    <div>
          {/* <!-- ======= About Section ======= --> */}
  <section id="about" className="about">
    <div className="container">

      <div className="section-title">
        <h2>About</h2>
        <ul>
          <li><strong>Backend Developer</strong> focused on building <strong>scalable</strong>, <strong>efficient</strong>, and <strong>reliable systems</strong>.</li>
          <li>Proficient in <strong>Python</strong>, <strong>Node.js</strong>, <strong>MongoDB</strong>, <strong>Redis</strong>, and <strong>Docker</strong> for creating robust backend architectures.</li>
          <li>Experienced in <strong>optimizing data flows</strong>, improving query performance, and handling large datasets effectively.</li>
          <li>Skilled in <strong>debugging</strong>, implementing <strong>observability</strong>, and using tools like <strong>Coralogix</strong> for proactive issue resolution.</li>
          <li>Deep understanding of <strong>Domain-Driven Design (DDD)</strong> and microservices, with a strong focus on <strong>clean, maintainable code</strong>.</li>
          <li>Collaborates cross-functionally with <strong>product teams</strong> and <strong>infrastructure teams</strong> to deliver seamless and scalable solutions.</li>
          <li>Passionate about learning and improving — currently exploring <strong>React</strong> for full-stack development and deepening my knowledge of <strong>relational databases</strong>.</li>
          <li>Constantly building <strong>side projects</strong>, experimenting with new technologies, and refining my skill set to stay at the cutting edge of backend development.</li>
        </ul>
      </div>

      <div className="row">
        <div className="col-lg-4" data-aos="fade-right">
          <img src={require('../img/vivekkumar.jpeg')} className="img-fluid" alt=""/>
        </div>
        <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
          <h3>Software Developer</h3>
          <div className="row">
            <div className="col-lg-6">
              <ul>
                <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>14 Aug 2001</span></li>
                {/* <!-- <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li> --> */}
                <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>6306608567</span></li>
                <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Varanasi, Uttar Pradesh</span></li>
              </ul>
            </div>
            <div className="col-lg-6">
              <ul>
                <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>22</span></li>
                <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Graduation</span></li>
                <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>varanasisk0011@gmail.com</span></li>
                {/* <!-- <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li> --> */}
              </ul>
            </div>
          </div>
          <p>
          I'm always eager to take on new challenges and contribute to the growth of a dynamic team. If you're interested in working with me or discussing potential opportunities, feel free to get in touch. Thank you for visiting my portfolio, and I look forward to connecting with you!
          </p>
        </div>
      </div>

    </div>
  </section>
  {/* <!-- End About Section --> */}
    </div>
  )
}
