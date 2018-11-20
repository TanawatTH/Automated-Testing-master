const libs = require('../../src/fizzbuzz')
describe('fizzbuzz',()=>{
    it('should return 1 if number is 1',() =>{
        const number = 1;
        const result = libs.fizzbuzz(number);
        expect(result).toBe(1); 
    })
    it('should return 2 if number is 2',() =>{
        const number = 2;
        const result = libs.fizzbuzz(number);
        expect(result).toBe(2); 
    })
    it('should return Fizz if number is 3',() =>{
        const number = 3;
        const result = libs.fizzbuzz(number);
        expect(result).toBe("Fizz"); 
    })
    it('should return 4 if number is 4',() =>{
        const number = 4;
        const result = libs.fizzbuzz(number);
        expect(result).toBe(4); 
    })
    it('should return Buzz if number is 5',() =>{
        const number = 5;
        const result = libs.fizzbuzz(number);
        expect(result).toBe("Buzz"); 
    })
    it('should return Fizz if number is 6',() =>{
        const number = 6;
        const result = libs.fizzbuzz(number);
        expect(result).toBe("Fizz"); 
    })
    it('should return 7 if number is 7',() =>{
        const number = 7;
        const result = libs.fizzbuzz(number);
        expect(result).toBe(7); 
    })
    it('should return 8 if number is 8',() =>{
        const number = 8;
        const result = libs.fizzbuzz(number);
        expect(result).toBe(8); 
    })
    it('should return Fizz if number is 9',() =>{
        const number = 9;
        const result = libs.fizzbuzz(number);
        expect(result).toBe("Fizz"); 
    })
    it('should return Buzz if number is 10',() =>{
        const number = 10;
        const result = libs.fizzbuzz(number);
        expect(result).toBe("Buzz"); 
    })
    it('should return 11 if number is 11',() =>{
        const number = 11;
        const result = libs.fizzbuzz(number);
        expect(result).toBe(11); 
    })
    it('should return Fizz if number is 12',() =>{
        const number = 12;
        const result = libs.fizzbuzz(number);
        expect(result).toBe("Fizz"); 
    })
    it('should return 13 if number is 13',() =>{
        const number = 13;
        const result = libs.fizzbuzz(number);
        expect(result).toBe(13); 
    })
    it('should return 14 if number is 14',() =>{
        const number = 14;
        const result = libs.fizzbuzz(number);
        expect(result).toBe(14); 
    })
    it('should return FizzBuzz if number is 15',() =>{
        const number = 15;
        const result = libs.fizzbuzz(number);
        expect(result).toBe("FizzBuzz"); 
    })
    it('should return FizzBuzz if number is 30',() =>{
        const number = 30;
        const result = libs.fizzbuzz(number);
        expect(result).toBe("FizzBuzz"); 
    })
    it('should return Buzz if number is 40',() =>{
        const number = 40;
        const result = libs.fizzbuzz(number);
        expect(result).toBe("Buzz"); 
    })
    it('should return Fizz if number is 66',() =>{
        const number = 66;
        const result = libs.fizzbuzz(number);
        expect(result).toBe("Fizz"); 
    })
    it('should return Fizz if number is 87',() =>{
        const number = 87;
        const result = libs.fizzbuzz(number);
        expect(result).toContain("Fizz"); 
    })
    it('should return Buzz if number is 100',() =>{
        const number = 100;
        const result = libs.fizzbuzz(number);
        expect(result).toBe("Buzz"); 
    })
})