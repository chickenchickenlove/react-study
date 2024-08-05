import Header from "../component/Header";
import Button from "../component/Button";
import Editor from "../component/Editor";
import {DiaryType} from "../DiaryTypes";
import {useNavigate} from "react-router-dom";

const initData: DiaryType = {
    id: 1,
    emotionId: 3,
    date: new Date().getTime(),
    contents: ''
}

function New() {

    const navigate = useNavigate();
    const goToPrevious = (e: React.MouseEvent) => {
        navigate(-1);
    }


    return (
        <div>
            <Header
                title={'새 일기 쓰기'}
                left_child={
                    <Button text={'뒤로 가기'} doAction={goToPrevious} />
                }
                right_child={
                    <Button
                        type={'negative'}
                        text={'삭제하기'}
                        doAction={(_) => console.log(1)} />
                }
            />
            <Editor {...initData} />
        </div>
    )
}


export default New;
