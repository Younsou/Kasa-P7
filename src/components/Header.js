import React from 'react'
import { NavLink } from 'react-router-dom'
import LOGO_Red from '../images/LOGO_Red.svg'
import '../styles/Header.css'

function Navigation() {
    return (
        <div className='Header'>
            <img src={LOGO_Red} alt='logo' className='logo' />
            <nav>
                <ul className='menu'>
                    <NavLink to="/">
                        <li>Accueil</li>
                    </NavLink>
                    <NavLink to="About">
                        <li>A&nbsp;Propos</li>
                    </NavLink>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation