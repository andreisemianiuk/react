import React from "react";
import {connect} from "react-redux";
import {
  setCurrentPage,
  toggleFollowingProgress,
  subscribe,
  unsubscribe,
  requestUsers, follow, unfollow
} from "../../Redux/users-reducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {compose} from "redux";
import {
  getCurrentPage,
  getFollowingProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsers
} from "../../Redux/users-selector";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.requestUsers(pageNumber, this.props.pageSize)
    this.props.setCurrentPage(pageNumber)
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
              followingProgress={this.props.followingProgress}
              follow={this.props.follow}
              unfollow={this.props.unfollow}
              isAuth={this.props.isAuth}
      />
    </>
  }
}

// let mapStateToProps = (state) => {
//   return {
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     followingProgress: state.usersPage.followingProgress
//   }
// }
let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingProgress: getFollowingProgress(state)
  }
}

export default compose(
  connect(mapStateToProps,
    {subscribe, unsubscribe, setCurrentPage, toggleFollowingProgress, requestUsers, follow, unfollow})
)(UsersContainer);
