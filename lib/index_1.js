//console.log("hello world");

//1. babel lib -d build\lib
//2. npm run build

var a = 2;
{
    let a = 3;
    console.log("in:", a);
}

console.log("out:", a);