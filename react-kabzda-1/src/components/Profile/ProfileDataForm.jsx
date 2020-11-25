import React from 'react';
import { Field, reduxForm } from "redux-form";
import { Input, Textarea } from "../Common/FormControls/FormControls";
import { maxLength15, maxLength30, email, required, maxLength50 } from "../../Utilites/validators/validators";

let ProfileDataForm = ({ handleSubmit, profile }) => {
	return (
		<form onSubmit={handleSubmit}>
			<div><button>Save</button></div>
			<div>
				Full Name: <Field component={Input} validate={[maxLength15]} placeholder={'fullName'} name={'fullName'} />
			</div>
			<div>
				Looking for a job: <Field type='checkbox' name='lookingForAJob' component='input' />
			</div>
			<div>
				Professional Skills: <div><Field name='lookingForAJobDescription' component={Textarea} validate={[required, maxLength50]} /></div>
			</div>
			<div>
				About me: <div><Field name='aboutMe' component='textarea' /></div>
			</div>
			<div>
			<b>Contacts:</b> {Object.keys(profile.contacts).map((key) => {
				return <div key={key}><b>{key}<Field name={'contacts.' + key} component={Input} validate={[maxLength30, required, email]} /></b></div>
			})}
		</div>
		</form>
	)
}

ProfileDataForm = reduxForm({
	form: 'edit-profile'
})(ProfileDataForm)


export default ProfileDataForm;