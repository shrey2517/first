import { combineReducers } from "redux";
import HomeReducer from "../home/reducer";
import DetailsReducer from '../details/reducer';

const rootReducer = combineReducers({
    HomeReducer,
    DetailsReducer
});

export default rootReducer;