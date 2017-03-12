// @flow
import React from 'react';
import get from 'lodash.get';
import type { Property, Properties } from '../types';

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
          <Type prop={prop} />
          <Required prop={prop} />
          <Default prop={prop} />
          <Description prop={prop} />
        </tr>
      ))}
    </tbody>
  </table>
);

/* eslint-disable brace-style, no-unused-expressions */
const Type = ({ prop }: { prop: Property }) => (
  <td>
    {do {
      if ('elements' in prop.flowType && get(prop, 'flowType.name') === 'Array') {
        `${get(prop, 'flowType.name')}<${
          prop.flowType.elements.reduce((curr, acc) =>
            curr + (acc.raw || acc.name)
          , '')
        }>`;
      }
      else if ('raw' in prop.flowType) {
        get(prop, 'flowType.raw');
      }
      else if ('name' in prop.flowType) {
        get(prop, 'flowType.name');
      }
      else if ('name' in prop.type) {
        get(prop, 'type.name');
      }
      else {
        '-';
      }
    }}
  </td>
);
/* eslint-enable brace-style, no-unused-expressions */


const Required = ({ prop }: { prop: Property }) => (
  <td>
    {prop.required === true ? 'yes' : 'no'}
  </td>
);

const Default = ({ prop }: { prop: Property }) => (
  <td>
    {prop.defaultValue ? get(prop, 'defaultValue.value') : '-'}
  </td>
);

const Description = ({ prop }: { prop: Property }) => (
  <td>
    {prop.description || '-'}
  </td>
);


export default Table;
