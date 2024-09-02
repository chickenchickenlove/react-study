import "./MessageViewer.css"
import UserMessage from "./UserMessage";
import WelcomeMessage from "./WelcomeMessage";
import {useRef} from "react";

function MessageViewer({messages}) {

    const msgKey = useRef(1);
    console.log(messages);

    return (
        <div className={"MessageViewer"}>
            <div className={"wrapper"}>
                {
                    messages.map((it) => {
                        msgKey.current += 1;
                        return it.type === 'welcome' ?
                            <WelcomeMessage key={msgKey.current} {...it} /> :
                            <UserMessage key={msgKey.current} {...it} />;
                    })
                }
            </div>
        </div>
    )
}

export default MessageViewer;