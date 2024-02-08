import React, { useState } from 'react'
import Header from './components/header'
import TabOption from './components/taboption'
import Footer from './components/footer'
import Delivery from './components/delivery'
import DiningOut from './components/diningout'
import NightLife from './components/nightlife'



const App = () => {

  const [activeTab, setActiveTab] = useState("Delivery");

  return (
    <>
<Header />
<TabOption activeTab={activeTab} setActiveTab={setActiveTab} />

{getCorrectScreen(activeTab)}
<Footer />
    </>
  )
}

const getCorrectScreen = (tab) =>{
  switch(tab){
    case "Delivery":
    return <div><Delivery /></div>;
    case "DiningOut":
    return <div><DiningOut /></div>;
    case "Nightlife":
    return <div><NightLife /></div>;
    default: 
    return <div><Delivery /></div>
  }
}

export default App