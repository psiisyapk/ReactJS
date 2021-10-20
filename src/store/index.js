import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {ProfileReducer} from "./Profile/reducer";
import {ChatReducer} from "./Chats/reducer";
import {messagesReducer} from "./Messages/reducer";
import thunk from "redux-thunk";
import {apiReducer} from "./SearchApi/reducer";
import createSagaMiddleware from 'redux-saga'
import {apiSagaWatcher} from "./SearchApi/middleware";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    combineReducers({
        profile: ProfileReducer,
        chats: ChatReducer,
        messages: messagesReducer,
        api_search: apiReducer
    }),
    composeEnhancers(applyMiddleware(sagaMiddleware, thunk))
);

sagaMiddleware.run(apiSagaWatcher)