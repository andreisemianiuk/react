import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id;

  return (
    <div className={s.dialog}>
      <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
    </div>
  )
}

const MessageItem = (props) => {
console.log(props)
  let textElement = React.createRef();
  let sendMessage = () => {
    let text = textElement.current.value;
    alert(text);
  }

  return (
    <div className={s.messages}>
      <div>
        <textarea ref={textElement}>'</textarea>
      </div>
      <div>
        <button onClick={sendMessage}>Send message</button>
      </div>
    </div>
  )
}

const AvatarItem = (props) => {
  return (
    <img className={s.avatar} src={props.avatar} alt={props.alt}/>
  )
}

const Dialogs = (props) => {

  let dialogsElement = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
  let messagesElement = props.messages.map(m => <MessageItem id={m.id}/>)
  let avatarsElement = props.avatars.map(a => <AvatarItem avatar={a.avatar} alt={a.alt}/>)

  return (
    <div className={s.dialogs}>
      <div className={s.avatarItems}>
        {avatarsElement}
      </div>

      <div className={s.dialogItems}>
        {dialogsElement}
      </div>
      <div className={s.messages}>
        {messagesElement}
      </div>
    </div>
  )
}

export default Dialogs;