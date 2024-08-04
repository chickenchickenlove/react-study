import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import React, {useContext} from "react";
import {useNavigate} from "react-router-dom";
import {DispatchersContext} from "../App";
import {useNavigatorFunction, useRefContext} from "../hooks/MyCustomHook";
import {DiaryItemType} from "../types";

function New() {

    const idKey = useRefContext();
    const {goToPreviousPage} = useNavigatorFunction(useNavigate());

    const {createDiaryItem} = useContext(DispatchersContext);

    const createFunction = (diaryItem: DiaryItemType) => {
        const newItem = {...diaryItem, id: idKey.current};
        idKey.current += 1;
        createDiaryItem(newItem);
    };


    return (
        <div className={"New"}>
            <Header
                title={"새 일기 쓰기"}
                left_child={
                    <Button
                        text={"뒤로 가기"}
                        onButtonClick={goToPreviousPage}
                    />}
            />
            <Editor submitFunction={createFunction}/>
        </div>
    );
}

export default New;

