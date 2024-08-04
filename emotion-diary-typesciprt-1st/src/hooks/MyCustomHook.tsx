import {useCallback, useContext} from "react";
import {IdKeyContext} from "../context";
import {NavigateFunction} from "react-router-dom";


export const useRefContext = () => {
    const {idKey} = useContext(IdKeyContext);
    if (!idKey) {
        throw new Error('useRefContext must be used within a RefProvider')
    }
    return idKey;
}


export type useNavigatorFunction = {
    goToPreviousPage: () => void
    goToHomePage: () => void
    goToNewPage: () => void
    goToEditPage: (id: number | string) => void
    goToDiaryPage: (id: number | string) => void
};

export const useNavigatorFunction = (navigate: NavigateFunction) => {
    const goToPreviousPage = useCallback(
        () => navigate(-1), []);

    const goToHomePage = useCallback(() => {
        navigate('/');
    }, []);

    const goToNewPage = useCallback(() => {
        navigate('/new');
    }, []);

    const goToEditPage = useCallback((id: number | string) => {
        navigate(`/edit/${id}`)
    }, []);

    const goToDiaryPage = useCallback((id: number | string) => {
        navigate(`/diary/${id}`);
    }, []);

    return {
        goToPreviousPage,
        goToEditPage,
        goToNewPage,
        goToHomePage,
        goToDiaryPage
    }
};