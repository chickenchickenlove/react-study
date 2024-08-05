import {DiaryContext} from "../App";
import {useContext} from "react";

export function useFindDiary(id: string | undefined) {
    const diaries = useContext(DiaryContext);

    if (!id) {
        return undefined;
    }

    return diaries.find((it) => String(it.id) === id);
}