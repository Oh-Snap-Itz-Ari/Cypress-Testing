// Los hooks permiten setear condiciones antes o después de ejecutar un test

/* 

El orden siempre normalmente es el siguiente
  1. before () 
  2. beforeEach ()
  3. Test Execution
  4. afterEach ()
  5. after ()

Donde, los before se ejecutan antes de la ejecución de un test, y los after siempre después (El before y el 
after solo se ejecutan una vez, mientras que los beforeEach y el afterEach se ejecutan n cantidad de veces 
de acuerdo a la cantidad de test)

*/

describe ('Demo de hooks', function() {

  before (function(){
    cy.log('Before'); // Se ejecuta solo una vez en la prueba automatizada
  });

  beforeEach (function(){
    cy.log('Before Each'); // Se ejecuta n cantidad de veces, de acuerdo a cada test case (it)
  });

  it('Should be Test #1', function(){
    console.log('Test #1');
  });

  it('Should be Test #2', function(){
    console.log('Test #2');
  });

  it('Should be Test #3', function(){
    console.log('Test #3');
  });

  it.skip('Should be Test #4', function(){
    console.log('Test #4'); // Si se añade el .skip después del it no ejecuta el test case
  });

  /* 

  it.only('Should be Test #5', function(){
    console.log('Test #5') // Si se añade el .only después del it ejecuta solo este test case
  })
  
  */

  

  afterEach (function(){
    cy.log('After Each'); // Se ejecuta n cantidad de veces, de acuerdo a cada test case (it)
  });
  
  after (function(){
    cy.log('After'); // Se ejecuta solo una vez en la prueba automatizada
  });

  
})



