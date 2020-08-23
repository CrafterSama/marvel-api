import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJSON from 'enzyme-to-json';
import Modal from './index';

configure({ adapter: new Adapter() });

describe('Test for <Modal /> Component', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(
      <Modal isOpen={true} toggle={() => {}} children={<div>Test This!</div>} />
    );
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
