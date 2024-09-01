import "./SendForm.css";
import {useState} from "react";


function SendForm({sendChatMessage}) {

    const [message, setMessage] = useState('')

    const onUpdateMessages = (e) => {
        setMessage((_) => e.target.value)
        console.log(message)
    };

    const onSendMessage = (e) => {

        const msg = {
            type: "message",
            clazz: "",
            userName: "",
            data: message,
        }

        sendChatMessage(msg);
        setMessage('');
    }

    return (
        <div className="SendForm">
            <div className="wrapper">
                <input
                    value={message}
                    onChange={onUpdateMessages}
                    placeholder={"Enter your messages"}
                />
                <button
                    onClick={onSendMessage}
                    type={"submit"}>
                    Send
                </button>
            </div>
        </div>
    )
}

export default SendForm;