import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import React, {useContext} from "react";
import {useNavigate} from "react-router-dom";
import {DispatchersContext} from "../App";

function New() {

    const navigate = useNavigate();
    const onClickBack = (e: React.MouseEvent) => {
        navigate(-1);
    };



    return (
        <div className={"New"}>
            <Header
                left_child={
                    <Button
                        onButtonClick={onClickBack}
                        text={"뒤로 가기"}
                    />}
                title={"새 일기 쓰기"}
            />
            <Editor/>
        </div>
    );
}

export default New;

