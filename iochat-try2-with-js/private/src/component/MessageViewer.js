import "./MessageViewer.css"
import UserMessage from "./UserMessage";
import WelcomeMessage from "./WelcomeMessage";

const dummyMsgs = [
    {
        type: "welcome",
        clazz: "me",
        userName: "user1",
        data: "user1",
    },
    {
        type: "welcome",
        clazz: "other",
        userName: "user2",
        data: "user2",
    },
    {
        type: "message",
        clazz: "me",
        userName: "user1",
        data: "How are you?",
    },
    {
        type: "message",
        clazz: "other",
        userName: "user2",
        data: "Hi, Nice to meet you.",
    }
];


function MessageViewer() {
    return (
        <div className={"MessageViewer"}>
            <div className={"wrapper"}>
                {
                    dummyMsgs.map((it) => {
                        return it.type === 'welcome' ?
                            <WelcomeMessage {...it} /> :
                            <UserMessage {...it} />;
                    })
                }
            </div>
        </div>
    )
}

export default MessageViewer;