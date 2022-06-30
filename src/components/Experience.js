import React from "react";
import "../styles/Experience.css";
const data = require("../data/stories.json");

function Experience() {
  return (
    <div className="experience">
      <h1>Projects and such</h1>
      <fieldset className="btn-row">
        <legend>
          <p> 👀 Looking for a particular type of project? </p>
        </legend>
        <p className="filters">
          <label className="btn reset">
            <input type="radio" name="storyType" value="column" id="reset" />
            <span>🌎<br></br>All</span>
          </label>
          <label className="btn">
            <input type="radio" name="storyType" value="text" id="text" />
            <span>✍️<br></br>Written</span>
          </label>
          <label className="btn">
            <input type="radio" name="storyType" value="data" id="data" />
            <span>📈<br></br>Data-driven</span>
          </label>
          <label className="btn">
            <input type="radio" name="storyType" value="graphics" id="graphics" />
            <span>🗺<br></br>Graphics</span>
          </label>
          <label className="btn">
            <input type="radio" name="storyType" value="app" id="app" />
            <span>🖥<br></br>News app</span>
          </label>
          <label className="btn">
            <input type="radio" name="storyType" value="app" id="docs" />
            <span>📖<br></br>Docs</span>
          </label>
        </p>
      </fieldset>
      <div className="layout">
        {data.map((d, i) => (
          <div className={`story ${d.storyType}`} key={i}>
            <a href={`../images/tracker.png`}>
              <p className="story-tools">🧰 {d.tools}</p>
              <img
                src={d.img.startsWith("https") ? d.img : require(`../images/${d.img}?.jpeg`)}
                alt={d.alt}
                className="story-img"
              ></img>
              <p className="story-org">📍<span className="ital"> {d.org}</span></p>
              <p>🔗 <span className="story-name">{d.project}</span></p>

            </a>
          </div>
        ))}
      </div>
      <div className="crap"></div>
    </div >
  );
}

export default Experience;
