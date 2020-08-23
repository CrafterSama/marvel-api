import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import React from 'react';

import Details from './index';

test('matches snapshot', () => {
  const wrapper = shallow(<Details />);

  expect(toJSON(wrapper)).toMatchSnapshot();
});
