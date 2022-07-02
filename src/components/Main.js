import React from 'react'
import Nav from './Nav'
import Hero from './Hero'
import Footer from './Footer'
import Experience from './Experience'
import Resume from './Resume'

import '../styles/Main.css'

import { Routes, Route, Navigate } from 'react-router-dom' //navigate

function Main() {
    return (
        <>
            <div className='container'>
                <Nav />
                <Routes>
                    <Route path='*' element={<Navigate to="/" />} />
                    <Route path='/' element={<Hero />} />
                    <Route path='/experience' element={<Experience />} />
                    <Route path='/resume' element={<Resume />} />
                </Routes>
                <Footer />
            </div>
        </>
    )
}

export default (Main);