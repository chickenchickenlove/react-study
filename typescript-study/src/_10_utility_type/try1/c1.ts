/**
 * Mapped Type 기반의 유틸리티 타입
 * - Pick<T, K> : 객체 T에서 특정 프로퍼티만 골라냄.
 * - Omit<T, K> : 객체 T에서 특정 프로퍼티를 제거하는 타입
 * - Record<V, K>
 */

interface Post {
    title: string;
    tags: string[];
    content: string;
    thumbnailURL?: string;
}


type Pick<T, U extends keyof T> = {
    [key in U]: T[key]
};

const legacyPost: Pick<Post, 'title' | 'content'> = {
    title: "옛날글",
    content: "옛날컨텐츠",
}

// U에 표현된 것들은 제거되어야 함.
type Omit<T, U extends keyof T> = Pick<T, Exclude<keyof T, U>>;
const noTitlePost: Omit<Post, 'title'> = {
    tags: ["tag"],
    content: "hello"
}

/**
 * Record<K, V>
 * - Thumbnail을 여러 데스크탑에서 보여주려고 할 때, 각각 정의하게 된다면 괴롭다.
 * - 그리고 각각의 프로퍼티 이름이 바뀐다면, Record 없이 지정되어 있을 때는 수정범위가 넓어진다.
 */

type ThumbnailLegacy = {
    large: {
        url: string;
    },
    medium: { url: string; },
    small: { url: string; };
    watch: { url: string; };
};

// T에 어떤 값이 들어올지 모름. undefined 일지도..
// 잘은 모르지만 T는 어떤 객체의 Key야! 라는 것을 알려주기 위해 T extneds keyof any로 설정함.
type Record1<T extends keyof any, U> = {
    [key in T]: U
}


type Thumbnail = Record<"large" | "medium" | "small" | "watch", { url: string;}>
type Thumbnail1 = Record1<"large" | "medium" | "small" | "watch", { url: string;}>