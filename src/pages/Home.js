import React from 'react'
import Loader from '../components/Loader'
import Banner from '../components/Banner'
import ListCard from '../components/ListCard'


// ==============================================================

function Home() {
    return (
        <div>
            <Loader />
            <Banner />
            <ListCard />
        </div>
    )
}

export default Home
