import React, {useCallback, useContext, useState} from 'react';
import './App.css';
import CounterDisplay from "./component/CounterDisplay";
import ButtonList from "./component/ButtonList";
import Header from "./component/Header";
import {ButtonEventContext} from "./util";

function App() {
    const [count, setCount] = useState<number> (0);
    const onClickButton = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        const num = parseInt(e.currentTarget.value);
        setCount((prevState) => prevState + num);
    }, []);

    return (
    <div className="App">
        <ButtonEventContext.Provider value={{ onClickButton }}>
            <section>
                <Header />
                <CounterDisplay count={count}/>
                <ButtonList />
            </section>
        </ButtonEventContext.Provider>
    </div>
  );
}

export default App;