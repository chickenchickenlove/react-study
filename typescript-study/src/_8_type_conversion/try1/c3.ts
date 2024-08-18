/**
 * Template Literal Type
 * - 스트링 리터럴 타입을 기반으로 Template Literal 타입을 만들어서 타입에서 사용함.
 * - 여러 문자열로 복합적인 리터럴 타입은 선언해야 할 때 유용함.
 */


type Color = "red" | "blue" | "green";
type Animal = "dog" | "cat" | "chicken";

// 템플릿 리터럴 타입임.
// red-dog, red-cat, red-chicken, .... green-chicken
type ColorAnimal = `${Color}-${Animal}`

