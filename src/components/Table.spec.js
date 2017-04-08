import React from 'react';
import PropTypes from 'prop-types';
import { render } from 'enzyme';

import { fromReact } from '../utils';
import Table from './Table';

// Fixtures.
// const WithoutProps = () => <span>test</span>;
const WithProps = ({ label, foo }) => <span>{`${label}${foo}`}</span>;
WithProps.displayName = 'WithProps';
WithProps.propTypes = {
  label: PropTypes.string.isRequired,
  foo: PropTypes.number,
};
WithProps.defaultProps = {
  foo: '',
};


describe('<Table>', () => {
  describe('When there is no propType found', () => {
    it('should render the default markup and classes', () => {
      const wrapper = render(
        <Table properties={[]} />
      );

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('When propTypes are found', () => {
    it('should render the default markup and classes', () => {
      const wrapper = render(
        <Table
          properties={
            Object.values(fromReact(WithProps))
          }
        />
      );

      expect(wrapper).toMatchSnapshot();
    });
  });
});
