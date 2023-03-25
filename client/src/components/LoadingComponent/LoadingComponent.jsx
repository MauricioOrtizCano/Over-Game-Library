import React from "react";
import style from './LoadingComponent.module.css'
import loading from './Loading-unscreen.gif';

const ErrorComponent = () => {
    return(
        <div>
            <img src={loading} alt="Loading" className={style.loading_image}/>
        </div>
    )
};

export default ErrorComponent;