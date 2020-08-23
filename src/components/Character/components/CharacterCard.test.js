import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJSON from 'enzyme-to-json';
import CharacterCard from './CharacterCard';

configure({ adapter: new Adapter() });

describe('Test for <CharacterCard /> Component', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<CharacterCard data={{ data: {} }} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
