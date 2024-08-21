import Header from "../component/Header";
import DiaryList from "../component/DiaryList";
import Button from "../component/Button";
import {DiaryType} from "../types";
import React, {useState} from "react";




function convertToHomeDate(date: Date): string {
    return `${date.getFullYear()}년 ${date.getMonth() + 1}월`
}


export function calculateDate(year: number, month: number, day: number) {
    if (month < 0) {
        return [year - 1, 11, day];
    }
    else if (month >= 12) {
        return [year + 1, 0, day];
    }
    else{
        return [year, month, day];
    }
}


function movePreviousMonth(date: Date) {
    const prevMonth = date.getMonth() - 1;
    const nowYear = date.getFullYear();
    const nowDate = 1;

    const [yy, MM, dd] = calculateDate(nowYear, prevMonth, nowDate);
    return new Date(yy, MM, dd);
}

function moveNextMonth(date: Date) {
    const nextMonth = date.getMonth() + 1;
    const nowYear = date.getFullYear();
    const nowDate = 1;

    const [yy, MM, dd] = calculateDate(nowYear, nextMonth, nowDate);
    return new Date(yy, MM, dd);
}


function Home() {

    const [homeDate, setHomeDate] = useState(new Date());


    const onClickPrev = () => {
        const nextDate = movePreviousMonth(homeDate)
        setHomeDate((_) => nextDate);
    };

    const onClickNext = () => {
        const nextDate = moveNextMonth(homeDate)
        setHomeDate((_) => nextDate);
    };




    return (
        <div>

                <Header
                    title={convertToHomeDate(homeDate)}
                    left_child={<Button
                        text={"<"}
                        doCallback={onClickPrev}
                    />}
                    right_child={<Button
                        text={">"}
                        doCallback={onClickNext}
                    />}
                />
                <DiaryList homeDate={homeDate} />
        </div>
    );
}

export default Home;