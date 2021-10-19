import {ADD_CHAT, DELETE_CHAT} from "./actions";


const initialChats = [];

export function ChatReducer(chats=initialChats, action) {
    switch(action.type){
        case ADD_CHAT:
            let chatId = chats.length
            return [
                ...chats,
                chatId.toString()
            ]
        case DELETE_CHAT:
            return chats.filter((value => value !== action.chatId))
        default:
            return chats
    }
}