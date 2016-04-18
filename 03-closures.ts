
(function () {

    // closures
    // =================================

    function createCounter() {
        var count = 0;

        // closure
        return function () {

            console.log(count++);
        }
    }

    var counter = createCounter();

    counter(); // logs 0
    counter(); // logs 1
    counter(); // logs 2

    // we learned, that js is lexical scoped,
    // so our counter has access to variable 'count'
    // and can change 'count'

    var anotherCounter = createCounter();

    anotherCounter(); // logs ??? what do you think?

}());

