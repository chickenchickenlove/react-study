import React, {useCallback, useContext, useEffect, useMemo, useReducer, useRef, useState} from 'react';
import './App.css';
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";
import {
    TodoStateContext,
    TodoListType,
    TodoItemType,
    ActionType,
    DispatcherContext,
    todoStateReducer
} from "./ContextUtil";
import ReactDOM from "react-dom/client";


function App() {
    const [todo, dispatch] = useReducer(todoStateReducer, []);
    const [index, setIndex] = useState(4);

    const setIndexMemo = useCallback(() => {
        setIndex(previous => previous + 1);
    }, []);

    const onCreate = useCallback((todoItem: TodoItemType): void => {
        const action: ActionType = {
            type: "CREATE",
            data: todoItem
        };
        dispatch(action);
    }, []);


    const onDelete = useCallback((todoItem: TodoItemType): void => {
        const action: ActionType = {
            type: "DELETE",
            id: todoItem.id
        };
        dispatch(action);
    }, []);

    const onUpdate = useCallback((todoItem: TodoItemType): void => {
        const action: ActionType = {
            type: "UPDATE",
            data: todoItem
        }
        dispatch(action);
    }, []);

    return (
        <div className="App">
            {/*<Header setIndex={setIndex} onUpdate={onUpdate}/>*/}
            <TodoStateContext.Provider value={{todo}}>
                <MyCtx.Provider value={{index, setIndexMemo}}>
                    <DispatcherContext.Provider value={{onCreate, onDelete, onUpdate}}>
                        <Header />
                        <TodoEditor/>
                        <TodoList />
                    </DispatcherContext.Provider>
                </MyCtx.Provider>
            </TodoStateContext.Provider>
        </div>
    );
}


export const MyCtx = React.createContext({index: 0, setIndexMemo: () => {}})
export default App;
