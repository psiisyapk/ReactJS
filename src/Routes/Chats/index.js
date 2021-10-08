import './Chats.css';
import React from "react";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import ChatMessages from "./chat_routes/chat";
import {getChats} from "../../store/selectors";
import {Form} from "./Form";
import {ChatList} from "./ChatList";

export function Chats() {
    const chats = useSelector(getChats);
    const { chatId } = useParams();

    return (
        <div>
            <div className="chat_ws">
                <ChatList chatId={chatId} chats={chats}/>
            </div>
            <div className="user_ws">
                <div>
                    <Form chatId={chatId} chats={chats}/>
                </div>
                <div>
                    <ChatMessages chatId={chatId} chats={chats}/>
                </div>
            </div>
        </div>
    )
}

export default Chats;