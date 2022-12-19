import React from 'react'
import '../styles/Hero.scss'
import TypeIt from "typeit-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faMastodon, faGithubAlt, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import Sparklines from '../components/Sparklines'

const Hero = props => {

    const { data } = props

    const intro = data.intro

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

            {intro.map((text, index) => (
                index === 1 ? <p key={index}>{text} <Sparklines />.</p> :
                    <p key={index}>{text}</p>
            ))}
            <a href='https://twitter.com/aadittambe/' rel="noreferrer" target="_blank">
                <FontAwesomeIcon className="icon" icon={faTwitter} size='2x' />
            </a>
            <a href='https://vis.social/@aadittambe' rel="noreferrer" target="_blank">
                <FontAwesomeIcon className="icon" icon={faMastodon} size='2x' />
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