import React, {useReducer, useRef, useState} from 'react';
import './App.css';
import emotion1 from "./img/emotion1.png"
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import DiaryItem, {DiaryItemType} from "./components/DiaryItem";
import exp from "node:constants";

const dummyItems: DiaryItemType[] = [
    {
        id: 1,
        date: new Date().getTime() + 1,
        emotionId: 1,
        content: "1월의 마지막 날은 정말 좋은 일만 가득해"
    },
    {
        id: 2,
        date: new Date().getTime() + 2,
        emotionId: 2,
        content: "오늘 날씨가 좋아서 한강에 다녀왔다."
    },
    {
        id: 3,
        date: new Date().getTime() + 3,
        emotionId: 3,
        content: "윽 오늘은 안 좋은 일이 너무 많았어."
    },
    {
        id: 4,
        date: new Date().getTime() + 4,
        emotionId: 4,
        content: "행복하자."
    },
]

type DiaryStateContextType = {
    diaryItems: DiaryItemType[],
};

type IdKeyContextType = {
    idKey: React.MutableRefObject<number> | undefined
}

export const DiaryStateContext = React.createContext<DiaryStateContextType>({diaryItems: []});
export const IdKeyContext = React.createContext<IdKeyContextType>({idKey: undefined});
export type ChoiceType =
    "CREATE"
export type ActionType = {
    type: ChoiceType,
    diary: DiaryItemType
}

export type DispatchersType = {
    createDiaryItem: (diary: DiaryItemType) => void
}

function reducer(prevState: DiaryItemType[], action: ActionType): DiaryItemType[] {
    switch (action.type) {
        case "CREATE":
            return [action.diary, ...prevState]
        default:
            return prevState
    }
}

export const DispatchersContext = React.createContext<DispatchersType>({
    createDiaryItem: () => 1,
})

function App() {

    const [diaryItems, dispatch] = useReducer(reducer, dummyItems);
    const idKey = useRef(7);


    const createDiaryItem = (newDiary: DiaryItemType) => {
        const action: ActionType = {
            type: 'CREATE', diary: newDiary
        }
        dispatch(action);
    };

    return (
        <div className="App">
            <DiaryStateContext.Provider value={{diaryItems}}>
                <DispatchersContext.Provider value={{createDiaryItem}}>
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/new" element={<New idKey={idKey}/>}/>
                        </Routes>
                </DispatchersContext.Provider>
            </DiaryStateContext.Provider>
        </div>
    );
}

export default App;
