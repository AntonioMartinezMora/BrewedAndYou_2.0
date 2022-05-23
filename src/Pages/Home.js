import React from "react";
// Components
import Hero from "../Components/Hero";
import HomeDiscover from "../Components/HomeDiscover";
// Style
import '../Style/App.css'
// Data for home page
import HomeData from '../HomeData.json'


function Home(){
    return <main>
        <Hero homeData={HomeData}/>
        <HomeDiscover homeData={HomeData}/>
    </main>
}

export default Home;