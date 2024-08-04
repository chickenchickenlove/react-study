import img1 from '../img/emotion1.png';
import img2 from '../img/emotion2.png';
import img3 from '../img/emotion3.png';
import img4 from '../img/emotion4.png';
import img5 from '../img/emotion5.png';

type EmotionImageType =
    typeof img1 |
    typeof img2 |
    typeof img3 |
    typeof img4 |
    typeof img5

type EmotionObjectType = {
    image: EmotionImageType
    text: string
}

export const getEmotionObjectByEmotionId = (emotionId: number): EmotionObjectType => {
    switch (emotionId) {
        case 1:
            return {image: img1, text: '아주 좋음'}
        case 2:
            return {image: img2, text: '좋음'}
        case 3:
            return {image: img3, text: '그럭저럭'}
        case 4:
            return {image: img4, text: '나쁨'}
        case 5:
            return {image: img5, text: '끔찍함'}
        default:
            return {image: img5, text: '끔찍함'}
    }
}

export const getEmotionImageByEmotionId = (emotionId: number) => {
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

export const getEmotionTextByEmotionId = (emotionId: number) => {
    switch (emotionId) {
        case 1:
            return '아주 좋음';
        case 2:
            return '좋은';
        case 3:
            return '그럭저럭';
        case 4:
            return '나쁨';
        case 5:
            return '끔찍함';
        default:
            return '그럭저럭';
    }
}
