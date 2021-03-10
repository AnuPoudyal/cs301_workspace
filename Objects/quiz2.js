"use strict";
let person1={
    name: "Allen",
    age: 23,
    employed: true,
    }
    let person2 = {
    name: "Allen",
    age: 23,
    employed: true,
    }
    console.log(person1 === person2);
    person1.age = 35;
    console.log(person2.age);
    person2.salary = 5000;
    console.log(person1.salary);