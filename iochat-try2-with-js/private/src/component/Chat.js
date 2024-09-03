import "./Chat.css";
import MessageViewer from "./MessageViewer";
import SendForm from "./SendForm";

function Chat({sendChatMessage, messages}) {
    return (
        <div className="Chat">
            <MessageViewer
                messages={messages}
            />
            <SendForm
                sendChatMessage={sendChatMessage}
            />
        </div>
    )
}


export default Chat;