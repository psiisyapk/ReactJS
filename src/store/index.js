import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {ProfileReducer} from "./Profile/reducer";
import {ChatReducer} from "./Chats/reducer";
import {messagesReducer} from "./Messages/reducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    combineReducers({
        profile: ProfileReducer,
        chats: ChatReducer,
        messages: messagesReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
);
