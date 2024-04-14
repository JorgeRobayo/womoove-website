import React from 'react'
import BestSellers from '../../components/BestSellers/BestSellers'
import IntroBanner from '../../components/IntroBanner/IntroBanner'
import NewReleases from '../../components/NewReleases/NewReleases'
import WhatHot from '../../components/WhatHot/WhatHot'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'

function Home() {
  return (
    <div>
        <h1>Womoove Home Page</h1>
        <NavBar />
        <IntroBanner />
        <BestSellers />
        <NewReleases />
        <WhatHot />
        <Footer />

    </div>
  )
}

export default Home