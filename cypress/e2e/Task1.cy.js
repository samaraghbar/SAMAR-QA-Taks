/// reference types="cypress" />

describe("task1", ()=> {

    it("visit conduit", ()=> {
    cy.visit("/");
    cy.visit("/#/register")

    })
})

it("varify conduit avaliability at header", ()=> {
    cy.visit("/");
    cy.visit("/#/register")
    cy.get(".navbar-brand");

})

 it("varify sign up and homee links avaliability", ()=> {
    cy.visit("/");
    cy.visit("/#/register")
    cy.get(".nav-item").first();
    cy.get('[href="#/register"]');
})

it("varify body(sign up , have an account?, username, email, password and sign up button avaliability", ()=> {
    cy.visit("/");
    cy.visit("/#/register")
    cy.get("h1").contains("Sign up")
    cy.get(".text-xs-center").last();
    cy.get(".form-group").first()
    cy.get(".form-group").last()
    cy.get(".form-group").eq(1)
})

 it("varify conduit and 2024... avaliability at footer", ()=> {
    cy.visit("/");
    cy.visit("/#/register")
    cy.get(".logo-font").contains("conduit")
    cy.get("span")
})