import {useRef, useState} from "react";

// DOM에 접근할 수 있는 Ref를 달아둔다.
// 그리고 이 Ref를 이용해 필요한 작업들을 할 수 있도록 한다.
// 이 Ref가 가능하도록 하는 것은 리액트 훅 덕분이라고 한다.
function UseRefExample() {

    const [text, setText] = useState("");
    const textRef = useRef();

    const handleOnChange = (e) => {
        setText(e.target.value);
    };

    const onChangeText = (e) => {
        alert(text);
        textRef.current.value = "";
    }

    return (
        <div>
            <h1>이것은 UseRefExample 입니다.</h1>
            <input ref={textRef} value={text} onChange={handleOnChange}></input>
            <button onClick={onChangeText}>작성완</button>
            <h1>여기까지 UseRefExample 입니다.</h1>
        </div>
    );
}

export default UseRefExample;