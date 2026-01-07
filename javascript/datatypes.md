<!-- Datatypes -->
it is used to define which kind of data is stored in the variable

                             datatype
                                |
                                |
           -------------------------------------------
           |                                         |
        primitive                               non primitive
          number                                  Array
          boolean                                 Object
          String                                  function
          undefined
          null
          bigint
          symbol()

<!-- primitive -->
<!-- number -->
        in number datatype we can store decimal as
        well as non decimal number
<!-- note: -->
        typeof operator is used to know the data of any variable
        
        eg:
           let a = 10;
           let b = 10.35;
           
           console.log(typeof a); // number
           console.log(typeof b); // number

<!-- Number.parseInt() -->
        this method is used to convert anything into number

        eg:
            let a = Number.parseInt(50.55);
            console.log(a); // 50

            let b = "60"
            console.log(b); // 60
            console.log(typeof b); //String

            let c = Number.parseInt("50");
            console.log(c);       // output: 50
            console.log(typeof c) // output: number

            let d = Number.parseInt("ab");
            console.log(d); //NaN

            let e = Number.parseInt("20ab");
            console.log(e);        // output: 20
            console.log(typeof e); // output: number

            let f = Number.parseInt("ab20");
            console.log(f);        // output: NaN

<!-- boolean -->
        it can take true / false
        eg:
           let isOdd = true;

           console.log(isOdd);        //true
           console.log(typeof isOdd); //boolean

<!-- String -->
        String is combination of single or multiple characters
        we can enclose the string by '' or "" or ``

        eg:
          let str1 = "good morning everyone"
          console.log(str1)          
          console.log(typeof str1);

          let str1 = "good morning everyone"
          console.log(str1)
          console.log(typeof str1);

          let str3 = `good evening`;
          console.log(str2)
          console.log(typeof str2);

<!-- undefined -->
        variable declared but not intialized is called undefined

        typeof undefined is undefined

        eg:
          let id;
          console.log(id);        //undefined
          console.log(typeof id); //undefined

<!-- null -->
        null is used to store as nothing in variable.

        it behaves as value what we are storing in the variable.

        typeof null is object.

        eg:
          let salary = null;
          console.log(salary);          //null
          console.log(typeof salary);   //object

<!-- bigint -->
        it is used to store big integer value in any variable

        bigint number suffix will be n.

        eg:
          let largeNumber = 2n;
          console.log(typeof largeNumber);   //bigint
