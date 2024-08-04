import "./DiaryList.css"
import Button from "./Button";
import React, {useContext, useState} from "react";
import DiaryItem from "./DiaryItem";
import {useNavigate} from "react-router-dom";
import {DiaryItemType} from "../types";
import {DiaryStateContext} from "../context";
import {getEnd, getStart} from "../DateUtil";
import {useNavigatorFunction} from "../hooks/MyCustomHook";


type DiaryListType = {
    date: Date
}

function DiaryList({ date }: DiaryListType) {
    const {goToNewPage} = useNavigatorFunction(useNavigate());
    const goToNewPageWhenButtonClicked = (e: React.MouseEvent) => {
        goToNewPage();
    };

    const [sortOrder, setSortOrder] = useState('latest');
    const doFunction = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSortOrder((prevOrder) => e.target.value);
    }

    const diaryItems = useContext(DiaryStateContext);
    const drawDiaryItems = (diaryItems: DiaryItemType[]) => {
        const sortFunction = sortOrder === 'latest' ?
            (a: DiaryItemType, b: DiaryItemType) => a.date - b.date :
            (a: DiaryItemType, b: DiaryItemType) => b.date - a.date;

        return diaryItems
            .sort(sortFunction)
            .filter((it) => {
                return getStart(date).getTime() <= it.date && it.date <= getEnd(date).getTime()
            })
            .map((it) => <DiaryItem key={it.id} {...it} />)
    }

    return (
        <div className={"DiaryList"}>
            <div className={"menu_wrapper"}>
                <div className={"left_col"}>
                    <select
                        onChange={doFunction}
                    >
                        <option value={"latest"}>최신순</option>
                        <option value={"oldest"}>오래된 순</option>
                    </select>
                </div>
                <div className={"right_col"}>
                    <Button
                        text={"새 일기 쓰기"}
                        type="positive"
                        onButtonClick={goToNewPageWhenButtonClicked}/>
                </div>
            </div>
            {
                drawDiaryItems(diaryItems)
            }
        </div>
    );
}

export default DiaryList;