import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import contentReducer from "./contentReducer";
import usersReducer from "./usersReducer";

let reducers =  combineReducers({
  contentPage: contentReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer
});

let store = createStore(reducers);

export default store;