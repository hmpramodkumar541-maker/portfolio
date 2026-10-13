import React from 'react'
import "./Home.css"
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div>

            <div className="home" id="home">
                <div className="container">
                    <div className="element">
                        <h3>hellow , I'm</h3>
                        <h1>H. M. Pramod Kumar</h1>
                        <p>I am a BE graduate in Electronics and Communication
                            Engineering with an interest in software development.
                            I have knowledge of Python, SQL, HTML, CSS, Django,
                            React basics, and REST APIs. I enjoy learning new
                            technologies and building web applications. I am
                            looking for an opportunity to begin my career as a
                            software developer. </p>



                        <div className="icons">

                            <a
                                href="https://www.linkedin.com/in/h-m-pramod-kumar-701284351/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                            <a
                                href="https://github.com/hmpramodkumar541-maker"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <i className="fa-brands fa-github"></i>
                            </a>



                            <div className="btn">
                                <Link to="/contact">
                                    <button type="button">Contact Me</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="img">
                        <img src="portfolio image.jpeg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
