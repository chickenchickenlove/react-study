/**
 * Enum Type
 * - 타입 스크립트에만 있는 타입.
 * - Enum Type으로 의미를 부여할 수 있어서, 가독성이더 좋아짐.
 * - Enum Type도 Type으로 사용할 수 있음.
 */

enum Role {
    ADMIN = 1,
    USER = 2,
    GUEST = 3,
}

enum Language {
    KOREAN = 'ko',
    ENGLISH = 'en',
    JAPAN = 'jp',
}

type User = {
    name: string;
    role: Role; // Enum도 Type으로 사용할 수 있음.
    language: Language;
}

const user1: User = {
    name: "A",
    role: Role.ADMIN,
    language: Language.ENGLISH
};

const user2: User = {
    name: "B",
    role: Role.GUEST,
    language: Language.KOREAN
};

const user3: User = {
    name: "C",
    role: Role.USER,
    language: Language.JAPAN
}






