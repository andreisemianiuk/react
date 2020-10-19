import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const DialogItem = (props) => {

  let path = '/dialogs/' + props.id;

  return (
    <div className={s.dialog}>
      <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
      <div>{props.message}</div>
    </div>
  )
}

export default DialogItem;