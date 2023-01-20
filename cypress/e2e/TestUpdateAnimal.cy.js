describe('Test Update Animal Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8082/UpdateAnimal')
    });

    it('checkIfRequiredElementsExists (update)', () => {
        cy.get('[data-cy=updateButton]').should('exist')
        cy.get('[data-cy=updateForm]').should('exist')
    })

    it('check drop-down for category (update)', ()=> {
        cy.get('[data-cy=updateAnimalCheckCategory').contains('Pies')
        cy.get('[data-cy=updateAnimalCheckCategory').contains('Kot') 
      })
    
      it('check drop-down for sex (update)', ()=> {
        cy.get('[data-cy=updateAnimalCheckSex').contains('Samiec')
        cy.get('[data-cy=updateAnimalCheckSex').contains('Samica') ;
      })

      it('check drop-down for size (update)', ()=> {
        cy.get('[data-cy=updateAnimalCheckSize').contains('Duży')
        cy.get('[data-cy=updateAnimalCheckSize').contains('Normalny')
        cy.get('[data-cy=updateAnimalCheckSize').contains('Mały') 
      })
      

})
