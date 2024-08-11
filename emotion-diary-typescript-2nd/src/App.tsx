import React, {useContext, useReducer, useRef} from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";
import {DiaryDispatcherContextType, DiaryType, dummyDiaries} from "./DiaryTypes";


export const DiaryContext = React.createContext<DiaryType[]>([]);
export type DispatchAction =
    | {type: 'CREATE', diary: DiaryType}
    | {type: 'UPDATE', diary: DiaryType}
    | {type: "DELETE", diary: DiaryType}


export const DiaryDispatcherContext = React.createContext<
    DiaryDispatcherContextType | null
>(null);


function reducer(prevState: DiaryType[], action: DispatchAction) {
    switch (action.type) {
        case "CREATE": {
            return [action.diary, ...prevState];
        }
        case "UPDATE": {
            return prevState
                .map((it) => it.id === action.diary.id ? action.diary : it);
        }
        case "DELETE": {
            return prevState
                .filter((it) => it.id !== action.diary.id);
        }
        default:
            return prevState;
    }
}

function App() {

    const [diaries, dispatch] = useReducer(reducer, dummyDiaries);
    const ref = useRef(10);

    const onCreateNewDiary = (newDiary: DiaryType) => {
        const action: DispatchAction = {type: 'CREATE', diary: {...newDiary, id: ref.current}};
        ref.current += 1;
        dispatch(action);
    }

    const onUpdateDiary = (updatedDiary: DiaryType) => {
        const action: DispatchAction = {type: 'UPDATE', diary: updatedDiary};
        dispatch(action);
    }

    const onDeleteDiary = (deleteDiary: DiaryType) => {
        const action: DispatchAction = {type: 'DELETE', diary: deleteDiary};
        dispatch(action);
    }


    return (
        <div className='App'>
            <DiaryContext.Provider value={diaries}>
                <DiaryDispatcherContext.Provider value={{
                    onCreateNewDiary,
                    onUpdateDiary,
                    onDeleteDiary
                }}
                >
                    <Routes>
                        <Route path={'/'} element={<Home/>}/>
                        <Route path={'/new'} element={<New/>}/>
                        <Route path={'/edit/:id'} element={<Edit/>}/>
                        <Route path={'/diary/:id'} element={<Diary/>}/>
                    </Routes>
                </DiaryDispatcherContext.Provider>
            </DiaryContext.Provider>
        </div>
    );
}

export default App;
