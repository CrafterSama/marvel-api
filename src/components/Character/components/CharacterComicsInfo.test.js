import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJSON from 'enzyme-to-json';
import CharacterComicsInfo from './CharacterComicsInfo';

configure({ adapter: new Adapter() });

describe('Test for <CharacterComicsInfo /> Component', () => {

  let data = {};
  let toggle = () => {};

  test('matches snapshot', () => {
    const wrapper = shallow(
      <CharacterComicsInfo
        data={data}
        toggle={toggle}
      />
    );
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
