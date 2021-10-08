import {SHOW_USER, ADD_CHAT, DELETE_CHAT, SEND_MESSAGE} from "./actions";
import {combineReducers} from "redux";

const initialState = {
    showName: false,
    name: "Author"
}

const initialChats = {
    1: {
        name: "Chat1",
        messages: [{ "text": "", "author": "" }],
    },
    2: {
        name: "Chat2",
        messages: [{ "text": "", "author": "" }],
    },
    3: {
        name: "Chat3",
        messages: [{ "text": "", "author": "" }],
    },
    4: {
        name: "Chat4",
        messages: [{ "text": "", "author": "" }],
    },
};

export function ProfileReducer(state=initialState, action){
    switch(action.type){
        case SHOW_USER:
            return {...state, showName: !state.showName}
        default: return state
    }
}

export function ChatReducer(chats=initialChats, action) {
    switch(action.type){
        case ADD_CHAT:
            let chatId = parseInt(Object.keys(chats)[Object.keys(chats).length-1] )+ 1
            chats[chatId] = {name: "Chat"+ chatId.toString(), messages: [{ "text": "", "author": "" }]}
            return {...chats}
        case DELETE_CHAT:
            delete chats[action.chatId]
            return {...chats}
        case SEND_MESSAGE:
            chats[action.chatId].messages.push({author: action.author, text: action.message})
            return {...chats}
        default:
            return chats
    }
}

export const rootReducer = combineReducers({
    profile: ProfileReducer,
    chats: ChatReducer
})
