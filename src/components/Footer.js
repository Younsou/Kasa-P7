import React from 'react'
import LOGO_white from '../images/LOGO_white.svg'
import '../styles/Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <img src={LOGO_white} alt='logo' className='LOGO' />
            <p className='Text_footer'>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer