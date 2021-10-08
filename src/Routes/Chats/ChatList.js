import {Button, List, ListItem, ListItemText, ListSubheader} from "@mui/material";
import {Checkbox, Divider} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import React, {useState} from "react";
import {AddChat, DeleteChat} from "../../store/actions";
import {useDispatch} from "react-redux";

export function ChatList({chats, chatId}) {
    const dispatch = useDispatch();
    const [Checked, SetChecked] = useState({"chatId": null, "is_checked": false})

    function addChat() {
        dispatch(AddChat())
    }

    function deleteChat() {
        if (Checked.chatId) {
            dispatch(DeleteChat(Checked.chatId));
        }
    }

    function setSelected(id, e) {
        if (e.target.checked) {
            SetChecked({"chatId": id, "is_checked": true});
        } else {
            SetChecked({"chatId": null, "is_checked": false});
        }
    }

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
              className="ChatListClass">
            <Button variant="text" onClick={addChat}>Add</Button>
            <Button variant="text" onClick={deleteChat}>Delete</Button>
            <Divider />
            {Object.keys(chats).map((id) =>
                <ListItem key={id} className="ListItem"
                          style={{ backgroundColor: id === chatId ? "#bcd8e1" : "transparent"}} divider={true}>
                    <Checkbox
                        onClick={(e) => setSelected(id, e)}
                        checked={id === Checked.chatId ? Checked.is_checked : false}
                    />
                    <NavLink to={`/chats/${id}`} style={{ textDecoration: 'none' }}>
                        <ListItemText primary={`${chats[id].name}`} />
                    </NavLink>
                </ListItem>
            )}
        </List>
    )
}
