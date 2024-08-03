import React from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";

type HomeType = {
    idKey: React.MutableRefObject<number>
}

function Home({ idKey } : HomeType) {

    const date = new Date();

    const doButton = (e: React.MouseEvent) => {

    };

    return (
        <div>
            <Header
                left_child={<Button onButtonClick={doButton} text={"<"}/>}
                right_child={<Button onButtonClick={doButton} text={">"}/>}
                title={`${date.getFullYear()}년 ${date.getMonth()}월`}/>
            <DiaryList />
        </div>
    );
}

export default Home;