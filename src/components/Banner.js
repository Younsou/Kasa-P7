import React from 'react'
import '../styles/Banner.css'
import Background from '../images/Background_Home.webp'

// ==============================================================

function Banner() {
    return (
        <div className='banner'>
            <img src={Background} alt='bannière paysage' className='background-banner' />
            <h1 className='title-banner'>Chez vous, partout et ailleurs</h1>
        </div>
    )
}

export default Banner