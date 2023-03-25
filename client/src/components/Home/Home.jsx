import React from "react";
import NavBar from "../NavBar/NavBar";
import AllCards from "../AllCards/AllCards";
import fondo from './FondoHome.png';
import style from './Home.module.css'




const Home = () => {
    
    return (
        <div className="Home">
            <img src={fondo} alt='fondo' className={style.fondo}/>
            <div>
                <NavBar />
            </div>
            <div>
                <AllCards />
            </div>
        </div>
    )
};


export default Home;