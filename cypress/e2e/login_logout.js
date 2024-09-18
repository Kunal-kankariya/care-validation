
describe("login and logout function",()=>{
    it('verify login functionality', ()=>{
        cy.loginWithCredentials();
    })

    it('verify logout functionality', ()=>{
        cy.visit('/')
        cy.logout();
    })
})