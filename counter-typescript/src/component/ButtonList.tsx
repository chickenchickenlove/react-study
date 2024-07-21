import Button from "./Button";
import React from "react";
import "./ButtonList.css";

function ButtonList() {
    return (
        <div className="ButtonList">
            <div className="button_container">
                <Button num={-100} />
                <Button num={-10} />
                <Button num={-1} />
                <Button num={1} />
                <Button num={10} />
                <Button num={100} />
            </div>
        </div>
    )
}


export default React.memo(ButtonList);