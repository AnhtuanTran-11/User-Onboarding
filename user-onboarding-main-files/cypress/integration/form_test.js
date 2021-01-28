describe('User Onboarding App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    const nameInput = () => cy.get('input[name="name"]')
    const emailInput = () => cy.get('input[name="email"]')
    const passwordInput = () => cy.get('input[name="password]')
    const termsCheckBox = () => cy.get('input[name="terms')
    const submitBtn = () => cy.get('button[id=submitBtn]')

})