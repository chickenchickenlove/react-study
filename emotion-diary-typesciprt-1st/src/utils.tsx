import img1 from "./img/emotion1.png"
import img2 from "./img/emotion2.png"
import img3 from "./img/emotion3.png"
import img4 from "./img/emotion4.png"
import img5 from "./img/emotion5.png"


export function getEmotionImage(imgId: number) {
    switch (imgId) {
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