import React from "react";
import {connect} from "react-redux";
import {
  setCurrentPage,
  toggleFollowingProgress,
  subscribe,
  unsubscribe,
  getUsers, follow, unfollow
} from "../../Redux/users-reducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {withAuthRedirect} from "../hoc/Hoc";
import {compose} from "redux";
import {getProfile} from "../../Redux/profile-reducer";
import {withRouter} from "react-router-dom";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
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

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingProgress: state.usersPage.followingProgress
  }
}

export default compose(
  connect(mapStateToProps,
    {subscribe, unsubscribe, setCurrentPage, toggleFollowingProgress, getUsers, follow, unfollow}),
  withAuthRedirect
)(UsersContainer);

