import s from "./Post.module.css";
import React from "react";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src={props.ava} alt='avatarka' />
      <div>{props.message}</div>
    </div>
  )
}

export default Post;