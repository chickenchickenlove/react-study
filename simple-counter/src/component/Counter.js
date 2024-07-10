function Counter({ count, countFunc }) {

    const buttonClassNames = "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus2:ring-blue-300 font-medium rounded-lg text-1xl px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"

    const resetOnClick = (e) => {
        alert("값이 초기화 되었습니다.");
        countFunc(-count);
    };

    return (
        <div className="max-w-lg mx-auto bg-gray-100 rounded-3xl hover:bg-gray-200 focus:ring-4 focus:ring-blue-300 p-4 grid grid-cols-3 gap-4">
            <button value={-1} onClick={() => countFunc(-1)} type="button" className={buttonClassNames}>-1</button>
            <button value={-10} onClick={() => countFunc(-10)} type="button" className={buttonClassNames}>-10</button>
            <button value={-100} onClick={() => countFunc(-100)} type="button" className={buttonClassNames}>-100</button>
            <button value={100} onClick={() => countFunc(100)} type="button" className={buttonClassNames}>+100</button>
            <button value={10} onClick={() => countFunc(10)} type="button" className={buttonClassNames}>+10</button>
            <button value={1} onClick={() => countFunc(1)} type="button" className={buttonClassNames}>+1</button>
            <button onClick={resetOnClick} className={buttonClassNames + " col-span-3"}>Reset Value</button>
        </div>
    );

}

export default Counter;