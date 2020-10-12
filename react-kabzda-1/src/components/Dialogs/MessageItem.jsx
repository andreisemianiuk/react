import s from "./Dialogs.module.css";
import React from "react";
import DialogItem from "./DialogIstem";
import AvatarItem from "./AvatarItem";

const MessageItem = (props) => {

  let dialogsElement = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}
                                                                            message={d.message}/>)
  let avatarsElement = props.state.avatars.map(a => <AvatarItem avatar={a.avatar} alt={a.alt}/>)

  let sendMessage = () => {
    props.sendMessage();
  }

  let onChangeText = (e) => {
    let text = e.target.value;
    props.updateNewDialogText(text);
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialog}>
        {avatarsElement}
      </div>
      <div className={s.dialog}>
        {dialogsElement}
      </div>
      <div>
        <div>
          <textarea onChange={onChangeText} value={props.state.newDialogText}
                    placeholder='Enter new message'/>
        </div>
        <div>
          <button onClick={sendMessage}>Send message</button>
        </div>
      </div>

    </div>
  )
}

export default MessageItem;