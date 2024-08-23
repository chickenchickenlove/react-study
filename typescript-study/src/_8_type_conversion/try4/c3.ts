/**
 * Template Literal Type
 * - 스트링 리터럴 타입을 기반으로 Template Literal 타입을 만들어서 타입에서 사용함.
 * - 여러 문자열로 복합적인 리터럴 타입은 선언해야 할 때 유용함.
 *
 * - 과제1. Color, Animal 타입(string literal)이 있는데 이걸 합친 집합을 만들어줘
 */

type Color = "blue" | "red" | "black";
type Animal = "Dog" | "Cat" | "Bird"
type AnimalColor = `${Animal}=${Color}`
