import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {authUser, logout} from "../../Redux/auth-reducer";

class HeaderContainer extends React.Component {
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

export default connect(mapStateToProps, {authUser, logout})(HeaderContainer);