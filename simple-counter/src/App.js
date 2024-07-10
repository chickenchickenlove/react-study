import './App.css';
import Viewer from "./component/Viewer";
import Counter from "./component/Counter";
import {useState} from "react";

function App() {

    const [count, setCount] = useState(0);
    const updateCount = (value) => {
        setCount(count + value);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
            <h1 className="text-3xl font-bold accent-blue-700 p-4"> Simple Counter</h1>

            <Viewer count={count}/>
            <div className="p-4"></div>
            <Counter count={count} countFunc={updateCount}/>
        </div>
    );
}

export default App;
