import React from "react";

export type ButtonEventHandlers =
    {
        onClickButton: (e: React.MouseEvent<HTMLButtonElement>) => void
    }

const defaultHandlers: ButtonEventHandlers = {
    onClickButton: () => {console.log("Default Handlers Call")}
}

export const ButtonEventContext = React.createContext<ButtonEventHandlers>(defaultHandlers);