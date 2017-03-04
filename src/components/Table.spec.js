import React from 'react';
import { shallow } from 'enzyme';

import Table from './Table';


describe('<Table>', () => {
  it('should render the default markup and classes', () => {
    const wrapper = shallow(
      <Table properties={[]} />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
