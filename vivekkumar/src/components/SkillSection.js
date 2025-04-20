import React from 'react'


export default function SkillSection() {

  return (
    <>
      {/* <!-- ======= Skills Section ======= --> */}
      <section id="skills" className="skills section-bg">
        <div className="container">

          <div className="section-title">
            <h2>Skills</h2>
            {/* <h2>🛠 My Toolbox</h2> */}
            <p>The greatest skill you can possess is the ability to learn and adapt to change. In today's fast-paced world, everything is constantly evolving, and those who can quickly learn new skills and adapt to new situations are the ones who will thrive. Skill is not just about what you know, but how quickly you can learn and apply new knowledge.</p>
          </div>

          {/* <div className="row skills-content">

            <div className="col-lg-6" data-aos="fade-up">

              <div className="progress">
                <span className="skill">HTML <i className="val">90%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"
                    style={{
                      width: "90%",
                      backgroundColor: "#149ddd",
                      height: "10px",
                      borderRadius: "10px",
                      boxShadow: "inset 0 1px 2px rgba(0, 0, 0, 0.1)"
                    }}
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">CSS <i className="val">90%</i></span>
                <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"
                    style={{
                      width: "90%",
                      backgroundColor: "#149ddd",
                      height: "10px",
                      borderRadius: "10px",
                      boxShadow: "inset 0 1px 2px rgba(0, 0, 0, 0.1)"
                    }}
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">Bootstrap <i className="val">90%</i></span>
                <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"
                    style={{
                      width: "90%",
                      backgroundColor: "#149ddd",
                      height: "10px",
                      borderRadius: "10px",
                      boxShadow: "inset 0 1px 2px rgba(0, 0, 0, 0.1)"
                    }}
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">JavaScript <i className="val">85%</i></span>
                <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"
                    style={{
                      width: "85%",
                      backgroundColor: "#149ddd",
                      height: "10px",
                      borderRadius: "10px",
                      boxShadow: "inset 0 1px 2px rgba(0, 0, 0, 0.1)"
                    }}
                  ></div>
                </div>
              </div>

            </div>

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">

              <div className="progress">
                <span className="skill">Reactjs <i className="val">70%</i></span>
                <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"
                    style={{
                      width: "70%",
                      backgroundColor: "#149ddd",
                      height: "10px",
                      borderRadius: "10px",
                      boxShadow: "inset 0 1px 2px rgba(0, 0, 0, 0.1)"
                    }}
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">Vuejs <i className="val">80%</i></span>
                <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"
                    style={{
                      width: "80%",
                      backgroundColor: "#149ddd",
                      height: "10px",
                      borderRadius: "10px",
                      boxShadow: "inset 0 1px 2px rgba(0, 0, 0, 0.1)"
                    }}
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">Nodejs <i className="val">75%</i></span>
                <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"
                    style={{
                      width: "75%",
                      backgroundColor: "#149ddd",
                      height: "10px",
                      borderRadius: "10px",
                      boxShadow: "inset 0 1px 2px rgba(0, 0, 0, 0.1)"
                    }}
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">MongoDB <i className="val">84%</i></span>
                <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="84" aria-valuemin="0" aria-valuemax="100"
                    style={{
                      width: "84%",
                      backgroundColor: "#149ddd",
                      height: "10px",
                      borderRadius: "10px",
                      boxShadow: "inset 0 1px 2px rgba(0, 0, 0, 0.1)"
                    }}
                  ></div>
                </div>
              </div>

            </div>

          </div> */}
          <div id="my-toolbox" >
            <table>
              <thead>
                <tr>
                  <th>Languages</th>
                  <th>Databases</th>
                  <th>Tools & Infra</th>
                  <th>Dev Practices</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Python 🐍</td>
                  <td>MongoDB 🍃</td>
                  <td>Docker 🐳, Kafka ⚡</td>
                  <td>Logging, Monitoring</td>
                </tr>
                <tr>
                  <td>JS (React) ⚛️</td>
                  <td>Redis 🚀</td>
                  <td>Zookeeper, Git, Postman</td>
                  <td>CI/CD, Test Suites</td>
                </tr>
                <tr>
                  <td>Bash 🖥️</td>
                  <td>PostgreSQL / MySQL (learning)</td>
                  <td>Coralogix, pyenv</td>
                  <td>Code Reviews</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>
      {/* <!-- End Skills Section --> */}
    </>
  )
}
