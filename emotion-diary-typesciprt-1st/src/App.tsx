import React, {useReducer, useRef} from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import {dummyItems} from "./utils";
import {ActionType, DiaryItemType, DispatchersType} from "./types";
import {DiaryStateContext, IdKeyContext} from "./context";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";
import DiaryItem from "./components/DiaryItem";




function reducer(prevState: DiaryItemType[], action: ActionType): DiaryItemType[] {
    switch (action.type) {
        case "CREATE":
            return [action.diary, ...prevState]
        case "UPDATE":
            return prevState
                .map((it) => it.id === action.diary.id ? action.diary : it);
        case "DELETE":
            return prevState
                .filter((it) => it.id !== action.diary.id)
        default:
            return prevState
    }
}

export const DispatchersContext = React.createContext<DispatchersType>({
    createDiaryItem: () => 1,
    updateDiaryItem: () => 1,
    deleteDiaryItem: () => 1,
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

    const updateDiaryItem = (updatedDiary: DiaryItemType) => {
        const action: ActionType = {
            type: 'UPDATE', diary: updatedDiary
        }
        dispatch(action);
    };


    const deleteDiaryItem = (updatedDiary: DiaryItemType) => {
        const action: ActionType = {
            type: 'DELETE', diary: updatedDiary
        }
        dispatch(action);
    };

    return (
        <div className="App">
            <DiaryStateContext.Provider value={diaryItems}>
                <DispatchersContext.Provider value={{createDiaryItem, updateDiaryItem, deleteDiaryItem}}>
                    <IdKeyContext.Provider value={{idKey}}>
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/new" element={<New/>}/>
                            <Route path="/diary/:id" element={<Diary/>}/>
                            <Route path="/edit/:id" element={<Edit/>}/>
                        </Routes>
                    </IdKeyContext.Provider>
                </DispatchersContext.Provider>
            </DiaryStateContext.Provider>
        </div>
    );
}

export default App;
