import Header from "../component/Header";
import Viewer from "../component/Viewer";
import Button from "../component/Button";
import {useNavigate, useParams} from "react-router-dom";
import {useContext} from "react";
import {DiaryStateContext} from "../App";

function convertToTile(date: number) {
    const d = new Date(date);
    return `${d.getFullYear()}. ${d.getMonth() + 1}. ${d.getDate()} 기록`
}

function Diary() {

    const {id} = useParams();

    const diaryList = useContext(DiaryStateContext);
    const findDiary = diaryList
        .find((it) => String(it.id) === String(id));

    const navigate = useNavigate();

    if (!findDiary) {
        return <div>No Diary At all</div>
    }

    const goToPrevious = (_: any) => {
        navigate(-1);
    };

    const goToEditPage = (_: any) => {
        navigate(`/edit/${id}`)
    };

    return (
        <div>
            <Header
                left_child={
                    <Button
                        text={"뒤로 가기"}
                        doCallback={goToPrevious}
                    />
                }
                right_child={
                    <Button
                        text={"수정하기"}
                        doCallback={goToEditPage}
                    />
                }
                title={convertToTile(findDiary.created_date)}
            />
            <Viewer diary={findDiary}/>
        </div>

    );
}

export default Diary;