import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import React from 'react';

import Logo from './Logo';

test('matches snapshot', () => {
  const wrapper = shallow(<Logo />);

  expect(toJSON(wrapper)).toMatchSnapshot();
})
