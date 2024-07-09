import {useState} from "react";

function Child({ number }) {
    if (number % 2 === 0) {
        return (
            <div>
                <h3> {number}는 짝수 </h3>
            </div>
        );
    }
    return (
        <div>
            <h3> {number}는 홀수 </h3>
        </div>
    );
}

// Component는 자신이 가지고 있는 State가 변경될 때 마다 리렌더링한다.
// 부모 Component가 리렌더링되면 자식 Component도 리렌더링 된다.
// 여기서는 부모 Component의 State가 변화 -> 부모 Component가 리렌더링 -> 자식 Component도 함께 리렌더링됨.
// 부모 Component가 자주 리렌더링 되는 경우에 많은 자식 Component가 있으면, 성능에 영향을 줄 수 있음.
function PropagationStateChild() {
    const [number, setNumber] = useState(0);
    const onChange = (e) => {
        console.log("새로운 값은 : ", e.target.value);
        if (e.target.value === '+') {
            setNumber(number + 1);
        }
        else {
            setNumber(number - 1);
        }
        console.log("State에 저장된 number : ", number);
    };

    return (
        <div>
            <h1> 이것은 PropagationChild</h1>
            <button value="-" onClick={onChange}>-</button>
            <button value="+" onClick={onChange}>+</button>
            <Child number={number} />
            <h1> 여기까지 PropagationChild</h1>
        </div>
    );
}

export default PropagationStateChild;