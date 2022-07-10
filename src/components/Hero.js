import React from 'react'
import '../styles/Hero.css'
import TypeIt from "typeit-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGithubAlt, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Hero() {
    return (
        <div className='hero'>
            <h1><span className='wave'>👋🏽</span> Hi, I am Aadit!</h1>
            <p><span style={{ display: "none" }}>👨🏽‍💻</span>I tell stories — but with<span className='mob-jump'><br /></span> <span className="typeit">
                <TypeIt
                    options={{
                        loop: true,
                        speed: 200,
                        waitUntilVisible: true,
                        lifeLike: true,
                    }}
                    getBeforeInit={(instance) => {
                        instance
                            .pause(1500)
                            .type("code. 🖥")
                            .pause(2000)
                            .delete(7)
                            .type("graphics. 📊")
                            .pause(2500)
                            .delete(11)
                            .type("design. 🎨")
                            .pause(2700)
                            .delete(9)
                            .type("data. 📈")
                            .pause(2100);

                        return instance;
                    }}
                /></span></p>
            <p>Simply put, I am a journalist and a programmer. I use my skills to identify data-driven stories, and present them in visual ways. </p>
            <p>Currently, I am a graphics and design intern at The Washington Post. Previosuly, I was a data reporting fellow at the Howard Center for Investigative Journalism at the University of Maryland, and have interned at NBC News on the data and graphics team.</p>
            <p>If you like to keep up with current events and care about the news — or want to simply chat about trains or nerd out about antique fountain pens — we should connect!</p>
            <a href='https://twitter.com/aadittambe/' rel="noreferrer" target="_blank">
                <FontAwesomeIcon className="icon" icon={faTwitter} size='2x' />
            </a>
            <a href='https://github.com/aadittambe' rel="noreferrer" target="_blank">
                <FontAwesomeIcon className="icon" icon={faGithubAlt} size='2x' />
            </a>
            <a href='https://www.linkedin.com/in/aadittambe/' rel="noreferrer" target="_blank">
                <FontAwesomeIcon className="icon" icon={faLinkedin} size='2x' />
            </a>
            <a href='mailto:aadit.tambe@gmail.com' rel="noreferrer" target="_blank">
                <FontAwesomeIcon className="icon" icon={faEnvelope} size='2x' />
            </a>
        </div>)
}

export default Hero;