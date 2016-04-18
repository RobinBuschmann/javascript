(function () {

    // scopes
    // =================================

    // - js is lexical scoped (static scoped)
    // - scopes defined by functions
    // - an inner for/if block is not another scope

    function a() {
        var var1 = 1;
        let var3 = 5;

        function b() {
            var var2 = 1;

            function c() {

                // all accessible from inside of c()
                var var4 = [var1, var2, var3];
            }

            // var4 => not accessible
        }

        if (var1 === 1) {

            var var5 = 'hello';
            let var7 = 'hey';
        }

        var var6 = var5; // ???
        // var7 => not accessible, that's what let is about ;)
    }

    // the difference between static and dynamic scope
    // -------------------------------

    // ## static (lexical) scope
    // -------------------------------
    // static scope means, that a parent scope for example is
    // accessible where the child scope is defined

    var innerFn;

    function d() {
        var A = 'elisa';

        innerFn = function aLogger() {

            console.log(A);
        }
    }

    d(); // references 'aLogger()' to 'innerFn'
    innerFn(); // logs 'elisa'

    // ## dynamic scope
    // -------------------------------
    // dynamic scope means, that a scope is accessible in
    // which (for example) a function is called

    var innerFn;

    function f() {
        var A = 'elisa';

        innerFn = function () {

            console.log(A);
        }
    }

    function e() {
        var A = 'robin';

        innerFn();
    }

    f(); // references 'aLogger()' to 'innerFn'
    e(); // logs 'elisa', but in a dynamic scoped language it would log 'robin'

}());
