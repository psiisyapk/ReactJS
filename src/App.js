import {BrowserRouter, Route, Switch} from "react-router-dom";
import Profile from "./Routes/Profile";
import Chats from "./Routes/Chats";
import Home from "./Routes/Home";
import NoChat from "./Routes/NoChat";
import React from "react";
import {Provider} from "react-redux";
import {Header} from "./Components/Header";
import {store} from "./store";
import {ApiSearchList} from "./Components/Api";


function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route path="/profile">
                        <Profile />
                    </Route>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/nochat">
                        <NoChat />
                    </Route>
                    <Route exact path="/chats">
                        <Chats/>
                    </Route>
                    <Route exact path="/media">
                        <ApiSearchList />
                    </Route>
                    <Route path="/chats/:chatId">
                        <Chats/>
                    </Route>
                    <Route>
                        <h3 style={{ marginLeft: 100 }}>Page not found</h3>
                    </Route>
                </Switch>
            </BrowserRouter>
        </Provider>
    );
}

export default App;