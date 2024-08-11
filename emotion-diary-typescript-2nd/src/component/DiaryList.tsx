import "./DiaryList.css"
import Button from "./Button";
import DiaryItem from "./DiaryItem";
import React, {useCallback, useContext, useEffect, useState} from "react";
import {DiaryContext} from "../App";
import {DiaryType} from "../DiaryTypes";
import {useNavigate} from "react-router-dom";

type SortOrder =
    | 'latest'
    | 'oldest'

const sortOrderList = [
    { value: 'latest', display: '최신순' },
    { value: 'oldest', display: '오래된 순'}
]

const getSortFunction = (sortOrder: SortOrder) => {
    return sortOrder === 'latest' ?
        (a: DiaryType, b: DiaryType) => a.date - b.date :
        (a: DiaryType, b: DiaryType) => b.date - a.date
}


export const applyBoundaryCondition = (year: number, month: number) => {
    if (month <= 0) {
        return [year - 1, 12];
    }
    else if (month >= 13) {
        return [year + 1, 1];
    }
    else {
        return [year, month]
    }
}


export const getPreviousMonth = (date: number): number => {
    const tempDate = new Date(date);
    const [y, m] = applyBoundaryCondition(tempDate.getFullYear(), tempDate.getMonth()-1);
    return new Date(y, m).getTime()
};

export const getNextMonth = (date: number): number => {
    const tempDate = new Date(date);
    const [y, m] = applyBoundaryCondition(tempDate.getFullYear(), tempDate.getMonth()+1);
    return new Date(y, m).getTime()
};

const getLeftBoundary = (date: number): number => {
    const tempDate = new Date(date);
    const year = tempDate.getFullYear();
    const month = tempDate.getMonth();

    return new Date(year, month, 1, 0, 0, 0).getTime();
};

const getRightBoundary = (date: number) => {
    const tempDate = new Date(date);
    const year = tempDate.getFullYear();
    const month = tempDate.getMonth();

    const noValidatedDate = new Date(year, month, 31, 23, 59, 59);
    const normalizedDay = noValidatedDate.getDate() === 31 ?
        31 :
        31 - noValidatedDate.getDate();

    return new Date(year, month, normalizedDay, 23, 59, 59).getTime();
};


type Props = {
    date: number
}

function toSortOrder(value: string): SortOrder {
    if (value === 'latest' || value === 'oldest') {
        return value;
    }
    return 'latest';
}

function DiaryList({ date }: Props) {

    const navigate = useNavigate();
    const [sortOrder, setSortOrder] = useState<SortOrder>('latest');
    const diaryItems = useContext(DiaryContext);

    // CallBack
    const updateSortOrder = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        setSortOrder((_) => toSortOrder(e.target.value));
    }, []);

    const goToNewPage = (e: React.MouseEvent) => {
        navigate('/new');
    }

    return (
        <div className={'DiaryList'}>
            <div className={'menu_wrapper'}>
                <div className={'left_col'}>
                    <select
                        className={'left_col'}
                        defaultValue={sortOrder}
                        onChange={updateSortOrder}
                        >
                        {
                            sortOrderList
                                .map((it) => {
                                    return <option
                                        key={it.value}
                                        value={it.value}>{it.display}</option>;})
                        }
                    </select>
                </div>
                <div className={'right_col'}>
                    <Button
                        type={'positive'}
                        text={'새 일기 쓰기'}
                        doAction={goToNewPage}/>
                </div>
            </div>
            {
                diaryItems
                    .filter((it) => {
                        return getLeftBoundary(date) <= it.date && it.date <= getRightBoundary(date)}
                    )
                    .sort(getSortFunction(sortOrder))
                    .map((it) => <DiaryItem key={it.id} {...it} />)
            }
        </div>
    );
}

export default DiaryList;