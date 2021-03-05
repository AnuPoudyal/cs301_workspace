//functions_tests.js
// eslint-disable-next-line strict
"use strict";

const assert = require("assert");
// eslint-disable-next-line quotes
const myFunctions = require('./my_functions.js');


describe("checkPrime", function () {
    it("37 is prime", function () {
        assert.strictEqual(myFunctions.checkPrime(37), true);
    });
    it(" 77 is not prime", function () {
        assert.strictEqual(myFunctions.checkPrime(77), false);
    });
});


