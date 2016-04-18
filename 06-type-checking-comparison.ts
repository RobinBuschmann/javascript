(function () {

    // type checking and comparison
    // =================================

    // # type checking
    // ---------------

    // for primitive types and reference types

    console.log(typeof 5); // number
    console.log(typeof 5 === 'number'); // => true
    console.log(typeof 'elisa'); // string
    console.log(typeof 'elisa' === 'string'); // => true
    console.log(typeof true); // boolean

    console.log(typeof {}); // object
    console.log(typeof []); // object as well, because Array inherit from Object;
                            // since es5 the Array constructor has a
                            // function called isArray => Array.isArray([]) => true

    function Human(name) {
        this.name = name;
    }

    // => new Human('elisa').name;

    console.log(typeof new Human('')); // object

    // for reference types you can compare instances to the constructor
    console.log(new Human('') instanceof Human); // true
    console.log([] instanceof Array); // true
    console.log(new String() instanceof String); // true
    console.log('' instanceof String); // false
    // or
    console.log(new Human('').constructor === Human); // true

    // BUT KEEP IN MIND:
    // the constructor of an object can be manipulated
    var elisa = new Human('');
    elisa.constructor = 'bla';
    console.log(elisa.constructor === Human); // false

    // there are some other issues with this approach regarding inheritance
    // via constructor functions

    // # equality
    // ---------------

    var a = '1';
    var b = 1;

    console.log(a == b); // true
                         // for simple equality js tries to convert
                         // the value on the right hand, that's why
                         // this is true

    var obj1 = {};
    var obj2 = {};

    console.log(obj1 == obj2); // false => compares the references

    // # strict equality
    // ---------------

    console.log(a === b); // false
    console.log(1 === 1); // true
    console.log('1' === '1'); // true
    console.log(obj1 === obj2); // false => compares the references as well

    // https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Operators/Vergleichsoperatoren

    // # truthy and falsy values
    // ---------------

    // "A value is falsy if it is false, null, undefined, '', 0 or NaN.
    //  A truthy value is any value not considered falsy."
    // http://bytearcher.com/articles/using-and-and-or-outside-of-if-clause/

    // if you want to check if a variable is initialized with an object:
    if (obj1) { // this is truthy
        // so we will get in here
    }

    if (!obj2) { // this is falsy
        // unreached code
    }

    // short hand (easy way to use default value as a fallback):
    function main(_customObj) {

        // if _customObj is undefined or null,
        // var obj gets declared with {}
        var obj = _customObj || {};
    }

    // so if you want to check an object before you access any members
    // of it, this is the way you'll probably go


    // BUT BE AWARE OF PRIMITIVE TYPES:

    var someString = 'elisa';
    if (someString) {
    } // is truthy as well ..

    // .. but ..

    someString = '';
    if (someString) {
    } // .. this is not

    // same for numbers:

    var someNumber = 1;
    if (someNumber) {
    } // is truthy as well ..

    // .. but ..

    someNumber = 0;
    if (someNumber) {
    } // .. this is not


    // SO IF YOU WANT TO CHECK IF ANY VALUE EXISTS ON PRIMITIVE TYPED VARIABLE:

    if (someString !== undefined) {
    }
    // or
    if (!someString !== void 0) {
    }

    // TODO: member checking

}());

