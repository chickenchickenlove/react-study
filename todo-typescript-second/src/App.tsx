import React, {useState} from 'react';
import './App.css';
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoItem from "./component/TodoItem";
import TodoList from "./component/TodoList";
import {dummyTodoItems, TodoItemType} from "./DataModel";
import todoItem from "./component/TodoItem";

function App() {

    const [todoItems, setTodoItems] = useState<TodoItemType[]>(dummyTodoItems);
    const [idKey, setIdKey] = useState(1);

    const onCreateTodoItem = (newTodoItem: TodoItemType) => {
        setTodoItems([
            newTodoItem,
            ...todoItems]);
    }

    const onDeleteTodoItem = (targetId: number): void => {
        setTodoItems(todoItems.filter((it: TodoItemType) => it.id !== targetId));
    };

    const onUpdateTodoItem = (targetId: number, newCheckedState: boolean): void => {
        setTodoItems(
            todoItems.map((it: TodoItemType) => {
                return it.id === targetId
                    ? {...it, is_done: newCheckedState}
                    : it;
            }));
    };

    return (
        <div className="App">
            <Header />
            <TodoEditor setTodoItems={setTodoItems} idKey={idKey} setIdKey={setIdKey}/>
            <TodoList todoItems={todoItems} onDeleteTodoItem={onDeleteTodoItem} onUpdateTodoItem={onUpdateTodoItem}/>
        </div>
    );
}

export default App;
