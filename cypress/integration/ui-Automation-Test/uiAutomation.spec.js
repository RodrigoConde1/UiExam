/// <reference types="cypress" />
import TextBoxPage from '../../support/commands/utilsPageObj'
import TextBoxACtions from '../../support/commands/utilsactions'
import testData from '../../fixtures/testData.json'

describe('uiAutomation', () => {
  const textBox = new TextBoxPage();
  const textBoxACtions = new TextBoxACtions();
  beforeEach(() => {
    cy.visit('/');
  });

  it('test1', () => {
    textBox.fullNameInput().type(testData.test1.FullName);
    textBox.emailInput().type(testData.test1.Email);
    textBox.currentAddressInput().type(testData.test1.CurrentAddress);
    textBox.permanentAddressInput().type(testData.test1.PermanentAddress);
    textBox.buttonSubmit().click();
    textBox.fullNameField().invoke('text').then((text) =>{
      textBoxACtions.splitField(text);
      expect(text.trim()).to.contain(testData.test1.FullName);
    });
    textBox.emailField().invoke('text').then((text) =>{
      textBoxACtions.splitField(text);
      expect(text.trim()).to.contain(testData.test1.Email);
    });
    textBox.currentAddressField().invoke('text').then((text) =>{
      textBoxACtions.splitField(text);
      expect(text.trim()).to.contain(testData.test1.CurrentAddress);
    });
    textBox.permanentAddressField().invoke('text').then((text) =>{
      textBoxACtions.splitField(text);
      expect(text.trim()).to.contain(testData.test1.PermanentAddress);
    });
  });

  it('test2', () => {
    textBox.fullNameInput().type(testData.test2.FullName);
    textBox.emailInput().type(testData.test2.Email);
    textBox.currentAddressInput().type(testData.test2.CurrentAddress);
    textBox.permanentAddressInput().type(testData.test2.PermanentAddress);
    textBox.buttonSubmit().click();
    textBox.fullNameField().invoke('text').then((text) =>{
      textBoxACtions.splitField(text);
      expect(text.trim()).to.contain(testData.test2.FullName);
    });
    textBox.emailField().invoke('text').then((text) =>{
      textBoxACtions.splitField(text);
      expect(text.trim()).to.contain(testData.test2.Email);
    });
    textBox.currentAddressField().invoke('text').then((text) =>{
      textBoxACtions.splitField(text);
      expect(text.trim()).to.contain(testData.test2.CurrentAddress);
    });
    textBox.permanentAddressField().invoke('text').then((text) =>{
      textBoxACtions.splitField(text);
      expect(text.trim()).to.contain(testData.test2.PermanentAddress);
    });
  });

  
  it('test3', () => {
    textBox.emailInput().type(testData.test3.Email);
    textBox.buttonSubmit().click();
    textBox.fieldErrors().scrollIntoView().should('exist');
  });

  it('test4-fails example', () => {
    textBox.emailInput().type(testData.test3.Email);
    textBox.buttonSubmit().click();
    textBox.fieldErrors().scrollIntoView().should('not.exist');
  });
})
