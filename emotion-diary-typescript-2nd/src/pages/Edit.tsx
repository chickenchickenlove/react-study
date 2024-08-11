import {useNavigate, useParams} from "react-router-dom";
import Header from "../component/Header";
import Button from "../component/Button";
import Editor from "../component/Editor";
import {
    goToPageHomeNavi,
    goToPreviousNavi,
    useFindDiary,
    useReducerDispatcher
} from "../hooks/MyCustomHook";
import {DiaryType} from "../DiaryTypes";
import React from "react";


function Edit() {

    const {id} = useParams();
    const diary = useFindDiary(id);
    const navigate = useNavigate();

    const {onUpdateDiary, onDeleteDiary} = useReducerDispatcher();

    const goToPageHome = goToPageHomeNavi(navigate);
    const goToPrevious = goToPreviousNavi(navigate);

    const onUpdateDiaryWithAction = (diary: DiaryType) => {
        onUpdateDiary(diary);
        alert("성공적으로 수정되었습니다.")
        goToPageHome();
    };

    const onClickedDeleteDiaryWithAction = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (window.confirm("정말 삭제하시겠습니까?")) {
            onDeleteDiary(diary);
            goToPageHome();
            alert("성공적으로 삭제되었습니다.")
        }
    };

    return (
        <div>
            <Header
                title={'수정하기'}
                left_child={
                    <Button
                        text={'뒤로 가기'}
                        doAction={goToPrevious}
                    />
                }
                right_child={
                    <Button
                        type={"negative"}
                        text={'삭제하기'}
                        doAction={onClickedDeleteDiaryWithAction}
                    />
                }
            />
            <Editor onClickedDelegate={onUpdateDiaryWithAction} {...diary}/>
        </div>
    )
}

export default Edit;