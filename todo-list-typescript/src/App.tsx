import React, {useCallback, useContext, useEffect, useMemo, useReducer, useRef, useState} from 'react';
import './App.css';
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";
import {
    TodoStateContext,
    TodoItemType,
    ActionType,
    DispatcherContext,
    todoStateReducer, DispatcherType
} from "./ContextUtil";

function App() {
    const [todo, dispatch] = useReducer(todoStateReducer, []);
    const idRef = useRef(4);

    const onCreate = useCallback((todoItem: TodoItemType): void => {
        const action: ActionType = {
            type: "CREATE",
            data: {...todoItem, id: idRef.current}
        };
        idRef.current += 1;
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

    // onCreate, onDelete, onUpdate 콜백 자체는 useCallback()을 써서 새롭게 생성되지 않음.
    // 그러나 이걸 담은 Ojbect 객체는 매번 생성되기 때문에 DispatcherContext.Provider의 컨텍스트의 Props가 매번 바뀜.
    const memorizedDispatchers: DispatcherType = useMemo(() => {
        return {onCreate, onDelete, onUpdate}}, []);
    return (
        <div className="App">
            <Header />
            <TodoStateContext.Provider value={{todo}}>
                <DispatcherContext.Provider value={memorizedDispatchers}>
                    <TodoEditor/>
                    <TodoList />
                </DispatcherContext.Provider>
            </TodoStateContext.Provider>
        </div>
    );
}


export const MyCtx = React.createContext({index: 0, setIndexMemo: () => {}})
export default App;
