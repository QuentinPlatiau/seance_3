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
});