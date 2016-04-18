(function () {

    // constructor functions
    // =================================

    // You probably know of the "new"-syntax in javascript. So it is
    // indeed possible to create new objects/instances from a plan-like
    // construct, but it does not work like java creates instances of classes.
    // Even if constructor functions look very similar to classes

    // keep in mind: a constructor function is a function like
    // any other in js. Creating objects through constructor functions
    // is only a design pattern


    // example:
    // ---------------------------------

    function Human(name, age) {

        this.name = name;
        this.age = age;
    }

    // every function has a prototype member. this prototype member
    // has a member called 'constructor' which
    // holds a reference pointing in this case to Human.
    // so you could imagine it like:
    // Human.prototype = { constructor: Human }

    Human.prototype.getName = function () {
        return this.name;
    };

    Human.prototype.getAge = function () {
        return this.age;
    };


    // create instance
    // ---------------------------------

    var elisa = new Human('elisa', 24);


    // Ok, whats going on here?
    // ---------------------------------

    // 1. a new object is created
    // 2. the prototype chain is set to Human.prototype
    // 3. the constructor function is called, the newly created object is passed as context

    // So you see, that Human has nothing to to with a class. It only holds the
    // prototype object, through its prototype member and it is indeed the
    // constructor function.


    // our own "createObject"-function and the constructor call in detail
    // ---------------------------------

    // To explain, how the constructor call is working,
    // we create our own createObject-function, to see
    // in detail what is really happening when "new" is used:

    function createObject(constructorFn) {

        // retrieve parameters for constructor
        var params = Array.prototype.slice.call(arguments, 1);

        // creates new object
        var obj = {};

        // set prototype chain and constructor
        // NOTICE: setPrototypeOf or __proto__ is very slow and
        //		 should not be used for production
        if (Object.setPrototypeOf) {
            Object.setPrototypeOf(obj, constructorFn.prototype);
        } else if (obj.__proto__) {
            obj.__proto__ = constructorFn.prototype;
            // __proto__ is deprecated
        } else {
            throw new Error('No way to set prototype chain afterwards');
        }

        // call constructor function, passing created (as context) obj and parameters
        // (Do you remember in "this" whats happening here ...? No? Then
        // go back to chapter "this")
        constructorFn.apply(obj, params);

        return obj;
    }


    // little recap
    // ---------------------------------

    // Is it clear? Let's recap the constructor function stuff and compare it
    // to what we've learned in "inheritance":

    // We created an object in "inheritance" like:
    var human = {
        getName: function () { /* ... */
        }
    };

    // When defining getName on Human.prototype we did nearly the same
    Human.prototype.getName = function () { /* */
    };
    // except that the object itself did already exist:
    Human.prototype;

    // After an instance is created through new Human(..), the newly
    // created object is linked to Human.prototype through the
    // prototype chain.


    // prototype pattern vs. constructor pattern
    // ---------------------------------

    // Lets create identical human objects through the prototype pattern
    // and the constructor pattern and compare:

    // # prototype pattern:

    var human = {
        sayHello: function () {
            console.log('hello');
        }
    };

    // # constructor pattern:

    function Human() {
    }

    Human.prototype.sayHello = function () {
        console.log('hello');
    };

    // create instances:

    var elisa = Object.create(human); // elisa is linked to human
    var robin = new Human(); // robin is linked to Human.prototype

    // that means we can also do this:

    var nelly = Object.create(Human.prototype);
    // but constructor functions Human is not called

    // this also means that this
    var obj = {};
    // is the same as:
    var obj = Object.create(Object.prototype);
    // or:
    var obj = new Object();


    // constructor pattern and inheritance
    // ---------------------------------

    function Creature(species) {

        this.species = species;
    }

    Creature.prototype.getSpecies = function () {

        return this.species;
    };

    // inheritance is done by overriding the Humans
    // prototype object with a newly created object,
    // which is linked to Creatures prototype:

    Human.prototype = Object.create(Creature.prototype);

    // (this can be done before the function Human is defined
    // because of hoisting, you remember?)

    // what about the constructor call of the parent?

    function Human(name) {

        // super call!
        Creature.call(this, 'human');

        this.name = name;
    }

    Human.prototype.getName = function () {

        return this.name;
    };

    // constructor is broken:

    // This breaks the constructor property of the Human.prototype,
    // because its no longer the original Human.prototype object,
    // but the newly created object linked to Creatures prototype
    // So what is referenced with Human.prototype.constructor now?
    // Creature, of course!


    // shadowing / overriding
    // ---------------------------------

    function Vehicle() {}
    Vehicle.prototype.getVelocity = function () { /* ... */};

    Car.prototype = Object.create(Vehicle.prototype);
    function Car() {}
    Car.prototype.getVelocity = function () { /* ... */};


    // Another version of createObject
    // ---------------------------------

    function createObject(constructor) {
        var params = Array.prototype.slice.call(arguments, 1);

        // creates new object and links it to constructor.prototype
        var obj = Object.create(constructor.prototype);

        // call constructor function, passing created (as context) obj and parameters
        constructor.apply(obj, params);

        return obj;
    }


    // Bad practise
    // ---------------------------------


    function Human2(name) {

        this.name = name;

        this.getName = function () {

            return this.name;
        }
    }

    console.log(new Human2('elisa').getName === new Human2('robin').getName); // false
    console.log(new Human('elisa').getName === new Human('robin').getName); // true

}());

