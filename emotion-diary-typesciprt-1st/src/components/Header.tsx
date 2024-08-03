import "./Header.css"
import React, {ReactElement, ReactNode} from "react";


type HeaderType = {
    left_child?: ReactNode,
    right_child?: ReactNode,
    title: string
}

function Header({left_child, title, right_child}: HeaderType) {

    return (
        <div className={"Header"}>
            <div className={"header_left"}>{left_child}</div>
            <div className={"header_title"}>{title}</div>
            <div className={"header_right"}>{right_child}</div>
        </div>
    )
}

export default Header;