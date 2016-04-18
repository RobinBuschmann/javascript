(function () {

    // inheritance
    // =================================

    var item = {
        id: 123,
        getId: function () {

            return this.id;
        }
    };

    // inherits from item:
    var creature = Object.create(item);
    creature.species = null;
    creature.getSpecies = function () {
        return this.species;
    };

    // inherits from creature:
    var human = Object.create(creature);
    human.name = 'elisa';
    human.getName = function () {
        return this.name;
    };

    console.log(human.getId !== undefined); // true
    console.log(human.getName !== undefined); // true


    // how is it working?
    // ---------------------------------

    // "When it comes to inheritance, JavaScript only has one construct: objects.
    // Each object has an internal link to another object called its prototype.
    // That prototype object has a prototype of its own, and so on until an
    // object is reached with null as its prototype. null, by definition, has
    // no prototype, and acts as the final link in this prototype chain."

    // source:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain


    // what does it mean?
    // ---------------------------------
    // (__proto__ is no standard)

    var elisa = {name: 'elisa'};
    // elisa.__proto__ links to Object respectively Object.prototype


    // the tree
    // ---------------------------------

    // human => creature => item

    // human.__proto__ links to creature,
    // creature.__proto__ links to item,
    // item.__proto__ links to Object.prototype

    // so if the javascript engine tries to access a member of an object,
    // it firstly checks the object itself. if the member can't be found,
    // it looks up the prototype chain until the member is found or not

    // so if you try to access getId on human, it firstly looks for getId
    // on human itself, after that, it checks creature and after that
    // item


    // ESSENCE
    // ---------------------------------

    // In JavaScript you'll never define a plan (like classes in Java) to
    // create objects. Objects are created directly. So the basis of inheritance
    // or even new instances is a prototype - the directly created object.
    // Possible child objects can derive from the parent through the prototype chain.

    var A = {};

    var B = Object.create(A);

    var C = Object.create(B);

    // C => B => A


}());

