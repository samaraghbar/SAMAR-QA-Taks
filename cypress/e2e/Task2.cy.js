/// reference types="cypress" />
describe("task2", ()=>{

   beforeEach(()=>{
    cy.visit("https://admin-demo.nopcommerce.com/login");
       cy.login();
    })

it('add product test case', () => {
   cy.get('h1').contains("Dashboard").should("be.visible")
   cy.get(".fa-bars").should("be.visible").trigger("mouseover").click() 
   cy.wait(2000)
   cy.get('p').contains("Catalog").should("be.visible")
   cy.get('p').contains("Catalog").click()
   cy.get('.nav-link').should("be.visible")
   //cy.get('.nav-treeview').should("be.visible")
   cy.get('p').contains("Products").click()
   cy.get('.float-left').should("be.visible")
   cy.get("[href='/Admin/Product/Create']").contains("Add new").click()
   cy.get('.card-title').should("be.visible")
   cy.wait(3000)
   cy.get('#Name').type("Laptop 123")
   cy.screenshot({capture:"runner"})
   cy.get('.k-multiselect-clearable').first().type("Computers")
   cy.get('.fa-dollar-sign').should("be.visible")
   cy.get('.btn-primary').contains("Save").click()


});
it('Search for product test case', () => {
   cy.get('h1').contains("Dashboard").should("be.visible")
   cy.get(".fa-bars").should("be.visible").trigger("mouseover").click()
   cy.wait(2000)
   cy.get('p').contains("Catalog").should("be.visible")
   cy.get('p').contains("Catalog").click()
   cy.get('.nav-treeview').should("be.visible")
   cy.get('p').contains("Products").click()
   cy.get('h1').contains("Products").should("be.visible")
   cy.get('#SearchProductName').type("laptop123")
   cy.get('#SearchCategoryId').select("Computers")
   cy.get("#search-products").click();
   cy.get('td').contains("Laptop123").should("be.visible")
  
   
});

it('Delete product test case', () => {
   cy.get('h1').contains("Dashboard").should("be.visible")
   cy.get(".fa-bars").should("be.visible").trigger("mouseover").click()
   cy.wait(2000)
   cy.get('p').contains("Catalog").should("be.visible")
   cy.get('p').contains("Catalog").click()
   cy.get('.nav-treeview').should("be.visible")
   cy.get('p').contains("Products").click()
   cy.get('h1').contains("Products").should("be.visible")
   cy.get('#SearchProductName').type("laptop123")
   cy.get('#SearchCategoryId').select("Computers")
   cy.get("#search-products").click();
   cy.get('td').contains("Laptop123").should("be.visible")
   cy.get('.checkboxGroups').check()
   cy.get('#delete-selected').click()
cy.get('#delete-selected-action-confirmation-title').should("be.visible")
cy.get('#delete-selected-action-confirmation-submit-button').click()
cy.get('.odd').contains("No data available in table").should("be.visible")
});


it('Screenshot and video', () => {

    
});











       


    
       

  




})