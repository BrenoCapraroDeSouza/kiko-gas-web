import { BrowserRouter } from 'react-router-dom';

import { PRIMARY_LOGO } from '@/config';

import { QueryClientWrapperSut } from '../mocks';
import { NotFound } from './index';

interface SutProps {
  wrapper: React.JSX.Element;
}

function makeSut(): SutProps {
  return {
    wrapper: (
      <QueryClientWrapperSut>
        <BrowserRouter>
          <NotFound />
        </BrowserRouter>
      </QueryClientWrapperSut>
    ),
  };
}

describe('<NotFound />', () => {
  it('Should render NotFound page', () => {
    const { wrapper } = makeSut();

    cy.mount(wrapper);

    cy.contains('Ops! Parece que você se perdeu no caminho...');
    cy.contains('A pagina que você procura não está aqui.');
    cy.get('button[type="button"]')
      .should('be.enabled')
      .contains('Voltar ao Inicio');
    cy.get('img').should('have.attr', 'src').should('include', PRIMARY_LOGO);
  });
});
