import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Card.css'

const Card = ({ logement }) => {
    return (
        <NavLink to={`FicheItem/${logement.id}`}>
            <li className='logement-item'>
                <div className='gradient-overlay'>
                    <img className='card-cover' src={logement.cover} alt={"logement" + logement.title} />
                </div>
                <h2 className='title-card'>
                    {logement.title}
                </h2>
            </li>
        </NavLink>
    );
};

export default Card;