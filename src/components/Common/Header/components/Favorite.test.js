import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import React from 'react';

import Favorite from './Favorite';

test('matches snapshot', () => {
  const wrapper = shallow(<Favorite />);

  expect(toJSON(wrapper)).toMatchSnapshot();
})
