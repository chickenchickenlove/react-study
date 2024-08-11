import "./Header.css";
import React from "react";

interface Props {
    title: string;
    left_child?: React.ReactNode;
    right_child?: React.ReactNode;
}


function Header({
    title,
    left_child,
    right_child
}: Props) {
    return (
        <div className={"Header"}>
            <div className={"header_left"}>{left_child}</div>
            <div className={"header_title"}>{title}</div>
            <div className={"header_right"}>{right_child}</div>
        </div>
    );
}

export default React.memo(Header);