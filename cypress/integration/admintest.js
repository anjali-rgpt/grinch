describe('Testing Admin Functions', function() {
    it('successfully loads', function() {
      cy.visit('/') // change URL to match your dev URL
      cy.visit('/adminCourse')
      
    })

    it('adds new course',function(){
        cy.get('#coursecode').type(question)
        cy.get('#optiona').type(optiona)
        cy.get('#optionb').type(optionb)
        cy.get('#optionc').type(optionc)
        cy.get('#optiond').type(optiond)
        cy.get('#correct').type(correct)
        cy.get('#points').type(points)
        cy.get('#addbutton').click()
        cy.get('p').should('contain', question)
       
    })