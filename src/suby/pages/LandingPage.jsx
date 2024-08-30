import React from 'react'
import TopBar from '../components/TopBar'
import ItemsDisplay from '../components/ItemsDisplay'
import Chains from '../components/Chains'
import FirmCollections from '../components/FirmCollections'


const LandingPage = () => {
  return (
    <div>
      <TopBar/>

       <div className="landingSection">
       <ItemsDisplay/>
       <Chains/>
       <FirmCollections/>
      
       </div>
      
    </div>
  )
}

export default LandingPage
