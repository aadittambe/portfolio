import React from 'react';
import { Link } from 'react-router-dom'

import '../styles/Nav.css'

function Nav() {
    return (
        <div className='nav'>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/experience'>Experience</Link>
                </li>
                <li>
                    <Link to='/resume'>Resume</Link>
                </li>
            </ul>
        </div>
    )
}


export default Nav;