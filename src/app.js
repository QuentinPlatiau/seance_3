export class Main {
    fizzByzz(number) {
        if(this.isMultipleOfFive(number) && this.isMultipleOfThree(number)) return "fizzbuzz";
        if(this.isMultipleOfThree(number)) return "fizz";
        if(this.isMultipleOfFive(number)) return "buzz";    
        return number;
    }

    isMultipleOfThree(number) {
        return number%3 === 0;
    }

    isMultipleOfFive(number) {
        return number%5 === 0;
    }
};
