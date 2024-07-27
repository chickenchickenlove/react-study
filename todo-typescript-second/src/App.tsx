import React, {useCallback, useContext, useMemo, useReducer, useRef, useState} from 'react';
import './App.css';
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";
import {dummyTodoItems, TodoItemType} from "./DataModel";
import {TodoItemContext, TodoItemAction, DispatchContext} from "./ContextUtils";


function reducer(prevState: TodoItemType[], action: TodoItemAction): TodoItemType[] {
    switch (action.type) {
        case "CREATE": {
            return [action.item, ...prevState];
        }
        case "DELETE": {
            return prevState.filter((it: TodoItemType) => it.id !== action.item.id);
        }
        case "UPDATE": {
            console.log("update")
            return prevState.map((it: TodoItemType) => {
                    return it.id === action.item.id
                        ? action.item
                        : it});
        }
        default: {
            console.log('default');
            return prevState;
        }
    }

}

function createAction(type: "CREATE" | "UPDATE" | "DELETE", item: TodoItemType): TodoItemAction {
    return { type, item };
}


function App() {

    const idKey = useRef(1);
    const [todoItems, dispatch] = useReducer(reducer, dummyTodoItems);

    const onCreateTodoItem = useCallback((newTodoItem: TodoItemType): void => {
        dispatch(createAction("CREATE", newTodoItem));
    },[]);

    const onDeleteTodoItem = useCallback((deletedItem: TodoItemType): void => {
        console.log("on delete")
        dispatch(createAction("DELETE", deletedItem));
    }, []);

    const onUpdateTodoItem = useCallback((updatedItem: TodoItemType): void => {
        dispatch(createAction("UPDATE", updatedItem));
    }, []);

    const memorizedDispatchers = useMemo(() => {
        return { onCreateTodoItem, onDeleteTodoItem, onUpdateTodoItem}
    }, []);

    return (
        <div className="App">
            <Header />
            <TodoItemContext.Provider value={{ todoItems }}>
                <DispatchContext.Provider value={memorizedDispatchers}>
                    <TodoEditor idKey={idKey}/>
                    <TodoList />
                </DispatchContext.Provider>
            </TodoItemContext.Provider>
        </div>
    );
}

export default App;
