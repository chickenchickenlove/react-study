import "./Chat.css";
import MessageViewer from "./MessageViewer";
import SendForm from "./SendForm";

function Chat({sendChatMessage}) {


    return (
        <div className="Chat">
            <MessageViewer />
            <SendForm sendChatMessage={sendChatMessage}/>
        </div>


    )


}


export default Chat;