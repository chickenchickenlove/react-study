import Header from "../component/Header";
import Button from "../component/Button";
import Editor from "../component/Editor";

function New() {
    return (
        <div>
            <Header
                title={'새 일기 쓰기'}
                left_child={
                    <Button text={'뒤로 가기'} doAction={(_) => console.log(1)} />
                }
                right_child={
                    <Button
                        type={'negative'}
                        text={'삭제하기'}
                        doAction={(_) => console.log(1)} />
                }
            />
            <Editor />
        </div>
    )
}


export default New;
