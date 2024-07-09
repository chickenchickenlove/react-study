import Body from "./component/Body";
import EventTestBody from "./component/EventTestBody";
import CustomChildComponent from "./component/CustomChildComponent";
import ConditionalBody from "./component/ConditionalBody";
import InlineStyleExample from "./component/InlineStyleExample";
import UseCssStyleExample from "./component/UseCssStyleExample";
import Footer from "./component/Footer";
import Header from "./component/Header";
import './App.css';
import UseStateBody from "./component/UseStateBody";
import UseStateInputTag from "./component/UseStateInputTag";
import MultipleUseStateBody from "./component/MultipleUseStateBody";
import MultipleUseStateBody2 from "./component/MultipleUseStateBody2";
import PropagationStateChild from "./component/PropagationStateChild";
import UseRefExample from "./component/UseRefExample";
import UseRefExample2 from "./component/UseRefExample2";


function App() {

    const bodyName = "Alice";
    const locationName = "서울시"


    const data1 = "Data1";
    const data2 = "Data2";
    const data3 = "Data3";
    const tempProps = {
        data1: data1,
        data2: data2,
        data3: data3
        // fruits: ["사과", "과자", "포도"] // defaultProps로 에러를 잡아야 한다.
    };

    // 데이터를 넘길 때, 이렇게 만들어서 넘길 수 있음.
    return (
        <div className="App">
            <Header/>
            <Body name={bodyName} location={locationName} {...tempProps}>
                {/*    ChildComponent를 넘김.*/}
                <CustomChildComponent/>
            </Body>
            <ConditionalBody />
            <InlineStyleExample />
            <UseCssStyleExample />
            <UseStateBody />
            <UseStateInputTag />
            <MultipleUseStateBody />
            <MultipleUseStateBody2 />
            <PropagationStateChild />
            <UseRefExample />
            <UseRefExample2 />
            <EventTestBody />
            <Footer/>
        </div>
    );
}

export default App;
