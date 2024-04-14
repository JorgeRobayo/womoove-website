import React from 'react'
import BestSellers from '../../components/BestSellers/BestSellers'
import IntroBanner from '../../components/IntroBanner/IntroBanner'
import NewReleases from '../../components/NewReleases/NewReleases'

function Home() {
  return (
    <div>
        <h1>Womoove Home Page</h1>
        <IntroBanner />
        <BestSellers />
        <NewReleases />

    </div>
  )
}

export default Home