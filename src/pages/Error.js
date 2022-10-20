import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Error.css'

function Error() {
    return (
        <div className='container_error'>
            <p className='error_number'>404</p>
            <h1 className='error_text'>Oups! La page que vous demandez n'existe pas.</h1>
            <Link to="/">
                <p className='text_return'>Retourner sur la page d’accueil</p>
            </Link>
        </div>
    )
}

export default Error