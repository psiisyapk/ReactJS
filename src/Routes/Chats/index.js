import './Chats.css';
import React, {useEffect, useState, useRef } from "react";
import {
    Card, CardContent, FormControl, Button, Grid, List, ListItem, ListItemText, ListSubheader, TextField
} from '@mui/material';
import {useParams, NavLink} from "react-router-dom";
import ChatMessages from "./chat_routes/chat";
import {Divider} from "@material-ui/core";


const initialChats = {
    0: {
        name: "Chat1",
        messages: [{ "text": "", "author": "" }],
    },
    1: {
        name: "Chat2",
        messages: [{ "text": "", "author": "" }],
    },
    2: {
        name: "Chat3",
        messages: [{ "text": "", "author": "" }],
    },
    3: {
        name: "Chat4",
        messages: [{ "text": "", "author": "" }],
    },
};


export function Chats() {
    const { chatId } = useParams();
    const [chats, setChats] = useState(initialChats);
    const [submitForm, ChangeState] = useState(false)
    const inputRef = useRef(null);

    useEffect( () => {
        if (chats[chatId]) {
            inputRef.current.focus();
        }
    }, [chats, chatId]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            function sendMessage(chatId, inputText, author) {
                chats[chatId].messages.push({author: author, text: inputText})
            }
            if (submitForm === true) {
                sendMessage(chatId, "Ваше сообщение принято", "robot")
                ChangeState(false);
                inputRef.current.focus();
            }
        }, 1500)
        return () => clearInterval(intervalId);
    }, [submitForm, chats, chatId]);

    function handleSubmit(event) {
        event.preventDefault();
        let inputText = event.target[0].value
        if (inputText !== '') {
            chats[chatId].messages.push({author: "human", text: inputText})
            ChangeState(true);
        }
    }

    function ChatList() {
        return (
            <List sx={{
                width: '100%',
                maxWidth: 360,
                color: 'text.secondary',
                border: 1,
                borderColor: 'gray',}}
                  component="nav"
                  aria-labelledby="nested-list-subheader"
                  subheader={
                      <ListSubheader component="div" id="nested-list-subheader">
                          Chat list
                      </ListSubheader>
                  }
                  className="ChatListClass"><Divider />
                {Object.keys(chats).map((id) =>
                    <ListItem key={id} className="ListItem"
                              style={{ backgroundColor: id === chatId ? "#bcd8e1" : "transparent"}} divider={true}>
                        <NavLink to={`/chats/${id}`} style={{ textDecoration: 'none' }}>
                                <ListItemText primary={`${chats[id].name}`} />
                        </NavLink>
                    </ListItem>
                )}
            </List>
        )
    }

    function Form() {
        return (
                <Card sx={{ minWidth: 275, margin: 5, borderColor: 'grey.500', height: 100, boxShadow: 7}}>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="FormClass">
                            <Grid container spacing={2} className="GridForm">
                                <Grid item xs={3}>
                                    <FormControl fullWidth >
                                        <TextField type="text" inputRef={inputRef} label="Enter message"
                                                   className="inputClass" variant="standard"/>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={2} className="GridButton">
                                    <Button
                                        disabled={!chats[chatId]}
                                        variant="contained"
                                        type="submit" fullWidth
                                        className="buttonForm">Go</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </CardContent></Card>
        )
    }

    return (
        <div>
            <div className="chat_ws"><ChatList/></div>
            <div className="user_ws">
                <div><Form/></div>
                <div><ChatMessages chatId={chatId} chats={chats}/></div>
            </div>
        </div>
    )
}

export default Chats;