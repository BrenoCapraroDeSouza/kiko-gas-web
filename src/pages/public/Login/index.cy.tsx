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
  it('Should render Login page', () => {
    cy.mount(makeSut().wrapper);
  });

  it('Should call event submit of the form when user clicks in the button, but it must persist in the Login page', () => {
    cy.mount(makeSut().wrapper);

    cy.get('button[type="submit"]').click();
    cy.get('form').submit();
  });

  it('Should show password entered by user when user click in the input password', () => {
    const password = 'abc123';

    cy.mount(makeSut().wrapper);

    cy.get('input[type="password"]').type(password);
    cy.get('button[type="button"]').click();
    cy.get('input[type="text"]').should('have.value', password);
  });
});
