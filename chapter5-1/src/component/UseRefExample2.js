import {useRef, useState} from "react";

// DOM에 접근할 수 있는 Ref를 달아둔다.
// 그리고 이 Ref를 이용해 필요한 작업들을 할 수 있도록 한다.
// 이 Ref가 가능하도록 하는 것은 리액트 훅 덕분이라고 한다.
function UseRefExample2() {

    const [text, setText] = useState("");
    const textRef = useRef();

    const handleOnChange = (e) => {
        setText(e.target.value);
    };

    const handleOnClick = () => {
        if (text.length < 5) {
            textRef.current.focus();
        }
        else {
            alert(text);
            setText("");
        }
    }

    return (
        <div>
            <h1>이것은 UseRefExample2 입니다.</h1>
            <input ref={textRef} value={text} onChange={handleOnChange}></input>
            <button onClick={handleOnClick}>작성완</button>
            <h1>여기까지 UseRefExample2 입니다.</h1>
        </div>
    );
}

export default UseRefExample2;