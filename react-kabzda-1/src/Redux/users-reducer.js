const SUBSCRIBE = 'SUBSCRIBE';
const UNSUBSCRIBE = 'UNSUBSCRIBE';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_PAGE = 'SET_TOTAL_USERS_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_SUBSCRIBE_PROGRESS = 'TOGGLE_SUBSCRIBE_PROGRESS';

let initialState = {
  users: [],
  pageSize: 100,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingSubscribeProgress: false
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

      case TOGGLE_SUBSCRIBE_PROGRESS:
      return {...state, followingSubscribeProgress: action.isFetching}

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
export const setToggleSubscribeProgress = (isFetching) => ({type: TOGGLE_SUBSCRIBE_PROGRESS, isFetching});

export default usersReducer;