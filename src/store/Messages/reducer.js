import {SEND_MESSAGE} from "./actions";

const initialState = {
    MessageList: {}
}

export function messagesReducer(state=initialState, action) {
    switch(action.type){
        case SEND_MESSAGE:
            const newMessageList = {
                ...state.MessageList
            }
            if (action.chatId in newMessageList) {
                newMessageList[action.chatId] = [
                    ...newMessageList[action.chatId],
                    {author: action.author, text: action.message}
                ]
            } else {
                newMessageList[action.chatId] = [
                    {author: action.author, text: action.message}
                ]
            }
            return {
                MessageList: newMessageList
            }
        default:
            return state
    }
}