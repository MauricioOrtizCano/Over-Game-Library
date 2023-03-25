import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import style from './GameCard.module.css';
import { getID, getVideogameDetail } from "../../redux/actions/actions"; 

//{id, name, released, image, rating, genres, platforms }

const GameCard = (props) => {
    const dispatch = useDispatch()
    // if(typeof(props.genres[0]) === "string") console.log("true")
    // else console.log("false")
    const handleOnClick = () => {
        dispatch(getID(props.id))
        dispatch(getVideogameDetail(props.id))
    }

    // console.log(props.genres)
    return(
        <div className={style.card_container}>
            <NavLink to={`/videogame/${props.id}`} style={{textDecoration: 'none'}} id={props.id} onClick={handleOnClick}>
                <div className={style.container_image}>
                    <p className={style.rating}>{props.rating}🟊</p>
                    <div className={style.container_main_image}>
                        <img src={props.image} className={style.image_style} alt={props.name} />
                    </div>
                </div>

                <div className={style.container_name}>
                    <h3 className={style.all_name}>{props.name}</h3>
                    <div className={style.cont_genres}>{props.genres?.map(g => {
                        if(typeof(g) !== "string") return <p key={g.name} className={style.genre}>{g.name}</p>
                        else return <p key={g} className={style.genre}>{g}</p>
                    })}</div>
                </div>
            </NavLink>
        </div>
    )
};


export default GameCard;