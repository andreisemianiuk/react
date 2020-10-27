import {usersApi} from "../api/api";

const SUBSCRIBE = 'SUBSCRIBE';
const UNSUBSCRIBE = 'UNSUBSCRIBE';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_PAGE = 'SET_TOTAL_USERS_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS';

let initialState = {
  users: [],
  pageSize: 100,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingProgress: []
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBSCRIBE:
      return {
        ...state,
        users: [...state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: true}
          }
          return u;
        })]
      }

    case UNSUBSCRIBE:
      return {
        ...state,
        users: [...state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: false}
          }
          return u;
        })]
      }

    case SET_USERS:
      return {...state, users: action.users}

    case SET_CURRENT_PAGE:
      return {...state, currentPage: action.currentPage}

    case SET_TOTAL_USERS_PAGE:
      return {...state, totalUsersCount: action.count}

    case TOGGLE_IS_FETCHING:
      return {...state, isFetching: action.isFetching}

      case TOGGLE_FOLLOWING_PROGRESS:
      return {...state,
        followingProgress: action.isFetching
          ? [...state.followingProgress, action.userId]
          : state.followingProgress.filter(id => id !== action.userId)
      }

    default:
      return state;
  }
}

export const subscribe = (userId) => ({type: SUBSCRIBE, userId});
export const unsubscribe = (userId) => ({type: UNSUBSCRIBE, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_PAGE, count: totalUsersCount});
export const setToggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_FOLLOWING_PROGRESS, isFetching, userId});

export const requestUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(setToggleIsFetching(true));
    usersApi.getUsers(currentPage, pageSize)
      .then(data => {
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
        dispatch(setToggleIsFetching(false));
      })
  }
}

export const follow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    usersApi.followUser(userId)
      .then(data => {
        if (data.resultCode === 0) {
          dispatch(subscribe(userId));
        }
        dispatch(toggleFollowingProgress(false, userId));
      })
  }
}

export const unfollow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    usersApi.unfollowUser(userId)
      .then(data => {
        if (data.resultCode === 0) {
          dispatch(unsubscribe(userId));
        }
        dispatch(toggleFollowingProgress(false, userId));
      })
  }
}

export default usersReducer;