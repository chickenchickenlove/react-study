function ConditionalBody() {
    const num = 200;
    const myString = "이것은 조건부 연산자입니다."
    if (num % 2 === 0) {
        return (
          <div> {myString} {num}은 짝수입니다.</div>
        );
    } else {
        return (
            <div> {myString} {num}은 홀수입니다.</div>
        );
    }
}

export default ConditionalBody