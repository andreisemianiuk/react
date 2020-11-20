import s from "./Dialogs.module.css";
import React from "react";
import DialogItem from "./DialogItem";
import AvatarItem from "./AvatarItem";
import {Field, reduxForm} from "redux-form";
import {maxLength50, required} from "../../Utilites/validators/validators";
import {Textarea} from "../Common/FormControls/FormControls";

const MessageItem = (props) => {
  let dialogsElement = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}
                                                                message={d.message}/>)
  let avatarsElement = props.state.avatars.map(a => <AvatarItem avatar={a.avatar} alt={a.alt}/>)

  let sendMessage = (values) => {
    props.sendMessage(values.newMessage)
  }
  return (
    <div className={s.dialogs}>
      <div className={s.dialog}>
        {avatarsElement}
      </div>
      <div className={s.dialog}>
        {dialogsElement}
      </div>
      <MessageForm onSubmit={sendMessage}/>
    </div>
  )
}

let MessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} validate={[required, maxLength50]} name="newMessage" placeholder='Enter new message'/>
      </div>
      <div>
        <button>Send message</button>
      </div>
    </form>
  )
}

MessageForm = reduxForm({
  form: 'messages'
})(MessageForm)

export default MessageItem;