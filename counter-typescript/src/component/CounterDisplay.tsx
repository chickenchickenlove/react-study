
import "./CounterDisplay.css"

type CounterDisplayProps = {
    count: number
}

function CounterDisplay({
    count
}: CounterDisplayProps) {
    return (
        <div className="CounterDisplay">
            <h4> 현재 카운터 : </h4>
            <div className="count_description"> {count} </div>
        </div>
    )
}


export default CounterDisplay;