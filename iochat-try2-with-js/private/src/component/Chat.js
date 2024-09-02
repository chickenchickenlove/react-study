import "./Chat.css";
import MessageViewer from "./MessageViewer";
import SendForm from "./SendForm";

function Chat({sendChatMessage, messages, sendLogoutRequestToServer}) {
    return (
        <div className="Chat">
            <MessageViewer
                messages={messages}
            />
            <SendForm
                sendChatMessage={sendChatMessage}
                sendLogoutRequestToServer={sendLogoutRequestToServer}
            />
        </div>
    )
}


export default Chat;