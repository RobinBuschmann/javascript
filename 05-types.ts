
(function () {

    // types
    // =================================

    // js is typed, but dynamically typed

    var someVar = 123; // is now of type number
    someVar = 'text';  // is now of type string
    someVar = true;    // is now of type boolean
    someVar = {};      // is now of type Object

    // # primitive types

    // number
    var someNumber = 123;
    var someFloat = 1.23;

    // string
    var someString = 'Elisa';
    var anotherString = "Robin";
    var es6String = `<div>
                        <span>Cool, it is highlighted</span>
                        <span>I love you, webstorm</span>
                     </div>`;
    // bad performance:
    var longString = "This is a very long string which needs \
                      to wrap across multiple lines because \
                      otherwise my code is unreadable.";

    console.log(longString.length);

    // boolean
    var someBool = true;
    var anotherBool = 1 === 2;


    // # reference types

    // Object
    var someObj = {};
    // bad practice
    var anotherObj = new Object();

    // Array
    var someArr = [];
    var someArr2 = [['a','b'],2,3,4];
    // bad practice
    // the length of the array is not fixed
    // all arrays are dynamically
    var anotherArray = new Array(4);

    console.log(anotherArray.length);

    // other types

    new String();
    new Number();
    new Function();

    // Function
    // Date
    // ...

}());

