import Editor from "../component/Editor";
import Header from "../component/Header";
import Button from "../component/Button";
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {DiaryDispatchContext} from "../App";

function New() {

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }

    const { onCreate } = useContext(DiaryDispatchContext);

    return (
        <div>
            <Header
                title={"새 일기 쓰기"}
                leftChild={<Button text={"뒤로 가기"} onClick={goBack} />}
            />
            <Editor onSubmit={onCreate}/>
        </div>
    );
}

export default New;