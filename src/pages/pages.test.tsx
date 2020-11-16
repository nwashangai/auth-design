// react libraries
import * as React from 'react';

import fetch from 'jest-fetch-mock';

// third-party libraries
import { mount } from 'enzyme';

// components
import Pages from './';

// Fixtures
import { filters } from './fixtures';

describe('The Pages component', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('Load page component', () => {
    fetch.mockResponseOnce(JSON.stringify(filters));
    const wrapper = mount(<Pages />);

    const container = wrapper.find('.pages__spinner');

    expect(container.length).toEqual(1);
  });
});
