import React from 'react';
import AppartementList from '../models/logements.json';
import Card from '../components/Card';
import '../styles/Card.css';

function ListCard() {
    return (
        <div className='container_card'>
            <ul className='box_card'>
                {AppartementList
                    .map((logement, index) => (
                        <Card key={index} logement={logement} />
                    ))}
            </ul>
        </div >
    )
}
export default ListCard