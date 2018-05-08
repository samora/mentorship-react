import React from 'react';
import { mount } from 'enzyme';
import { withHeader } from './withHeader';

describe('withHeader HOC', () => {
  it('should render header', () => {
    const wrapper = mount(
      withHeader(
        <p>Some content here</p>
      )
    );
    expect(wrapper.find('#header')).toHaveLength(1);
  })
});