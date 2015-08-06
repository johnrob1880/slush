jest.dontMock('../AppRoot');

import React from 'react/addons';
import AppRoot from '../AppRoot';

var TestUtils = React.addons.TestUtils;
var state = {};

describe('AppRoot', () => {

  it('renders properly', () => {
    var appRoot = TestUtils.renderIntoDocument(
      <AppRoot state={state} />
    );

    var title = TestUtils.findRenderedDOMComponentWithTag(appRoot, 'h1');

    expect(title.getDOMNode().textContent).toEqual('<%= appName %>');
  });
});
