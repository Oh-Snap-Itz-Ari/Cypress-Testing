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
      cy.get('.todo-list li') // CSS Selector del listado de tareas
      .should('have.length', 2) // Assertion que valida que haya 2 elementos en el ToDo
    });

    /* El retry ability tiene configurado por defecto los tiempos de espera antes de que arroje como tal 
    el error */
  
  });