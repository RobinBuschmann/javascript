(function () {

    // this
    // =================================

    // in js there is a 'this'-keyword like in java
    // but the js-'this' has nothing to do with the java-'this'

    // 'this' is the context from what a function is called
    // so, 'this' is in time of definition not determined

    function brom() {}

    var obj = {
        fn: function () {
            console.log(this);
        },
        brom: brom
    };

    obj.fn(); // obj (this => obj)

    // When calling a function reference of an object,
    // the context, that will be passed (automatically),
    // *is* the object


    // But the context can be "changed" or "lost"

    var fn2 = obj.fn;

    fn2(); // window (this => global object)

    // "lost" is probably not the correct phrase:
    // when calling fn2 like this, you'll never pass
    // any context explicitly, so the context will always
    // be the global object or when trying to access
    // 'this' in strict mode, it throws an error


    // -----------------------------------------------------
    // | You should internalize, that functions are never  |
    // | owned by an object. An object can only reference  |
    // | functions                                         |
    // -----------------------------------------------------


    // But there is another way of passing the context:

    // # call or apply
    // -----------------

    // every function object has a call and a apply member

    console.log(obj.fn.call !== undefined); // true
    console.log(obj.fn.apply !== undefined); // true

    // via apply/call you can call those functions:

    function example() {

        return 'Hey, elisa'
    }

    console.log(example()); // 'Hey, elisa'
    console.log(example.call(null)); // 'Hey, elisa'
    console.log(example.apply(null)); // 'Hey, elisa'

    // As you can see, these functions take at least one
    // argument. What is this about? We're talking
    // about the context. So the first argument is
    // indeed the context, that you can pass to the
    // execution scope.

    // In this example we passed "null". So when calling
    // "example" with .call(null), "this" is null.
    // But you can pass whatever you want: a string, a
    // boolean, a number, an object...


    // You might wondering how you can pass parameters
    // through "call" or "apply".
    // Both functions can be distinguished by the way
    // you're passing parameters:

    function add(a, b) {
        return a + b;
    }

    add.call(null, 2, 1); // 3 (passing the arguments after the context)
    add.apply(null, [2, 1]); // 3 (passing the arguments through an array)


    // some examples
    // ---------------------------------

    // Ok, we said before, that a context can be "changed".
    // Let's consider the following examples:

    var elisa = {
        name: 'elisa',
        getName: function () {
            return this.name;
        },
        setName: function(name) {
            this.name = name;
        }
    };

    var robin = {
        name: 'robin',
        getName: function () {
            return this.name;
        },
        setName: function(name) {
            this.name = name;
        }
    };

    console.log(elisa.getName()); // elisa

    console.log(elisa.getName.call(robin)); // ???

    elisa.setName.call(robin, 'nelly'); // what happens here?
    console.log(elisa.getName()); // ???

    var setName = elisa.setName;

    setName('bromi'); // ???

    console.log(elisa.getName()); // ???

    // bind
    // ---------------------------------

    function getName() {
        return this.name;
    }

    var getElisasName = getName.bind(elisa);

    console.log(getElisasName()); // 'elisa'

    // equivalent
    // PLEASE NOTICE: for simplicity the arguments
    // of fn are ignored
    function bind(fn, object) {

        return function () {

            return fn.apply(object);
        }
    }

}());

