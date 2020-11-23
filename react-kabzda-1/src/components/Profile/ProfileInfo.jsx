import React from "react";
import s from "./Profile.module.css";
import Preloader from "../Common/Preloader/Preloader";
import withJob from "../../assets/images/withJob.gif";
import withoutJob from "../../assets/images/withoutJob.gif";
import vk from "../../assets/images/vk.svg";
import fb from "../../assets/images/fb.png";
import twitter from "../../assets/images/twitter.png";
import github from "../../assets/images/github.png";
import instagram from "../../assets/images/instagram.png";
import youtube from "../../assets/images/youtube.png";
import linkedin from "../../assets/images/linkedin.png";
import website from "../../assets/images/web-site.png";
import user from "../../assets/images/user.png"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader/>
  }
  let jobStatus = (props.profile.lookingForAJob) ? withJob : withoutJob;
	
	const onMainPhotoSelected = (e) => {
		if (e.target.files.length) {
			props.updatePhoto(e.target.files[0]);
		}
	}

  return (
    <div className={s.info}>
      <div>
        <img className={s.photo} src={props.profile.photos.large || user} alt='smth'/>
				<div className={s.choosePhoto}>
					{props.isOwner && <input type='file' onChange={onMainPhotoSelected} />}
				</div>
        <div className={s.status}><ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/></div>
      </div>
      <div>
        <div className={s.jobStatus}>
          <div>Job Status:</div>
          <img src={jobStatus} alt='job status'/>
        </div>
        <div className={s.text}>{props.profile.lookingForAJobDescription}</div>
        <div className={s.name}>{props.profile.fullName}</div>
      </div>
      <div className={s.contacts}>
        <div className={s.social}>
          <img className={s.icon} src={vk} alt=''/>
          <span>{props.profile.contacts.vk}</span>
        </div>
        <div className={s.social}>
          <img className={s.icon} src={fb} alt=''/>
          <span>{props.profile.contacts.facebook}</span>
        </div>
        <div className={s.social}>
          <img className={s.icon} src={website} alt=''/>
          <span>{props.profile.contacts.website}</span>
        </div>
        <div className={s.social}>
          <img className={s.icon} src={twitter} alt=''/>
          <span>{props.profile.contacts.twitter}</span>
        </div>
        <div className={s.social}>
          <img className={s.icon} src={instagram} alt=''/>
          <span>{props.profile.contacts.instagram}</span>
        </div>
        <div className={s.social}>
          <img className={s.icon} src={youtube} alt=''/>
          <span>{props.profile.contacts.youtube}</span>
        </div>
        <div className={s.social}>
          <img className={s.icon} src={github} alt=''/>
          <span>{props.profile.contacts.github}</span>
        </div>
        <div className={s.social}>
          <img className={s.icon} src={linkedin} alt=''/>
          <span>{props.profile.contacts.mainLink}</span>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;