import s from "./Posts.module.css";
import React from "react";
import Post from "./Post/Post";

const Posts = (props) => {

  let postsElement = props.posts.map(p => <Post message={p.message} ava={p.ava} id={p.id}/>)

  return (
    <div className={s.posts}>
      {postsElement}
    </div>
  )
}

export default Posts;