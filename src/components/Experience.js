import React from "react";
import "../styles/Experience.css";
const data = require("../data/stories.json");

function Experience() {
  return (
    <div className="experience">
      <h1>Some projects I'm proud of</h1>
      <div className="layout">
        {data.map((d) => (
          <div className="story">
            <a href={`../images/tracker.png`}>
              <p className="tools">{d.tools}</p>
              <img
                src={require(`../images/tracker.png`)}
                alt={d.alt}
                className="story-img"
                // width="100%"
              ></img>
              <p className="story-name">{d.project}</p>
              <p className="story-org">{d.org}</p>
            </a>
          </div>
        ))}
      </div>
      <div className="crap"></div>
    </div>
  );
}

export default Experience;
