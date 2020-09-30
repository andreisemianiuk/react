import s from "./Post.module.css";
import React from "react";

const Post = (props) => {

  let newTextItem = React.createRef();
  let addPost = () => {
    let text = newTextItem.current.value;
    alert(text);
  }

  return (
    <div className={s.item}>
      <img src={props.ava} id={props.id} alt={props.id} />
      <div>
        <input ref={newTextItem} placeholder='enter text'/>
        <button onClick={addPost}>Send</button>
      </div>
    </div>
  )
}

export default Post;