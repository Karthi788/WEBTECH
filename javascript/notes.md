<!-- javascript -->

javascript is one highlevel programming language, it is used to add the functionalities of our webpage .

we can write javascript code in two ways.
1.internal javascript
2.external javascript

<!-- internal javascript -->
internala javascript means writing the javascript code in same html file.

how to write:
   1.we have to take one <script></script> tag.
   this tag should be placed inside the <body></body> tag at the end.

   eg:

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>javascript</title>
            
        </head>
        <body>
            <h1>welcome to javascript introduction</h1>

            <script>
                console.log("i am internal javascript");
            </script>
            <script src="./intro.js"></script>
        </body>

<!-- external javascript -->
writing the javascript code into separate file and then link between the html and js file.
eg:
  <script src="path of the file"></script>



-------------------------------------------------------------------------------------------------------------------
|       var                         |         let                         |         const                         | 
| 1.Redeclaration is possible       |    Redeclaration is not possible    |    Redeclaration is not possible      | 
|-----------------------------------|-------------------------------------|---------------------------------------|
| 2.Reinitialization is possible    |    Reinitialization is possible     |    Reinitialization is not possible   | 
|-----------------------------------|-------------------------------------|---------------------------------------| 
| 3.while declaring initialization  |    while declaring initialization   |    while declaring initialization     | 
|   is not compulsory               |    is not compulsory                |    is compulsory                      | 
|-----------------------------------|-------------------------------------|---------------------------------------|
| 4.var will not follow block scope |    follows all the three scopes     |    follows all the three scopes       | 
-------------------------------------------------------------------------------------------------------------------

<!-- scope -->
1.global scope

eg:
   // global scope
    var H=10;
    let I=50;
    let G=600;

    console.log(H,I,G);
    console.log("this are is global scope");
<!-- ======================================================== -->

2.block scope

eg:
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
<!-- ======================================================== -->

3.function scope or local

eg:
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
<!-- ======================================================== -->

