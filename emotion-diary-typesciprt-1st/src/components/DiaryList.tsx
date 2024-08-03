import "./DiaryList.css"
import Button from "./Button";
import React, {useContext, useState} from "react";
import DiaryItem, {DiaryItemType} from "./DiaryItem";
import {useNavigate} from "react-router-dom";
import {DiaryStateContext} from "../App";


function DiaryList() {
    const navigate = useNavigate();

    const goToNewPageWhenButtonClicked = (e: React.MouseEvent) => {
        navigate('/new');
    };

    const [sortOrder, setSortOrder] = useState('latest');
    const doFunction = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSortOrder((prevOrder) => e.target.value);
    }


    const {diaryItems} = useContext(DiaryStateContext);

    const drawDiaryItems = (diaryItems: DiaryItemType[]) => {
        const sortFunction = sortOrder === 'latest' ?
            (a: DiaryItemType, b: DiaryItemType) => a.date - b.date :
            (a: DiaryItemType, b: DiaryItemType) => b.date - a.date;

        return diaryItems
            .sort(sortFunction)
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
                        onButtonClick={goToNewPageWhenButtonClicked}
                        type="positive"
                        text={"새 일기 쓰기"}/>
                </div>
            </div>
            {
                drawDiaryItems(diaryItems)
            }
        </div>
    );
}

export default DiaryList;