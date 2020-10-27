import {authApi, profileApi} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_DATA_USER = 'ADD_DATA_USER';
const ADD_MY_PROFILE = 'ADD_MY_PROFILE';

let initialState = {
  email: null,
  userId: null,
  login: null,
  isAuth: false,
  photo: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATA_USER:
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
  payload: {email, userId, login, isAuth}
});
export const setMyProfileData = (photo) => ({type: ADD_MY_PROFILE, data: photo});

export const authUser = () => (dispatch) => {
  return authApi.getAuth()
    .then(data => {
      if (data.resultCode === 0) {
        let {email, id, login} = data.data;
        dispatch(setAuthUserData(email, id, login, true));
        profileApi.getProfile(id)
          .then(() => {
            dispatch(setMyProfileData());
          })
      }
    })
}

export const login = (email, password, rememberMe) => (dispatch) => {
  authApi.login(email, password, rememberMe)
    .then(responce => {
      if (responce.data.resultCode === 0) {
        dispatch(authUser());
      } else {
        let message = responce.data.messages.length > 0 ? responce.data.messages[0] : "Some error"
        dispatch(stopSubmit("login", {_error: message}))
      }
    })
}

export const logout = () => (dispatch) => {
  authApi.logout()
    .then(responce => {
      if (responce.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
      }
    })
}

export default authReducer;