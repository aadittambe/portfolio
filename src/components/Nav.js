import React from 'react';
import { Routes, Route, Navigate, Link } from 'react-router-dom'

import '../styles/Nav.css'

function Nav() {
    return (
        <div className='nav'>
            <ul>
                <li>
                    <Link to='/'>Click here for about</Link>
                </li>
                <li>
                    <Link to='/resume'>resume</Link>
                </li>
            </ul>
        </div>
    )
}


export default Nav;