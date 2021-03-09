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

    it('Make Appointment', () => {
        cy.get('#combo_facility').select('Hongkong CURA Healthcare Center')
        cy.get('#chk_hospotal_readmission').click()
        cy.get('#radio_program_medicaid').click()
        cy.get('#txt_visit_date').type('08/03/2021')
        cy.get('#txt_comment').type('My first appointment')
        cy.get('#btn-book-appointment').click()
    })

    it('Verify Appointment', () => {
        cy.get('h2').contains('Appointment Confirmation')
        cy.get('#comment').contains('My first appointment')
    })
})