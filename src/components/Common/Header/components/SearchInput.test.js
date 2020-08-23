import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import React from 'react';

import SearchInput from './SearchInput';

test('matches snapshot', () => {
  const wrapper = shallow(<SearchInput />);

  expect(toJSON(wrapper)).toMatchSnapshot();
});
