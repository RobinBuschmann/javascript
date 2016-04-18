(function () {

    // hoisting
    // =================================

    // hosting means, that all declarations will be internally pushed to the
    // top of the specific scope by the js engine

    function thisIsAllValidCode() {

        console.log(c); // ReferenceError
        console.log(a); // undefined
        console.log(b); // undefined
        console.log(someFunction()); // 'elli'
        console.log(fn()); // TypeError

        var a;
        var b = 5;
        // function expression
        var fn = function() {
            return 'robin';
        };
        // function declaration
        function someFunction() {
            return 'elli';
        }
    }

    // Lets consider the sense of hoisting based on an example
    // and compared to Java:

    // we assume that the following is a java-class
    class ItemsService {
        // ###############
        private items;
        // ###############
        ItemsService() {
            this.items = this.prepareItems();
        }
        // ###############
        public getItems() {
            return this.items;
        }
        // ###############
        public addItem(item) {
            this.items.push(item);
        }
        // ###############
        private prepareItems() {
            // ...
        }
        // ###############
    }

    // # = grey area

    // in js there are no classes, we only have functions;
    // functions in js are similarly executed like methods in java
    // - from top to bottom;

    // lets assume the order of function definitions in the code
    // do matter and we tried to take care of this order:

    var itemService;

    (function() {

        itemService = {
            getItems: function () {
                return items;
            },
            addItem: function (item) {
                items.push(item);
            }
        };

        function prepareItems() {
            // ... so, everything is fine?
            // apparently not, because prepareItems()
            // calls doSomethingElse(), which is
            // defined on the bottom of the scope;
            // if js wouldn't hoist this function
            // this would throw an error
            doSomethingElse();
        }

        // prepareItems() is called after its appearance ...
        var items = prepareItems();

        function doSomethingElse() {
        }
    }());


    // we would use this service like this
    itemService.addItem('elisa');


}());

