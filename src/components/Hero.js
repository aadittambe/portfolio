import React from 'react'
import * as d3 from 'd3'
import '../styles/Hero.css'
import TypeIt from "typeit-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGithubAlt, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Hero() {
    d3.json("https://raw.githubusercontent.com/aadittambe/dot-com-two-point-o/main/gh-contribs/contribs.json").then(function (json) {
        console.log(json);
        var content = json.data.user.contributionsCollection.contributionCalendar.weeks
        // console.log(content);
        let data = {}
        content.map(d => {
            const startDate = d.firstDay
            const l1 = d.contributionDays
            // console.log(l1);
            let weekList = 0;
            l1.map(l => {
                weekList = weekList + l.contributionCount
                return weekList
            })
            data[startDate] = weekList
            return data
        })
        data = Object.values(data).map(d => +d);
        console.log(data);
        const width = 100;
        const height = 20;
        const margin = { top: 2, right: 2, bottom: 2, left: 2 };
        const boundedwidth = width - margin.left - margin.right;
        const boundedheight = height - margin.top - margin.bottom;

        const xScale = d3
            .scaleLinear()
            .domain([0, data.length])
            .range([0, boundedwidth]);
        const yScale = d3
            .scaleLinear()
            .domain([0, d3.max(data)])
            .range([boundedheight, 0]);

        const svg = d3
            .select("#sparklines")
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        const line = d3
            .line()
            .x((d, i) => xScale(i))
            .y((d) => yScale(d));

        svg
            .append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "#f6f4e6")
            .attr("stroke-width", 1)
            .attr("d", line);

        svg
            .append("circle")
            .attr("r", 2)
            .attr("cx", xScale(0))
            .attr("cy", yScale(data[0]))
            .attr("fill", "#f6f4e6");

        svg
            .append("circle")
            .attr("r", 2)
            .attr("cx", xScale(data.length - 1))
            .attr("cy", yScale(data[data.length - 1]))
            .attr("fill", "#edcf2e");
        return json
    })
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
            <p>Currently, I am a graphics and design intern at The Washington Post. Previosuly, I was a data reporting fellow at the Howard Center for Investigative Journalism at the University of Maryland, and have interned at NBC News on the data and graphics team. </p>
            <p>Sometimes I code for fun on GitHub, where my contributions in the last year look like this <span id='sparklines'></span>.</p>
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