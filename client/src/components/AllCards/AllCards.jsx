import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames, getGenres } from "../../redux/actions/actions";
import GameCard from "../GameCard/GameCard";
import LoadingComponent from "../LoadingComponent/LoadingComponent";
import style from "./AllCards.module.css";
import Paginated from "../Paginated/Paginated";
import Filters from "../Filters/Filters";

const AllCards = () => {
  const [page, setPage] = useState(1);
  const [input, setInput] = useState(1);
  const byPage = 16;

  const dispatch = useDispatch();
  const { videogames, videogamesFiltered, error } = useSelector(
    (state) => state
  );

  let filters = videogamesFiltered;

  useEffect(() => {
    dispatch(getVideogames());
    dispatch(getGenres());
    filters = videogames;
  }, [dispatch]);

  const max = Math.ceil(filters.length / byPage);

  if (filters.length) {
    return (
      <div>
        <div className={style.supreme_container}>
          <div>
            <Filters filters={filters} setPage={setPage} setInput={setInput} />
          </div>
          <div>
            <div className={style.cards_container}>
              {filters
                ?.slice((page - 1) * byPage, (page - 1) * byPage + byPage)
                .map((vg, index) => (
                  <GameCard
                    key={index}
                    id={vg.id}
                    name={vg.name}
                    released={vg.released}
                    image={vg.image}
                    rating={vg.rating}
                    genres={vg.genres}
                    platforms={vg.platforms}
                  />
                ))}
            </div>
          </div>
        </div>
        <div>
          <Paginated
            page={page}
            setPage={setPage}
            max={max}
            input={input}
            setInput={setInput}
          />
        </div>
      </div>
    );
  }
  if (Object.keys(error).length) {
    return (
      <div>
        <h1>Has ocurred an error</h1>
      </div>
    );
  } else {
    return (
      <div>
        <LoadingComponent />
      </div>
    );
  }
};

export default AllCards;

// if (listener) {
//     const max = Math.ceil(filterUpward.length / byPage);
//     //dispatch(getVideogames())

//     return (
//       <div>
//         <div className={style.cards_container}>
//           {filterUpward
//             .slice((page - 1) * byPage, (page - 1) * byPage + byPage)
//             .map((vg, index) => (
//               <GameCard
//                 key={index}
//                 id={vg.id}
//                 name={vg.name}
//                 released={vg.released}
//                 image={vg.image}
//                 rating={vg.rating}
//                 genres={vg.genres}
//                 platforms={vg.platforms}
//               />
//             ))}
//         </div>
//         <Paginated page={page} setPage={setPage} max={max} />
//       </div>
//     );
//   }
