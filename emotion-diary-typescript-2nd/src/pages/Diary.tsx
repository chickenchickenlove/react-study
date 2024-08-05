import {useNavigate, useParams} from "react-router-dom";
import Header from "../component/Header";
import Viewer from "../component/Viewer";
import Button from "../component/Button";
import {useContext} from "react";
import {DiaryContext} from "../App";
import diaryItem from "../component/DiaryItem";

function Diary() {

    const {id} = useParams();
    const diary = useContext(DiaryContext)
        .find((it) => String(it.id) === id);

    const naviate = useNavigate();
    if (!diary) {
        return <div>Loading...</div>
    }

    const goToBackPage = (_e: React.MouseEvent) => {
        naviate(-1);
    }

    const goToEditPage = (_e: React.MouseEvent) => {
        naviate(`/edit/${diary.id}`)
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
