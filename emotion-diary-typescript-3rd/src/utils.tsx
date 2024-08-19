import img1 from "./img/emotion1.png"
import img2 from "./img/emotion2.png"
import img3 from "./img/emotion3.png"
import img4 from "./img/emotion4.png"
import img5 from "./img/emotion5.png"

export type EmotionTagType =
    "VERY_GOOD" | "GOOD" | "NORMAL" | "BAD" | "VERY_BAD";

export const EmotionTag: EmotionTagType[] = ["VERY_GOOD", "GOOD", "NORMAL", "BAD", "VERY_BAD"]

type ImageType =
    typeof img1 | typeof img2 | typeof img3 | typeof img4 | typeof img5
export type ImageOrderType = 1 | 2 | 3 | 4 | 5;

type ImageAndTags = {
    tag: EmotionTagType;
    image: ImageType
    description: string;
    order: ImageOrderType;
}



export function getImageAndTags(emotionType: EmotionTagType): ImageAndTags {
    switch (emotionType) {
        case "VERY_GOOD":
            return {tag: "VERY_GOOD", image: img1, description: "아주 좋음", order: 1}
        case "GOOD":
            return {tag: "GOOD", image: img2, description: "좋음", order: 2}
        case "NORMAL":
            return {tag: "NORMAL", image: img3, description: "그럭저럭", order: 3}
        case "BAD":
            return {tag: "BAD", image: img4, description: "나쁨", order: 4}
        case "VERY_BAD":
            return {tag: "VERY_BAD", image: img5, description: "끔찍함", order: 5}
    }
}


