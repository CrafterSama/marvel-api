import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJSON from 'enzyme-to-json';
import Comics from './index';

configure({ adapter: new Adapter() });

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ id: 77117 }),
}));

describe('Test for <Comics /> Component', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(
      <Comics />
    );
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
