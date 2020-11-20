import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, updatePhoto, updateStatus} from "../../Redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
    let image = this.props.image
    if (!userId) {
      userId = this.props.authUserId
      if (!userId) {
        this.props.history.push("/login")
      }
    }
    this.props.getProfile(userId)
    this.props.getStatus(userId)
    this.props.updatePhoto(image, userId)
  }

  render() {
    return (
      < Profile {...this.props} />
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
  users: state.usersPage.users

})

export default compose(
  connect(mapStateToProps, {getProfile, getStatus, updateStatus, updatePhoto}),
  withRouter
)(ProfileContainer);