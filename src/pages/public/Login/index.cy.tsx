import { QueryClientWrapperSut } from '@/pages/mocks';

import { Login } from './index';

interface SutProps {
  wrapper: React.JSX.Element;
}

function makeSut(): SutProps {
  return {
    wrapper: (
      <QueryClientWrapperSut>
        <Login />
      </QueryClientWrapperSut>
    ),
  };
}

describe('<Login />', () => {
  const email = 'gustavo.kevin.pereira@gmail.com';
  const password = 'abc123';

  it('Should render Login page', () => {
    const { wrapper } = makeSut();

    cy.mount(wrapper);

    cy.contains('Bem-vindo(a)!');
    cy.contains('Por favor, insira suas credenciais para acessar sua conta.');
    cy.get('input[type="email"]').should('be.empty').should('be.enabled');
    cy.get('input[type="password"]').should('be.empty').should('be.enabled');
    cy.get('button[type="button"]').should('be.enabled');
    cy.get('button[type="submit"]').should('be.enabled').contains('Entrar');
  });

  it('Should show password entered by user when user click in the input password', () => {
    const { wrapper } = makeSut();

    cy.mount(wrapper);

    cy.get('input[type="password"]').type(password);
    cy.get('button[type="button"]').click();
    cy.get('input[type="text"]').should('have.value', password);
  });

  it('Should verify if all inputs are disabled then user click in submit button', () => {
    const { wrapper } = makeSut();

    cy.mount(wrapper);

    cy.get('input[type="email"]').type(email);
    cy.get('input[type="password"]').type(password);
    cy.get('button[type="submit"]').click();

    cy.get('button[type="submit"]').should('be.disabled');
    cy.get('input[type="email"]').should('be.disabled');
    cy.get('input[type="password"]').should('be.disabled');
    cy.get('button[type="button"]').should('be.disabled');
  });
});
