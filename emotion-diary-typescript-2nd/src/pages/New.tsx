import Header from "../component/Header";
import Button from "../component/Button";
import Editor from "../component/Editor";
import {DiaryType} from "../DiaryTypes";
import {useNavigate} from "react-router-dom";
import {goToPageHomeNavi, goToPreviousNavi, useReducerDispatcher} from "../hooks/MyCustomHook";

const initData: DiaryType = {
    id: 1,
    emotionId: 3,
    date: new Date().getTime(),
    contents: ''
}

function New() {
    const {onCreateNewDiary} = useReducerDispatcher()

    const navigate = useNavigate();
    const goToPrevious = goToPreviousNavi(navigate);
    const goToPageHome = goToPageHomeNavi(navigate);

    const onClickCreate = (diary: DiaryType) => {
        onCreateNewDiary(diary)
        goToPageHome();
    }

    return (
        <div>
            <Header
                title={'새 일기 쓰기'}
                left_child={
                    <Button
                        text={'뒤로 가기'}
                        doAction={goToPrevious}/>
                }
            />
            <Editor
                onClickedDelegate={onClickCreate}
                {...initData} />
        </div>
    )
}


export default New;
