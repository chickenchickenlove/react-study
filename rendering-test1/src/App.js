import './App.css';
import {useEffect, useState} from "react";

function App() {
    console.log("App rendered");
    return (
        <div className="App">
            <Parent lastChild={<Child3 />}>
                <Child2 />
            </Parent>
        </div>
    );
}

// Parent 컴포넌트 아래에 있는 컴포넌트들은 Children이라는 Props로 전달된다.

function Parent({children, lastChild}) {

    const [value, setValue] = useState(0)
    console.log("Childrend? : ", children)

    useEffect(() => {
        setInterval(() => setValue(value + 1),
            5000)

    }, [value]);

    return (
        <div>
            Parent Value : {value}
            <Child1 />
            {children}
            {lastChild}
        </div>);
}

function Child1() {
    return (<div>Child1</div>);
}

function Child2() {
    return (<div>Child2</div>);
}

function Child3() {
    return (<div>Child3</div>);
}

export default App;
