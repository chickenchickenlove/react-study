// 이렇게 사용하는 것을 더 선호하는 편이라고 함.
// function Body({location, name}) { ... }
import {Children} from "react";

function Body(props) {

    const one = 1;
    const two = 2;

    const strA = "Hello";
    const strB = "World!";

    const boolA = true;
    const boolB = false;

    const num2 = 10;
    console.log("안녕하세요!!")
    console.log(props)

    // Unpacking.
    // 부모에게서 전달받은 컴포넌트는 자동으로 Props.children에 저장됨.
    const {location, name, data1, data2, data3, fruits, children} = props;

    console.log(children);
    return (
        <div>
            <h1>body</h1>
            <h2>{one + two}</h2>
            <h2>{strA + " " + strB}</h2>
            <h2>{"boolean not rendered."}</h2>
            <h2>{boolA || boolB}</h2>
            <h2>{"boolean not rendered."}</h2>
            <h2>{String(boolA || boolB)}</h2>

            <h2> 삼항연산자 랜더링 </h2>
            <h2> {num2}는 {num2 % 2 === 0 ? "짝수" : "홀수"} 입니다. </h2>

            <h2> 부모에게 받은 props. name = {props.name}</h2>
            <h2> 부모에게 받은 props. location = {props.location}</h2>

            <h2> 부모에게 받은 name = {name}</h2>
            <h2> 부모에게 받은 location = {location}</h2>
            <h2> 부모에게 받은 data1 = {data1}</h2>
            <h2> 부모에게 받은 data2 = {data2}</h2>
            <h2> 부모에게 받은 data3 = {data3}</h2>
            <h2> 부모에게 받은 fruits의 길이 = {fruits.length}</h2>

            <h2> 이것은 children을 렌더링 하는 코드입니다.</h2>
            {children}
        </div>
    );
}

export default Body;
// 부모에게서 배열을 받을 것으로 기대했는데, undefined가 오면 런타임 에러가 발생함.
// 이를 해결하기 위해 DefaultProps로 처리함.
Body.defaultProps = {
    fruits: []
}
