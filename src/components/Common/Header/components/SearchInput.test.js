import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJSON from 'enzyme-to-json';
import SearchInput from './SearchInput';

configure({ adapter: new Adapter() });

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: 'localhost:3000/',
  }),
}));

describe('Test for <SearchInput /> Component', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<SearchInput />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
