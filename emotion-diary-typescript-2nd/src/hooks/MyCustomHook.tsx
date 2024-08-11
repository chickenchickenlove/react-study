import {DiaryContext, DiaryDispatcherContext} from "../App";
import React, {useContext} from "react";
import {NavigateFunction, useNavigate} from "react-router-dom";

export function useFindDiary(id: string | undefined) {
    const diaries = useContext(DiaryContext);

    if (!id) {
        return undefined;
    }

    return diaries.find((it) => String(it.id) === id);
}


export function useReducerDispatcher() {
    const dispatcherContext = useContext(DiaryDispatcherContext)
    if (!dispatcherContext) {
        throw Error("Need to be initialized.")
    }
    return dispatcherContext;
}


export function goToPageHomeNavi(navigate: NavigateFunction) {
    return () => navigate('/');
}

export function goToPreviousNavi(navigate: NavigateFunction){
    return () => navigate(-1);
}

export function goToPageEditNavi(navigate: NavigateFunction) {
    return (id: number) => navigate(`/edit/${id}`);
}

export function goToPageDiaryNavi(navigate: NavigateFunction) {
    return (id: number) => navigate(`/diary/${id}`);
}