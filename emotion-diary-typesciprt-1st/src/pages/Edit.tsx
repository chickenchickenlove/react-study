import {useNavigate, useParams} from "react-router-dom";
import {useContext} from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import {DiaryStateContext} from "../context";
import {DispatchersContext} from "../App";
import {DiaryItemType} from "../types";
import {useNavigatorFunction} from "../hooks/MyCustomHook";

function Edit() {

    const {id} = useParams();
    const {goToPreviousPage, goToHomePage} = useNavigatorFunction(useNavigate());

    const diaryItem = useContext(DiaryStateContext)
        .find((it) => String(it.id) === id);

    const {updateDiaryItem, deleteDiaryItem} = useContext(DispatchersContext);

    if (!diaryItem) {
        return <div>Loading...</div>;
    }


    const updateFunction = (diaryItem: DiaryItemType) => {
        updateDiaryItem(diaryItem);
    };

    const deleteDiaryFunction = (e: React.MouseEvent) => {
        if (window.confirm("일기를 정말 삭제할까요? 다시 복구 되지 않아요! ")) {
            deleteDiaryItem(diaryItem);
            goToHomePage();
        }
    };

    return (
        <div>
            <Header
                left_child={
                    <Button
                        text={"뒤로 가기"}
                        onButtonClick={goToPreviousPage}
                    />
                }
                title={"일기 수정하기"}
                right_child={
                    <Button
                        type={"negative"}
                        text={"삭제 하기"}
                        onButtonClick={deleteDiaryFunction}
                    />
                }
            />
            <Editor
                submitFunction={updateFunction}
                diaryItem={diaryItem}/>

        </div>
    );
}

export default Edit;

