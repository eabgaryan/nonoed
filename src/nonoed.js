(function(window, undefined) {
    var nonoed = {};

    nonoed.testF = function() {
        return 'test';
    }; 
    window.nonoed = nonoed;
})(window); // для того, чтобы оптимизаторы могли внутри сжать переменные window и undefined