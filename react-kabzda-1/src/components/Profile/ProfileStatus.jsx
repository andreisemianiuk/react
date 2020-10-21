import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../../Redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../hoc/Hoc";
import {compose} from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 12041;
    }
    this.props.getProfile(userId);
  }
  render() {
    return (
      < Profile {...this.props} />
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
})

export default compose(
  connect(mapStateToProps, {getProfile}),
  withRouter,
  withAuthRedirect
)(ProfileContainer);