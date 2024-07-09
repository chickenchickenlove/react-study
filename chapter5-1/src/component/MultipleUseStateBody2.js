import {useState} from "react";

function MultipleUseStateBody2() {

    const initState = {
        "name": "",
        "gender": "",
        "birth": "",
        "bio": ""
    };
    const [state, setState] = useState(initState);

    const onChange = (e) => {
        console.log("현재 수정 대상 : ", e.target.name);
        console.log("수정값:", e.target.value);
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div>
            <h1> 이것은 MultipleUseStateBody2 입니다.</h1>
            <div>
                <input
                    name="name"
                    value={state.name}
                    onChange={onChange}
                    placeholder="이름"/>
            </div>
            <div>
                <select name="gender" value={state.gender} onChange={onChange}>
                    <option key={""}></option>
                    <option key={"남성"}>남성</option>
                    <option key={"여성"}>여성</option>
                </select>
            </div>
            <div>
                <input name="birth" value={state.birth} onChange={onChange} type="date"/>
            </div>
            <div>
                <textarea name="bio" value={state.bio} onChange={onChange}/>
            </div>
            <h1> 여기까지 MultipleUseStateBody2 입니다.</h1>
        </div>

    )
        ;
}

export default MultipleUseStateBody2;