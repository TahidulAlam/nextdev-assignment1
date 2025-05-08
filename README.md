Explain the difference between any, unknown, and never types in TypeScript.

Any: It essentially disables type checking for a variable. Any operation can be performed on an any type without the compiler raising errors. It is useful for migrating JavaScript code to TypeScript or when the type is truly unknown and irrelevant. However, it sacrifices type safety and should be used sparingly.

Example:

let say: any = "hello";
console.log(say.toUpperCase());
say = 10;
console.log(say + 5);

unknown: It represents a value that could be of any type, similar to any. However, unlike any, it enforces type safety by requiring type assertions or narrowing before performing operations. It is suitable when the type is not known beforehand but needs to be handled safely.

let unknownWord: unknown = "world";
// console.log(unknownWord.toUpperCase()); //show Error: Object is of type 'unknown'.
if (typeof unknownWord === 'string') {
    console.log(unknownWord.toUpperCase());
}