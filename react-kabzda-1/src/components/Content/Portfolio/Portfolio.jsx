import s from "./Portfolio.module.css";
import React from "react";

const Portfolio = () => {
  return (
    <div className={s.portfolio}>
      <div>
        <img className={s.img} src='https://st.joinsport.io/player/2174946/photo/5de7d76b38157_thumb.jpg' alt='andrey' />
      </div>
      <div className={s.desc}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, eum!
      </div>
    </div>
  )
}

export default Portfolio;