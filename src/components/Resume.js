import React from "react";
import '../styles/Resume.css'
import Pdf from '../docs/AaditTambe_Resume.pdf';
const data = require("../data/resume.json");

const work = data.work
const ed = data.ed
const skills = data.skills


function Resume() {
    return (
        <main className="resume">
            <h1>📝 Resume</h1>
            <div className="ital source">
                <p >And <a href={Pdf} rel="noreferrer" target="_blank">here's</a> a PDF, if that's what you're looking for.</p>
            </div>
            <div className="section">
                <h2>💼 Work experience</h2>
                {Object.entries(work).map((place, index) => {
                    return (<div className="item" key={index}>
                        <h3 className="org">{place[0]}</h3>
                        {place[1].map((d, i) => {
                            console.log(d);
                            return (
                                <div className="exp" key={i}>
                                    <div className="left">
                                        <h4 className="dates">{d.dates}</h4>
                                    </div>
                                    <div className="right">
                                        <h4 className="title">{d.title}</h4>
                                        <p className="desc">{d.desc}</p>
                                    </div>
                                </div>
                            )
                        })}

                    </div>)
                }
                )}

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
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default Resume;