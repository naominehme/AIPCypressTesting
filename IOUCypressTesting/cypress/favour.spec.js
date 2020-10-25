context('Favours Function', () => {
    beforeEach(() => {
        cy.visit('http://iou.coffee/#/')
        cy.viewport(1400,800)
    })
    it('Complete UOM without evidence', () => {
        const email = 'john@smith.com';
        const phone = '0426871815'
        const password = 'test123';
        cy.contains('Sign uo').click({force: true})
        cy.get("[type='email']").type(email)
        cy.get("[type='phone']").type(phone)
        cy.get("[type='password']").type(password)
        cy.contains('This favour has successfully been completed')
    })

    it('Create IOU Successfully', () => {
        const email = 'test@smith.com';
        const password = 'test123';
        const desc = 'test IOU description';
        cy.contains('Log in').click({force: true})
        cy.get("[type='email']").type(email)
        cy.get("[type='password']").type(password)
        cy.contains('Login').click()
        cy.contains('Create Favour').click()
        cy.contains('From').click({force: true})
        cy.contains('test smith').click({force: true})
        cy.contains('To').click({force: true})
        cy.contains('Naomi Nehme').click({force: true})
        cy.contains('Add Rewards').click({force: true})
        cy.contains('🍫').click({force: true})
        cy.get("[type='text']").type(desc)
        cy.contains('Create Favour').click({force: true})
        cy.contains('test owes Naomi for "test IOU description"')      
    })
    it('Create UOM Unsuccessfully without Evidence', () => {
        const desc = 'test UOM description';
        cy.contains('Create Favour').click()
        cy.contains('From').click({force: true})
        cy.contains('Naomi Nehme').click({force: true})
        cy.contains('To').click({force: true})
        cy.contains('John Smith').click({force: true})
        cy.contains('Add Rewards').click({force: true})
        cy.contains('🍫').click({force: true})
        cy.get("[type='text']").type(desc)
        cy.contains('Create Favour').click({force: true})
        cy.contains('Please attach a file to continue')  
    })
})