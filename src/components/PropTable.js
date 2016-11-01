import React, { PropTypes } from 'react';
import Table from './Table';
import getPropTypes from '../utils';


const PropTable = ({ title, component, className, ...extraProps }) => {
  const heading = title || `${component.displayName || ''} PropTypes`;
  const properties = Object.values(getPropTypes(component));

  return (
    <section className={className} {...extraProps}>
      {heading &&
        <h1>{heading}</h1>}
      <Table properties={properties} />
    </section>
  );
};

PropTable.propTypes = {
  title: PropTypes.string,
  component: PropTypes.func.isRequired,
  className: PropTypes.string,
};

PropTable.defaultProps = {
  className: '',
};


export default PropTable;
