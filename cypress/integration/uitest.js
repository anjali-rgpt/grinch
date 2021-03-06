
describe('Testing Quiz Management', function() {
    it('successfully loads', function() {
      cy.visit('/') // change URL to match your dev URL
      cy.visit('/manageQuiz')
    })

    it('inputs values into fields',function(){
        cy.get('#question').type('question')
        cy.get('#optiona').type("optiona")
        cy.get('#optionb').type("optionb")
        cy.get('#optionc').type("optionc")
        cy.get('#optiond').type("optiond")
        cy.get('#correct').type("optiond")
        cy.get('#points').type('3')
        cy.get('#addbutton').click()
        cy.get('p').should('contain', "question")
       
    })
    
    it('tests checkbox',function(){
        cy.get('[type="checkbox"]').check() //check
        cy.get('[type="checkbox"]').uncheck() //uncheck
    })
    
    it('deletes question',function(){
        cy.get('.buttons>div').last().click()
        cy.get('p').should('not.contain',"question")
    
    })

   

  })