import {DataGrid} from "@mui/x-data-grid";
import {Redirect} from "react-router-dom";
import React from "react";

function ChatMessages({chatId, chats}) {
    if (!chats[chatId]) {
        return <Redirect to="/nochat" />;
    } else {
        return (
            <div style={{ height: 800, width: '95%' }} className="GridMessages">
                <DataGrid
                    columns={[
                        { field: 'Author', width: 200},
                        { field: 'Text', width: 700}
                    ]}
                    rows={chats[chatId].messages.filter(v => v.text !== "").map((data, index) =>
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