import './App.css';
import {useCallback, useEffect, useRef, useState} from "react";
import {io} from "socket.io-client";
import LoginForm from "./component/LoginForm";
import MessageViewer from "./component/MessageViewer";
import Chat from "./component/Chat";

const dummyMsgs = [
  {
    type: "welcome",
    clazz: "me",
    userName: "user1",
    data: "user1",
    target: "",
  },
  {
    type: "welcome",
    clazz: "other",
    userName: "user2",
    data: "user2",
    target: "",
  },
  {
    type: "message",
    clazz: "me",
    userName: "user1",
    data: "How are you?",
    target: "",
  },
  {
    type: "message",
    clazz: "other",
    userName: "user2",
    data: "Hi, Nice to meet you.",
    target: "",
  }
];

// 소켓을 연결할 때, Connect 되는 것이 좋겠다.
// UserName이 바뀌면, msg도 바뀌는게 좋겠다.

function App() {

  const webSocketRef = useRef(null);
  const [isLogin, setIsLogin] = useState(false);
  const [userName, setUserName] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    console.log('useEffect: ', userName)
    if (!userName) {
      // userName이 생기고, 리랜더링 될 때 소켓이 생성됨.
      // 만약 이전 소켓이 존재한다면, 이전 소켓을 닫아줘야함.
      if (webSocketRef.current) {
        console.log("here logout")
        webSocketRef.current.emit('LOGOUT', userName);
        // webSocketRef.current.disconnect()
      }

      webSocketRef.current = io("http://localhost:5200");
      console.log("Connected to localhost:5200", userName);
    } else {
      const webSocket = webSocketRef.current;

      // 핸들러 등록. 현재 webSocket에 핸들러가 등록되는 것임.
      // 만약 동일한 핸들러가 동일한 소켓에 등록되면, 핸들러는 두번 호출됨.
      webSocketRef.current.on('LOGIN', (msg) => {
        setMessages((prev) => [...prev, msg]);
        console.log('GOT LOGIN MSG')
      });

      webSocket.on('MESSAGE', (msg) => {
        console.log('GOT MESSAGE MSG')
        msg.clazz = "other";
        setMessages((prev) => [...prev, msg]);
      });

      webSocket.on('LOGOUT', (msg) => {
        console.log('GOT LOGOUT MSG', msg)
        setMessages((prev) => [...prev, msg]);
      });
    }
  }, [userName]);

  const sendChatMessage = (partialMsg) => {
    const msg = {...partialMsg, userName: userName};
    webSocketRef.current.emit('MESSAGE', msg);
    setMessages((prev) => [...prev, {...msg, clazz: "me"}])
  }

  const sendLoginRequestToServer = (userName) => {
    if (!webSocketRef.current) {
      return (<div>Loading...</div>);
    }
    console.log("LOGIN")
    webSocketRef.current.emit('LOGIN', userName);
    setUserName(userName);
    setIsLogin(() => true);
  }


  if (!isLogin) {
    return (
        <div className="App">
          <LoginForm
              sendLoginRequestToServer={sendLoginRequestToServer}
          />
        </div>);
  }

  return (
    <div className="App">
      <Chat
          messages={messages}
          sendChatMessage={sendChatMessage}
      />
    </div>
  );
}

export default App;
