export const ADD_CHAT = "ADD_CHAT";
export const DELETE_CHAT = "DELETE_CHAT";

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