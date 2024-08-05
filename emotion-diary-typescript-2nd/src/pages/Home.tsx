import Header from "../component/Header";
import Button from "../component/Button";
import DiaryList, {getNextMonth, getPreviousMonth} from "../component/DiaryList";
import React, {useState} from "react";


const getFormattedDate = (date: number) => {
    const d = new Date(date);
    return `${d.getFullYear()}년 ${d.getMonth()+1}월`
}

function Home() {

    const [date, setDate] = useState(new Date().getTime());
    const goToPreviousMonth = (e: React.MouseEvent) => {
        setDate((_) => getPreviousMonth(date));
    }

    const goToNextMonth = (e: React.MouseEvent) => {
        setDate((_) => getNextMonth(date));
    }
    return (
        <div>
            <Header
                left_child={
                    <Button
                        text={'<'}
                        doAction={goToPreviousMonth}
                    />
                }
                right_child={
                    <Button
                        text={'>'}
                        doAction={goToNextMonth}
                    />
                }
                title={getFormattedDate(date)}
            />
            <DiaryList date={date}/>
        </div>
    );
}

export default Home;

