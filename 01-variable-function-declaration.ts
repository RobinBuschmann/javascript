(function () {

    // variable and function declaration
    // =================================

    // variables
    // ---------------

    var anyNumber = 2;

    let anotherNumber = 2; // es6, is a scope thing, we will learn in 'scopes'

    const SOME_CONSTANT = '123456'; // es6
    /* SOME_CONSTANT = 1; */ // throws error: can't be changed anymore

    // But notice, despite you're not able to assign another value,
    // it is indeed possible to change the value:
    const SOME_OBJECT= {name: 'elisa'};
    SOME_OBJECT.name = 'robin'; // is valid

    var anyString = "I'm double quoted";

    // js does not distinguish between chars and strings
    var anotherString = 'hey, what\'s up?'; // is preferred

    var string3 = `
        dsfdsf
        dsf
        sdf
        ${anyString}
        sdfsdf
    `; // es6

    // functions
    // ---------------

    // function declaration
    function anyDeclaredFunction() {

    }

    anyDeclaredFunction(); // call a function

    // function expression
    var anyFunction = function () { // anonymous function is referenced

    };
    anyFunction(); // call another function


    // a function declaration referenced in a variable
    var fn = function process() {

    };
    fn();
    /* process(); */ // is not accessible

    // process is only accessible from the inside:
    var fn2 = function process() {

        process(); // this will work
    };

})();
