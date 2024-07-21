import "./Button.css";
import React, {useContext} from "react";
import {ButtonEventContext} from "../util";

type ButtonProps = {
    num: number
}

function Button ({
                     num
}: ButtonProps) {

    const {onClickButton} = useContext(ButtonEventContext);
    return (
        <button
            className="Button"
            onClick={onClickButton}
            value={num}
        >
            {num}
        </button>
    );
}

export default React.memo(Button);