import './App.css';
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";
import React, {useMemo, useReducer, useRef} from "react";

// useState를 사용하지 않고, useReducer를 이용해 상태변화 함수를 Component 안에서 밖으로 분리시킴.
// 1. [state, dispatchFunction()] useReducer(호출할 함수, 초기 State값)은 Component 코드 내에서 호출함.
// 2. 상태 변화가 필요할 때, 컴포넌트 내에서 dispatchFunction(action) 호출.
// 3. 호출할 함수(state, action)이 호출됨. 이 함수는 컴포넌트 바깥에 있어도 됨. 여기서 Switch 문으로 상태를 관리할 수 있음.
// useState()는 간단한 상태를 관리할 때 많이 사용, useReducer()는 복잡한 상태를 관리할 때 컴포넌트에서 코드를 분리해서 깔끔하게 보이도록 함.
// redux 같은 것들을 이용할 때에도 좀 더 좋을 수도 있음.


function App() {

    const idRef = useRef(3);
    const [todo, dispatch] = useReducer(reducer, mockTodo);

    const onCreate = (content) => {
        const action = {
            type: "CREATE",
            newItem: {
                id: idRef.current,
                content,
                isDone: false,
                createDate: new Date().getTime(),
            }
        }
        dispatch(action);
        idRef.current += 1;
    };

    const onDelete = (targetId) => {
        const action = {
            type: "DELETE",
            targetId
        }
        dispatch(action);
    };

    const onUpdate = (targetId) => {
        const action = {
            type: "UPDATE",
            targetId
        }
        dispatch(action);
    };


    const memoizedDispatches = useMemo(() => {
        return {onCreate, onUpdate, onDelete};
    }, []);
    return (
        <div className="App">
            <Header/>

            <TodoStateContext.Provider value={todo}>
                <TodoDispatchContext.Provider value={memoizedDispatches}>
                    <TodoEditor/>
                    <TodoList/>
                </TodoDispatchContext.Provider>
            </TodoStateContext.Provider>
        </div>
    );
}

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


function reducer(state, action) {
    switch (action.type) {
        case "CREATE": {
            return [action.newItem, ...state]
        }
        case "UPDATE": {
            return state.map((it) =>
                it.id === action.targetId ?
                    {...it, isDone: !it.isDone} :
                    it
            );
        }
        case "DELETE": {
            return state.filter((it) =>
                it.id !== action.targetId)
        }
        default:
            return state;
    }
}

export const TodoStateContext = React.createContext();
export const TodoDispatchContext = React.createContext();

export const TodoContext = React.createContext();
export default App;


