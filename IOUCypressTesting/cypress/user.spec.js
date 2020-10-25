context('Users Function', () => {
    beforeEach(() => {
        cy.visit('http://iou.coffee/#/')
        cy.viewport(1400,800)
    })
    it('Check for Unuccessful Login with Correct Credentials', () => {
        const email = 'john@smith.com';
        const password = 'test1234';
        cy.contains('Log in').click({force: true})
        cy.get("[type='email']").type(email)
        cy.get("[type='password']").type(password)
        cy.contains('Login').click()
        cy.contains('Unauthorised credentials')
    })
    it('Check for Successful Login with Correct Credentials', () => {
        const email = 'john@smith.com';
        const password = 'test123';
        cy.contains('Log in').click({force: true})
        cy.get("[type='email']").type(email)
        cy.get("[type='password']").type(password)
        cy.contains('Login').click()
        cy.contains('Filter By Rewards').click({force: true})
        cy.contains('Welcome Back John')
        cy.contains('Log Out').click({force: true}) 
    })

    it('Check for Unsuccessful Registration with incorrect Format', () => {
        const email = 'john@smith.com';
        const phone = '0426871815'
        const password = 'test123';
        cy.contains('Sign up').click({force: true})
        cy.get("[type='email']").type(email)
        cy.get("[type='phone']").type(phone)
        cy.get("[type='password']").type(password)
        cy.contains('Account with that email already exists')
    })

})