import {useParams} from "react-router-dom";
import Header from "../component/Header";
import Viewer from "../component/Viewer";
import Button from "../component/Button";

function Diary() {

    const {id} = useParams();

    console.log("Diary - id :", id);

    return (
        <div>
            <Header
                title={'2024-08-04 기록'}
                left_child={
                    <Button
                        text={'뒤로 가기'}
                        doAction={(_) => console.log(1)}
                    />
                }
                right_child={
                    <Button
                        text={'수정하기'}
                        doAction={(_) => console.log(1)}
                    />
                }
            />
            <Viewer
            />
        </div>
    )
}

export default Diary;
