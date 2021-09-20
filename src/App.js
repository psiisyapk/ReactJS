import './App.css';
import Message from "./Components/Message";
import React, {Component} from 'react'

let text = "MESSAGE TEXT"

class App extends Component {
  render() {
    return (
        <div className="App">
          <Message text={text}/>
        </div>
    )
  }
}

export default App