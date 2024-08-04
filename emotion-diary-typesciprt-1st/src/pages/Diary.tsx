import {useNavigate, useParams} from "react-router-dom";
import Header from "../components/Header";
import React, {useContext} from "react";
import {DiaryStateContext} from "../context";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import {useNavigatorFunction} from "../hooks/MyCustomHook";

function Diary() {
    const {id} = useParams();

    const {goToPreviousPage, goToEditPage} = useNavigatorFunction(useNavigate());

    const diaryItem = useContext(DiaryStateContext)
        .find((it) => String(it.id) === id);

    if (!diaryItem) {
        return <div>Loading...</div>
    }

    const onEditButtonClick = (e: React.MouseEvent) => {
        goToEditPage(diaryItem.id);
    }


    return (
        <div>
            <Header
                title={new Date(diaryItem.date).toLocaleDateString()}
                left_child={
                    <Button
                        text={"뒤로 가기"}
                        onButtonClick={goToPreviousPage}/>}
                right_child={
                    <Button
                        text={"수정하기"}
                        onButtonClick={onEditButtonClick}
                    />}
            />
            <Viewer diaryItem={diaryItem}/>
        </div>
    );
}

export default Diary;

