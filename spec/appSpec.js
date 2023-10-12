import { Main } from '../src/app.js';

describe("A suite of test for the demo function of the main class", function() {
    let main = new Main();
    
    it("fizzBuzz function should return 1 when given 1", function() {
        let result = main.fizzByzz(1);

        expect(result).toBe(1);
    });
    it("fizzBuzz function should return 2 when given 2", function() {
        let result = main.fizzByzz(2);

        expect(result).toBe(2);
    });
    it("fizzbuzz function should return fizz when given 3", function() {
        let result = main.fizzByzz(3);

        expect(result).toBe("fizz");
    });
    it("fizzBuzz function should return 4 when given 4", function() {
        let result = main.fizzByzz(4);

        expect(result).toBe(4);
    });
    it("fizzBuzz function should return buzz when given 5", function() {
        let result = main.fizzByzz(5);

        expect(result).toBe("buzz");
    });
    it("fizzBuzz function should return buzz when given 6", function() {
        let result = main.fizzByzz(6);

        expect(result).toBe("fizz");
    });
    it("fizzBuzz function should return buzz when given 7", function() {
        let result = main.fizzByzz(7);

        expect(result).toBe(7);
    });
    it("fizzBuzz function should return buzz when given 8", function() {
        let result = main.fizzByzz(8);

        expect(result).toBe(8);
    });
    it("fizzBuzz function should return buzz when given 9", function() {
        let result = main.fizzByzz(9);

        expect(result).toBe("fizz");
    });
    it("fizzBuzz function should return buzz when given 10", function() {
        let result = main.fizzByzz(10);

        expect(result).toBe("buzz");
    });
    it("fizzBuzz function should return buzz when given 11", function() {
        let result = main.fizzByzz(11);

        expect(result).toBe(11);
    });
    it("fizzBuzz function should return buzz when given 12", function() {
        let result = main.fizzByzz(12);

        expect(result).toBe("fizz");
    });
    it("fizzBuzz function should return buzz when given 13", function() {
        let result = main.fizzByzz(13);

        expect(result).toBe(13);
    });
    it("fizzBuzz function should return buzz when given 14", function() {
        let result = main.fizzByzz(14);

        expect(result).toBe(14);
    });
    it("fizzBuzz function should return buzz when given 15", function() {
        let result = main.fizzByzz(15);

        expect(result).toBe("fizzbuzz");
    });
});
