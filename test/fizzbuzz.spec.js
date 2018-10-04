const FizzBuzz = require('../src/fizzbuzz');

describe('FizzBuzz', () => {
    let fizzBuzz;
    beforeEach(() => {
        fizzBuzz = new FizzBuzz(1, 20);
    });
    describe('isMultipleOfThree', () => {
        it('should be true if give a multiple of three', () => {

        });
        it('should be true if give a not multiple of three', () => {

        });
    });
    describe('isMultipleOfFive', () => {
        it('should be true if give a multiple of three', () => {

        });
        it('should be true if give a not multiple of three', () => {

        });
    });
    describe('class properties', () => {
        it('should has min value', () => {

        });
        it('should has max value', () => {

        });
    });
    describe('methods about render', () => {
        it('should render fizz when call renderFizz', () => {

        });
        it('should render fizz when call renderBuzz', () => {

        });
        it('should render fizz when call renderFizzBuzz', () => {

        });
    });

    describe('main method', () => {
        it('should call renderBuzz three times when give 1 to min and 20 to max', () => {

        });
        it('should call renderFizz five times when give 1 to min and 20 to max', () => {

        });
        it('should call renderFizzBuzz one time when give 1 to min and 20 to max', () => {

        });
    });
});
