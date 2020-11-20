import { usersApi } from "../api/api";
import { updateObjInArr } from "../Utilites/oblect-helper";

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
				users: updateObjInArr(state.users, action.userId, "id", { followed: true })
			}

		case UNSUBSCRIBE:
			return {
				...state,
				users: updateObjInArr(state.users, action.userId, "id", { followed: false })
			}

		case SET_USERS:
			return { ...state, users: action.users }

		case SET_CURRENT_PAGE:
			return { ...state, currentPage: action.currentPage }

		case SET_TOTAL_USERS_PAGE:
			return { ...state, totalUsersCount: action.count }

		case TOGGLE_IS_FETCHING:
			return { ...state, isFetching: action.isFetching }

		case TOGGLE_FOLLOWING_PROGRESS:
			return {
				...state,
				followingProgress: action.isFetching
					? [...state.followingProgress, action.userId]
					: state.followingProgress.filter(id => id !== action.userId)
			}

		default:
			return state;
	}
}

export const subscribe = (userId) => ({ type: SUBSCRIBE, userId });
export const unsubscribe = (userId) => ({ type: UNSUBSCRIBE, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_PAGE, count: totalUsersCount });
export const setToggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_FOLLOWING_PROGRESS, isFetching, userId });

export const requestUsers = (page, pageSize) => {
	return (dispatch) => {
		dispatch(setToggleIsFetching(true));
		usersApi.getUsers(page, pageSize)
			.then(data => {
				dispatch(setUsers(data.items));
				dispatch(setTotalUsersCount(data.totalCount));
				dispatch(setToggleIsFetching(false));
			})
	}
}

const followUnfollowFlow = (dispatch, userId, apiMethod, actionCreator) => {
	dispatch(toggleFollowingProgress(true, userId));
	apiMethod(userId)
		.then(data => {
			if (data.resultCode === 0) {
				dispatch(actionCreator(userId));
			}
			dispatch(toggleFollowingProgress(false, userId));
		})
}

export const follow = (userId) => {
	return (dispatch) => {
		followUnfollowFlow(dispatch, userId, usersApi.followUser.bind(usersApi), subscribe);
	}
}

export const unfollow = (userId) => {
	return (dispatch) => {
		followUnfollowFlow(dispatch, userId, usersApi.unfollowUser.bind(usersApi), unsubscribe);
	}
}

export default usersReducer;