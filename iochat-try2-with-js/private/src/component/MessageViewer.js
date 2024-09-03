import "./MessageViewer.css"
import UserMessage from "./UserMessage";
import WelcomeMessage from "./WelcomeMessage";
import {useRef} from "react";
import LogoutMessage from "./LogoutMessage";

function MessageViewer({messages}) {

    const msgKey = useRef(1);
    console.log(messages);

    return (
        <div className={"MessageViewer"}>
            <div className={"wrapper"}>
                {
                    messages.map((it) => {
                        msgKey.current += 1;

                        if (it.type === 'welcome') {
                            console.log("welcome msg type")
                            return <WelcomeMessage key={msgKey.current} {...it} />
                        }
                        else if (it.type === 'logout') {
                            console.log("logout msg type")
                            return <LogoutMessage key={msgKey.current} {...it} />
                        }
                        else {
                            console.log("user msg type")
                            return <UserMessage key={msgKey.current} {...it} />;
                        }
                    })
                }
            </div>
        </div>
    )
}

export default MessageViewer;