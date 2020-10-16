import {addPost, updateNewPostText} from "../../../Redux/profile-reducer";
import Posts from "./Posts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage
  }
}

// let mapDispatchToProps = (dispatch) => {
//   return {
//     addPost: () => {
//       dispatch(addPost());
//     },
//     updateNewPostText: (text) => {
//       dispatch(updateNewPostText(text));
//     }
//   }
// }


export default connect(mapStateToProps, {addPost, updateNewPostText})(Posts);
