import React, {useReducer} from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";
import {DiaryType} from "./types";
import diary from "./pages/Diary";

const dummyData: DiaryType[] = [
    {
        id: 1,
        created_date: new Date().getTime() + 1,
        content: "행복했음.",
        emotion: "VERY_GOOD"
    },
    {
        id: 2,
        created_date: new Date().getTime() + 2,
        content: "적당히 행복했음.",
        emotion: "GOOD"
    },
    {
        id: 3,
        created_date: new Date().getTime() + 3,
        content: "오늘은 라면을 먹었따.",
        emotion: "NORMAL"
    },
]


type ActionType =
    | "CREATE"
    | "UPDATE"
    | "REMOVE";


type Action = {
    type: ActionType,
    diary: DiaryType;
}

function reducer(prevState: DiaryType[], action: Action): DiaryType[] {
    switch (action.type) {
        case "CREATE":
            return [action.diary, ...prevState];
        case "UPDATE":
            return prevState
                .map((it) => it.id === action.diary.id ? action.diary : it);
        case "REMOVE":
            return prevState
                .filter((it) => it.id !== action.diary.id);
    }

    return prevState;
}

const initDate: DiaryType[] = [];




export const DiaryStateContext = React.createContext<DiaryType[]>([]);



type DispatcherContextType = {
    onCreateDiary: (newDiary: DiaryType) => void;
    onUpdateDiary: (newDiary: DiaryType) => void;
    onRemoveDiary: (newDiary: DiaryType) => void;
}

const initDispatchers = {
    onCreateDiary: () => {},
    onUpdateDiary: () => {},
    onRemoveDiary: () => {},
}

export const DispatcherContext = React.createContext<DispatcherContextType>(initDispatchers)


function App() {

    const [diaryState, dispatch] = useReducer(reducer, dummyData);


    const onCreateDiary = (diary: DiaryType) => {
        dispatch({diary, type: "CREATE"});
    }

    const onUpdateDiary = (diary: DiaryType) => {
        dispatch({diary, type: "UPDATE"});
    }

    const onRemoveDiary = (diary: DiaryType) => {
        dispatch({diary, type: "REMOVE"});
    }

    const dispatchers = {onCreateDiary, onUpdateDiary, onRemoveDiary}

    return (
        <div className="App">
            <DiaryStateContext.Provider value={diaryState}>
                <DispatcherContext.Provider value={dispatchers}>
                    <Routes>
                        <Route path={"/"} element={<Home/>}/>
                        <Route path={"/new"} element={<New/>}/>
                        <Route path={"/edit/:id"} element={<Edit/>}/>
                        <Route path={"/diary/:id"} element={<Diary/>}/>
                    </Routes>
                </DispatcherContext.Provider>
            </DiaryStateContext.Provider>
        </div>
    );
}

export default App;
