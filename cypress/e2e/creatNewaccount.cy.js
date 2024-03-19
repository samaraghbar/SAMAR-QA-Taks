// <reference types = "cypreess" />
describe("creat new account", ()=> {
    
    it('', () => {     cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    cy.get('span').contains("Create New Customer Account").should("be.visible")
    cy.get('.legend').contains("Personal Information").should("be.visible")
    cy.get('span').contains("First Name").should("be.visible")
    cy.get('#firstname').should("be.visible")
    cy.get('span').contains("Last Name").should("be.visible")
    cy.get('#lastname').should("be.visible")
 
    cy.get('span').contains("Sign-in Information").should("be.visible")
    cy.get('.label').contains("Email").should("be.visible")
    cy.get('#email_address').should("be.visible")
    cy.get('.label').contains("Password").should("be.visible")
    cy.get('#password').should("be.visible")
    cy.get('#password-strength-meter').should("be.visible")
    cy.get('#password-confirmation').should("be.visible")
    cy.get('.label').contains("Confirm Password").should("be.visible")
    cy.get('span').contains("Create an Account").should("be.visible")

        
    });

    it('', ()=>{
         const emailNum = math.floor(math.random()*1000);
        cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
        cy.get('#firstname').type("samar")
        cy.get('#lastname').type("aghbar")
        cy.get('#email_address').type("samar-aghbar"+ Emailnum +"@hotmail.com")
        cy.get('#password').type("Madhatter@123")
        cy.get('#password-confirmation').type("Madhatter@123")
        cy.get('span').contains("Create an Account").click()

       //cy.visit('https://magento.softwaretestingboard.com/customer/account/')
       //cy.get('.page-title').contains("My Account").should("be.visible")


    })
   
})