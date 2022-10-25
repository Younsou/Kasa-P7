import React from 'react'
import LetterK from '../images/LetterK.svg'
import HouseSvg from '../images/HouseSvg.svg'
import LetterS from '../images/LetterS.svg'
import LetterA from '../images/LetterA.svg'
import '../styles/animation.css'

const Loader = () => {
    return (
        <div className="loader">
            <img src={LetterK} alt='letter logo' className="letter" />
            <img src={HouseSvg} alt='letter logo' className="letter" />
            <img src={LetterS} alt='letter logo' className="letter" />
            <img src={LetterA} alt='letter logo' className="letter" />
        </div>
    )
}

export default Loader