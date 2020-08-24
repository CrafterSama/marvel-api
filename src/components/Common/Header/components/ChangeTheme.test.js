import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import React from 'react';

import ChangeTheme from './ChangeTheme';

test('matches snapshot', () => {
  const wrapper = shallow(<ChangeTheme />);

  expect(toJSON(wrapper)).toMatchSnapshot();
})
