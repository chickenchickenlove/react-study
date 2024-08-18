/**
 * Enum Type
 * - 타입 스크립트에만 있는 타입.
 * - Enum Type으로 의미를 부여할 수 있어서, 가독성이더 좋아짐.
 * - Enum Type도 Type으로 사용할 수 있음.
 */
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 1] = "ADMIN";
    Role[Role["USER"] = 2] = "USER";
    Role[Role["GUEST"] = 3] = "GUEST";
})(Role || (Role = {}));
var Language;
(function (Language) {
    Language["KOREAN"] = "ko";
    Language["ENGLISH"] = "en";
    Language["JAPAN"] = "jp";
})(Language || (Language = {}));
const user1 = {
    name: "A",
    role: Role.ADMIN,
    language: Language.ENGLISH
};
const user2 = {
    name: "B",
    role: Role.GUEST,
    language: Language.KOREAN
};
const user3 = {
    name: "C",
    role: Role.USER,
    language: Language.JAPAN
};
export {};
