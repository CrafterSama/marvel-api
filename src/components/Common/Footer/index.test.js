import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJSON from 'enzyme-to-json';
import Footer from './index';

configure({ adapter: new Adapter() });

describe('Test for <Footer /> Component', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Footer />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
