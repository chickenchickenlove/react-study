import React from 'react';
import './App.css';
import Header from "./component/Header";
import TodoList from "./component/TodoList";
import TodoEditor from "./component/TodoEditor";

function App() {
    return (
        <div className="App">
            <Header/>
            <TodoEditor/>
            <TodoList/>
        </div>
    );
}

export default App;
