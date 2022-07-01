import React from "react";
import '../styles/Resume.css'
// import { Container, Row, Col } from 'react-bootstrap';
const data = require("../data/resume.json");

const work = data.work
const ed = data.ed
const skills = data.skills

console.log(skills)
function Resume() {
    return (
        <div className="resume">
            <h1><span className="wave">📝</span> Resume</h1>
            <div className="section">
                <h2>💼 Work experience</h2>
                {work.map((d, i) => (
                    <div className="item" key={i}>
                        <h3 className="org">{d.org}</h3>
                        <div className="exp">
                            <div className="left">
                                <h4 className="dates">{d.dates}</h4>
                            </div>
                            <div className="right">
                                <h4 className="title">{d.title}</h4>
                                <p className="desc">{d.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="section skls">
                <h2>🛠 Skills</h2>
                <div className="skills">
                    {skills.map((d, i) => (

                        <div className="skill">
                            <h3>{d.name}</h3>
                            {d.tools.map((skills, i) => (
                                <p>{skills}</p>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div className="section">
                <h2>📚 Education</h2>
                {ed.map((d, i) => (
                    <div className="item" key={i}>
                        <h3 className="org">{d.school}</h3>
                        <div className="exp">
                            <div className="left">
                                <h4 className="dates">{d.year}</h4>
                            </div>
                            <div className="right">
                                <h4 className="title">{d.degree}, {d.focus}</h4>
                                {/* <p className="desc">{d.focus}</p> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Resume;