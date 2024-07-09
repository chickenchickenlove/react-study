import {useState} from "react";

function MultipleUseStateBody() {

    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [birth, setBirth] = useState("");
    const [bio, setBio] = useState("");

    const onChangeName = (e) => {
        setName(e.target.value);
        console.log("이름은 : ", name);
    };

    const onChangeGender = (e) => {
        setGender(e.target.value);
        console.log("성별은 : ", gender);
    };

    const onChangeBirth = (e) => {
        setBirth(e.target.value);
        console.log("생년월일은 : ", birth);
    };

    const onChangeBio = (e) => {
        setBio(e.target.valueOf);
        console.log("자세한 내용은 : ", bio);
    };

    return (
        <div>
            <h1> 이것은 MultipleUseStateBody 입니다.</h1>
            <div>
                <input value={name} onChange={onChangeName} placeholder="이름"/>
            </div>
            <div>
                <select value={gender} onChange={onChangeGender}>
                    <option key={""}></option>
                    <option key={"남성"}>남성</option>
                    <option key={"여성"}>여성</option>
                </select>
            </div>
            <div>
                <input value={birth} onChange={onChangeBirth} type="date"/>
            </div>
            <div>
                <textarea value={bio} onChange={onChangeBio}/>
            </div>
            <h1> 여기까지 MultipleUseStateBody 입니다.</h1>
        </div>

    )
        ;
}

export default MultipleUseStateBody;