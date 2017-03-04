// @flow
import React from 'react';
import type { Properties } from '../types';

type Props = {
  properties: Properties,
  className?: string,
};


const Table = ({ properties, className }: Props) => (
  <table className={className}>
    <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      {properties.map(prop => (
        <tr key={prop.name}>
          <td>{prop.name}</td>
          <td>{prop.type.name}</td>
          <td>{String(prop.required)}</td>
          <td>{prop.defaultValue ? prop.defaultValue.value : '-'}</td>
          <td>{prop.description || '-'}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

// const propertiesShape = PropTypes.shape({
//   name: PropTypes.string.isRequired,
//   type: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//   }).isRequired,
//   required: PropTypes.bool,
//   defaultValue: PropTypes.shape({
//     value: PropTypes.string.isRequired,
//   }),
//   description: PropTypes.string,
// });
//
// Table.propTypes = {
//   properties: PropTypes.arrayOf(propertiesShape).isRequired,
//   className: PropTypes.string,
// };

Table.defaultProps = {
  className: '',
};


export default Table;
