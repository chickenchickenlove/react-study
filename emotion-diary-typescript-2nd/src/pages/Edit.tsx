import {useParams} from "react-router-dom";
import Header from "../component/Header";
import Button from "../component/Button";
import Editor from "../component/Editor";
import {useFindDiary} from "../hooks/MyCustomHook";


function Edit() {

    const {id} = useParams();
    const diary = useFindDiary(id);

    if (!diary) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <Header
                title={'수정하기'}
                left_child={
                    <Button
                        text={'뒤로 가기'}
                        doAction={(e) => console.log(e)}
                    />
                }
                right_child={
                    <Button
                        text={'삭제하기'}
                        doAction={(e) => console.log(e)}
                    />
                }
            />
            <Editor onClickedDelegate={() => {}} {...diary}/>
        </div>
    )
}

export default Edit;