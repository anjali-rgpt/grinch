describe('Testing Admin Functions', function() {
    it('successfully loads', function() {
      cy.visit('/') // change URL to match your dev URL
      cy.visit('/adminCourse')
      
    })

    it('select semester', function(){
        cy.get('#semdrop').select('8')
        cy.get("#addcourse").click()
    })

    it('adds new course',function(){
        cy.get('#coursecode').type('15CSE444')
        cy.get('#coursename').type('New Course Test')
        cy.get('#credits').type(4)
        cy.get('#donebutton').click()
        
    })

    it('validates addition of course', function(){
        cy.get('#view').click()
        cy.get('p').should('contain', '15CSE444')
        cy.get('p').should('contain', 'New Course Test')
    })

    it('deletes current course', function(){
        cy.get("#alert").click()
        cy.get('p').should('not.contain', 'New Course Test')
    })


})