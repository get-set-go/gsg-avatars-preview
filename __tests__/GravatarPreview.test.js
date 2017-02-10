import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

import GravatarPreview from '../src';

describe('<GravatarPreview /> component', function() {

  it('should gravatar-preview exist', function() {
    let _instance = ReactTestUtils.renderIntoDocument(<GravatarPreview />);
    expect(ReactTestUtils.isCompositeComponent(_instance)).toBeTruthy();
  });

});
