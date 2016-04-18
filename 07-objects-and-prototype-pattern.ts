
(function () {

    // objects and prototype pattern
    // =================================

    // we already learned in 'types' how to create an object

    // since there are no classes in js, we define and create
    // objects directly like this:
    var human = {

        name: '',

        sayMyName: function() {

            console.log(this.name);
        }
    };

    // (this is also called prototype pattern)

    human.name = 'elisa';
    human.sayMyName(); // logs 'elisa'

    // classes in java
    // ---------------------------------

    // in java you firstly have to create a "construction plan" like:
    class Human {

        public name;

        public sayMyName() {
            console.log(this.name);
        }
    }

    // from this "construction plan" you can create objects
    var human2 = new Human();

    human2.name = 'robin';
    human2.sayMyName(); // logs 'robin'


    // classes in javascript ?
    // ---------------------------------

    // such a plans/classes like in java are not existing on javascript
    // neither in es5 nor in the new javascript version,
    // you always create objects directly.


    // create new instances from existing objects in javascript
    // ---------------------------------

    // But it is indeed possible to creating new instances of an object.
    // Therefor we use Object.create(..) which was introduced in ???

    var bob = Object.create(human);

    // We will learn in chapter "this", how this is internally working.


    // modification
    // ---------------------------------

    // objects can be extended and modified like

    var obj = {};

    obj.test = '324234';
    obj['test2'] = 123213;
    obj.testFn = function () {

    };
    obj['testFn2'] = function () {

    };

    // can also be overridden
    obj.testFn = function () {

    };

    // iterate over object properties
    // ---------------------------------

    for(var key in obj) {

        // only the own properties, not the inherited once
        if(obj.hasOwnProperty(key)) {

            key; // name of members
            obj[key]; // values
        }
    }


    // Please check defineProperty for further information
    // ---------------------------------

    var name = 'elisa';
    Object.defineProperty(obj, 'name', {
        get: function() { return name; },
        set: function(newValue) { name = newValue; },
        enumerable: true,
        configurable: true
    });

    console.log(obj.name); // 'elisa'
    obj.name = 'robin';
    console.log(obj.name); // 'robin'

    // Object.defineProperty()

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty




}());

