import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";

// BrowersRouter는 브라우저의 주소 변경을 감지하는 기능이 있음.
// 이 라우터를 이용해 제공한다.
// 여러 페이지로 구성된 리액트 앱을 리액트 라우터로 만들 예정. 

// .css에서 #root는 Id가 Root인 요소에 적용됨.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
