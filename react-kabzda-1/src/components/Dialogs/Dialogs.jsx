import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem";
import AvatarItem from "./AvatarItem";
import MessageContainer from "./MessageContainer";

const Dialogs = (props) => {
  let state = props.store.getState();

  let dialogsElement = state.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} message={d.message}/>)
  let avatarsElement = state.dialogsPage.avatars.map(a => <AvatarItem avatar={a.avatar} alt={a.alt} />)

  return (
    <div className={s.dialogs}>
      <div className={s.avatarItems}>
        {avatarsElement}
      </div>
      <div className={s.dialogItems}>
        {dialogsElement}
      </div>
      <div className={s.messages}>
        <MessageContainer store={props.store} />
      </div>
    </div>
  )
}

export default Dialogs;