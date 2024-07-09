import {useState} from "react";

// onChange 이벤트는 사용자가 입력 폼에서 텍스트를 입력하면 바로 이벤트가 발생함.
// 1. 입력 폼에서 사용자가 텍스트를 입력할 때마다 onChange 이벤트가 바로 발생함.
// 2. onChange 이벤트는 바로 이벤트 핸들러 함수를 호출함.
// 3. input의 값이 handleOnChange()의 이벤트 객체로 전달되고, 이 값은 setText()를 통해 컴포넌트 State에 저장됨.
// 4. 그리고 이 State는 HTML에 바로 렌더링 됨.
function UseStateInputTag() {

    const [text, setText] = useState()
    const handleOnChange = (e) => {
        setText(e.target.value);
        // console.log(e.target.value);
    };

    const [date, setDate] = useState()
    const handleOnChangeDate = (e) => {
        console.log(e.target.value);
        setDate(e.target.value);
    };

    const [option, setOption] = useState()
    const handleOnChangeOption = (e) => {
        console.log("변경된 값, Option: ", e.target.value);
        setOption(e.target.value);
    };

    const [texts, setTexts] = useState()
    const handleOnChangeTexts = (e) => {
        console.log("변경된 값, Texts: ", e.target.value);
        setTexts(e.target.value);
    };

    return (
        <div>
            <h1> 이것은 UseStateInputTag입니다.</h1>
            <input onChange={handleOnChange}/>
            <div>React의 State = {text}</div>
            <br/>

            <input type="date" onChange={handleOnChangeDate}/>
            <div>React의 State = {date}</div>

            <br/>
            <select value={option} onChange={handleOnChangeOption}>
                <option key={"1번"}> 11번</option>
                <option key={"2번"}> 22번</option>
                <option key={"3번"}> 33번</option>
            </select>
            <div>React의 State Option = {option}</div>

            <br/>
            <textarea onChange={handleOnChangeTexts}></textarea>
            <div>React의 TextArea = {texts}</div>


            <h1> 여기까지 UseStateInputTag입니다.</h1>


        </div>
    );
}

export default UseStateInputTag;