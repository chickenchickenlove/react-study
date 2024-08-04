import React, {useState} from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";
import {moveToOtherMonth} from "../DateUtil";

function Home() {

    const [date, setDate] = useState(new Date());

    const goToPreviousMonth = (_e: React.MouseEvent) => {
        setDate(moveToOtherMonth(date, -1));
    };

    const goToNextMonth = (_e: React.MouseEvent) => {
        setDate(moveToOtherMonth(date, 1));
    };

    return (
        <div>
            <Header
                left_child={<Button onButtonClick={goToPreviousMonth} text={"<"}/>}
                right_child={<Button onButtonClick={goToNextMonth} text={">"}/>}
                title={`${date.getFullYear()}년 ${date.getMonth() + 1}월`}/>
            <DiaryList date={date}/>
        </div>
    );
}

export default Home;