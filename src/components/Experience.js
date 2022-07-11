import React from "react";
import $ from 'jquery';
import "../styles/Experience.css";
const data = require("../data/stories.json");

function Experience() {
  $(function () {
    $("#graphics").click(function () {
      $(".design").hide()
      $(".app").hide()
      $(".data").hide()
      $(".text").hide()
      $(".graphics").show()
      $(".docs").hide()
      $(".btn.reset span").css("background-color", "#f6f4e6")
    });

    $("#data").click(function () {
      $(".design").hide()
      $(".app").hide()
      $(".graphics").hide()
      $(".text").hide()
      $(".data").show()
      $(".docs").hide()
      $(".btn.reset span").css("background-color", "#f6f4e6")
    });

    $("#text").click(function () {
      $(".design").hide()
      $(".app").hide()
      $(".graphics").hide()
      $(".data").hide()
      $(".text").show()
      $(".docs").hide()
      $(".btn.reset span").css("background-color", "#f6f4e6")
    });

    $("#app").click(function () {
      $(".design").hide()
      $(".text").hide()
      $(".graphics").hide()
      $(".data").hide()
      $(".app").show()
      $(".docs").hide()
      $(".btn.reset span").css("background-color", "#f6f4e6")
    });

    $("#docs").click(function () {
      $(".design").hide()
      $(".text").hide()
      $(".graphics").hide()
      $(".data").hide()
      $(".app").hide()
      $(".docs").show()
      $(".btn.reset span").css("background-color", "#f6f4e6")
    });

    $("#reset").click(function () {
      $(".design").hide()
      $(".text").show()
      $(".graphics").show()
      $(".data").show()
      $(".app").show()
      $(".docs").show()
      $(".btn.reset span").css("background-color", "#fddb3a")
    });
  })

  return (
    <div className="experience">
      <div className="intro">
        <h1>🖥 Projects</h1>
        <p>I specialize in telling data-driven stories visually, and my work helps people understand the news and make sense of the policies that impact them.</p>
        <p>This page includes projects I have worked on for <a href="https://www.washingtonpost.com/">The Washington Post</a>, <a href="https://merrill.umd.edu/howard-center-for-investigative-journalism">the Howard Center for Investigative Journalism</a>, <a href="https://cnsmaryland.org/">Capital News Service</a>, <a href="https://www.nbcnews.com/datagraphics">NBC News</a>, <a href="https://dailyiowan.com/">The Daily Iowan</a>, as well as personal practice projects. </p>
      </div>
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
            <a href={d.url} rel="noreferrer" target="_blank">
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
      <div className="source ital"><p>I am a supporter of open-source code — the source code for this website is available on <a href="https://github.com/aadittambe/dot-com-two-point-o">GitHub</a>.</p></div>
    </div >
  );
}

export default Experience;
