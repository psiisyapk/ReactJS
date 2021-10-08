import {Button, Card, CardContent, FormControl, Grid, TextField} from "@mui/material";
import React, {useEffect, useRef, useState} from "react";
import {useDispatch} from "react-redux";
import {SendMessage} from "../../store/actions";

export function Form({chats, chatId}) {
    const [submitForm, ChangeState] = useState(false)
    const inputRef = useRef(null);
    const dispatch = useDispatch();

    useEffect( () => {
        if (chats[chatId]) {
            inputRef.current.focus();
        }
    }, [chats, chatId]);

    useEffect(() => {
        const intervalId = setTimeout(() => {
            if (submitForm === true) {
                dispatch(SendMessage(chatId, "robot", "Ваше сообщение принято"))
                ChangeState(false);
                inputRef.current.focus();
            }
        }, 1500)
        return () => clearInterval(intervalId);
    }, [submitForm, chats, chatId, dispatch]);

    function handleSubmit(event) {
        event.preventDefault();
        let inputText = event.target[0].value
        if (inputText !== '') {
            dispatch(SendMessage(chatId, "human", inputText))
            ChangeState(true);
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