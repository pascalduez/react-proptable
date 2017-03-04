// @flow
import React from 'react';
import Table from './Table';
import getPropTypes from '../utils';
import type { ReacComponent, Properties } from '../types';

type Props = {
  title?: string,
  component: ReacComponent,
  className?: string,
};

const PropTable = ({ title, component, className, ...extraProps }: Props) => {
  const heading = title || `${component.displayName || ''} PropTypes`;
  const properties: Properties = Object.values(getPropTypes(component));

  return (
    <section className={className} {...extraProps}>
      {heading &&
        <h1>{heading}</h1>}
      <Table properties={properties} />
    </section>
  );
};

PropTable.defaultProps = {
  className: '',
};


export default PropTable;
