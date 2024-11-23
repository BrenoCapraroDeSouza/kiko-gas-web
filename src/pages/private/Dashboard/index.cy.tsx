import React from 'react';

import { Dashboard } from './index';

describe('<Dashboard />', () => {
  it('Should render Dashboard page', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Dashboard />);
  });
});
