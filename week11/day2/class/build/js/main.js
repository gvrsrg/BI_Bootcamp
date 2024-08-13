"use strict";
//Classes
//access modifiers
let student2 = {
    name: "John",
    age: 25,
    active: true,
    grade: 90
};
class User {
    constructor(name, age, active) {
        this._name = name;
        this._age = age;
        this._active = active;
    }
    getAge() {
        return this._age;
    }
    get age() {
        return this._age;
    }
    get name() {
        return this._name;
    }
    get active() {
        return this._active;
    }
    set age(age) {
        this._age = age;
    }
    set name(name) {
        this._name = name;
    }
    set active(active) {
        this._active = active;
    }
}
