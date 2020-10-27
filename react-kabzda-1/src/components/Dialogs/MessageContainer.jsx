import {connect} from "react-redux";
import MessageItem from "./MessageItem";
import {compose} from "redux";
import {sendMessage} from "../../Redux/dialogs-reducer";

let mapStateToProps = (state) => {
  return {
    state: state.dialogsPage
  }
}

const MessageContainer = compose(
  connect(mapStateToProps,
    {sendMessage})
)(MessageItem);

export default MessageContainer;