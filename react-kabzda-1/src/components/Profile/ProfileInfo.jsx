import React, { useState } from "react";
import s from "./Profile.module.css";
import Preloader from "../Common/Preloader/Preloader";
import withJob from "../../assets/images/withJob.gif";
import withoutJob from "../../assets/images/withoutJob.gif";
import user from "../../assets/images/user.png"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = (props) => {
	let [editMode, setEditMode] = useState(false);

	if (!props.profile) {
		return <Preloader />
	}

	const onMainPhotoSelected = (e) => {
		if (e.target.files.length) {
			props.updatePhoto(e.target.files[0]);
		}
	}

	const onSubmit = formData => {
		props.saveProfile(formData);
		setEditMode(false);
	}

	return (
		<div className={s.info}>
			<div>
				<img className={s.photo} src={props.profile.photos.large || user} alt='smth' />
				<div className={s.choosePhoto}>
					{props.isOwner && <input type='file' onChange={onMainPhotoSelected} />}
				</div>
				<div className={s.status}>
					<ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
				</div>
			</div>
			<div>
				{editMode ?
					<ProfileDataForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit} /> :
					<ProfileData goToEditMode={() => setEditMode(true)} profile={props.profile} isOwner={props.isOwner} />}
			</div>
		</div>
	)
}

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
	let jobStatus = (profile.lookingForAJob) ? withoutJob : withJob;
	return (
		<>
			<div>
				<div className={s.name}>{profile.fullName}</div>
				<div className={s.aboutMe}>{profile.aboutMe}</div>
				<div className={s.jobStatus}>
					<div>Looking for a job: <b>{!profile.lookingForAJob ? 'No' : 'Yes'}</b></div>
					<img src={jobStatus} alt='job status' />
				</div>
				{profile.lookingForAJob &&
					<div className={s.skills}>
						Professional Skills: <span><b>{profile.lookingForAJobDescription}</b></span>
					</div>
				}

			</div>
			<div className={s.contacts}>
				<b>Contacts:</b> {Object.keys(profile.contacts).map((key) => {
					return <b key={key}><Contact contactTitle={key} contactValue={profile.contacts[key]} /></b>
				})}
			</div>
			<div className={s.editBtn}>
				{isOwner && <button onClick={goToEditMode}>Edit</button>}
			</div>
		</>
	)
}

const Contact = ({ contactTitle, contactValue }) => {
	return (
		<div className={s.social}>
			{contactTitle}: {contactValue}
		</div>
	)
}

export default ProfileInfo;