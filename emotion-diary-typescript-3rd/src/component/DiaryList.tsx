import "./DiaryList.css"
import Button from "./Button";
import DiaryItem from "./DiaryItem";
import {useContext, useEffect, useState} from "react";
import {calculateDate} from "../pages/Home";

import {useNavigate} from "react-router-dom";
import {DiaryType} from "../types";
import {DiaryStateContext} from "../App";

const sortOptions = [
    {
        "value": "latest",
        "display": "최신 순"
    },
    {
        "value": "oldest",
        "display": "오래된 순"
    },
]

function getSortedFunction(sortedKey: string) {
    if (sortedKey === "latest") {
        return (a: DiaryType, b: DiaryType) => a.created_date - b.created_date;
    } else if (sortedKey === "oldest"){
        return (a: DiaryType, b: DiaryType) => b.created_date - a.created_date;
    }
    return (a: DiaryType, b: DiaryType) => a.created_date - b.created_date;
}


interface Props {
    homeDate: Date;
}


function isInDateRange(date: Date, it: DiaryType) {
    const first = findDate(date, 0);
    const last = findDate(date, 1);
    return (first.getTime() <= it.created_date) && (it.created_date < last.getTime());
}

function findDate(date: Date, next: 0 | 1) {
    const nowyy = date.getFullYear();
    const nowMM = date.getMonth();
    const nowdd = date.getDate();

    const [yy, MM, dd] = calculateDate(nowyy, nowMM + next, nowdd);
    return new Date(yy, MM, dd, 0, 0, 0, 0);
}

function DiaryList({homeDate}: Props) {

    const diaryList = useContext(DiaryStateContext);
    const navigate = useNavigate();

    const [sortedKey, setSortedKey] = useState("latest")
    const [sortedDiaries, setSortedDiaries] = useState(diaryList);

    useEffect(() => {
        console.log("useEffect Called.")
        setSortedDiaries((_) =>
            diaryList
                .filter((it) => isInDateRange(homeDate, it))
                .sort(getSortedFunction(sortedKey)));
    }, [sortedKey, homeDate]);

    const goToNewPage = (_: any) => {
        navigate("/new");
    };

    const onSelectedSortedKey = (e: React.ChangeEvent<HTMLSelectElement>) => {
        console.log(`$console.log! ${e.target.value}`)
        setSortedKey((_) => e.target.value);
    }



    return (
        <div className={"DiaryList"}>
            <div className={"menu_wrapper"}>
                <div className={"left_col"}>
                    <select onChange={onSelectedSortedKey}>
                        {
                            sortOptions.map((it) => {
                                return <option
                                    key={it.value}
                                    value={it.value}>{it.display}</option>
                            })
                        }
                    </select>
                </div>
                <div className={"right_col"}>
                    <Button
                        type={"positive"}
                        text={"새 일기 쓰기"}
                        doCallback={goToNewPage}
                    />
                </div>
            </div>
            {
                sortedDiaries
                    .map((it) => <DiaryItem key={it.id} diary={it}/>)
            }
        </div>
    );
}

export default DiaryList;