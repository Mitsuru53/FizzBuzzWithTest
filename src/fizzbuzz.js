class FizzBuzz {
    constructor(min, max) {
        this.min = min;
        this.max = max;
    }
    main () {
        for (let i = this.min; i <= this.max; i ++) {
            if (this.isMultipleOfThree(i) && this.isMultipleOfFive(i)) console.log(this.renderFizzBuzz());
            if (this.isMultipleOfThree(i) && !this.isMultipleOfFive(i)) console.log(this.renderFizz());
            if (!this.isMultipleOfThree(i) && this.isMultipleOfFive(i)) console.log(this.renderBuzz());
            if (!this.isMultipleOfThree(i) && !this.isMultipleOfFive(i)) console.log(i)
        }
    }
    isMultipleOfThree(number) {
        return number % 3 === 0;
    }
    isMultipleOfFive(number) {
        return number % 5 === 0;
    }
    renderFizz() {
        return 'Fizz'
    }
    renderBuzz() {
        return 'Buzz'
    }
    renderFizzBuzz() {
        return 'FizzBuzz'
    }
}

module.exports = FizzBuzz;
