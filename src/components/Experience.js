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
                        <div className='story'>
                            <p>{d.tools}</p>
                            <img src={require(`../images/tracker.png`)} width="100%"></img>
                            <p>{d.project}</p>
                            <p>{d.org}</p>
                        </div>
                    ))}
                </div>
                <div className="col right">
                    <img id="aadit" width={"100%"} src="https://cnsmaryland.org/interactives/fall2021/goucher-poll/illustrations/social-card-image.png" />
                </div>
            </div>
            <div className='crap'></div>
        </div>
    )
}

export default Experience;