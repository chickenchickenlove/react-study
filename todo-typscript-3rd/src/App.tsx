import './App.css';
import Header from "./component/Header";
import TodoList from "./component/TodoList";
import TodoEditor from "./component/TodoEditor";
import {TodoStateCtx, TodoStateDispatchCtx} from "./Context";
import {ActionType, TodoItemAction, TodoItemType} from "./type/TodoType";
import {useCallback, useMemo, useReducer} from "react";


function reducer(prevState: TodoItemType[], action: TodoItemAction): TodoItemType[] {
    switch (action.type) {
        case "CREATE": {
            return [action.item, ...prevState];
        }
        case "DELETE": {
            return prevState.filter((it) => it.id !== action.item.id);
        }
        case "UPDATE": {
            return prevState.map((it) => {
                return it.id === action.item.id ?
                    action.item :
                    it
            });
        }
        default: {
            return prevState;
        }
    }
}

function createAction(type: ActionType, item: TodoItemType): TodoItemAction {
    return {type, item}
}

function App() {

    const [todoItems, dispatch] = useReducer(reducer, []);

    const onCreateNewTodo = useCallback((newItem: TodoItemType): void => {
        dispatch(createAction("CREATE", newItem));
    }, []);

    const onDeleteTodo = useCallback((deleteItem: TodoItemType): void => {
        dispatch(createAction("DELETE", deleteItem));
    }, []);

    const onUpdateTodo = useCallback((updateItem: TodoItemType): void => {
        dispatch(createAction("UPDATE", updateItem));
    }, []);

    const memorizedDispatchers = useMemo(() => {
        return {onCreateNewTodo, onDeleteTodo, onUpdateTodo}
    }, []);


    return (
        <div className="App">
            <Header/>
            <TodoStateCtx.Provider value={{todoItems}}>
                <TodoStateDispatchCtx.Provider value={memorizedDispatchers}>
                    <TodoEditor/>
                    <TodoList/>
                </TodoStateDispatchCtx.Provider>
            </TodoStateCtx.Provider>

        </div>
    );
}

export default App;
