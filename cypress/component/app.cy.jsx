import React from 'react';
import { mount } from 'cypress/react18';
import App from "../../src/App";

describe('Test todo app', () => {
    it('Should add a new todo to the list', () => {
        mount(<App/>);
        cy.get('#add-todo').should('be.visible').type('Lorem').type('{enter}');
        cy.get('.list-item').should('contain','Lorem')
    })
    it('Should add new todo and check it for done', () => {
        mount(<App/>);
        cy.get('#add-todo').should('be.visible').type('Ipsum').type('{enter}');
        cy.get('li').should('contain.text', 'Ipsum');
        cy.get('#Ipsum-0').check();
        cy.get('.list-item').should('contain.text', 'Ipsum');
    })
})