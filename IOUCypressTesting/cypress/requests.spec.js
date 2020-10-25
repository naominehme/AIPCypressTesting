context('Requests Function', () => {
    beforeEach(() => {
        cy.visit('http://iou.coffee/#/')
        cy.viewport(1400,800)
    })
    it('Check for Authentication to claim reward', () => {
        cy.contains('Home').click()
        cy.contains('Make it mine!').click()
        cy.contains('You need to be logged in to complete this action. Do you want to go to the login page?')
    })
    it('Search Requests with Keyword', () => {
        const keyword = 'homework';
     cy.get("[type='text']").type(keyword)
        cy.contains('I need help with my maths homework!')
        cy.contains ('I need help with english homework')
    })
    
    it('Filter Requests by Reward', () => {
        const email = 'john@smith.com';
        const password = 'test123';
        cy.contains('Log in').click({force: true})
        cy.get("[type='email']").type(email)
        cy.get("[type='password']").type(password)
        cy.contains('Login').click()
        cy.contains('Filter By Rewards').click({force: true})
        cy.contains('Coffee')
        cy.contains('Log Out').click({force: true}) 
    })
})