function anyName(){
    console.log("jana nayagan kandipa nalaiku varathu");
}

anyName();
// ==========================================

//with parameters

function add(a, b){
    console.log("a :",a);
    console.log("b :",b);

    let c = a+b;
    console.log("addition of a and b is :",c);
}

add(10,20);

function mul(a,b,c){
    console.log("a :",a);
    console.log("b :",b);
    console.log("c :",c);
    console.log("Multiply of a,b,c is :",a*b*c);
}

mul(10,20)
// =========================================


function abc(){
    console.log("hello");

    return 50;
}

let res1 = abc; // entire function  and function will not be executed
console.log(res1);

let res2 = abc();
console.log(res2);

function abc(a,b){
    console.log("hello");
    return a+b;
}

let addResult = abc(20,30);
console.log(addResult);
