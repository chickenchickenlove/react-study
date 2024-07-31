import React, {useCallback, useMemo, useReducer} from 'react';
import './App.css';
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";
import {TodoItemType} from "./type/TodoType";
import {TodoDispatchersContext, TodoStateContext} from "./MyContext";
import {createTodoItemAction, todoReducer} from "./TodoDispatchers";

function App() {

    const [todoItems, dispatchTodoItems] = useReducer(todoReducer, []);
    const onCreateTodoItem = useCallback((newItem: TodoItemType) => {
        dispatchTodoItems(createTodoItemAction("CREATE", newItem));
    }, []);

    const onUpdateTodoItem = useCallback((updateItem: TodoItemType) => {
        dispatchTodoItems(createTodoItemAction("UPDATE", updateItem));
    }, []);

    const onDeleteTodoItem = useCallback((deleteItem: TodoItemType) => {
        dispatchTodoItems(createTodoItemAction("DELETE", deleteItem));
    }, []);


    const memorizedDispatchers = useMemo(() => {
        return { onCreateTodoItem, onUpdateTodoItem, onDeleteTodoItem}
    }, []);


    return (
        <div className="App">
            <Header/>
            <TodoStateContext.Provider value={todoItems}>
                <TodoDispatchersContext.Provider value={memorizedDispatchers}>
                    <TodoEditor />
                    <TodoList />
                </TodoDispatchersContext.Provider>
            </TodoStateContext.Provider>
        </div>
    );
}

export default App;
