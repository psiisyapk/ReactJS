import {BrowserRouter, Route, Switch} from "react-router-dom";
import Profile from "./Routes/Profile";
import Chats from "./Routes/Chats";
import Home from "./Routes/Home";
import NoChat from "./Routes/NoChat";
import React from "react";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {rootReducer} from "./store/reducers";
import {Header} from "./Components/Header";

const store = createStore(rootReducer);

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

export default App;