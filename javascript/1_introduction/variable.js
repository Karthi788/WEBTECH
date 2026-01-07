var a=10;
console.log(a);
var a=100;
console.log(a);
// ==============================

let b=50;
    b=5000;
console.log(b);

var a=100;
    a=1000;
console.log(a);
// ===============================

const c=100;
    //   c=200;
console.log(c);

// ===============================

var d;
console.log(d);

let e;
console.log(e);

// const c;  //not allowed for only declaration
// =============================================


//scope

// global scope
var H=10;
let I=50;
let G=600;

console.log(H,I,G);
console.log("this are is global scope");


// block scope
{
    var M=10;//global scope
    let N=50;//block scope
    let O=600;//block scope

    console.log(M,N,O);
    console.log(H,I,G);
    console.log("this area is block scope");
}

console.log(M)

//local scope
function abc(){
    var x=10;//global scope
    let y=50;//block scope
    let z=600;//block scope
    console.log(x,y,z);
    console.log(H,I,G);
    console.log("this area is local scope");
}
abc();

console.log(x);
//=============================================
