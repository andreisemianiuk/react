import s from "./Post.module.css";
import React from "react";

const Post = (props) => {

  return (
    <div className={s.item}>
      <img src={props.ava} id={props.id} alt={props.id} />
      <div>{props.message}</div>
    </div>
  )
}

export default Post;