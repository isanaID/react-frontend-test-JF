import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import userReducer from "../features/User/reducer";

export const composerEnhancer =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const rootReducer = combineReducers({
    user: userReducer
});

const store = createStore(rootReducer, composerEnhancer(applyMiddleware(thunk)));
export default store;