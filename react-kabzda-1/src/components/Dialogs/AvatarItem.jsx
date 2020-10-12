import s from "./Dialogs.module.css";
import React from "react";

const AvatarItem = (props) => {
  return (
    <img className={s.avatar} src={props.avatar} alt={props.alt}/>
  )
}

export default AvatarItem;