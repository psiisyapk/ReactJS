export const SHOW_USER = "SHOW_USER";
export const ADD_CHAT = "ADD_CHAT";
export const DELETE_CHAT = "DELETE_CHAT";
export const SEND_MESSAGE = "SEND_MESSAGE";

export function ShowUser() {
    return {
        type: SHOW_USER,
    }
}

export function AddChat() {
    return {
        type: ADD_CHAT,
    }
}

export function DeleteChat(chatId) {
    return {
        type: DELETE_CHAT,
        chatId: chatId
    }
}

export function SendMessage(chatId, author, message) {
    return {
        type: SEND_MESSAGE,
        chatId: chatId,
        message: message,
        author: author
    }
}