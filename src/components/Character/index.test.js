import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJSON from 'enzyme-to-json';
import Character from './index';

configure({ adapter: new Adapter() });

describe('Test for <Character /> Component', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Character />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
