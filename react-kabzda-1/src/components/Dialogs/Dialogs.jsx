import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {sendMessageActionCreator, updateNewDialogTextActionCreator} from "../../Redux/dialogsReducer";



const Dialogs = (props) => {

  let dialogsElement = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} message={d.message}/>)
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
        <MessageItem newDialogText={props.dialogsPage.newDialogText}
                     dispatch={props.dispatch} />
      </div>
    </div>
  )
}

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id;

  return (
    <div className={s.dialog}>
      <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
      <div>{props.message}</div>
    </div>
  )
}

const MessageItem = (props) => {

  let sendMessage = () => {
    props.dispatch(sendMessageActionCreator());
  }

  let onChange = (e) => {
    let text = e.target.value;
    let newVar = updateNewDialogTextActionCreator(text);
    props.dispatch(newVar);
  }

  return (
    <div className={s.messages}>
      <div>
        <textarea onChange={onChange} value={props.newDialogText} placeholder='Enter new message'/>
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