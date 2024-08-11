/**
 * Type Alias
 * Index Signature
 */

// Type Alias
type User = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
}

let user: User = {
    bio: "안녕하세요",
    birth: "1990.01.01",
    id: 1,
    location: "수원시",
    name: "홍길동", nickname: "Mr. Hong"
}

/**
 * Index Signature
 * - Key - Value의 규칙을 기준으로 타입을 정의할 수 있음.
 * - 주로, Property가 아주 많은 객체의 타입을 정의할 때 사용함.
 */

// Key는 String 타입, Value도 String 타입
type CountryCodes = {
    [key: string]: string;
    Korea: 'ko' // 필수 요소는 이렇게 추가적으로 선언할 수도 있음.
}

const countryCodes: CountryCodes = {
    Korea: "ko",
    UnitedState: "us",
    UnitedKingdom: "uk",
    China: 'CN',
}

