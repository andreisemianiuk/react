import {sendMessageActionCreator, updateNewDialogTextActionCreator} from "../../Redux/dialogsReducer";
import MessageItem from "./MessageItem";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
  return {
    state: state.dialogsPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageActionCreator());
    },
    updateNewDialogText: (text) => {
      dispatch(updateNewDialogTextActionCreator(text));
    }
  }
}

const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(MessageItem);

export default MessageContainer;