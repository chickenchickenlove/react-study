/**
 * Mapped Type 기반의 유틸리티 타입.
 * - Mapped Type은 기존 객체 타입을 기반으로 새로운 타입을 만드는 것임.
 * - Partial <T>
 * - Required <T>
 * - Readonly <T>
 */


interface Post {
    title: string;
    tags: string[];
    content: string;
    thumbnailURL?: string;
}

type Partial<T> = {
    [key in keyof T]?: T[key];
}

// 초안 작성했을 때, 모든 값이 다 들어가있지는 않으니까...
const draft: Partial<Post> = {
    title: '제목 나중에 짓자',
    content: '초안...',
}

type Required<T> = {
    [key in keyof T]: T[key]
};

const withThumbnailPost : Required<Post> = {
    title: '타이틀',
    tags: ['ts'],
    content: "",
    thumbnailURL: "https://...", // Thumnail은 Post에서 Required가 아니었음.
}

type Readonly<T> = {
    readonly [key in keyof T] : T[key]
}

const readonlyPost : Readonly<Post> = {
    title: '타이틀',
    tags: ['ts'],
    content: "",
    thumbnailURL: "https://...",
}

// readonlyPost.title = 'hello' // readonly라 수정이 안됨.