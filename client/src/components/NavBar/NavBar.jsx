import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from "./NavBar.module.css";
import logoApp from "../MainPage/media/Logo_APP.png";

const NavBar = () => {
  return (
    <div className={style.container_nav}>
      <img src={logoApp} alt="logoApp" className={style.logo} />
      <div className={style.container_link}>
        <NavLink to="/create_game" className={style.create_link}>
          ➕ Create Game
        </NavLink>
      </div>
      <SearchBar />
    </div>
  );
};

export default NavBar;
