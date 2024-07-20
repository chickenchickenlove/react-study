import Header from "../component/Header";
import Button from "../component/Button";
import {useContext, useEffect, useState} from "react";
import {DiaryStateContext} from "../App";
import {getMonthRangeByDate} from "../utils";
import DiaryList from "../component/DiaryList";

function Home() {

    const data = useContext(DiaryStateContext);
    const [pivotDate, setPivotDate] = useState(new Date());
    const headerTitle = `${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        if (data.length >= 1) {
            const {beginTimeStamp, endTimeStamp} = getMonthRangeByDate(pivotDate)
            setFilteredData(
                data.filter(
                    (it) => beginTimeStamp <= it.date && it.date <= endTimeStamp
                )
            );
        } else {
            setFilteredData([]);
        }
    }, [data, pivotDate]);


    const onIncreaseMonth = () => {
        const nextMonthDate = new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1);
        setPivotDate(nextMonthDate);
    }

    const onDecreaseMonth = () => {
        const previousMonthDate = new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1);
        setPivotDate(previousMonthDate);
    }

    return (
        <div>
            <Header
                title={headerTitle}
                leftChild={<Button text={"<"} onClick={onDecreaseMonth} />}
                rightChild={<Button text={">"} onClick={onIncreaseMonth} />}
            />
            <DiaryList data={filteredData} />
        </div>
    );
}

export default Home;