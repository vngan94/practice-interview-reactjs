// build a custom Readonly utility like Readonly helper in Typescript

interface toDo {
    title: string,
    description: string,
}
// use built-in readonly
type toDoReadOnly = Readonly<toDo>;

//  custom 
type MyReadOnly<T> = {
    readonly [P in keyof T]: T[P];
}
const firstItem: toDoReadOnly = {
    title: "sleep",
    description: "8 hours",
}

const secondItem: MyReadOnly<toDo> = {
    title: "wake up",
    description: "early",
};

// write a type First<T>, input - array T, return type of first element
//     example:
//      ["orange", "fruits"] => return string
//      ["champion",2,3] => return number


type First<T extends any[]> = T extends [] ? never : T[0];

type firstFruit = First<["orange", "apple"]>;
type firstNumber = First<[]>;  // never

const myFruit: firstFruit = "orange";
console.log(myFruit);

// For a given tuple, wrtie a type is the length of the tuple

type Length<T extends any[]> = T["length"];

type fruitsLength = Length<["orange", "apple"]>;

type carLength = Length<[]>; 

//  write a type, input (condition, value A, value B), 
// return A if condition is true, return B if condition is false

type If<C extends boolean, A, B> = C extends true ? A : B;

type A = If<true, "A", "B">;

type B = If<false, 1,2 >;

// write a type, input 2 arguments 
// return a new array with 2 that arguments (concat 2 array)

type Concat <A extends any[], B extends any[]> = [...A, ...B];

type result = Concat<[1], [2]>;


