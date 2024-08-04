import "./Header.css";
import Button from "./Button";
import React from "react";

type HeaderType = {
    title: string
    left_child?: React.ReactNode
    right_child?: React.ReactNode
}


// React Component 자체를 주입받아서 조립한다.
// props가 아니라...
function Header({
    title,
    left_child,
    right_child}: HeaderType) {
    return (
        <div className={"Header"}>
            <div className={"header_left"}>{left_child}</div>
            <div className={"header_title"}>{title}</div>
            <div className={"header_right"}>{right_child}</div>
        </div>
    );
}

export default Header;