import "./Header.css"
import React, {useContext, useMemo, useState} from "react";

function Header() {
    const today = useMemo(() => {
        return new Date();
    }, []);
    return (
        <div className="Header">
            <h3>오늘은 📅</h3>
            <h1>{today.toDateString()}</h1>
        </div>
    )
}

export default React.memo(Header);