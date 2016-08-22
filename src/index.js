class TestClass {
    constructor(){
        this.val = 10;
    }
    getVal(){
        return this.val;
    }
}

var test = new TestClass();
console.log(test.getVal());
