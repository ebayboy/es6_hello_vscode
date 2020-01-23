
/*class && attribute */

class Father1 {
    constructor() { }

    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }

    static b() {
        return 1;
    }
}
class Child1 extends Father1 {
    constructor() {
        super();
    }
}

Father1.b()

let test1 = new Child1();
test1.name = 2;
console.log(test1.name); // 2
