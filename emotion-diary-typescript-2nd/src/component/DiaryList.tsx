import "./DiaryList.css"
import Button from "./Button";
import DiaryItem from "./DiaryItem";


function DiaryList() {
    return (
        <div className={'DiaryList'}>
            <div className={'menu_wrapper'}>
                <div className={'left_col'}>
                    <select className={'left_col'}>
                        <option>최신순</option>
                        <option>오래된 순</option>
                    </select>
                </div>
                <div className={'right_col'}>
                    <Button
                        type={'positive'}
                        text={'새 일기 쓰기'}
                        doAction={(_) => console.log(1)}/>
                </div>
            </div>
            <DiaryItem></DiaryItem>
            <DiaryItem></DiaryItem>
            <DiaryItem></DiaryItem>
        </div>
    );
}

export default DiaryList;