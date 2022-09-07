import React from 'react'

import '../styles/Hero.css'
import TypeIt from "typeit-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGithubAlt, faLinkedin } from '@fortawesome/free-brands-svg-icons'


import Sparklines from '../components/Sparklines'

const Hero = props => {

    return (

        <main className='hero'>
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
            <p>Currently, I work on the news design team at The Washington Post, where I build rich, highly customized interactive storytelling experiences, web apps and digital products.</p>

            <p>Previosuly, I was a data reporting fellow at the Howard Center for Investigative Journalism at the University of Maryland, and have interned at NBC News on the data and graphics team. My code contributions on GitHub in the last year look like this <Sparklines data="https://raw.githubusercontent.com/aadittambe/dot-com-two-point-o/main/gh-contribs/contribs.json" />.</p>
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
        </main>)
}

export default Hero;