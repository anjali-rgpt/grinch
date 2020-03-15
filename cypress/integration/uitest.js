
describe('The Faculty Page Load', function() {
    it('sucessfully loads', function() {
      cy.visit('/') // change URL to match your dev URL
    })

    it('newQuiz visit',function(){
        cy.get('#newQuiz').click()
        cy.visit('/newQuiz')
       
    })

    it('manageQuiz visit',function(){
        cy.get('#manageQuiz').click()
        cy.visit('/manageQuiz')
       
    })

    it('performance visit',function(){
        cy.get('#Performance').click()
        cy.visit('/performance')
       
    })

    it('admin panel visit',function(){
        cy.get('#admin').click()
        cy.visit('/adminCourse')
       
    })

   

  })