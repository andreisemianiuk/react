import {addPost} from "../../../Redux/profile-reducer";
import Posts from "./Posts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (postText) => {
      dispatch(addPost(postText));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
