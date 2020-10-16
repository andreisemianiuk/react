import React from 'react';
import * as axios from "axios";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/profile-reducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 12041;
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then(response => {
        this.props.setUserProfile(response.data);
      })
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

let WithRouteProfileComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithRouteProfileComponent);