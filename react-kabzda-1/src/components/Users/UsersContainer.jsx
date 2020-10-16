import React from "react";
import {connect} from "react-redux";
import * as axios from "axios";
import {
  setCurrentPage,
  setToggleIsFetching, setToggleSubscribeProgress,
  setTotalUsersCount,
  setUsers,
  subscribe,
  unsubscribe
} from "../../Redux/users-reducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.setToggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
      withCredentials: true,
    })
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
        this.props.setToggleIsFetching(false);
      })
  }

  onPageChanged = (pageNumber) => {
    this.props.setToggleIsFetching(true);
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
      withCredentials: true
    })
      .then(response => {
        this.props.setToggleIsFetching(false);
        this.props.setUsers(response.data.items);
      })
  }

  render() {
    return <>
      {this.props.isFetching ? <Preloader/> : null}
      < Users totalUsersCount={this.props.totalUsersCount}
              pageSize={this.props.pageSize}
              users={this.props.users}
              currentPage={this.props.currentPage}
              onPageChanged={this.onPageChanged}
              subscribe={this.props.subscribe}
              unsubscribe={this.props.unsubscribe}
              setToggleSubscribe={this.props.setToggleSubscribeProgress}
              setTotalUsersCount={this.props.setTotalUsersCount}
      />
    </>
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingSubscribeProgress: state.usersPage.followingSubscribeProgress
  }
}

// let mapDispatchToProps = (dispatch) => {
//   return {
//     subscribe: (userId) => {
//       dispatch(subscribeAC(userId));
//     },
//     unsubscribe: (userId) => {
//       dispatch(unsubscribeAC(userId));
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users));
//     },
//     setCurrentPage: (currentPage) => {
//       dispatch(setCurrentPageAC(currentPage))
//     },
//     setTotalUsersCount: (totalCount) => {
//       dispatch(setTotalUsersCountAC(totalCount))
//     },
//     setToggleIsFetching: (isFetching) => {
//       dispatch(setToggleIsFetchingAC(isFetching))
//     }
//   }
// }

export default connect(mapStateToProps,
  {subscribe, unsubscribe, setUsers, setCurrentPage, setTotalUsersCount, setToggleIsFetching, setToggleSubscribeProgress})(UsersContainer);


