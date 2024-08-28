let add = (a,b) => a + b;
let subtract = (a,b) => a - b;
let divide = (a,b) => a / b;
let multiply = (a,b) => a * b;

// Describe o Context => Nos permiten definir un grupo de test (suite), agrupar test

describe('Unit testing for our dummy aplication', () => {

  context('Math with positive numbers', () => {
    
    // It - Specify (Nos permite definir test cases individuales)

    it('Should add positive numbers', () => { // Test 1
      expect (add(1,2)).to.eq(3); // Se añaden los valores y el resultado esperado, en este caso 3
    }); 

    it('Should subtract positive numbers', () => { // Test 2
      expect (subtract(4,2)).to.eq(2);
    }); 

    it('Should divide positive numbers', () => { // Test 3
      expect (divide(8,2)).to.eq(4);
    }); 

    it('Should multiply positive numbers', () => { // Test 4
      expect (multiply(5,5)).to.eq(25);
    }); 

  });

  context('Math with decimal numbers', () => {
    
    it('Should add decimal numbers', () => { // Test 1
      expect (add(2.2,2.2)).to.eq(4.4);
    }); 

    it('Should subtract decimal numbers', () => { // Test 2
      expect (subtract(4.4,2.2)).to.eq(2.2);
    }); 

  });

});