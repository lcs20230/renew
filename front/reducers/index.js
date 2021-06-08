import {act} from "react-dom/test-utils";
import {HYDRATE} from 'next-redux-wrapper';
import user from './user';
import post from "./post";
import {combineReducers} from 'redux';


// 이전상태와 => 다음상태로 전환
const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        return {...state, ...action.payload};
      default:
        return state;
    }
  },
  user,
  post,
});
export default rootReducer;

