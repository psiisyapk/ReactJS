import './App.css';
import React, {useEffect, useState, useRef } from "react";
import MessageIcon from '@mui/icons-material/Message';
import { DataGrid } from '@mui/x-data-grid';
import {
    Card, CardContent, FormControl, Button, Grid, List, ListItem, ListItemText, ListSubheader, TextField
} from '@mui/material';

export function App() {
    const [submitForm, ChangeState] = useState(false)
    const inputRef = useRef(null);
    const [messageList, setValue] = useState([
        {
            "text": "", "author": ""
        }
        ]);
    const ChatList = [
        {"id": "001", "name": "Chat1"},
        {"id": "002", "name": "Chat2"},
        {"id": "003", "name": "Chat3"},
        {"id": "004", "name": "Chat4"},
        {"id": "005", "name": "Chat5"},
        {"id": "006", "name": "Chat6"},
        {"id": "007", "name": "Chat7"},
        {"id": "008", "name": "Chat8"},
        {"id": "009", "name": "Chat9"},
        {"id": "0010", "name": "Chat10"},
    ]
    useEffect(() => {
        inputRef.current.focus();
    }, []);
    useEffect(() => {
        const intervalId = setInterval(() => {
            function sendMessage(inputText, author) {
                const updateArray = [...messageList];
                updateArray.push({author: author, text: inputText})
                setValue(updateArray);
            }
            if (submitForm === true) {
                sendMessage("Ваше сообщение принято", "robot")
                ChangeState(false);
                inputRef.current.focus();
            }
        }, 1500)
        return () => clearInterval(intervalId);
    }, [submitForm, messageList]);

    function handleSubmit(event) {
        event.preventDefault();
        let inputText = event.target[0].value
        if (inputText !== '') {
            const updateArray = [...messageList];
            updateArray.push({author: "human", text: inputText})
            setValue(updateArray);
            ChangeState(true);
        }
    }

    function Chats() {
        return (
            <List sx={{
                width: '100%',
                maxWidth: 360,
                color: 'text.secondary',
                border: 1,
                borderColor: 'gray',
                borderRadius: 2,
            }}
                  component="nav"
                  aria-labelledby="nested-list-subheader"
                  subheader={
                      <ListSubheader component="div" id="nested-list-subheader">
                          Chat list
                      </ListSubheader>
                  }
                  className="ChatListClass"
            >
                {ChatList.map((data) =>
                    <ListItem key={data.id} className="ListItem">
                        <ListItemText primary={`${data.name}`} /><MessageIcon/>
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
                                <Button variant="contained" type="submit" fullWidth className="buttonForm">Go</Button>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent></Card>
        )
    }

    function GridMessages() {
        return (
            <div style={{ height: 800, width: '95%' }} className="GridMessages">
                <DataGrid
                    columns={[
                        { field: 'Author', width: 200},
                        { field: 'Text', width: 700}
                    ]}
                    rows={messageList.filter(v => v.text !== "").map((data, index) =>
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

    return (
        <div>
            <div className="chat_ws"><Chats/></div>
            <div className="user_ws">
                <div><Form/></div>
                <div><GridMessages/></div>
            </div>
        </div>
    )
}
