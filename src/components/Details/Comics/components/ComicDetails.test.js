import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJSON from 'enzyme-to-json';
import ComicDetails from './ComicDetails';

configure({ adapter: new Adapter() });

describe('<ComicDetails />', () => {

  const data = {
    title:
      'New Mutants by Zeb Wells: The Complete Collection (Trade Paperback)',
    dates: [],
    creators: { items: [] },
    description: 'description',
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/f/e0/5bb5301610695',
      extension: 'jpg',
    },
  };

  test('matches snapshot', () => {
    const wrapper = shallow(
      <ComicDetails data={data} />
    );
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
