import React from 'react';
// import $ from 'jquery';
import { Link, Routes, Route, Navigate } from 'react-router-dom' //navigate
import Experience from './Experience'
import Resume from './Resume'
import Hero from './Hero'

import '../styles/Nav.css'

function Nav() {

    // $(function () {
    //     $("#nav-home").click(function () {
    //         $("li").removeClass("active")
    //         $("#nav-home").addClass("active")
    //     })
    //     $("#nav-experience").click(function () {
    //         $("li").removeClass("active")
    //         $("#nav-experience").addClass("active")
    //     })
    //     $("#nav-resume").click(function () {
    //         $("li").removeClass("active")
    //         $("#nav-resume").addClass("active")
    //     })
    // })

    return (
        <>
            <header>
                <nav className="nav" role="navigation">
                    <ul>
                        <li id="nav-home" >  {/* className='active' */}
                            <Link to='/'>Home</Link>
                        </li>
                        <li id="nav-experience">
                            <Link to='/experience' id="nav-projects">Projects</Link>
                        </li>
                        <li id="nav-resume">
                            <Link to='/resume' id="nav-resume">Resume</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <Routes>
                <Route path='*' element={<Navigate to="/" replace />} />
                <Route path='/' element={<Hero />} />
                <Route path='/experience' element={<Experience />} />
                <Route path='/resume' element={<Resume />} />
            </Routes>
        </>
        // <div className='nav'>
        //     <ul>
        //         <li>
        //             <Link to='/' id="nav-home">Home</Link>
        //         </li>
        //         <li>
        //             <Link to='/experience' id="nav-projects">Projects</Link>
        //         </li>
        //         <li>
        //             <Link to='/resume' id="nav-resume">Resume</Link>
        //         </li>
        //     </ul>
        //     <Routes>
        //         <Route path='*' element={<Navigate to="/" replace />} />
        //         <Route path='/' element={<Hero />} />
        //         <Route path='/experience' element={<Experience />} />
        //         <Route path='/resume' element={<Resume />} />
        //     </Routes>
        // </div>
    )
}


export default Nav;