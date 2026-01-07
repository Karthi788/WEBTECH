<!-- variable hoisting -->
   => if we have declared any variable by using var keyword and we are trying to access 
      that before it declaration,output will be undefined.
   => Because that declaration part will be moving to the top, this is called variable hoisting

    eg:
    console.log(a); // undefined
    var a = 20;

<!-- what is difference between == and === -->
       '==' will check only the value
       '===' it will check value with datatype

       console.log("20" == 20) //true
       console.log("20" === 20) //false 

Definition
      moving the declaration top of the respective scope is known as hoisting
type:
      1.variable hoisting
      2.function hoisting
   
1.variable hoisting
      1.By using var key word
           1.declaration goes to top of the scope and value intialised as undefined till actual intialization.
           Thats why if we try to access before initialization we will get undefined.
      2.By using let and const key word
           1.declaration goes to top of the scope and value will not be assigned till actual initialization.
           if we try to access before actual initialization we will get reference error due to TDZ (Temporal Dead Zone).

2.functin hoisting
      1.entire function goes to top of the scope thats why we can call the function before declaration
      still it will work.
