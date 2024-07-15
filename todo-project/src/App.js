import './App.css';
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";
import {useRef, useState} from "react";

const mockTodo = [
    {
        id: 0,
        isDone: false,
        content: "React 공부하기",
        createdDate: new Date().getTime(),
    },
    {
        id: 1,
        isDone: false,
        content: "빨래 널기",
        createdDate: new Date().getTime(),
    },
    {
        id: 2,
        isDone: false,
        content: "노래 연습하기",
        createdDate: new Date().getTime(),
    },
];

function App() {

    const idRef = useRef(3);
    const [todo, setTodo] = useState(mockTodo)
    const onCreate = (content) => {
        const newItem = {
            id: idRef.current,
            content,
            isDone: false,
            createDate: new Date().getTime(),
        };
        setTodo([newItem, ...todo]);
        idRef.current += 1;
    };

    const onDelete = (targetId) => {
        setTodo(
            todo.filter((it) => it.id !== targetId)
        );
    };

    const onUpdate = (targetId) => {

        setTodo(
            todo.map((it) =>
                it.id === targetId ? {...it, isDone: !it.isDone} : it
            )
        );

        // setTodo(
        //     todo.map(
        //         (it) => {
        //             if (it.id === targetId) {
        //                 return {
        //                     ...it,
        //                     isDone: !it.isDone,
        //                 }
        //             } else {
        //                 return it;
        //             }
        //         }
        //     )
        // );
    };

    return (
      <div className="App">
          <Header />
          <TodoEditor onCreate={onCreate} />
          <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
      </div>
    );
}

export default App;
