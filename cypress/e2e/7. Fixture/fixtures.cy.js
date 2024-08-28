// Los Fixture permite cargar un set de Datos

describe('Fixtures Demo', function(){
    
    beforeEach(function(){
        cy.visit("https://www.saucedemo.com/");
        cy.fixture("sauceCredentials") // Se busca el archivo json que se creó desde la carpeta Fixtures
        .then(credentials => {
            this.credentials = credentials; // Permite ingresar desde cualquier desde cualquier it a las Credentials
        })
    });

    it('Standard Username', function(){
        cy.get('[data-test="username"]').type(this.credentials.standardUser);
        cy.get('[data-test="password"]').type(this.credentials.systemPassword);
        cy.get('[data-test="login-button"]').click();
        cy.get('.title').should('contain.text','Products'); // Valida que se muestre el Título tras iniciar sesión
    });

    it('Incorrect Username', function(){
        cy.get('[data-test="username"]').type(this.credentials.wrongUsername);
        cy.get('[data-test="password"]').type(this.credentials.wrongPassword);
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('contain.text','Epic sadface: Username and password do not match any user in this service'); // Valida que se muestre el Mensaje de Error tras tratar de iniciar sesión
    });

    it('Incorrect Password', function(){
        cy.get('[data-test="username"]').type(this.credentials.standardUser);
        cy.get('[data-test="password"]').type(this.credentials.wrongPassword);
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('contain.text','Epic sadface: Username and password do not match any user in this service'); // Valida que se muestre el Mensaje de Error tras tratar de iniciar sesión
    });

    it('Locked Username', function(){
        cy.get('[data-test="username"]').type(this.credentials.lockedUsername);
        cy.get('[data-test="password"]').type(this.credentials.systemPassword);
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('contain.text','Epic sadface: Sorry, this user has been locked out.'); // Valida que se muestre el Mensaje de Error tras tratar de iniciar sesión
    });

});