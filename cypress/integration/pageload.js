

describe('Loading the New Quiz page',function(){
    it('navigating to the index page', function(){
        cy.visit('/')
    })

    it('clickbutton', function(){
        cy.get('#newQuiz').click()   
            
    })

    it('navigating to newQuiz',function(){
        cy.visit('/newQuiz')
    })
})

describe('Loading the Manage Quiz page',function(){
    it('navigating to the index page', function(){
        cy.visit('/')
    })

    it('clickbutton', function(){
        cy.get('#manageQuiz').click()   
            
    })

    it('navigating to newQuiz',function(){
        cy.visit('/manageQuiz')
    })
})