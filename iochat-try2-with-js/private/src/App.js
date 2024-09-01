import './App.css';
import {useEffect, useRef, useState} from "react";
import {io} from "socket.io-client";
import LoginForm from "./component/LoginForm";
import MessageViewer from "./component/MessageViewer";
import Chat from "./component/Chat";

function App() {

  const webSocketRef = useRef(null);
  const [isLogin, setIsLogin] = useState(false);
  const [userName, setUserName] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (!(webSocketRef.current)) {
      webSocketRef.current = io("http://localhost:5200");
      console.log("Connected to localhost:5200")
    }

    const webSocket = webSocketRef.current;
    webSocket.on('MESSAGE', (msg) => {
    });

    webSocket.on('LOGIN', (msg) => {
      console.log('I got new login message');
    });

    return () => {
      webSocketRef.current.disconnect();
    }
  }, []);


  const sendChatMessage = (partialMsg) => {
    console.log(partialMsg);
    const msg = {...partialMsg, userName: 'user1'};
    webSocketRef.current.emit('MESSAGE', msg);
  }

  const sendLoginRequestToServer = (userId) => {
    if (!webSocketRef.current) {
      return (<div>Loading...</div>);
    }
    webSocketRef.current.emit('LOGIN', userId);
    setUserName(userId);
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
          sendChatMessage={sendChatMessage}
      />
    </div>
  );
}

export default App;
