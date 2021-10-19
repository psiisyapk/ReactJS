import React, {useState} from "react";
import {AppBar, Box, CssBaseline, Divider, Drawer, Toolbar} from "@material-ui/core";
import {List, ListItemButton} from "@mui/material";
import {NavLink} from "react-router-dom";

export function Header () {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const handleListItemClick = (index) => {
        setSelectedIndex(index);
    };
    const drawerWidth = 240;

    function isHomeUrl() {
        return !!window.location.pathname.match('^/$');
    }

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
                        <ListItemButton
                            selected={selectedIndex === 0 || isHomeUrl()}
                            className="ListItemButtonClass"
                            style={{ backgroundColor: selectedIndex ===0 || isHomeUrl() ? "lightblue" : "transparent"}}
                            onClick={() => handleListItemClick(0)}
                        >
                            <NavLink to="/" style={{ textDecoration: 'none' }}>Home</NavLink>
                        </ListItemButton>
                        <ListItemButton
                            selected={selectedIndex === 1 || window.location.pathname.startsWith('/profile')}
                            className="ListItemButtonClass"
                            style={{ backgroundColor: selectedIndex ===1 ||
                                window.location.pathname.startsWith('/profile') ? "lightblue" : "transparent"}}
                            onClick={() => handleListItemClick(1)}
                        >
                            <NavLink to="/profile" style={{ textDecoration: 'none' }}>Profile</NavLink>
                        </ListItemButton>
                        <ListItemButton
                            selected={selectedIndex === 2 || window.location.pathname.startsWith('/chats')}
                            className="ListItemButtonClass"
                            style={{ backgroundColor: selectedIndex ===2 ||
                                window.location.pathname.startsWith('/chats') ? "lightblue" : "transparent"}}
                            onClick={() => handleListItemClick(2)}
                        >
                            <NavLink to="/chats" style={{ textDecoration: 'none' }}>Chats</NavLink>
                        </ListItemButton>
                    </List>
                </header>
            </Drawer>
        </Box>

    )
}