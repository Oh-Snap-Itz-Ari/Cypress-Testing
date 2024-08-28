// Se almacena los datos que se van a usar en el test

let username = "standard_user"; 
let password = "secret_sauce";

describe('Locators in Cypress', function(){
    
    beforeEach(function(){
        cy.visit("https://www.saucedemo.com/");
    });

    it('Get Method', function(){
        cy.get("#user-name").type(username);
        cy.get("input#password").type(password);
        cy.get("[data-test=login-button]").click();
    });

    it('Eq - First - and Last Methods', function(){
        cy.get('input').first().type(username); // Busca todos los inputs que hay y selecciona el primer elemento
        cy.get('input').eq(1).type(password); // Ingresa al segundo input que hay dentro de la vista de inicio de sesión
        cy.get('input').last().click(); // Busca y da click en el último elemento que hay de tipo Input (Botón)
    });

    it('Filter Method', function(){
        cy.get('input').filter('[type="text"]').type(username); // Busca y filtra entre los "Input" el de Tipo Text (Username)
        cy.get('input').filter('[type="password"]').type(password); // Busca y filtra entre los "Input" el de Tipo Password
        cy.get('input').filter('[type="submit"]').click(); // Busca y da click en el último elemento que hay de tipo Submit (Login Button)
    });

    it('Find Method', function(){
        cy.get('form').find('input').first().type(username); // Busca y filtra el primer elemento entre los inputs que estan dentro del elemento "Form"
        cy.get('form').find('input').eq(1).type(password); // Busca y filtra el segundo elemento entre los inputs que estan dentro del elemento "Form"
        cy.get('form').find('input').last().click(); // Busca y filtra el último elemento entre los inputs que estan dentro del elemento "Form"
    });

    it('Find Method', function(){
        cy.get('form').find('input').first().type(username); // Busca y filtra el primer elemento entre los inputs que estan dentro del elemento "Form"
        cy.get('form').find('input').eq(1).type(password); // Busca y filtra el segundo elemento entre los inputs que estan dentro del elemento "Form"
        cy.get('form').find('input').last().click(); // Busca y filtra el último elemento entre los inputs que estan dentro del elemento "Form"
    });

    it('Parent Method', function(){
        cy.get('form').parent().should('have.class', 'login-box') // Busca el elemento padre al que pertenece el Form (Login-Box), y hace la comparativa
    });

});