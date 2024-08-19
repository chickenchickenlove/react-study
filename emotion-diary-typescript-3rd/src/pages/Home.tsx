import Header from "../component/Header";
import DiaryList from "../component/DiaryList";
import Button from "../component/Button";
import {DiaryType} from "../types";
import React, {useState} from "react";


const dummyData: DiaryType[] = [
    {
        id: 1,
        created_date: new Date().getTime() + 1,
        content: "행복했음.",
        emotion: "VERY_GOOD"
    },
    {
        id: 2,
        created_date: new Date().getTime() + 2,
        content: "적당히 행복했음.",
        emotion: "GOOD"
    },
    {
        id: 3,
        created_date: new Date().getTime() + 3,
        content: "오늘은 라면을 먹었따.",
        emotion: "NORMAL"
    },
]

export const DiaryStateContext = React.createContext<DiaryType[]>([]);


function convertToHomeDate(date: Date): string {
    return `${date.getFullYear()}년 ${date.getMonth() + 1}월`
}

function Home() {

    const [homeDate, setHomeDate] = useState(convertToHomeDate(new Date()));

    return (
        <div>
            <DiaryStateContext.Provider value={dummyData}>
                <Header
                    title={homeDate}
                    left_child={<Button
                        text={"<"}
                    />}
                    right_child={<Button
                        text={">"}
                    />}
                />
                <DiaryList/>
            </DiaryStateContext.Provider>
        </div>
    );
}

export default Home;