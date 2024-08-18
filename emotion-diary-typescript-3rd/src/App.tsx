import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./component/Header";
import Button from "./component/Button";
import DiaryItem from "./component/DiaryItem";
import DiaryList from "./component/DiaryList";
import Editor from "./component/Editor";
import EmotionItem from "./component/EmotionItem";
import Viewer from "./component/Viewer";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path={"/"} element={<Home/>} />
            <Route path={"/new"} element={<New/>} />
            <Route path={"/edit/:id"} element={<Edit/>} />
            <Route path={"/diary/:id"} element={<Diary/>} />
        </Routes>
    </div>
  );
}

export default App;
