import s from "./Posts.module.css";
import React from "react";
import Post from "./Post/Post";
import {PostsReduxForm} from "./Post/PostsForm";

const Posts = props => {
  let postsElement = props.profilePage.posts.map(p => <Post message={p.message} ava={p.ava} id={p.id} key={Date.now()}/>)
  const submit = values => props.addPost(values.postText)

  return (
    <div className={s.posts}>
      <h3>My Posts</h3>
      <PostsReduxForm onSubmit={submit}/>
      {postsElement}
    </div>
  )
}

export default Posts;