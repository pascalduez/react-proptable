// @flow
import React from 'react';
import get from 'lodash.get';
import type { Property, Properties } from '../types';

type Props = {
  properties: Properties,
  className?: string,
};


export default function Table({ properties, className }: Props) {
  return (
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
}


/* eslint-disable brace-style, no-unused-expressions */
const Type = ({ prop }: { prop: Property }) => (
  <td><pre><code>
    {do {
      if (get(prop, 'flowType.elements') && get(prop, 'flowType.name') === 'Array') {
        `${get(prop, 'flowType.name')}<${
          prop.flowType.elements.reduce((curr, acc) =>
            curr + (acc.raw || acc.name)
          , '')
        }>`;
      }
      else if (get(prop, 'flowType.raw')) {
        get(prop, 'flowType.raw');
      }
      else if (get(prop, 'flowType.name')) {
        get(prop, 'flowType.name');
      }
      else if (get(prop, 'type.name')) {
        get(prop, 'type.name');
      }
      else {
        '-';
      }
    }}
  </code></pre></td>
);
/* eslint-enable brace-style, no-unused-expressions */


const Required = ({ prop }: { prop: Property }) => (
  <td>
    {prop.required === true ? 'yes' : 'no'}
  </td>
);


const Default = ({ prop }: { prop: Property }) => (
  <td><pre><code>
    {prop.defaultValue ? get(prop, 'defaultValue.value') : '-'}
  </code></pre></td>
);


const Description = ({ prop }: { prop: Property }) => (
  <td>
    {prop.description || '-'}
  </td>
);
