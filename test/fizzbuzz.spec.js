const FizzBuzz = require('../src/fizzbuzz');

describe('FizzBuzz', () => {
    let fizzBuzz;
    beforeEach(() => {
        fizzBuzz = new FizzBuzz(1, 20);
    });
    describe('isMultipleOfThree', () => {
        it('should be true if give a multiple of three', () => {
            expect(fizzBuzz.isMultipleOfThree(3)).toBe(true);
        });
        it('should be true if give a not multiple of three', () => {
            expect(fizzBuzz.isMultipleOfThree(4)).toBe(false);
        });
    });
    describe('isMultipleOfFive', () => {
        it('should be true if give a multiple of three', () => {
            expect(fizzBuzz.isMultipleOfFive(5)).toBe(true);
        });
        it('should be true if give a not multiple of three', () => {
            expect(fizzBuzz.isMultipleOfFive(6)).toBe(false);
        });
    });
    describe('class properties', () => {
        it('should has min value', () => {
            expect(fizzBuzz.min).toBe(1);
        });
        it('should has max value', () => {
            expect(fizzBuzz.max).toBe(20);
        });
    });
    describe('methods about render', () => {
        it('should render fizz when call renderFizz', () => {
            expect(fizzBuzz.renderFizz()).toBe('Fizz');
        });
        it('should render fizz when call renderBuzz', () => {
            expect(fizzBuzz.renderBuzz()).toBe('Buzz');
        });
        it('should render fizz when call renderFizzBuzz', () => {
            expect(fizzBuzz.renderFizzBuzz()).toBe('FizzBuzz');
        });
    });

    describe('main method', () => {
        it('should call renderBuzz three times when give 1 to min and 20 to max', () => {
            const mockRenderBuzz = jest.fn();
            mockRenderBuzz.mockImplementation(() => 'Buzz');
            fizzBuzz.renderBuzz = mockRenderBuzz;
            fizzBuzz.main();
            expect(fizzBuzz.renderBuzz).toHaveBeenCalledTimes(3);
        });
        it('should call renderFizz five times when give 1 to min and 20 to max', () => {
            const mockRenderFizz = jest.fn();
            mockRenderFizz.mockImplementation(() => 'Fizz');
            fizzBuzz.renderFizz = mockRenderFizz;
            fizzBuzz.main();
            expect(fizzBuzz.renderFizz).toHaveBeenCalledTimes(5);
        });
        it('should call renderFizzBuzz one time when give 1 to min and 20 to max', () => {
            const mockRenderFizzBuzz = jest.fn();
            mockRenderFizzBuzz.mockImplementation(() => 'FizzBuzz');
            fizzBuzz.renderFizzBuzz = mockRenderFizzBuzz;
            fizzBuzz.main();
            expect(fizzBuzz.renderFizzBuzz).toHaveBeenCalledTimes(1);
        });
    });
});
