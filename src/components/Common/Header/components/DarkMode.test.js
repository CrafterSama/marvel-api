import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import React from 'react';

import DarkMode from './DarkMode';

test('matches snapshot', () => {
  const wrapper = shallow(<DarkMode />);

  expect(toJSON(wrapper)).toMatchSnapshot();
})
