import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJSON from 'enzyme-to-json';
import Charactermodal from './Charactermodal';

configure({ adapter: new Adapter() });

describe('Test for <Charactermodal /> Component', () => {

  test('matches snapshot', () => {
    const wrapper = shallow(
      <Charactermodal
        isOpen={false}
        toggle={() => {}}
        data={{ data: {} }}
      />
    );
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
