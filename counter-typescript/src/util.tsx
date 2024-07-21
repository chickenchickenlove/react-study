import React from "react";


export type ButtonEventHandlers =
    {
        onClickButton: (e: React.MouseEvent<HTMLButtonElement>) => void
    }

export const ButtonEventContext = React.createContext<ButtonEventHandlers | null>(null);