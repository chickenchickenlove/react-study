import React from 'react';
import './App.css';
import Header from "./component/Header";
import DiaryList from "./component/DiaryList";
import Button from "./component/Button";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";

function App() {
    return (
        <div className='App'>
            <Routes>
                <Route path={'/'} element={<Home />} />
                <Route path={'/new'} element={<New />} />
                <Route path={'/edit/:id'} element={<Edit />} />
                <Route path={'/diary/:id'} element={<Diary />} />
            </Routes>
        </div>
    );
}

export default App;
