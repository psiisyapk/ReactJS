import './App.css';
import React, {useEffect, useState} from "react";

export function App() {
    const [submitForm, ChangeState] = useState(false)
    const [messageList, setValue] = useState([
        {
            "text": "", "author": ""
        }
        ]);

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

    function Form() {
        return (
            <form onSubmit={handleSubmit}>
                <input type="text" />
                <input type="submit" value="Go" />
            </form>
        )
    }

    function Table() {
        return (
            <table>
                <tbody>
                <tr>
                    <th>Author</th>
                    <th>Text</th>
                </tr>
                {messageList.map( (data, index) =>
                    <tr key={index} style={{ display: data.text ? "row" : "none" }}>
                        <td style={{ display: data.text ? "row" : "none" }}>
                            {data.author}
                        </td>
                        <td style={{ display: data.text ? "row" : "none" }}>
                            {data.text}
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        )
    }

    return (
        <div>
            < Form/>
            < Table/>
        </div>
    )
}
