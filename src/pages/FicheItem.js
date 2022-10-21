import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import LogementList from '../models/logements.json'
import Error from './Error'
import Carousel from "../components/Carousel"
import Tag from "../components/Tag"
import Avatar from "../components/Avatar"
import { ReactComponent as Stars } from '../images/star_Grey.svg'
import Collapse from "../components/Collapse"
import '../styles/FicheItem.css'

// ==============================================================

function FicheItem() {
    const [logement, setLogement] = useState({ tags: [], equipments: [], pictures: [], rating: '', host: { 'name': '', 'picture': '' } })
    const { id } = useParams()

    useEffect(() => {
        LogementList.map((house) => {
            if (house.id === id) {
                setLogement(house)
            }
            return null
        })
    }, [id])

    // Retourne à la page 404 dans le cas où l'id est incorrect ou inexistant:
    if (!logement.id) {
        return < Error />
    }

    return (
        <main className='logement'>
            <div className='carousel-logement'>
                <Carousel img={logement.pictures} />
            </div>
            <section className='section-global'>
                <div className='container-presentation'>
                    <div className='container-header'>
                        <h2 className='title'>{logement.title}</h2>
                        <h3 className='location'>{logement.location}</h3>

                        <div className="container-tag">
                            {logement.tags.map((tag) => <Tag content={tag} key={tag} />)}
                        </div>
                    </div>

                    <div className='container-subheader'>
                        <div>
                            <Avatar name={logement.host.name} picture={logement.host.picture} />
                        </div>

                        <div>
                            {[1, 2, 3, 4, 5].map(star =>
                                <Stars key={star} className={star <= logement.rating ? "star" : null} />
                            )}
                        </div>
                    </div>
                </div>
                <div className='collapse-container'>
                    <Collapse
                        title="Description"
                        content={logement.description}
                    />
                    <Collapse
                        title="Equipements"
                        content={
                            <ul>
                                {logement.equipments.map((equipment) =>
                                    <li key={equipment}>{equipment}</li>)}
                            </ul>
                        }
                    />
                </div>
            </section>
        </main>
    )
}

export default FicheItem
