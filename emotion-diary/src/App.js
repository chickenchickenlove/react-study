import './App.css';
import { getEmotionImgById } from "./utils";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import {Link, Route, Routes} from "react-router-dom";
import React, {useEffect, useReducer, useRef, useState} from "react";


export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();


const mockData = [
    {
        id: "mock1",
        date: new Date().getTime() - 1,
        content: "mock1",
        emotionId: 1
    },
    {
        id: "mock2",
        date: new Date().getTime() - 2,
        content: "mock2",
        emotionId: 2
    },
    {
        id: "mock3",
        date: new Date().getTime() - 3,
        content: "mock3",
        emotionId: 3
    },
]

function reducer(state, action) {

    switch (action.type) {
        case "INIT": {
            return action.data
        }
        case "CREATE":{
            return [action.data, ...state]
        }
        case "UPDATE": {
            state.map((it) => {
                return String(it.id) === String(action.data.id) ?
                    {...action.data} :
                    it;
            });
        }
        case "DELETE": {
            return state.filter((it) => String(it.id) === String(action.targetId));
        }
        default: {
            return state;
        }
    }
}


// 리액트 라우터를 이용하면 브라우저에서 컴포넌트만 교체하는 식으로 동작하기 때문에 매우 빠름.
function App() {

    const [data, dispatch] = useReducer(reducer, []);
    const idRef = useRef(0);
    const [isDataLoaded, setIsDataLoaded] = useState(false);

    useEffect(() => {
        dispatch({
            type: "INIT",
            data: mockData
        })
        setIsDataLoaded(true);
    }, []);

    const onCreate = (date, content, emotionId) => {
        dispatch({
            type: "CREATE",
            data: {
                id: idRef.current,
                date: new Date(date).getTime(),
                content,
                emotionId
            }
        });
        idRef.current += 1;
    };

    const onUpdate = (targetId, date, content, emotionId) => {
        dispatch({
            type: "UPDATE",
            data: {
                id: targetId,
                date: new Date(date).getTime(),
                content,
                emotionId
            }
        });
    };

    const onDelete = (targetId) => {
        dispatch({
            type: "DELETE",
            targetId
        });
    }

    if (!isDataLoaded) {
        return <div> 데이터를 불러오는 중입니다.</div>
    }
    else {
        return (
            <DiaryStateContext.Provider value={data}>
                <DiaryDispatchContext.Provider value={{
                    onCreate,
                    onUpdate,
                    onDelete}}>
                    <div className="App">
                        <Routes>
                            <Route path="/" element={<Home/>}></Route>
                            <Route path="/new" element={<New/>}></Route>
                            <Route path="/diary/:id" element={<Diary/>}></Route>
                            <Route path="/edit/:id" element={<Edit/>}></Route>
                        </Routes>
                    </div>
                </DiaryDispatchContext.Provider>
            </DiaryStateContext.Provider>
        );
    }
}

export default App;
