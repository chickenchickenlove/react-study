import {useNavigate, useParams} from "react-router-dom";
import Header from "../component/Header";
import Viewer from "../component/Viewer";
import Button from "../component/Button";
import {goToPageEditNavi, goToPreviousNavi, useFindDiary} from "../hooks/MyCustomHook";

function Diary() {

    const {id} = useParams();
    const diary = useFindDiary(id);

    const navigate = useNavigate();
    const goToPrevious = goToPreviousNavi(navigate);
    const goToPageEdit = goToPageEditNavi(navigate);

    if (!diary) {
        return <div>Loading...</div>
    }

    const goToBackPage = (_e: React.MouseEvent) => {
        goToPrevious();
    }

    const goToEditPage = (_e: React.MouseEvent) => {
        goToPageEdit(diary.id);
    };

    return (
        <div>
            <Header
                title={`${new Date(diary.date).toLocaleDateString()} 기록`}
                left_child={
                    <Button
                        text={'뒤로 가기'}
                        doAction={goToBackPage}
                    />
                }
                right_child={
                    <Button
                        text={'수정하기'}
                        doAction={goToEditPage}
                    />
                }
            />
            <Viewer {...diary}
            />
        </div>
    )
}

export default Diary;
