import Header from "../component/Header";
import Editor from "../component/Editor";
import Button from "../component/Button";
import {useNavigate} from "react-router-dom";
import {useContext, useRef, useState} from "react";
import {DiaryType} from "../types";
import {isNumberObject} from "node:util/types";
import Diary from "./Diary";
import {DispatcherContext} from "../App";



const placeHolder: DiaryType = {
    id: 1,
    content: '',
    created_date: new Date().getTime(),
    emotion: "NORMAL",
}

// 사용할 state + 함수는 page가 주자.
function New() {

    const navigate = useNavigate();
    const ref = useRef(10);
    const [diary, setDiary] = useState<DiaryType>(placeHolder);

    const {onCreateDiary} = useContext(DispatcherContext)

    const onClickPreviousPage = () => {
        navigate(-1);
    }

    const onClickCompletedButton = () => {
        onCreateDiary({...diary, id: ref.current});
        ref.current += 1;
        navigate("/");
    }

    const props = {
        diary, setDiary, onClickCompletedButton
    }

    return (
        <div>
            <Header
                left_child={
                    <Button
                        text={"뒤로 가기"}
                        doCallback={onClickPreviousPage}
                    />
                }
                title={"새 일기 쓰기"}
            />
            <Editor {...props} />
        </div>

    );
}

export default New;