
const target = { a: 1 };

const source1 = { b: 2 };
const source2 = { c: 3 };
const source3 = { a: 4 };

Object.assign(target, source1, source2, source3);

console.log(target) // {a:1, b:2, c:3}