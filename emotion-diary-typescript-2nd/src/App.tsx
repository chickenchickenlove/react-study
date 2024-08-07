import React, {useContext, useReducer} from 'react';
import './App.css';
import Header from "./component/Header";
import DiaryList from "./component/DiaryList";
import Button from "./component/Button";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";
import {DiaryType, dummyDiaries} from "./DiaryTypes";


export const DiaryContext = React.createContext<DiaryType[]>([]);

export type Action = 'CREATE';
export type DispatchAction = {
    type: Action;
    diary: DiaryType
}

export type DiaryDispatcherContextType = {
    onCreate: (newDiary: DiaryType) => void,
    onUpdate?: (updatedDiary: DiaryType) => void,
    onDelete?: (deletedDiary: DiaryType) => void,
}

export const DiaryDispatcherContext = React.createContext({
    onCreate: (newDiary: DiaryType) => {},
    // onUpdate: () => {},
    // onDelete: () => {},
});

function reducer(prevState: DiaryType[], action: DispatchAction) {
    switch (action.type) {
        case "CREATE":
            return [action.diary, ...prevState]
    }
}

function App() {

    const [diaries, dispatch] = useReducer(reducer, dummyDiaries);

    const onCreateNewDiary = (newDiary: DiaryType) => {
        const action: DispatchAction = {type: 'CREATE', diary: newDiary};
        dispatch(action);
    }

    return (
        <div className='App'>
            <DiaryContext.Provider value={diaries}>
                <DiaryDispatcherContext.Provider value={{onCreate: onCreateNewDiary}}>
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
