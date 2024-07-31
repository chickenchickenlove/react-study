import React from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";

function Home() {

    const date = new Date();





    return (
        <div>
            <Header
                left_child={<Button text={"<"}/>}
                right_child={<Button text={">"}/>}
                title={`${date.getFullYear()}년 ${date.getMonth()}월`}/>
            <DiaryList />
        </div>
    );
}

export default Home;