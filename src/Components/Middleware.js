import {SendMessage} from "../store/Messages/actions";

export const addMessageWithThunk = (chatId) => dispatch => {
    const author = "robot";
    const message = "Ваше сообщение принято";
    setTimeout(() => dispatch(SendMessage(chatId, author, message)), 2000);
}
