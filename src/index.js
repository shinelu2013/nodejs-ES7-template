class TestClass {
    constructor(value){
        this.val = value;
    }
    getVal(){
        return this.val;
    }
}

var a = new TestClass(10);
var b = new TestClass(20);
console.log(a.getVal());
console.log(b.getVal());
