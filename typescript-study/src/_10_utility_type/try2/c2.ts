/**
 *
 * - Exclude<T, U> : 타입 T에서 U를 제거
 * - Extract<T, U> : 타입 T에서 U만 추출
 * - ReturnType<T> : 함수의 반환값을 추출하는 타입
 *
 */



// - Exclude<T, U> : 타입 T에서 U를 제거
type Exclude<T, U> = T extends U ? never : T;

// - Extract<T, U> : 타입 T에서 U만 추출
type Extract<T, U> = T extends U ? T : never;

// - ReturnType<T> : 함수의 반환값을 추출하는 타입
type ReturnType<T> = T extends () => infer R ? R : never;

