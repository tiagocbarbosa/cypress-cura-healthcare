describe('Cura Make Appointment', () => {
    it('Visit the URL', () => {
        cy.visit('https://katalon-demo-cura.herokuapp.com/')
    })

    it('Click on Make Appointment', () => {
        cy.get('#btn-make-appointment').click()
        cy.get('#txt-username').type('John Doe')
        cy.get('#txt-password').type('ThisIsNotAPassword')
        cy.get('#btn-login').click()
    })
})