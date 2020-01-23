
/* object */
const person = {
    _name: 'rose',
    sayHi() {
        console.log("Hi");
    },
    set(value) {
        this._name = value
    },
    get() {
        return this._name
    }
}

console.log("get: ", person.get())

person.set('new rose')

console.log("get new: ", person.get())

