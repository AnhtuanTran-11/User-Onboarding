describe('User Onboarding App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    const nameInput = () => cy.get('input[name="name"]')
    const emailInput = () => cy.get('input[name="email"]')
    const passwordInput = () => cy.get('input[name="password"]')
    const termsCheckBox = () => cy.get('[type="checkbox"]')
    const submitBtn = () => cy.get('#form')

    describe('Filling out inputs', () => {
        it('Can type name, email, and password', () => {
            nameInput()
            .should('have.value', '')
            .type('Anhtuan')
            .should('have.value', 'Anhtuan')

            emailInput()
            .should('have.value', '')
            .type('anhtuantran@gmail.com')
            .should('have.value', 'anhtuantran@gmail.com')

            passwordInput()
            .should('have.value', '')
            .type('Hello World')
            .should('have.value', 'Hello World')
        })
        
    })

    describe('Checking checkbox', () => {
        it('Can check the checkbox', () => {
            termsCheckBox()
            .check()
        })
    })

    describe('Submitting form data', () => {
        it('Can submit the form data', () => {
            submitBtn()
            .submit()
        })
    })
    describe('Form validation', () => {
        it('Should not submit if any input is empty', () => {
            nameInput()
            .should('have.value', '')
            .type('Anhtuan')
            .should('have.value', 'Anhtuan')

            emailInput()
            .should('have.value', '')
            .type('anhtuantran@gmail.com')
            .should('have.value', 'anhtuantran@gmail.com')

            passwordInput()
            .should('have.value', '')
            
            submitBtn()
            .should('not.be.enabled')
        })
    })
})