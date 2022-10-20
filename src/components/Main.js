import React from 'react'
import Nav from './Nav'
// import Hero from './Hero'
import Footer from './Footer'
// import Experience from './Experience'
// import Resume from './Resume'

import '../styles/Main.css'
const data = require("../data/data.json");



function Main() {
    return (
        <>
            {/* <div id='container'> */}
            <Nav data={data} />
            <Footer />
            {/* </div> */}
        </>
    )
}

export default (Main);