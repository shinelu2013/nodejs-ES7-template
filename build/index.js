"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TestClass = function () {
    function TestClass(value) {
        _classCallCheck(this, TestClass);

        this.val = value;
    }

    _createClass(TestClass, [{
        key: "getVal",
        value: function getVal() {
            return this.val;
        }
    }]);

    return TestClass;
}();

var a = new TestClass(10);
var b = new TestClass(20);
console.log(a.getVal());
console.log(b.getVal());