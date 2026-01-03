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