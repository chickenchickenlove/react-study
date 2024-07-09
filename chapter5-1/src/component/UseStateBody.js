import {useState} from "react";

function UseStateBody() {
    console.log("UseStateBody called.")
    const [count, setCount] = useState(0);

    // State가 변경되고 그 값을 반영하기 위해 컴포넌트를 다시 렌더링함. => 컴포넌트 업데이트라고 함.
    // 컴포넌트를 렌더링한다 = 컴포넌트 함수를 다시 호출함.
    // 1. 컴포넌트마다 State를 관리함.
    // 2. 컴포넌트는 자신이 관히나는 State 값이 변할 때 마다 다시 호출됨. => 이러면 변경된 Component를 다시 랜더링함.
    // State 값이 변해 컴포넌트를 다시 렌더링 하는 것을 리렌더링이라고 함. (리액트 컴포넌트는 자신이 관리하는 State가 변화되면 자동으로 리렌더링됨)

    const onIncrease = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h1>이것은 UseStateBody</h1>
            <h2>{count}</h2>
            <button onClick={onIncrease}>+</button>
            <h1>여기까지 UseStateBody</h1>
        </div>
    );
}

export default UseStateBody;