/**
 * Mapped Type 기반의 유틸리티 타입.
 * - Mapped Type은 기존 객체 타입을 기반으로 새로운 타입을 만드는 것임.
 * - Partial <T> : 모든 필드가 Optional인 타입
 * - Required <T> : 모든 필드가 필수인 타입
 * - Readonly <T> : 모든 필드가 읽기 전용인 타입
 *
 * interface Post {
 *     title: string;
 *     tags: string[];
 *     content: string;
 *     thumbnailURL?: string;
 * }
 */

interface Post {
    title: string;
    tags: string[];
    content: string;
    thumbnailURL?: string;
}

// 과제1. Partial<T> 구현
type Partial<T> = {
    [key in keyof T]?: T[key]
}

// Partial
type PartialPost = Partial<Post>;

// 과제2. Required <T> : 모든 필드가 필수인 타입
type Required<T> = {
    [key in keyof T]: T[key]
};
type RequiredPost = Required<Post>;


// 과제3. Readonly <T> : 모든 필드가 읽기 전용인 타입
type Readonly<T> = {
    readonly [key in keyof T]: T[key]
};
type ReadonlyPost = Readonly<Post>;