import Button from "../component/Button";
import Header from "../component/Header";
import {useNavigate, useParams} from "react-router-dom";
import {useContext} from "react";
import {DiaryDispatchContext, DiaryStateContext} from "../App";
import Editor from "../component/Editor";
import useDiary from "../hooks/useDiary";
import diary from "./Diary";


function Edit() {

    const navigate = useNavigate();
    const {id} = useParams();


    // 난 이렇게 작성했음. -> Custom hook을 써라!
    // const diaryStateContext = useContext(DiaryStateContext);
    // const findDiary = diaryStateContext.find((it) => String(it.id) === String(id));

    const findDiary = useDiary(id);
    const goBack = () => {
        navigate(-1)
    };

    // 난 이렇게 작성했음.
    // const doDelete = () => {
    //     onDelete(id);
    //     navigate("/");
    // };

    const doDelete = () => {
        if (window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요!")) {
            onDelete(id);
            navigate("/", { replace : true})
        }

    }


    const {onUpdate, onDelete} = useContext(DiaryDispatchContext);

    // 난 이렇게 했었음.
    // const onUpdateWrapped = (data) => {
    //     const newData = {
    //         targetId: data.id,
    //         ...data
    //     }
    //     onUpdate(newData)
    // }

    const onUpdateWrapped = (data) => {
        if (window.confirm("일기를 정말 수정할까요?")) {
            const {date, content, emotionId} = data;
            onUpdate(id, date, content, emotionId);
            navigate("/", {replace: true})
        }
    }

    if (!diary) {
        return <div>일기를 불러오고 있습니다...</div>
    } else{
        return (
            <div>
                <Header
                    title={"새 일기 쓰기"}
                    leftChild={<Button text={"뒤로 가기"} onClick={goBack}/>}
                    rightChild={<Button text={"삭제하기"} type={"negative"} onClick={doDelete}/>}
                />
                <Editor initData={findDiary} onSubmit={onUpdateWrapped}/>
            </div>
        );
    }
}

export default Edit;