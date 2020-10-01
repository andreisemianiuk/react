import s from "./Posts.module.css";
import React from "react";
import Post from "./Post/Post";

const Posts = (props) => {
  let postsElement = props.posts.map(p => <Post message={p.message} ava={p.ava} id={p.id}/>)

  let newItem = React.createRef();
  let addPost = () => {
    let text = newItem.current.value;
    props.addPost(text);
    newItem.current.value = '';
  }

  return (
    <div className={s.posts}>
      <h3>My Posts</h3>
      <textarea ref={newItem}>/</textarea>
      <div>
        <button onClick={addPost}>Send</button>
      </div>
      {postsElement}
    </div>
  )
}

export default Posts;