import {Button, Card, CardContent, FormControl, Grid, TextField} from "@mui/material";
import React, {useCallback, useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {SendMessage} from "../../store/Messages/actions";
import {getChats} from "../../store/Chats/selector";
import {addMessageWithThunk} from "../../Components/Middleware";

export function Form({chatId}) {
    const chats = useSelector(getChats);
    const inputRef = useRef(null);
    const dispatch = useDispatch();
    const onAddMessage = useCallback(() => {
        dispatch(addMessageWithThunk(chatId));
    }, [chatId, dispatch]);

    useEffect( () => {
        if (chats[chatId]) {
            inputRef.current.focus();
        }
    }, [chats, chatId]);

    function handleSubmit(event) {
        event.preventDefault();
        let inputText = event.target[0].value
        if (inputText !== '') {
            dispatch(SendMessage(chatId, "human", inputText))
            onAddMessage();
            inputRef.current.focus();
        }
    }

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