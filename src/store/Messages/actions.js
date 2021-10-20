export const SEND_MESSAGE = "SEND_MESSAGE";

export function SendMessage(chatId, author, message) {
    return {
        type: SEND_MESSAGE,
        chatId: chatId,
        message: message,
        author: author
    }
}
