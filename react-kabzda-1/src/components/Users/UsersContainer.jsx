import {connect} from "react-redux";
import Users from "./Users";
import {setUsersAC, subscribeAC, unsubscribeAC} from "../../Redux/usersReducer";


let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    subscribe: (userId) => {
      dispatch(subscribeAC(userId));
    },
    unsubscribe: (userId) => {
      dispatch(unsubscribeAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    }
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;