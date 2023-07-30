import React from 'react'

export default function PortfolioSection() {
    return (
        <div className="container portfolio">
            <div id='portfolio'></div>
            <div className="section-title">
                <h2>Portfolio</h2>
            </div>
            {/* first project container */}
            <div className="card-group  ">
                <div className="card mx-3">
                    <img src={require('../img/portfolio/p01.png')} className="img-fluid rounded-start projectImg" alt="img" />
                    <div className="card-body">
                        <h5 className="card-title">Interviewconnect</h5>
                        <p className="card-text">InterviewConnect is a collaborative project created by me and Satyam Yadav. The primary goal of this project is to offer a user-friendly platform where users can access a broad range of interview questions for different technologies and subjects</p>
                    </div>
                    <div className="card-footer">
                        <a href='https://interviewconnect.vercel.app//' className="projectbtn mx-2">Live</a>
                        <a href='https://github.com/vivekkumar9919/InterviewConnect' className="projectbtn mx-2"> &lt;/&gt; Code</a>
                    </div>
                </div>

                <div className="card mx-3">
                    <img src={require('../img/portfolio/p1.png')} className="img-fluid rounded-start projectImg" alt="img" />
                    <div className="card-body">
                        <h5 className="card-title">Coding Profile Manager</h5>
                        <p className="card-text">A coding profile manager showcases developers' skills and experience. This project integrates profiles from various coding platforms like leetcode, codechef and codeforces</p>
                    </div>
                    <div className="card-footer">
                        <a href='https://coding-profile-manager.vercel.app/' className="projectbtn mx-2">Live</a>
                        <a href='https://coding-profile-manager.vercel.app/' className="projectbtn mx-2"> &lt;/&gt; Code</a>
                    </div>
                </div>

                <div className="card mx-3">
                    <img src={require('../img/portfolio/p2.png')} className="img-fluid rounded-start projectImg" alt="img" />
                    <div className="card-body">
                        <h5 className="card-title">Portfolio</h5>
                        <p className="card-text">A portfolio website is a personal website that showcases a person's skills, experience, and accomplishments, typically in a professional context.</p>
                    </div>
                    <div className="card-footer">
                        <a href='https://coding-profile-manager.vercel.app/' className="projectbtn mx-2">Live</a>
                        <a href='https://coding-profile-manager.vercel.app/' className="projectbtn mx-2"> &lt;/&gt; Code</a>
                    </div>
                </div>

            </div>
            {/* second project container */}
            <div className="card-group  mt-5">
                <div className="card mx-3">
                    <img src={require('../img/portfolio/p3.png')} className="img-fluid rounded-start projectImg" alt="img" />
                    <div className="card-body">
                        <h5 className="card-title">iNoteBook</h5>
                        <p className="card-text">An online web platform where you can create, edit, upload, delete your notes/information privately and securely without any disturbancee</p>
                    </div>
                    <div className="card-footer">
                        <a href='https://inotebook-ivory.vercel.app/' className="projectbtn mx-2" disabled>Live</a>
                        <a href='https://github.com/vivekkumar9919/iNoteBook' className="projectbtn mx-2"> &lt;/&gt; Code</a>
                    </div>
                </div>
                <div className="card mx-3">
                    <img src={require('../img/portfolio/p4.png')} className="img-fluid rounded-start projectImg" alt="img" />
                    <div className="card-body">
                        <h5 className="card-title">Typing master</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div className="card-footer">
                        <a href='https://github.com/vivekkumar9919/Typing-master' className="projectbtn mx-2">Live</a>
                        <a href='https://github.com/vivekkumar9919/Typing-master' className="projectbtn mx-2"> &lt;/&gt; Code</a>
                    </div>
                </div>

                <div className="card mx-3">
                    <img src={require('../img/portfolio/p5.png')} className="img-fluid rounded-start projectImg" alt="img" />
                    <div className="card-body">
                        <h5 className="card-title">UP Tourism</h5>
                        <p className="card-text">Clone of UP Tourism website</p>
                    </div>
                    <div className="card-footer">
                        <a href='https://github.com/vivekkumar9919/Up-tourism' className="projectbtn mx-2">Live</a>
                        <a href='https://github.com/vivekkumar9919/Up-tourism' className="projectbtn mx-2"> &lt;/&gt; Code</a>
                    </div>
                </div>

            </div>

            {/* third project container */}
            {/* <div className="card-group  mt-5">
                <div className="card mx-3">
                    <img src={require('../img/portfolio/p6.png')} className="img-fluid rounded-start projectImg" alt="img" />
                    <div className="card-body">
                        <h5 className="card-title">Technostore</h5>
                        <p className="card-text">E-commerce website for selling electronic gadgets with more amazing features</p>
                    </div>
                    <div className="card-footer">
                        <a href='https://github.com/vivekkumar9919/TechnoStore' className="projectbtn mx-2">Live</a>
                        <a href='https://github.com/vivekkumar9919/TechnoStore' className="projectbtn mx-2"> &lt;/&gt; Code</a>
                    </div>
                </div>
                <div className="card mx-3">
                    <img src={require('../img/portfolio/p6.png')} className="img-fluid rounded-start projectImg" alt="img" />
                    <div className="card-body">
                        <h5 className="card-title">Technostore</h5>
                        <p className="card-text">E-commerce website for selling electronic gadgets with more amazing features</p>
                    </div>
                    <div className="card-footer">
                        <a href='https://github.com/vivekkumar9919/TechnoStore' className="projectbtn mx-2">Live</a>
                        <a href='https://github.com/vivekkumar9919/TechnoStore' className="projectbtn mx-2"> &lt;/&gt; Code</a>
                    </div>
                </div>
                <div className="card mx-3">
                    <img src={require('../img/portfolio/p6.png')} className="img-fluid rounded-start projectImg" alt="img" />
                    <div className="card-body">
                        <h5 className="card-title">Technostore</h5>
                        <p className="card-text">E-commerce website for selling electronic gadgets with more amazing features</p>
                    </div>
                    <div className="card-footer">
                        <a href='https://github.com/vivekkumar9919/TechnoStore' className="projectbtn mx-2">Live</a>
                        <a href='https://github.com/vivekkumar9919/TechnoStore' className="projectbtn mx-2"> &lt;/&gt; Code</a>
                    </div>
                </div>
            </div> */}

        </div>
    )
}





