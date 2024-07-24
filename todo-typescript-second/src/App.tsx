import React, {useState} from 'react';
import './App.css';
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoItem from "./component/TodoItem";
import TodoList from "./component/TodoList";
import {TodoItemType} from "./DataModel";

function App() {

    const [todoItems, setTodoItems] = useState<TodoItemType[]>([]);
    
    return (
        <div className="App">
            <Header />
            <TodoEditor setTodoItems={setTodoItems}/>
            <TodoList />
        </div>
    );
}

export default App;
