import React from 'react';
import { withRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import './App.css';
import Nav from './components/Nav/Nav';
import Music from "./components/Music/Music";
import Friends from "./components/Friends/Friends";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import { connect } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./Redux/app-reducer";
import Preloader from "./components/Common/Preloader/Preloader";
import withSuspense from "./components/hoc/withSuspense";

const MessageContainer = React.lazy(() => import('./components/Dialogs/MessageContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component {
	componentDidMount() {
		this.props.initializeApp();
	}

	render() {
		if (!this.props.initialized) {
			return <Preloader />
		}
		return (
			<div className='app-wrapper'>
				<HeaderContainer />
				<Nav />
				<div className='app-wrapper-content'>
					<Route path='/profile/:userId?' render={withSuspense(ProfileContainer)} />
					<Route path='/dialogs' render={withSuspense(MessageContainer)} />
					<Route path='/users' render={() => <UsersContainer />} />
					<Route path='/music' component={Music} />
					<Route path='/friends' component={Friends} />
					<Route path='/settings' component={Settings} />
					<Route path='/login' component={LoginContainer} />
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized
})

export default compose(
	withRouter,
	connect(mapStateToProps, { initializeApp }))(App)
