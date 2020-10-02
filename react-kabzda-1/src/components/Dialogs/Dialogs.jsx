import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";



const Dialogs = (props) => {
  let dialogsElement = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
  let avatarsElement = props.dialogsPage.avatars.map(a => <AvatarItem avatar={a.avatar} alt={a.alt} />)

  return (
    <div className={s.dialogs}>
      <div className={s.avatarItems}>
        {avatarsElement}
      </div>
      <div className={s.dialogItems}>
        {dialogsElement}
      </div>
      <div className={s.messages}>
        <MessageItem newDialogsText={props.dialogsPage.newDialogsText}
                     updateNewDialogText={props.updateNewDialogText}
                     sendMessage={props.sendMessage} />
      </div>
    </div>
  )
}

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id;

  return (
    <div className={s.dialog}>
      <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
    </div>
  )
}

const MessageItem = (props) => {

  let textElement = React.createRef();
  let sendMessage = () => {
    props.sendMessage();
  }

  let onChange = () => {
    let text = textElement.current.value;
    props.updateNewDialogText(text);
  }


  return (
    <div className={s.messages}>
      <div>
        <textarea ref={textElement} onChange={onChange} value={props.newDialogText}/>
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


export default Dialogs;