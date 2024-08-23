/**
 * Mapped Type 기반의 유틸리티 타입
 * - Pick<T, K> : 객체 T에서 특정 프로퍼티만 골라냄.
 * - Omit<T, K> : 객체 T에서 특정 프로퍼티를 제거하는 타입
 * - Record<V, K>
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

// - Pick<T, K> : 객체 T에서 특정 프로퍼티만 골라냄.
type Pick<T, U extends keyof T> = {
    [key in U]: T[key]
};

type TitleTagPick = Pick<Post, 'title' | 'tags'>;

// - Omit<T, K> : 객체 T에서 특정 프로퍼티를 제거하는 타입
// T에서 K가 아닌 객체들만 뽑아내야함.
type Omit<T, K extends keyof T> = {
    [key in Exclude<keyof T, K>]: T[key]
};

type ExceptTitleOmit = Omit<Post, 'title'>;


