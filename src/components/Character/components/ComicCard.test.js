import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJSON from 'enzyme-to-json';
import ComicCard from './ComicCard';

configure({ adapter: new Adapter() });

describe('Test for <ComicCard /> Component', () => {


  test('matches snapshot', () => {
    const wrapper = shallow(
      <ComicCard
        data={ { data: {} } }
      />
    );
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
