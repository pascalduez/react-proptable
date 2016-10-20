import React, { PropTypes } from 'react';


const Table = ({ properties, className }) => (
  <table className={className}>
    <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default</th>
      </tr>
    </thead>
    <tbody>
      {properties.map(prop => (
        <tr key={prop.name}>
          <td>{prop.name}</td>
          <td>{prop.type}</td>
          <td>{String(prop.required)}</td>
          <td>{prop.defaultValue || '-'}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

const propertiesShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  required: PropTypes.bool,
  defaultValue: PropTypes.node,
});

Table.propTypes = {
  properties: PropTypes.arrayOf(propertiesShape).isRequired,
  className: PropTypes.string,
};

Table.defaultProps = {
  className: '',
};


export default Table;
