import React from "react";
import {connect} from "react-redux";
import {
  sendMessage,
  updateNewDialogText,
} from "../../Redux/dialogs-reducer";
import MessageItem from "./MessageItem";
import {withAuthRedirect} from "../hoc/Hoc";
import {compose} from "redux";

let mapStateToProps = (state) => {
  return {
    state: state.dialogsPage
  }
}

export const MessageContainer = compose(
  connect(mapStateToProps,
    {sendMessage, updateNewDialogText}),
  withAuthRedirect
)(MessageItem);
