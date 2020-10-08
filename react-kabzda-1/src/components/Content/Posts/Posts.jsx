import s from "./Posts.module.css";
import React from "react";
import Post from "./Post/Post";

const Posts = (props) => {
  let postsElement = props.contentPage.posts.map(p => <Post message={p.message} ava={p.ava} id={p.id}/>)

  let addPost = () => {
    props.addPost();
  }

  let onChangeText = (e) => {
    let text = e.target.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={s.posts}>
      <h3>My Posts</h3>
      <textarea onChange={onChangeText} value={props.contentPage.newPostText}/>
      <div>
        <button onClick={addPost}>Send</button>
      </div>
      {postsElement}
    </div>
  )
}

export default Posts;