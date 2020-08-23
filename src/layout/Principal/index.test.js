import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import React from 'react';

import Layout from './index';

test('matches snapshot', () => {
  const wrapper = shallow(<Layout />);

  expect(toJSON(wrapper)).toMatchSnapshot();
})
