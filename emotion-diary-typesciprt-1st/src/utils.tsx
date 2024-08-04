import img1 from "./img/emotion1.png"
import img2 from "./img/emotion2.png"
import img3 from "./img/emotion3.png"
import img4 from "./img/emotion4.png"
import img5 from "./img/emotion5.png"
import {DiaryItemType} from "./types";

export function getEmotionImage(emotionId: number) {
    switch (emotionId) {
        case 1:
            return img1;
        case 2:
            return img2;
        case 3:
            return img3;
        case 4:
            return img4;
        case 5:
            return img5;
        default:
            return img1;
    }
}

export function getEmotionText(emotionId: number): string {
    switch (emotionId) {
        case 1:
            return "완전 좋음";
        case 2:
            return "좋음";
        case 3:
            return "그럭저럭";
        case 4:
            return "나쁨";
        case 5:
            return "끔찍함";
        default:
            return "완전 좋음";
    }
}

export const dummyItems: DiaryItemType[] = [
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