import {useParams} from "react-router-dom";
import Header from "../component/Header";
import Button from "../component/Button";
import Editor from "../component/Editor";


function Edit() {

    const {id} = useParams();

    console.log("Edit - id :", id);

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
            <Editor />
        </div>
    )
}

export default Edit;