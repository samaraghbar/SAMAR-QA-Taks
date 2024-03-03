/// <reference types="cypress" />

describe("selectors",() => {

    it("visit website",() => {
        cy.visit("https://www.telerik.com/support/demos");

        cy.get('h1').contains("Demos")
      
        //cy.get('[href="#testing']')
       
        //cy.get("#Conversational-UI")

        
       //cy.get(".TK-Footer-Link").find(".TK-Footer-List-Item").eq(6)

       //cy.get(".TK-Footer-List--inner TK-Footer-List-Horizontal TK-Footer-List-Social")
})

})