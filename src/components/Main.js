import React from 'react'
import Nav from './Nav'
import Hero from './Hero'
import Footer from './Footer'
import Experience from './Experience'

import '../styles/Main.css'

import { Routes, Route, Navigate } from 'react-router-dom'

function Main() {
    return (
        <>
            <Nav />
            <div className='container'>

                <Routes>
                    <Route path='/' element={<Hero />} />
                    <Route path='/experience' element={<Experience />} />
                    <Route path='/' element={<Navigate to="/" />} />
                </Routes>
                <Footer />
            </div>
        </>
    )
}

export default (Main);