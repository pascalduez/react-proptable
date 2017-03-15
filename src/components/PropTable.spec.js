import React, { PropTypes } from 'react';
import { render } from 'enzyme';

import PropTable from './PropTable';

// Fixtures.
const WithoutProps = () => <span>test</span>;
const WithProps = ({ label, foo }) => <span>{`${label}${foo}`}</span>;
WithProps.displayName = 'WithProps';
WithProps.propTypes = {
  label: PropTypes.string.isRequired,
  foo: PropTypes.number,
};
WithProps.defaultProps = {
  foo: '',
};


describe('<PropTable>', () => {
  describe('When there is no propType found', () => {
    it('should render the default markup and classes', () => {
      const wrapper = render(
        <PropTable component={WithoutProps} />
      );

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('When propTypes are found', () => {
    it('should render the default markup and classes', () => {
      const wrapper = render(
        <PropTable component={WithProps} />
      );

      expect(wrapper).toMatchSnapshot();
    });
  });
});
