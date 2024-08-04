import React from "react";
import {DiaryItemType, IdKeyContextType} from "./types";


export const DiaryStateContext = React.createContext<DiaryItemType[]>([]);
export const IdKeyContext = React.createContext<IdKeyContextType>({idKey: null});