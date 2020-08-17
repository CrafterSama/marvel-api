import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import React from 'react';

import App from './App';

test('matches snapshot', () => {
  const wrapper = shallow(<App />);

  expect(toJSON(wrapper)).toMatchSnapshot();
})
