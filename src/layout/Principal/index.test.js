import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Layout from './index';

describe('Test for <Layout /> Component', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Layout />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
