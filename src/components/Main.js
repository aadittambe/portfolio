import React from 'react'

import Hero from './Hero'
import Footer from './Footer'
import Resume from './Resume'

import '../styles/Main.css'

import { Routes, Route, Navigate } from 'react-router-dom'

function Main() {
    document.body.style.background = "rgb(23, 30, 43)";
    return (
        <div className='container'>
            {/* <Nav /> */}
            <Routes>
                <Route path='/' element={<Hero />} />
                <Route path='/resume' element={<Resume />} />
                <Route path='/' element={<Navigate to="/" />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default (Main);