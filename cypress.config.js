/// <reference types="cypress"/>
const { defineConfig } = require('cypress')
module.exports = defineConfig({
    e2e: {
        setupNodeEvents(On, config) {
            
        }, 
        
        baseUrl: "https://demo.productionready.io"

       
        
  }})

