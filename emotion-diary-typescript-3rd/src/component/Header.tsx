import "./Header.css"
import React from "react";

interface Props {
    left_child?: React.ReactNode;
    right_child?: React.ReactNode;
    title?: string;
}


function Header(
    {
        left_child,
        right_child,
        title = "default"
    }: Props) {

    return (
        <div className={"Header"}>
            <div className={"header_left"}>{left_child}</div>
            <div className={"header_title"}>{title}</div>
            <div className={"header_right"}>{right_child}</div>
        </div>
    )
}

export default Header;