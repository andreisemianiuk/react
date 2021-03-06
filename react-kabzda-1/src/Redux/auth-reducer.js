import { authApi, profileApi, securityApi } from "../api/api";
import { stopSubmit } from "redux-form";

const ADD_DATA_USER = 'ADD_DATA_USER';
const ADD_MY_PROFILE = 'ADD_MY_PROFILE';
const GET_CAPTCHA_URL = 'GET_CAPTCHA_URL';

let initialState = {
	email: null,
	userId: null,
	login: null,
	isAuth: false,
	photo: null,
	captchaUrl: null
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_DATA_USER:
		case GET_CAPTCHA_URL:
			return {
				...state,
				...action.payload
			}
		case ADD_MY_PROFILE:
			return {
				...state,
				...action.data,
				photo: 'https://st.joinsport.io/player/2174946/photo/5de7d76b38157_thumb.jpg'
			}
		default:
			return state;
	}
}

export const setAuthUserData = (email, userId, login, isAuth) => ({
	type: ADD_DATA_USER,
	payload: { email, userId, login, isAuth }
});

export const getCaptchaUrlSuccess = (captchaUrl) => ({
	type: GET_CAPTCHA_URL,
	payload: { captchaUrl }
});

export const setMyProfileData = (photo) => ({ type: ADD_MY_PROFILE, data: photo });

export const authUser = () => async (dispatch) => {
	let data = await authApi.getAuth();
	if (data.resultCode === 0) {
		let { email, id, login } = data.data;
		dispatch(setAuthUserData(email, id, login, true));
		profileApi.getProfile(id)
			.then(() => {
				dispatch(setMyProfileData());
			})
	}
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
	let response = await authApi.login(email, password, rememberMe, captcha);
	if (response.data.resultCode === 0) {
		dispatch(authUser());
	} else {
		if (response.data.resultCode === 10) {
			dispatch(getCaptcha());
		}
		let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
		dispatch(stopSubmit("login", { _error: message }))
	}
}

export const getCaptcha = () => async (dispatch) => {
	let response = await securityApi.getCaptchaUrl();
	const captchaUrl = response.data.url;
	dispatch(getCaptchaUrlSuccess(captchaUrl));
}

export const logout = () => async (dispatch) => {
	let response = await authApi.logout();
	if (response.data.resultCode === 0) {
		dispatch(setAuthUserData(null, null, null, false));
	}
}

export default authReducer;