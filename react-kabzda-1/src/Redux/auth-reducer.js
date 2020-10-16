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
        ...action.data,
        isAuth: true
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

export const setAuthUserData = (email, userId, login) => ({type: ADD_DATA_USER, data: {email, userId, login}});
export const setMyProfileData = (photo) => ({type: ADD_MY_PROFILE, data: photo });

export default authReducer;