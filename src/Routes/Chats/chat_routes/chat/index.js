import {DataGrid} from "@mui/x-data-grid";
import {Redirect} from "react-router-dom";
import React from "react";
import {useSelector} from "react-redux";
import {getChats} from "../../../../store/Chats/selector";
import {getMessages} from "../../../../store/Messages/selector";

function ChatMessages({chatId}) {
    const chats = useSelector(getChats);
    const messages = useSelector(getMessages).MessageList
    if (chats.indexOf(chatId) === -1) {
        return <Redirect to="/nochat" />;
    } else {
        return (
            <div style={{ height: 800, width: '95%' }} className="GridMessages">
                <DataGrid
                    columns={[
                        { field: 'Author', width: 200},
                        { field: 'Text', width: 700}
                    ]}
                    rows={(messages[chatId] || []).map((data, index) =>
                        ({
                            Text: data.text,
                            Author: data.author,
                            id: index
                        })
                    )}
                />
            </div>
        )
    }
}

export default ChatMessages;