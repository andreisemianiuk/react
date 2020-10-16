import React from "react";
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData, setMyProfileData} from "../../Redux/auth-reducer";

class HeaderContainer extends React.Component {
	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
			withCredentials: true
		})
			.then(response => {
				if (response.data.resultCode === 0) {
					let {email, id, login} = response.data.data;
					this.props.setAuthUserData(email, id, login);
						axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + id)
							.then(response => {
								this.props.setMyProfileData(response.data.photos.small);
							})
				}
			})
	}
	render() {
		return (
			<Header {...this.props} />
		);
	}
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login,
	photo: state.auth.photo
})

export default connect(mapStateToProps, {setAuthUserData, setMyProfileData})(HeaderContainer);