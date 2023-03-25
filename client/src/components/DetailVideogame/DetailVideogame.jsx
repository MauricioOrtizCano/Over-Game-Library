import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import style from "./DetailVideogame.module.css";
import logoApp from "../MainPage/media/Logo_APP.png";

const DetailVideogame = () => {
  const gameDetail = useSelector((state) => state.videogameDetail);
  const errors = useSelector((state) => state.error);
  //const id = useSelector((state) => state.getId);

  //const transformDescription = gameDetail.description

  if (Object.keys(errors).length) {
    return (
      <div>
        <h1>Has ocurred an error</h1>
      </div>
    );
  }
  return (
    <div className={style.mayor}>
      <img src={gameDetail.image} alt="imagen" className={style.image} />
      <div className={style.container_creategame}>
        <div className={style.container_main_image}>
          <img
            src={gameDetail.image}
            alt="imagen2"
            className={style.main_image}
          />
        </div>
        <div className={style.data_container}>
          <div>
            <h1 className={style.title}>{gameDetail.name}</h1>
          </div>
          <div className={style.container_sentence}>
            <p className={style.sentence}>{gameDetail.description}</p>
          </div>
          <div className={style.all_genres}>
            <p className={style.subtitle}>Genres</p>
            <div className={style.list}>
              {gameDetail.genres?.map((g, index) => {
                if (g.hasOwnProperty("name")) {
                  return (
                    <p key={index} className={style.unit}>
                      {g.name}
                    </p>
                  );
                }
                return (
                  <p key={index} className={style.unit}>
                    {g}
                  </p>
                );
              })}
            </div>
          </div>
          <div>
            <p className={style.subtitle}>Platforms:</p>
            <div className={style.list}>
              {gameDetail.platforms?.map((p, index) => (
                <p key={index} className={style.unit}>
                  {p}
                </p>
              ))}
            </div>
          </div>
          <div className={style.back_tohome}>
            <NavLink to="/home" className={style.link}>
              <img src={logoApp} alt="logoApp" className={style.logo} /> Home
            </NavLink>
          </div>
        </div>
        <div className={style.rating_container}>
          <p className={style.rating}>{gameDetail.rating}🟊</p>
        </div>
      </div>
    </div>
  );
};

export default DetailVideogame;

// return (
//     <div className={style.mayor}>
//       <div className={style.secondbackground}></div>
//       <img src={gameDetail.image} alt="imagen" className={style.image} />
//       <div className={style.container_creategame}>
//         <div className={style.container_main_image}>
//           <img
//             src={gameDetail.image}
//             alt="imagen2"
//             className={style.main_image}
//           />
//         </div>
//         <div className={style.data_container}>
//           <div className={style.main_data}>
//             <div>
//               <h1>{gameDetail.name}</h1>
//               <h3>Released: {gameDetail.released}</h3>
//               <div>
//                 <b>Platforms:</b>
//                 <b>
//                   {gameDetail.platforms?.map((p, index) => (
//                     <p key={index}>{p}</p>
//                   ))}
//                 </b>
//               </div>
//             </div>
//             <div className={style.rating_container}>
//               <p className={style.rating}>{gameDetail.rating}🟊</p>
//             </div>
//           </div>
//           <h3>Description:</h3>
//           <p>{gameDetail.description}</p>
//           <div className={style.mapeo}>
//             <b>Genres: </b>
//             {gameDetail.genres?.map((g, index) => (
//               <p key={index}>{g}</p>
//             ))}
//           </div>
//           <div className={style.back_tohome}>
//             <NavLink to="/home" className={style.link}>
//               🏠 Home
//             </NavLink>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
