describe('Test Create Animal Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8082/CreateAnimal')
  });

  it('check drop-down for category (create)', () => {
    cy.get('[data-cy=createAnimalCheckCategory').contains('Pies')
    cy.get('[data-cy=createAnimalCheckCategory').contains('Kot');
  })

  it('check drop-down for sex (create)', () => {
    cy.get('[data-cy=createAnimalCheckSex').contains('Samiec')
    cy.get('[data-cy=createAnimalCheckSex').contains('Samica');
  })

  it('check drop-down for size (update)', ()=> {
    cy.get('[data-cy=createAnimalCheckSize').contains('Duży')
    cy.get('[data-cy=createAnimalCheckSize').contains('Normalny')
    cy.get('[data-cy=createAnimalCheckSize').contains('Mały') 
  })

  it('checkIfRequiredElementsExists (create)', () => {
    cy.get('[data-cy=createButton]').should('exist')
    cy.get('[data-cy=createForm]').should('exist')
  })

})
