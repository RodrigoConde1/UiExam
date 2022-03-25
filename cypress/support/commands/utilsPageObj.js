/// <reference types="cypress"/>

class TextBoxPage{

    fullNameInput(){
        return cy.get('#userName')
    }

    emailInput(){
        return cy.get('#userEmail')
    }

    currentAddressInput(){
        return cy.get('#currentAddress')
    }
    
    permanentAddressInput(){
        return cy.get('#permanentAddress')
    }
    
    fullNameField(){
        return cy.get('#name')
    }

    emailField(){
        return cy.get('#email')
    }

    currentAddressField(){
        return cy.get('#output #currentAddress')
    }
    
    permanentAddressField(){
        return cy.get('#output #permanentAddress')
    }

    buttonSubmit(){
        return cy.get('#submit')
    }

    fieldErrors(){
        return cy.get('.field-error')
    }
    
}

export default TextBoxPage