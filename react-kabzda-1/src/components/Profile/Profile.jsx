import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";

const Profile = (props) => {
  return (
    <section className={s.profile}>
      <ProfileInfo 	isOwner={props.isOwner}	savePhoto={props.updatePhoto}
										profile={props.profile} status={props.status} saveProfile={props.saveProfile}
                  	updateStatus={props.updateStatus} updatePhoto={props.updatePhoto}/>
      < PostsContainer/>
    </section>
  )
}

export default Profile;