import React from 'react';
// import { Link } from 'react-router-dom'
import { Link, Routes, Route, Navigate } from 'react-router-dom' //navigate
import Experience from './Experience'
import Resume from './Resume'
import Hero from './Hero'


import '../styles/Nav.css'

function Nav() {
    return (
        <div className='nav'>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/experience'>Projects</Link>
                </li>
                <li>
                    <Link to='/resume'>Resume</Link>
                </li>
            </ul>
            <Routes>
                <Route path='*' element={<Navigate to="/" replace />} />
                <Route path='/' element={<Hero />} />
                <Route path='/experience' element={<Experience />} />
                <Route path='/resume' element={<Resume />} />
            </Routes>
        </div>
    )
}


export default Nav;