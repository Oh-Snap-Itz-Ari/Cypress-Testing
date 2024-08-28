describe ('Sesión de retry-ability', function (){

    // Hook Before Each 
    beforeEach(function(){
      cy.visit('http://localhost:8888'); // Entra siempre a esta página antes de la ejecución de los TC
      cy.get('.new-todo') // Obtiene el elemento del DOM (CSS Selector)
      .type('Todo-A{enter}') // Tarea de prueba (Escribir "Todo-A" y dar enter)
      .type('Todo-B') 
      .type('{enter}')
    });
  
    it('Debe crear 2 items', () => {
      cy.get('.todo-list li', {timeout:20000}) // CSS Selector del listado de tareas, se le añade el Timeout para que tenga hasta 20 segundos buscando este elemento (Default 4 segundos)
      .should('have.length', 2) // Assertion que valida que haya 2 elementos en el ToDo
    });

    it('Debe contener el texto indicado', () => {
      cy.get('.todo-list li') // CSS Selector del listado de tareas
      .should('have.length', 2) // Assertion que valida que haya 2 elementos en el ToDo
      .and($li => { //And es un alias para no volver a escribir should, además, esto permite iterar entre los li
        expect($li.get(0).textContent, 'First-Item').to.equal('Todo-A') // Permite navegar entre los elementos del li y comparar su contenido
        expect($li.get(1).textContent, 'Second-Item').to.equal('Todo-B')
      }) 
    });

    /* No todos los comandos son reintentados o cuentan con esta función, solo los que hacen Query o intentan
    buscar elementos en el DOM (.find, .contains) */

    /* Si queremos aumentar el tiempo por defecto (4000 - 4 segundos) debemos de ejecutar un comando especial
    al momento de querer correr el proyecto (npm run cy:open --defaultCommandTimeout=10000) En este caso,
    se aplicarian 10 segundos */
  
  })