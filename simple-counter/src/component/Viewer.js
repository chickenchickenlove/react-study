function Viewer({ count }) {
    return (
        <div
            className="max-w-lg mx-auto bg-gray-100 rounded-3xl hover:bg-gray-200 focus:ring-4 focus:ring-blue-300 p-4">
            <h1 className="text-2xl p-4"> 현재 카운트 : </h1>
            <h1 className="text-2xl p-4 text-blue-400 hover:text-blue-500"> {count}</h1>
        </div>
    );
}

export default Viewer;