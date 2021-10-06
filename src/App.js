import {BrowserRouter, NavLink, Route, Switch} from "react-router-dom";
import {List, ListItemButton} from "@mui/material";
import Profile from "./Routes/Profile";
import Chats from "./Routes/Chats";
import Home from "./Routes/Home";
import NoChat from "./Routes/NoChat";
import React from "react";
import {AppBar, Box, CssBaseline, Divider, Drawer, Toolbar} from "@material-ui/core";
import { Provider } from "react-redux";
import {createStore} from "redux";
import {ProfileReducer} from "./store/reducer";

const store = createStore(ProfileReducer);

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route path="/profile">
                        <Profile />
                    </Route>
                    <Route exact path="/chats">
                        <Chats />
                    </Route>
                    <Route path="/chats/:chatId">
                        <Chats />
                    </Route>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/nochat">
                        <NoChat />
                    </Route>
                    <Route>
                        <h3 style={{ marginLeft: 100 }}>Page not found</h3>
                    </Route>
                </Switch>
            </BrowserRouter>
        </Provider>
    );
}

function Header () {
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const handleListItemClick = (index) => {
        setSelectedIndex(index);
    };
    const drawerWidth = 240;
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left">
                <Toolbar />
                <Divider />
                <header>
                    <List>
                        <ListItemButton selected={selectedIndex === 0} className="ListItemButtonClass"
                                        style={{ backgroundColor: selectedIndex ===0 ? "lightblue" : "transparent"}}
                                        onClick={() => handleListItemClick(0)}>
                            <NavLink to="/" style={{ textDecoration: 'none' }}>Home</NavLink>
                        </ListItemButton>
                        <ListItemButton selected={selectedIndex === 1} className="ListItemButtonClass"
                                        style={{ backgroundColor: selectedIndex ===1 ? "lightblue" : "transparent"}}
                                        onClick={() => handleListItemClick(1)}>
                            <NavLink to="/profile" style={{ textDecoration: 'none' }}>Profile</NavLink>
                        </ListItemButton>
                        <ListItemButton selected={selectedIndex === 2} className="ListItemButtonClass"
                                        style={{ backgroundColor: selectedIndex ===2 ? "lightblue" : "transparent"}}
                                        onClick={() => handleListItemClick(2)}>
                            <NavLink to="/chats" style={{ textDecoration: 'none' }}>Chats</NavLink>
                        </ListItemButton>
                    </List>
                </header>
            </Drawer>
        </Box>

    )
}

export default App;