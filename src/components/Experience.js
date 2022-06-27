import React from 'react';
import '../styles/Experience.css'
const data = require('../data/stories.json')

function Experience() {
    return (
        <div className='experience'>
            <h1>
                Some projects I'm proud of
            </h1>
            <div className="layout">
                <div className="col left">
                    {data.map(d => (
                        <p onMouseEnter={e => (document.getElementById("aadit").src = require(`../images/${d.img}`))}>{d.project}</p>//${d.img}
                    ))}
                </div>
                <div className="col right">
                    <img id="aadit" width={"100%"} src="https://cnsmaryland.org/interactives/fall2021/goucher-poll/illustrations/social-card-image.png" />
                </div>
            </div>
        </div>
    )
}

export default Experience;