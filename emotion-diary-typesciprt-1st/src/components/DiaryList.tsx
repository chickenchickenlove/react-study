import "./DiaryList.css"
import Button from "./Button";
import React from "react";
import DiaryItem, {DiaryItemType} from "./DiaryItem";


const dummyItems: DiaryItemType[] = [
    {
        id: 1,
        date: new Date().getTime() + 1,
        emotionId: 1,
        content: "1월의 마지막 날은 정말 좋은 일만 가득해"
    },
    {
        id: 2,
        date: new Date().getTime() + 2,
        emotionId: 2,
        content: "오늘 날씨가 좋아서 한강에 다녀왔다."
    },
    {
        id: 3,
        date: new Date().getTime() + 3,
        emotionId: 3,
        content: "윽 오늘은 안 좋은 일이 너무 많았어."
    },
    {
        id: 4,
        date: new Date().getTime() + 4,
        emotionId: 4,
        content: "행복하자."
    },
]


function DiaryList() {
    return (
        <div className={"DiaryList"}>
            <div className={"menu_wrapper"}>
                <div className={"left_col"}>
                    <select>
                        <option value={"최신순"}>최신순</option>
                        <option value={"오래된 순"}>오래된 순</option>
                    </select>
                </div>
                <div className={"right_col"}>
                    <Button type="positive" text={"새 일기 쓰기"}/>
                </div>
            </div>
            {
                dummyItems
                    .map((it) => <DiaryItem key={it.id} {...it} />)
            }
        </div>
    );
}

export default DiaryList;