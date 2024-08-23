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

// - Omit<T, K> : 객체 T에서 특정 프로퍼티를 제거하는 타입
type Omit<T, U extends keyof T> = Pick<T, Exclude<keyof T, U>>;
type OmitTitlePost = Omit<Post, "title">