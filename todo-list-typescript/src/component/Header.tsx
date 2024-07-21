import "./Header.css"
import React, {useContext, useState} from "react";
import {DispatcherContext, TodoStateContext} from "../ContextUtil";

type MyType = {
    index: number
    setIndex: any
}

function Header() {
    console.log("Header")
    const {onUpdate} = useContext(DispatcherContext);
    const [content, setContent] = useState("");
    const today = new Date();
    return (
        <div className="Header">
            <h3>오늘은 📅</h3>
            <h1>{today.toDateString()}</h1>
        </div>
    )
}

export default React.memo(Header);