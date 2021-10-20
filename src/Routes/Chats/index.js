import './Chats.css';
import React from "react";
import ChatMessages from "./chat_routes/chat";
import {Form} from "./Form";
import {ChatList} from "./ChatList";
import {useParams} from "react-router-dom";

export function Chats() {
    const { chatId } = useParams();
    return (
        <div>
            <div className="chat_ws">
                <ChatList chatId={chatId}/>
            </div>
            <div className="user_ws">
                <div>
                    <Form chatId={chatId}/>
                </div>
                <div>
                    <ChatMessages chatId={chatId}/>
                </div>
            </div>
        </div>
    )
}

export default Chats;