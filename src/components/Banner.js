import React from 'react'
import '../styles/Banner.css'
import Background_opacity from '../images/Background_opacity.png'
import background from '../images/Background_Home.png'

function Banner() {
    return (
        <div className='banner'>
            <img src={Background_opacity} alt='bannière paysage' className='background-opacity' />
            <img src={background} alt='bannière paysage' className='background-banner' />
            <h1 className='title-banner'>Chez vous, partout et ailleurs</h1>
        </div>
    )
}
export default Banner