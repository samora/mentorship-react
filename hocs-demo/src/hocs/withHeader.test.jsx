import React from 'react';
import { mount } from 'enzyme';
import { withHeader } from './withHeader';

describe('withHeader HOC', () => {
  it('should render header', () => {
    const enhanced = withHeader(
      <p>Some content here</p>
    );
    const wrapper = mount(
      <enhanced />
    );
    expect(wrapper.find('#main-header').length).toBe(1); 
  })
});