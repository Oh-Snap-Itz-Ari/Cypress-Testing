describe ('Location Demo', function (){

    beforeEach(function () {
      cy.visit('https://www.saucedemo.com/');
    });

    it('Should have Tittle "Swag Labs"', function(){
      cy.title().should('eq', 'Swag Labs'); // Valida que el título sea el de "Swag Labs"
    });

    it('URL Should be "https://www.saucedemo.com/', function (){
      cy.url().should('eq', 'https://www.saucedemo.com/'); // Valida que la URL sea la especificada
    });

    it('Should use "HTTPS"', function (){
      cy.location('protocol').should('contains', 'https'); // Valida que la URL cuente con el protocolo HTTPS
    });

    it('Should have Hostname "www.saucedemo.com"', function (){
      cy.location('hostname').should('eq', 'www.saucedemo.com'); // Valida que el hostname sea "www.saucedemo.com"
    });

    it('Should redirect to "Inventory"', function (){
      cy.get('[data-test = "username"]').type('standard_user'); // Buscar el placeholder y digitar el "Usuario" (Cypress prioriza el atributo de tipo data-test antes que los demás)
      cy.get('[data-test = "password"]').type('secret_sauce'); // Buscar el placeholder y digitar la "Contraseña"
      cy.get('[data-test = "login-button"]').click();
      cy.location('pathname').should('eq', '/inventory.html'); // Valida que después del hostname cuente con el elemento inventory.html
    });

  });