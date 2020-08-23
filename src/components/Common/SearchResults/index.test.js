import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJSON from 'enzyme-to-json';
import SearchResults from './index';

configure({ adapter: new Adapter() });

describe('Test for <SearchResults /> Component', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<SearchResults data={{ data: {} }} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
