import React from 'react';

import { Login } from './index';

describe('<Login />', () => {
  it('Should render Login page', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Login />);
  });
});
