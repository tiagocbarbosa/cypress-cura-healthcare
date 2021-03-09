describe('Cura Make Appointment', () => {
    it('Visit the URL', () => {
        cy.visit('https://katalon-demo-cura.herokuapp.com/')
    })

    it('Click on Make Appointment', () => {
        cy.get('#btn-make-appointment').click()
    })
})