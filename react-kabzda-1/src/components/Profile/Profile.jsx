import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";

const Profile = (props) => {
	return (
		<section className={s.profile}>
			<ProfileInfo profile={props.profile}/>
			< PostsContainer />
		</section>
	)
}

export default Profile;